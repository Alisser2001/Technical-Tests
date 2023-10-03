import pandas as pd
import requests
from models.update import Sales,DataDB
from urllib.parse import quote_plus
from schemas.update import salesEntity
from pymongo import MongoClient
from fastapi import UploadFile

def validate_csv_format(csv: UploadFile) -> bool:
    required_columns = ['store', 'date', 'product', 'amount', 'price', 'total']
    if csv.filename.endswith('.csv'):
        with csv.file as file:
            df = pd.read_csv(file)
            try:
                if not all(col in df.columns for col in required_columns):
                    return False
                for column, dtype in df.dtypes.items():
                    if column in required_columns:
                        expected_type = str(Sales.__annotations__[column])
                        if str(dtype) != expected_type:
                            return False
                return True
            except Exception:
                return False
    else:
        return False
    
async def validate_api_format(api_url: str) -> bool:
    try:
        response = requests.get(api_url)
        if response.status_code != 200:
            return False
        data = response.json()
        if not all(key in data for key in Sales.__annotations__):
            return False
        for key, value in Sales.__annotations__.items():
            if key not in data or not isinstance(data[key], value):
                return False
        return True
    except Exception:
        return False
    
async def validate_db_format(data: DataDB) -> bool:
    try:
        mongo_url = f"mongodb://{quote_plus(data.username)}:{quote_plus(data.password)}@{data.ip}:{data.port}/{data.dbName}"
        client = MongoClient(mongo_url)
        db = client[data.dbName]
        collection = db[data.collection]
        data_db = salesEntity(collection.find())
        for doc in data_db:
            for key, value in Sales.__annotations__.items():
                if key not in doc or not isinstance(doc[key], value):
                    client.close()
                    return False
        client.close()
        return True
    except Exception:
        return False