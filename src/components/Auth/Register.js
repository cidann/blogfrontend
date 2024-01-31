import { useState } from "react"
import userSerivce from "../../services/User"
import blogService from "../../services/Blogs"

const Register=({user,setUser,view,setView})=>{
    const [newUsername,setUsername]=useState('')
    const [newPassword,setPassword]=useState('')
    const [newConfirm,setConfirm]=useState('')
    const [status,setStatus]=useState(['',''])
    const newInput=(event,setFunc)=>{
      setFunc(event.target.value)
    }
    const register=async(event)=>{
      event.preventDefault()
      if(newPassword===newConfirm){
        try{
            const data=await userSerivce.create(newUsername,newPassword)       
            setUser(data.user)
            setView(['main',0])
            window.localStorage.setItem('user',data.token)
            blogService.setToken(data.token)
            userSerivce.setToken(data.token)
            setUsername('')
            setPassword('')
            setConfirm('')
        }
        catch{
            setStatus(['invalid username or password','error'])
        }
      }
      else{
        setStatus(['confirmation and password does not match','error'])
      }
    }
    return(
      <div className="fill">
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
                  <div className="card-body p-4 p-sm-5">
                    <h6 className={status[1]}>{status[0]}</h6>
                    <h5 className="card-title text-center mb-3 fw-light fs-5">Register</h5>
                    <form onSubmit={register}>
                      <div className="form-floating mb-3">
                        <input value={newUsername} onChange={(event)=>{newInput(event,setUsername)}} className="form-control" id="username" placeholder="Username"/>
                        <label>Username</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input value={newPassword} onChange={(event)=>{newInput(event,setPassword)}} type="password" className="form-control" id="password" placeholder="Password"/>
                        <label>Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input value={newConfirm} onChange={(event)=>{newInput(event,setConfirm)}} type="password" className="form-control" id="confirm_password" placeholder="Confirm Password"/>
                        <label>Confirm Password</label>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                          in</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Register