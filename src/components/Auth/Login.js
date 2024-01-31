import { useState } from "react"
import userSerivce from "../../services/User"
import blogService from "../../services/Blogs"

const Login=({user,setUser,view,setView})=>{
    const [newUsername,setUsername]=useState('')
    const [newPassword,setPassword]=useState('')
    const [status,setStatus]=useState(['',''])
    const newInput=(event,setFunc)=>{
      setFunc(event.target.value)
    }
    const login=async(event)=>{
      event.preventDefault()
      const data=await userSerivce.login(newUsername,newPassword)
      if(data.success){
        setUser(data.success.user)
        setView(['main',0])
        window.localStorage.setItem('user',data.success.token)
        blogService.setToken(data.success.token)
        userSerivce.setToken(data.success.token)
      }
      else if(data.error){
        setStatus([data.error,'error'])
      }
      setUsername('')
      setPassword('')
    }
    return(
      <div className="fill">
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
                  <div className="card-body p-4 p-sm-5">
                    <h6 className={status[1]}>{status[0]}</h6>
                    <h5 className="card-title text-center mb-3 fw-light fs-5">Sign In</h5>
                    <form onSubmit={login}>
                      <div className="form-floating mb-3">
                        <input value={newUsername} onChange={(event)=>{newInput(event,setUsername)}} className="form-control" id="username" placeholder="Username"/>
                        <label>Username</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input value={newPassword} onChange={(event)=>{newInput(event,setPassword)}} type="password" className="form-control" id="password" placeholder="Password"/>
                        <label>Password</label>
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

export default Login