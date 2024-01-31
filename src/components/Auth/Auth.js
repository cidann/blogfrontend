import Login from "./Login"
import Register from "./Register"
const Auth=({user,setUser,view,setView})=>{
    if(view[0]==='login'){
        return(
            <Login
                user={user}
                setUser={setUser}
                view={view} 
                setView={setView}
            />
        )
    }
    else if(view[0]==='register'){
        return(
            <Register
                user={user}
                setUser={setUser}
                view={view} 
                setView={setView}
            />
        )
    }
}

export default Auth