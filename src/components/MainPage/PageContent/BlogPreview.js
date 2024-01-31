
const BlogPreview=({blog,setView})=>{
    const setBlogView=(event,id)=>{
        setView(['blog',id])
    }

    return(
        <>
            <div className="post-preview">
                <a onClick={(event)=>{setBlogView(event,blog.id)}} className="pointer">
                    <h2 className="post-title">{blog.title}</h2>
                    <h3 className="post-subtitle">{blog.subtitle}</h3>
                </a>
                <p className="post-meta">
                    Posted by
                    <a href="#!"> {blog.user} </a>
                    {blog.time}
                </p>
            </div>
            
            <hr className="my-4" />
        </>
    )
}

export default BlogPreview