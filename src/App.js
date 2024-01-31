import Navbar from "./components/Navbar";
import PageContent from "./components/MainPage/PageContent"
import BlogContent from "./components/Blog/BlogContent";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";
import userService from './services/User'
import blogService from './services/Blogs'

function App() {
  const [view,setView]=useState(['main',0])
  const [user,setUser]=useState({})
  useEffect(()=>{
    const getSession=async()=>{
      const token=window.localStorage.getItem('user','none')
      blogService.setToken(token)
      userService.setToken(token)
      const response=await userService.session()
      if(response.success){
        setUser(response.success)
      }
    }
    getSession()
  },[])
  return (
    <div id="app">
      <Navbar
        user={user} 
        setUser={setUser}
        view={view}  
        setView={setView}
      />
      <PageContent view={view} setView={setView}/>
      <BlogContent view={view} setView={setView}/>
      <Auth 
      user={user} 
      setUser={setUser}
      view={view} 
      setView={setView}/
      >
      <Footer/>
    </div>
  );
}

export default App;
