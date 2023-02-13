import axios from "axios"

const instance = axios.create({baseURL: 'http://localhost:8000/'})

const getProjects = async id => {
    let response = null;
    try {
        response = await instance.get('/projects')
    } catch (exc) {
        console.log(exc.message)
    } finally{
        return response;
    }
};



export { getProjects };
