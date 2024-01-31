import axios from "axios";

const baseURL='http://127.0.0.1:8000/api/users/'
let token=null

axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true
const setToken=(newToken)=>{
    token=`Token ${newToken}`
}
const login=async(username,password)=>{
    const response=await axios.post(
        baseURL+'auth/login',
        {username,password}, 
        {
            withCredentials:  true
        }
    )
    return response.data
}
const session=async()=>{
    const config={
        withCredentials: true,
        headers: {Authorization: token}
    }
    const response=await axios.get(
        baseURL+'auth/login',
        config
        )
    return response.data
}

const create=async(username,password)=>{
    const config={
        withCredentials: true,
        headers: {Authorization: token}
    }
    const response=await axios.post(
        baseURL,
        {username,password},
        config
        )
    return response.data
}

export default {login,session,setToken,create}