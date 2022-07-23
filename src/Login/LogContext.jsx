

import React,{createContext,useState} from "react";

export const LogDetails=createContext()



export const LogProvider=({children})=>{
    let[log,setLog]=useState(false)
    return <LogDetails.Provider value={{log,setLog}}>{children}</LogDetails.Provider>
}