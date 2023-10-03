from typing import Optional
from pydantic import BaseModel

class Sales(BaseModel):
    store: str
    date: str
    product: str
    amount: str
    price: float
    total: float

class DataDB(BaseModel):
    ip: str
    port: str
    username: str
    password: str
    dbName: str
    collection: str