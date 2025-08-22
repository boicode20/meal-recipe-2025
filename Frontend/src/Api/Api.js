import axios from 'axios'

export const Api = axios.create(
    {
        baseUrl: '',
        withCredentials: true,
        headers:{
            "Content-Type":"application/json"
        }
    }
)