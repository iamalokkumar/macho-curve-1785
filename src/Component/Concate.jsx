import React,{createContext, useState} from "react";

export const calender=createContext();

export const CalProvider=({children})=>{
    const [data,setData]=useState("")
    return <calender.Provider value={{data,setData}}>{children}</calender.Provider>
}