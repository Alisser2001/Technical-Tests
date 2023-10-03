from fastapi import APIRouter
import csv
from config.db import conn
from models.update import Sales,DataDB 
from schemas.update import salesEntity
import requests
from fastapi import UploadFile
from urllib.parse import quote_plus
from pymongo import MongoClient
from validators.update import validate_csv_format,validate_api_format,validate_db_format

update = APIRouter()

@update.get('/sales', response_model=Sales, tags=["Sales"])
def get_sales():
    sales = conn.local.sales.find()
    if len(salesEntity(sales))==0:
        return False
    return salesEntity(sales)

@update.post('/update/csv', tags=["Sales"])
def update_csv_info(csv_file: UploadFile):
    if validate_csv_format(csv_file):
        try:
            with csv_file.file as file:
                reader = csv.DictReader(file)
                data = list(reader)
                conn.local.sales.insert_many(data)
            return True
        except Exception:
            return False
    else:
        return False

@update.post('/update/api', tags=["Sales"])
async def update_api_info(apiUrl: str):
    if await validate_api_format(apiUrl):
        try:
            response = requests.get(apiUrl)
            data = response.json()
            conn.local.sales.insert_many(data)
            return True
        except Exception:
            return False
    else:
        return False

@update.post('/update/db', tags=["Sales"])
async def update_db_info(data: DataDB):
    if await validate_db_format(data):
        try:
            mongo_url = f"mongodb://{quote_plus(data.username)}:{quote_plus(data.password)}@{data.ip}:{data.port}/{data.dbName}"
            client = MongoClient(mongo_url)
            db = client[data.dbName]
            external_collection = db[data.collection]
            data_db = list(external_collection.find())
            conn.local.sales.insert_many(data_db)
            client.close()
            return True
        except Exception:
            return False
    else:
        return False
