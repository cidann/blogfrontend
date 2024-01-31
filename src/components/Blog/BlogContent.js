import { useState,useEffect } from "react"
import blogService from "../../services/Blogs"
import BlogHeader from "./BlogHeader"
import Content from "./BlogContent/Content"

const BlogContent=({view,setView})=>{
    const [blog,setBlog]=useState({})
    useEffect(()=>{
        const get=async()=>{
            const data=await blogService.getBlog(view[1])
            setBlog(data)
        }
        if(view[0]==='blog'){
            get()
        }
        
    },[view])
    const blogView={display:view[0]==='blog'? "":"none"}
    return(
        <div style={blogView}>
            <BlogHeader blog={blog}/>
            <Content blog={blog}/>
        </div>
    )
}

export default BlogContent