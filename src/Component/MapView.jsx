import React from 'react'

const MapView = () => {
  return (
    <div>
        <div style={{height:"750px",width:"100%"}}>
        <iframe style={{height:"100%",width:"100%"}}
                    
                    loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8y6B9yDV22myWoSlv5y3e-icj5lmkZo8
                       &q=Goa">
         </iframe>
        </div>
    </div>
  )
}

export default MapView