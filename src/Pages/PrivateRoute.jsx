import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"
export const PrivateRoute=({children})=>{
    const [isAuth]=useContext(AuthContext)
    if(isAuth){
        return children
    }
     return <Navigate to="/register/one"/>
}