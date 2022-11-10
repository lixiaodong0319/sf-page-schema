import axios from 'axios'
const service = axios.create({
    baseURL: '/bi-saas'
    // timeout: 10000
})

service.interceptors.request.use(
    config => {
        config.headers['Authorization'] = sessionStorage.getItem('slicerToken')
        return config
    },
    error => {
        console.log(error) 
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
