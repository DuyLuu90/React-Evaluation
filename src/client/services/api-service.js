const API_ENDPOINT= "http://localhost:8000/api"

export const GeneralApiServices = {
    getAllItems(dbName){
        return fetch(`${API_ENDPOINT}/${dbName}`)
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

export const UserApiServices={
    getAgeDemographicByHobby(hobby){
        return fetch(`${API_ENDPOINT}/users/age?hobbyToLookup=${hobby}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    }
}
