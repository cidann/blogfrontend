import { useEffect } from "react"
import userSerivce from "../services/User"
import blogService from "../services/Blogs"
const Navbar=({user,setUser,view,setView})=>{
    
    const changeView=(v)=>{
        setView(v)
    }
    const login_logout=user.username? 'logout':'login'
    const loggedin=user.username? '':'hide'
    const loggedout=user.username? 'hide':''
    const login_logoutFunc=()=>{
        if(user.username){
            setUser({})
            window.localStorage.removeItem('user')
            changeView(['main',0])
            userSerivce.setToken('')
            blogService.setToken('')
        }
        else{
            changeView(['login',0])
        }
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a onClick={(event)=>{changeView(['main',0])}} className="navbar-brand pointer">DRF Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Profile</a></li>
                        <li className={"nav-item "+loggedin}><a onClick={(event)=>{changeView(['CreateNew',0])}} className="nav-link px-lg-3 py-3 py-lg-4">Create New</a></li>
                        <li className="nav-item"><a onClick={login_logoutFunc} className="nav-link px-lg-3 py-3 py-lg-4 pointer">{login_logout}</a></li>
                        <li className={"nav-item "+loggedout }><a onClick={(event)=>{changeView(['register',0])}} className="nav-link px-lg-3 py-3 py-lg-4 pointer">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;