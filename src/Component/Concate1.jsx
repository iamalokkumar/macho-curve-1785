import React,{createContext, useState} from "react";

export const calender1=createContext();

export const CalProvider1=({children})=>{
    const [data1,setData1]=useState("")
    return <calender1.Provider value={{data1,setData1}}>{children}</calender1.Provider>
}