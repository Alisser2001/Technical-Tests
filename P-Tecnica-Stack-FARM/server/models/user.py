from typing import Optional
from pydantic import BaseModel

class Users(BaseModel):
    username: str
    email: str
    password: str

class LoginData(BaseModel):
    email: str
    password: str

class SignupData(BaseModel):
    email: str
    username: str
    password: str