import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
})

instance.interceptors.response.use(function(response){
  if(response.status === 200){
    return response.data
  }else{
    return response
  }
})


export default instance.request