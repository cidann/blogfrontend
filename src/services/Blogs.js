import axios from "axios";

const baseURL='http://127.0.0.1:8000/api/blogs/'
let token
const setToken=(newToken)=>{
    token=`Token ${newToken}`
}
const getPage=async(page,filter)=>{
    const config={
        headers: {Authorization: token}
    }
    const response=await axios.get(
        baseURL+`?page=${page}&filter=${filter}`,
        config
        )
    return response.data
}

const getBlog=async(id)=>{
    const config={
        headers: {Authorization: token}
    }
    const response=await axios.get(
        baseURL+`${id}`,
        config
    )
    return response.data
}

const create=async(obj)=>{
    const config={
        headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data"
        }
    }
    const formData = new FormData();
    formData.append("image",obj.image);
    formData.append('title',obj.title);
    formData.append('content',obj.content);
    console.log(obj)
    const response=await axios.post(
        baseURL,
        formData,
        config
    )
    return response.data
}

export default {getPage,getBlog,setToken,create}