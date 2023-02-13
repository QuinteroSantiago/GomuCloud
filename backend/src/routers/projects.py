from fastapi import APIRouter, HTTPException, Depends

router = APIRouter(
    prefix="/projects",
    tags=["projects"],
    responses={404: {"description": "Not Found"}}
)

projects_db = {
    1:{
        "title": "Personal Projects Website", 
        "imgUrl": "/assets/santiago-personal-website.jpg", 
        "stack": {'Wordpress', 'JavaScript'}, 
        "link": "https://santiagoquinteroquiroga.com/"
    },
    2:{
        "title": "Good News ML Aggregator", 
        "imgUrl": "/assets/idea-gn.jpeg", 
        "stack": {'ReactJS', 'Tailwind', 'AWS', 'Python'}, 
        "link": "http://noticiasinteligentes.com/"
    }
}

@router.get("/")
async def read_projects():
    return projects_db

@router.get("/{projectId}")
async def read_project(projectId: int):
    if projectId not in projects_db:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"name": projects_db[projectId]["title"],"projectId": projectId}
