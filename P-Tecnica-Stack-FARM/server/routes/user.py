from fastapi import APIRouter
from config.db import conn
from schemas.user import userEntity,usersEntity
from models.user import Users,LoginData,SignupData
from passlib.hash import sha256_crypt
from bson import ObjectId

user = APIRouter()

salt = "67a78dd89f7e4bea"
rounds = 1000

@user.post('/users/login', tags=["Users"])
def login_user(data: LoginData):
    data_user = dict(data)
    db_user = conn.local.users.find_one({"email": data_user["email"]})
    if db_user == None:
        return False
    hash_data_password = sha256_crypt.using(salt=salt, rounds=rounds).hash(data_user["password"])
    db_user_entity = userEntity(db_user)
    if hash_data_password == db_user_entity["password"]:
        return userEntity(db_user)
    else:
        return False
    
@user.post('/users/signup', response_model=bool, tags=["Users"])
def signup_user(data: SignupData):
    new_user = dict(data)
    db_user = conn.local.users.find_one({"email": new_user["email"]})
    if db_user != None:
        return False
    new_user["password"] = sha256_crypt.using(salt=salt, rounds=rounds).hash(new_user["password"])
    id = conn.local.users.insert_one(new_user).inserted_id
    user_created = conn.local.users.find_one({"_id": id})
    if user_created != None:
        return True
    else:
        return False