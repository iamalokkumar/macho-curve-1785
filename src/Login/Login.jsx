import React, { useContext } from 'react'
import AllLog from './AllLog'

import { LogDetails } from './LogContext'

const Login = () => {
    let {log,setLog}=useContext(LogDetails)
    if(log==false){
        alert("Please login")
    }
  return (
    <div>
        {log ? "true" : <AllLog/>}
 
        
    </div>
  )
}

export default Login