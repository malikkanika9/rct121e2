import React, { useState } from "react";

export const AuthContext=React.createContext()


export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false)

    function handleAuth(val){
        setIsAuth(val)
    }
    return <AuthContext.Provider value={[isAuth,handleAuth]}>
        {children}
    </AuthContext.Provider>
}