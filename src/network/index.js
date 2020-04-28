import axios from 'axios'

export const request=function(config){
    let instance=axios.create({
        baseURL: 'http://152.136.185.210:8000/api/h8',
        timeout: 5000
    })
    instance.interceptors.response.use(config=>{
        return config.data
    })

    return instance(config)
    
}