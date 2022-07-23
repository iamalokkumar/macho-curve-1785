import React from 'react'
import {Routes,Route} from "react-router-dom"
import Stays from './Stays'
import HotelCollection from './HotelCollection'
import MapView from './MapView'
import Anjuna from "../HotelDetails/Anjuna"
import Arossim from "../HotelDetails/Arossim"
import Baga from "../HotelDetails/Baga"
import Bambolim from "../HotelDetails/Bambolim"
import Benaulim from "../HotelDetails/Benaulim"
import Benaulims from "../HotelDetails/Benaulims"
import Bogmolo from "../HotelDetails/Bogmolo"
import Candolim from "../HotelDetails/Candolim"
import Cavelossim from "../HotelDetails/Cavelossim"
import Chapora from "../HotelDetails/Chapora"
import Chimbel from "../HotelDetails/Chimbel"
import Panaji from "../HotelDetails/Panaji"
import Versa from "../HotelDetails/Versa"
import Panjim from "../HotelDetails/Panjim"
import Login from '../Login/Login'
import Success from '../Login/Success'


const Menu = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Stays/>}/>
            <Route path='/hotel' element={<HotelCollection/>}/>
            <Route path ='/map' element={<MapView/>}/>
             <Route path='hotel/Anjuna' element={<Anjuna/>}/> 
             <Route  path='hotel/Arossim' element={<Arossim/>}/> 
             <Route path='hotel/Baga' element={<Baga/>}/> 
             <Route path='hotel/Bambolim' element={<Bambolim/>}/> 
             <Route path='hotel/Benaulim' element={<Benaulim/>}/> 
             <Route path='hotel/Benaulims' element={<Benaulims/>}/> 
             <Route path='hotel/Bogmolo' element={<Bogmolo/>}/> 
             <Route path='hotel/Candolim' element={<Candolim/>}/> 
             <Route path='hotel/Cavelossim' element={<Cavelossim/>}/> 
             <Route path='hotel/Chapora' element={<Chapora/>}/> 
             <Route path='hotel/Chimbel' element={<Chimbel/>}/> 
             <Route path='hotel/Panaji' element={<Panaji/>}/> 
             <Route path='hotel/Versa' element={<Versa/>}/> 
             <Route path='hotel/Panjim' element={<Panjim/>}/> 
             <Route path='/login' element={<Login/>}/>
             <Route path='/success' element={<Success/>}/>
        </Routes>
    </div>
  )
}

export default Menu