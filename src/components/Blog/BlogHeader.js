import { useState,useEffect } from "react"
import blogService from "../../services/Blogs"

const BlogHeader=({blog})=>{
    let backgroundImage
    if(blog.image){
        backgroundImage={backgroundImage: `url(${blog.image})`}
    }
    else{
        backgroundImage=null
    }
    return(
        <header className="masthead" style={backgroundImage}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading">
                            <h1>{blog.title}</h1>
                            <h2 className="subheading">{blog.subtitle}</h2>
                            <span className="meta">
                                Posted by
                                <a href="#!"> {blog.user} </a>
                                {blog.time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default BlogHeader 