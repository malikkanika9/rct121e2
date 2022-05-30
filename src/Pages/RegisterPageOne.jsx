import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { RegistrationContex } from "../context/RegistrationContextProvider"
import { AuthContext } from "../context/AuthContext"
export const PageOne=()=>{
    const navigate=useNavigate()
    const [isAuth,handleAuth]=useContext(AuthContext)
    const [username,email,address,phone,dispatch]=useContext(RegistrationContex)
    const [tempusername,setUsername]=useState("")
    const [tempemail, setemail]=useState("")
  function changepage(){
      if(tempusername!=""&&tempemail!=""){
          dispatch({
              type:"username",
              payload:tempusername
          })
          dispatch({
              type:"email",
              payload:tempemail
          })
          handleAuth(true)
         navigate("/register/two", {replace:false})
      }
      else{
          alert("Please enter username and email")
      }
    
   
  }
 

    return (
        <div className="container" >
            <div className="inputs">
            <input type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
             <input type="email" placeholder="email"onChange={(e)=>{setemail(e.target.value)}} />
            </div>
           <button className="nextbtn" onClick={changepage}>Next</button>
        </div>
    )
}