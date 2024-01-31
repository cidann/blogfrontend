import { useEffect } from "react"
const Pager=({filter,setFilter,maxPages})=>{
    
    const prev=filter.page-1>=1? '':'hide'
    const next=filter.page+1<=maxPages? '':'hide'
    const increment=()=>{
        setFilter({...filter,page:filter.page+1})
    }
    const decrement=()=>{
        setFilter({...filter,page:filter.page-1})
    }
    
    return(
        <div>
            <button onClick={decrement} className={"btn btn-primary text-uppercase mb-4 "+prev}>← Newer Posts</button>
            <button onClick={increment} className={"btn btn-primary text-uppercase fr mb-4 " +next}>Older Posts →</button>
        </div>
    )
}

export default Pager