import { useContext } from "react"
import { RegistrationContex } from "../context/RegistrationContextProvider"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"
export const Dashboard=()=>{
    const [isAuth] =useContext(AuthContext)
    const [username,email,address,phone]=useContext(RegistrationContex)
    console.log(username,email,address,phone)
    if(!isAuth){
        alert("Please register first")
        return <Navigate to="/register/one"/>
    }
    return (
        <div className="usercard">
            <h1>Dashboard</h1>
            <h2>{username}</h2>
            <h3>{email}</h3>
            <h3>{address}</h3>
            <h3>{phone}</h3>
        </div>
    )
}