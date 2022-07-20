import React from 'react'
import {Routes,Route} from "react-router-dom"
import Stays from './Stays'

const Menu = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Stays/>}/>
        </Routes>
    </div>
  )
}

export default Menu