import BlogPreview from './PageContent/BlogPreview'
import Pager from './PageContent/Pager';
import blogService from '../../services/Blogs'
import PageHeader from './PageHeader';
import CreateNew from './CreateNew';
import { useState,useEffect } from 'react';


const PageContent=({view,setView})=>{
    const [blogs, setBlogs] = useState([])
    const [maxPages,setMax]=useState(1)
    const [filter,setFilter]=useState({search:'',page:1})
    useEffect(()=>{
        const getBlogs=async()=>{
            const data=await blogService.getPage(filter.page,filter.search)
            setBlogs(data.results)
            setMax(Math.ceil(data.count/5))
        }
        if(view[0]==="main"){
            getBlogs()
        }
    },[filter])
    if(view[0]==="main"){
        return(
            <div>
                <PageHeader filter={filter} setFilter={setFilter}/>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {blogs.map((blog)=>
                                <BlogPreview 
                                key={blog.id}
                                blog={blog}
                                setView={setView}
                                />
                            )}
                            <Pager
                            filter={filter}
                            setFilter={setFilter}
                            maxPages={maxPages}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if(view[0]==='CreateNew'){
        return(
            <CreateNew view={view} setView={setView} />
        )
    }
}

export default PageContent