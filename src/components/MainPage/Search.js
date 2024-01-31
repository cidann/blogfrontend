import { useState } from "react"

const Search=({filter,setFilter})=>{
    
    const [newSearch,setSearch]=useState('')
    const newInput=(event,setFunc)=>{
        setFunc(event.target.value)
    }
    const submit=(event)=>{
        event.preventDefault()
        setFilter({...filter,page:1,search:newSearch})
        setSearch('')
    }
    return(
        <form onSubmit={submit}>
            <div className="card-body">
                <div className="input-group">
                    <input
                        value={newSearch} 
                        onChange={(event)=>{newInput(event,setSearch)}}
                        className="form-control" 
                        type="text" 
                        placeholder="Enter search term..." 
                        aria-label="Enter search term..." 
                        aria-describedby="button-search"
                    />
                    <button type="submit" className="btn btn-primary" id="button-search">Find!</button>
                </div>
            </div>
        </form>
    )
}

export default Search