//import config from '../config'

//require('dotenv').config('../config')

// console.log(config)
// console.log(process.env.NODE_ENV)
// console.log(process.env.REACT_APP_API_BASE_URL)

const API_ENDPOINT= "https://jsonplaceholder.typicode.com/todos"

// const API_ENPOINT= "http://localhost:8000/api"

export const GeneralApiServices = {
    getAllItems(){
        return fetch(`${API_ENDPOINT}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    postItem(item){
        //const proxy='https://cors-anywhere.herokuapp.com'
        return fetch(`${API_ENDPOINT}`,{
            method: `POST`,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res=>(!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        : res.json())
    },
    getItemById(id){
        return fetch(`${API_ENDPOINT}/${id}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    patchItemById(id,fieldsToUpdate){
        return fetch(`${API_ENDPOINT}/${id}`,{
            method: `PATCH`,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(fieldsToUpdate)
        })
        .then(res=>(!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        : res.json())
    },
    deleteItemById(id){
        return fetch(`${API_ENDPOINT}/${id}`,{
            method: `DELETE`,
        })
        .then(res=>(!res.ok)
        ? res.json().then(e=>Promise.reject(e))
        : res.json())
    },
}
