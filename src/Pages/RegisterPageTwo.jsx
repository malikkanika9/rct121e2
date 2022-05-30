import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { RegistrationContex } from "../Context/RegistrationContextProvider"
export const PageTwo=()=>{
    const navigate=useNavigate()
    const [username,email,address,phone,dispatch]=useContext(RegistrationContex)
    const [tempAddress,setAddress]=useState("")
    const [tempphone, setphone]=useState(null)
    function changepageprev(){
        navigate("/register/one", {replace:false})
      }
      function changepagenext(){
          if(tempAddress!==""&&tempphone!=null){
            dispatch({
                type:"address",
                payload:tempAddress
            })
            dispatch({
                type:"phone",
                payload:tempphone
            })
            navigate("/dashboard", {replace:true})
          }
         else{
             alert("Please enter addres and phone number")
         }
        
      }
    return (
        <div className="container">
            <div className="inputs">
                <input type="text" placeholder="address" onChange={(e)=>{setAddress(e.target.value)}}/>
                <input type="text" placeholder="phone number"onChange={(e)=>{setphone(e.target.value)}} />
            </div>
            <div style={{display:"flex"}}>
                 <button className="prevbtn" onClick={changepageprev}>prev</button>
                <button className="nextbtn" onClick={changepagenext}>Submit</button>
            </div>
           
        </div>
    )
}