from fastapi import FastAPI
from routes.user import user
from routes.update import update
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Technical Test Stack FARM",
    description="Rest API with FastAPI and MongoDB",
    version="0.0.1"
)

app.include_router(user)
app.include_router(update)

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


