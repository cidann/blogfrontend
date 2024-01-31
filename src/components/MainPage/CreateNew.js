import { useState } from "react"
import blogSerivce from "../../services/Blogs"

const CreateNew=({view,setView})=>{
    const [newTitle,setTitle]=useState('')
    const [newImage,setImage]=useState({})
    const [newContent,setContent]=useState('')
    const newInput=(event,setFunc)=>{
        setFunc(event.target.value)
    }
    const handleFile=(event)=>{
        const file=event.target.files[0]
        setImage(file)
    }
    const newBlog=async(event)=>{
        event.preventDefault()
        const obj={image:newImage,title:newTitle,content:newContent}
        const response=await blogSerivce.create(obj)
        setView(['main',0])
    }
    return(
        <div className="fill">
          <div className="container mt-5">
            <div className="row">
                <div className="card border-0 shadow rounded-3 my-5">
                  <div className="card-body p-4 p-sm-5">
                    <h5 className="card-title text-center mb-3 fw-light fs-5">Create new Blog</h5>
                    <form onSubmit={newBlog}>
                        <div className="form-floating mb-3">
                            <input value={newTitle} onChange={(event)=>{newInput(event,setTitle)}} className="form-control" id="title" placeholder="Title"/>
                            <label>Title</label>                      
                        </div>
                        <div className="mb-3">
                            <label>Content</label> 
                            <textarea rows={12} value={newContent} onChange={(event)=>{newInput(event,setContent)}} className="form-control" id="content" placeholder="Markdown Content"/>                     
                        </div>
                        <div className="mb-3">
                            <label>Image</label> 
                            <input onChange={handleFile} className="form-control" type="file" id="formFile"/>                   
                        </div>
                      <div className="d-grid">
                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Create</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default CreateNew