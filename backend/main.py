from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from src.routers import projects

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
