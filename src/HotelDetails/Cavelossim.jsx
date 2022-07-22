import React from 'react'
import Navbar from '../Navbar/Navbar'
import Alldetails from './Alldetails'
import Style from "../Component/Component.module.css"
import { NavLink } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

const Cavelossim = () => {
  return (
    <div>
       <Navbar/>
      <div>
      
      <div className={Style.picdiv}>
        <div style={{height:"17%",width:"99.8%"}} className={Style.Seeall}>
          <NavLink to='/hotel'>
            <p style={{marginTop:"20px",color:"blue"}} className={Style.see}><ArrowBackIcon/> See all properties</p>
          </NavLink>
        </div>
        <div style={{display:"flex"}}>
          <div style={{height:"331px",width:"50%"}}>
            <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/282a399b.jpg?impolicy=resizecrop&rw=598&ra=fit" style={{height:"100%",width:"100%"}}/>

          </div>
          <div className={Style.g1}>
            <div>
              <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/0f1a1a3c.jpg?impolicy=resizecrop&rw=297&ra=fit" style={{height:"100%"}} />

            </div>
            <div>
              <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/38c47dae.jpg?impolicy=resizecrop&rw=297&ra=fit" style={{height:"100%"}} />
            </div>
            <div>
              <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/0bfccf64.jpg?impolicy=resizecrop&rw=297&ra=fit"  style={{height:"100%",width:"100%"}}/>
            </div>
            <div>
              <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/814cf825.jpg?impolicy=resizecrop&rw=297&ra=fit" style={{height:"100%",width:"100%"}}  />
            </div>
          </div>
        </div>
      </div>
      
     </div> /
     <Alldetails/>
    </div>
  )
}

export default Cavelossim