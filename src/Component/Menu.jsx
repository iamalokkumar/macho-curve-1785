import React from 'react'
import {Routes,Route} from "react-router-dom"
import Stays from './Stays'
import HotelCollection from './HotelCollection'
import MapView from './MapView'

const Menu = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Stays/>}/>
            <Route path='/hotel' element={<HotelCollection/>}/>
            <Route path ='/map' element={<MapView/>}/>
        </Routes>
    </div>
  )
}

export default Menu