import { Button, textDecoration,Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Style from "../Component/Component.module.css"



const Alldetails = () => {




  return (
    <div>
        <div style={{display:"flex",marginLeft:"200px",justifyContent:"space-between"}} className={Style.All}>
            <div style={{display:"flex",gap:"15px"}}>
                <p style={{color:"blue",textDecoration:"underline"}}>Overview</p>
                <p>Rooms</p>
                <p>Location</p>
                <p>Amenities</p>
                <p>Policies</p>
                <p>Reviews</p>
            </div>
            <div>
                <NavLink to='/login'>
                <Button color='white' bg='blue' mr='10px' >Reserve a room</Button>
                </NavLink>
            </div>
        </div>
        <div style={{display:"flex",marginLeft:"200px",width:"65%",height:"600px"}} className={Style.Seeall}>
            <div style={{width:"52%"}}>
               <p style={{fontSize:"30px",fontWeight:"bold",marginLeft:"10px"}}>ITC Grand Goa, a Luxury Collection Resort & Spa, Goa</p>
               <br />
               <p style={{fontSize:"20px",fontWeight:"bold",marginLeft:"10px"}}>4.2/5 Very good</p>

               <p style={{marginLeft:"10px"}}>Guests rated this property 4.4/5 for cleanliness.</p>
               <br />
               <p  style={{marginLeft:"10px",fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}}>Popular amenities</p>
               <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",gap:"18px"}}>
                    <div>
                        <img src="data:image/png;base64,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" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                         <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                          <img src="https://as1.ftcdn.net/v2/jpg/04/59/28/40/1000_F_459284034_aLZ6k3acm7nceCk6eO3eLaYKkC92bldY.jpg" style={{height:"35px",width:"35px",marginLeft:"10px"}}  />

                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>Pool</p>
                        <br />
                        <p style={{marginTop:"2px"}}>Free WiFi</p>
                        <br />
                        <p style={{marginTop:"16px"}}>Parking included</p>

                    </div>
                </div>
                <div style={{display:"flex",gap:"18px"}}>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/103/103717.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                         <img src="https://icon-library.com/images/air-conditioning-icon/air-conditioning-icon-1.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                          <img src="data:image/png;base64,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" style={{height:"35px",width:"35px",marginLeft:"10px"}}  />

                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>Pet-friendly</p>
                        <br />
                        <p style={{marginTop:"2px"}}>Air conditioning</p>
                        <br />
                        <p style={{marginTop:"16px"}}>Spa</p>

                    </div>
                </div>
                
               </div>
               <br />
               <p  style={{marginLeft:"10px",fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}}>Cleaning and safety practices</p>
               <br />
               <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",gap:"18px"}}>
                    <div>
                        <img src="https://i.pinimg.com/564x/de/0d/da/de0dda174941bf5d34607d0838d1ccb0.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                         <img src="https://static.thenounproject.com/png/636910-200.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         

                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>Cleaned with disinfectant</p>
                        <br />
                        <p style={{marginTop:"2px"}}>Contactless check-in</p>
                      

                    </div>
                </div>
                <div style={{display:"flex",gap:"18px"}}>
                    <div>
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/37/10/apply-hand-sanitizer-black-pictograph-icon-eps-vector-31193710.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                         <img src="https://cdn3.vectorstock.com/i/1000x1000/12/47/personal-protective-equipment-solid-style-icon-vector-30501247.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        

                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>Hand sanitiser provided</p>
                        <br />
                        <p style={{marginTop:"2px"}}>Personal protective equipment</p>
                       

                    </div>
                </div>
                
               </div>
            </div>
            <div>
                
                <div style={{height:"250px",width:"400px",marginLeft:"80px"}}>
                    <img src="https://www.google.com/maps/d/thumbnail?mid=1dJhEOImJwTUgaDE__loE6DfhIHc&hl=en" style={{height:"100%",width:"100%",borderRadius:"15px"}} />
                    <p style={{marginLeft:"5px"}}>Arossim Beach, Cansaulim, Goa, 403712</p>
                    
                    <NavLink to='/map' >
                       <p style={{color:"blue"}} className={Style.see}> View in a map </p>
                    </NavLink>
                    <br />
        
                    <p  style={{marginLeft:"5px",fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}}>Cleaning and safety practices</p>
                    <div style={{display:"flex",gap:"15px"}}>
                    <div>
                        <img src="data:image/png;base64,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" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="data:image/png;base64,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" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADh4eGlpaX5+flra2s5OTnv7+/d3d3CwsJ1dXWKioq9vb0nJydfX18VFRV/f38eHh63t7fKyspSUlJCQkLz8/NjY2MJCQmTk5OwsLDs7Oybm5vU1NTm5uZMTEyGhoYlJSVEREQwMDCXl5dXV1f5725cAAAGP0lEQVR4nO2daVfiTBCFaWRxRGRRUXFBhvH//8X3zUEHAknqVm9VzdTz3T59TdJdO72eYRiGYRiGYRiGYRiGYRiGYRjGP8Wqf3v1MtyMpovFYjraDF+ubvsr6U1Fo78ejlwTo+G6L725YAbL4axR3Q+z4XIgvckAlned6n64W0pv1I/rOSRvz/xaerts7h8Y+ioe7qW3zOL+kamv4rEcjdfc5/f3OZbxrg5uPPVV3BRwsC4D9FVoP1dXT4ECnXtSbevcPwcLdO5Z8YnzEkFfxYu0kDYwCwbhTlpKI+Nm89qP0Vhazjkf3RY2l9mHtKBT+lH1VShzrK6jC3ROlYET/wlWKHqK47jf4A8zPcfNNIlA56bSwn7wdSVoHqSl7ZkkE+jcRFpcxa+EAp37JS2v13tNKtC5V2mBCT/CPeKf4lVigc5dyQocJxfonOytGO7S0zxJCrzPINA5SZ8/pkvYzkhOYGhcDUUu/rZl73U23U35ZvpWSiDvEW7n6/5rFSlcvV6v51vW30o9RI5L8XLq7PU5gTkhJwM/SHfNz2C5g1eQOU7h4OG6dYk1uoRIeBE1ub+6bJLxF7iKhAH+hm3tLc8yKcBue9q/w/xLgVsfC68hJwR2YuUPvEFvF+ahQ08x/2v6G9gV6tohTubvpGoaQBzDIbwa4oTldhNv6S094zn5AaDwNqGaJoAQImdLwD8sd2CRviseWevRBTiZ7wvgteKZksCVkbcQhc6mcf/l9EuRN9tGfzft5nYztBGe96j5Q+6HWxWzIlf8k0RJG2RlJT9UTQbP5wl0BGyHH6kmDZu88f0FtZ139pLv1JKLBDraoXbjcbTTF1ACHe1Qm/GJ/22LUrjxWHOjSSH5RvlEjsjIVk6jhlToky8iXShVCot/huR3+OWxJhlYjK6iC2ozPq4OaXtHV9EFtZny70OynptfHvpBLfmcQEc7pEvOz4eRuTpe0CAUsmvkRsOSIZCBKL6ZTBrzeUNRtEfOzfjRgRpu1CAM0tVhhIP3DMkV+Q5ZCEDIm5fxA7KRmYPe5FfDDDrQDad5HWDg5OM9ROAR5j1KoQw8J64C1HDmPWgAC4S1J6RiIXsTDVIpguZtkXzyLqmaJpBe9BkWFl4hdWB5o6UVUPZ9h7gYA6hwKH/NEJLU/N9PpCUOsKIOgRZo2gipmFIHxAdWHcc1kWKA9ll0+1FofaNI3wW4N3fXft6s4Nq4jLoO4OWTb80f0QCs+HJSvc+MToTnyfnn+DFhtLYLdSRwxrO4zdux9/P+Rsbwj8l/Ge6h07Yn7IbzyWQyH+KVs9+IjVlI3xK0R7AxKFXzaB3JVlKglCkCueu9aiAViqFkr0qskaZNvY5w03rIQCGM3NGLU9g3BhvxgTypbwzhFtIK9vXNQrAz7y90+DuEvIHuFjBX2A8Jx/eclIeN+DGzB3fzuEj0AjVy8bNNkrV0Kxrcluaw0XHM7EkzWkHPiKFeGstGgTVzTPzZAxqsmWPiWzYqrJljYrtR0k7TOVimBkfhMNq4QzJUjqKNOU9JfHZSIzFjNooGCh4Tb3CbijFtTcQanziTFtJKLAtckcV9SpzBWKKjrwjiWOCqLO5TYljgyizuU3x+FKFO3nJuPuEDhVWND27iM1Dgp7QAmkCF0tsHCJvYqmAiK03Ipaj5KjwQMpVWfuIshP+lqPwqPOAbltIWfGrH11NU6hU24ecpqvUKm/DxFPV6hU34XIpFXIUH+LkaTXkYBH5iWEm6Fwce3PlN7qafCLBKZL0GaUiDdEYdUPfTQAj0LKkDeWdARQOvlsrfthUHPKeoLleIghbzS5XihzPAOioYQzLVgRlvhZlrdZC+pjIiF20gYX7VQXwaOqJRTOSiDcp4K9Fcq0NFNAqKXLTR3aao9kdVOXRVn+qpIA2hy3gr1lyr0268lWuu1Rm0Rd5mBZtrddqMt6LNtTrN6aiyzbU6zZG34qJrXTRF3gqMrnVxbryVb67VOY+8FRld6+K0dUhNw0886mnTcpKhOPVaIvV1QT4cp02LSobiHOb05Z6fl4uDk3EhLsU5P10n+rpFYvEdIS45AkyxnxQiOskjNZWTcUkuxTmrS3Mpzllfmktxzqf0BgzDMAzDMAzDMAzDMAzDMAzDMKT4D1gBSwuhRyrLAAAAAElFTkSuQmCC" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>Arossim Beach</p>
                        <br />
                        <p style={{marginTop:"2px"}}>Uttorda Beach</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>Cansaulim Beach</p>
                           <br/>
                           <p style={{marginTop:"6px"}}>Goa (GOI-Dabolim)</p>
                    </div>
                    <div style={{marginLeft:"70px"}}>
                        <p style={{marginTop:"2px"}}>12 min walk</p>
                        <br />
                        <p style={{marginTop:"2px"}}>4 min drive</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>6 min drive</p>
                           <br/>
                           <p style={{marginTop:"6px"}}>41 min drive</p>
                    </div>
                </div>
                </div>
                </div>
        </div>
        <br />
        <p style={{fontSize:"40px",marginLeft:"200px"}}>Choose your room</p>
      <div style={{display:"flex",marginLeft:"200px",gap:"20px"}}> 
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/a534007b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2200/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
               </div>
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/584f018f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2300/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
                  
               </div>
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/d5f8d956.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                       
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2400/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
               </div>
               
        </div>
        <br />
        <div style={{display:"flex",marginLeft:"200px",gap:"20px"}}> 
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/da13ab21.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2400/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
               </div>
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/da13ab21.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2500/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
                  
               </div>
               
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/9bd12335.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2600/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
               </div>
               
        </div>
        <br />
        <div style={{display:"flex",marginLeft:"200px",gap:"20px"}}> 
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/a534007b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2200/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
               </div>
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/584f018f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2300/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
                  
               </div>
               <div style={{width:"350px"}} className={Style.rad}>
                  <div style={{height:"30%",width:"100%"}}>
                        <img src="https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/d5f8d956.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" style={{height:"100%",width:"100%",borderRadius:"10px"}} />
                            <br />
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Premium Room, 1 Double Bed, Balcony,</p>
                        <p style={{fontSize:"18px",fontWeight:"bold",marginLeft:"5px"}}>Garden View (1 King or 2 Twinbeds)</p>
                        <br />
                        <div style={{display:"flex",gap:"20px"}}>
                        <div>
                        <img src="https://www.clipartmax.com/png/middle/363-3633390_remodeling-sq-ft-icon-png.png" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                        
                         <img src="https://icon-library.com/images/sleep-icon-png/sleep-icon-png-3.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                         <br />
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/96/45/double-bed-icon-vector-21679645.jpg" style={{height:"30px",width:"30px",marginLeft:"10px"}}  />
                        <br />
                          <img src="https://media.istockphoto.com/vectors/wifi-icon-vector-id1261027671?k=20&m=1261027671&s=612x612&w=0&h=qf-Jf_VNhy3Wnilf8QAcE0Q9q7rA8CcCp96XJ5nbHME=" style={{height:"25px",width:"25px",marginLeft:"12px"}}  />
                          <br />
                          <img src="https://as2.ftcdn.net/v2/jpg/01/92/38/33/1000_F_192383331_4RSRvuUk5OQ0Td04bRGkGw1VJ4PO9lW3.jpg" style={{height:"35px",width:"35px",marginLeft:"12px"}}  />
                    </div>
                    <div>
                        <p style={{marginTop:"2px"}}>441 sq ft</p>
                        <br />
                        <p style={{marginTop:"9px"}}>Sleeps 3</p>
                         <br/>
                         <p style={{marginTop:"9px"}}>1 Double Bed</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free high-speed internet</p>
                           <br/>
                           <p style={{marginTop:"2px"}}>Free self-parking</p>
                    </div>
                    
                    </div>
                    <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
                    <br />
                    <p style={{fontWeight:"bold",marginLeft:"5px"}}>Cancellation policy</p>
                    
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Non-refundable</p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs0</p>
                        </div>
                        
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"10px"}}/>
                        </div>
                        <div style={{marginLeft:"20px",marginTop:"7px"}}>
                            <p>Fully refundable </p>
                        </div>
                        <div style={{marginLeft:"30px",marginTop:"7px"}}>
                            <p>+ Rs2,150</p>
                        </div>
                        
                    </div>
                    <br />
                    <div style={{display:"flex",gap:"30px"}}>
                        <div>
                    <p style={{fontSize:"25px",marginBottom:"5px",fontWeight:"bold"}}>Price: 2400/-</p>
                    </div>
                    <div>
                        <Button bg="blue" color="white" mb="7px">Reserve A Room</Button>
                    </div>
                    </div>
                  </div>
                  
               </div>
               
        </div>
        <div>
               <div className={Style.policy}>
                <div>
                    <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Policies</p>

                </div>
                <div>
                <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Check-in</p>
                  <br />
                  <p style={{marginLeft:"12px"}}>Check-in from 2 PM - midnight</p>
                  <p style={{marginLeft:"12px"}}>Express check-in</p>
                  <p style={{marginLeft:"12px"}}>Minimum check-in age - 18</p>
                  <br />
                  <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Special check-in instructions</p>
                  <br />
                  <p  style={{marginLeft:"12px"}}>Front desk staff will greet guests on arrival</p>
                  <br />
                  <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Access methods</p>
                  <br />
                  <p style={{marginLeft:"12px"}}>Staffed front desk</p>
                  <br />
                  <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Pets</p>
                  <br />
                  <p style={{marginLeft:"12px"}}>Pets are allowed for an extra charge of EUR 20 per pet, per night</p>
                  <p style={{marginLeft:"12px"}}>Service animals are welcome, and are exempt from fees</p>
                  <p style={{marginLeft:"12px"}}>Up to 22 lbs/10 kg</p>
                  <p style={{marginLeft:"12px"}}>Food and water bowls are available</p>
                  <br />
                  <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Children and extra beds</p>
                  <br />
                  <p style={{marginLeft:"12px"}}>Children are welcome</p>
                  <p style={{marginLeft:"12px"}}>Kids stay free! One child stays free when using existing bedding</p>
                  <p style={{marginLeft:"12px"}}>Rollaway/extra beds are available for EUR 10.0 per night.</p>
                  <p style={{marginLeft:"12px"}}>Free cots (infant beds)</p>
                  <br />
                  <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Payment types at the property</p>
                  <br />
                  <div style={{display:"flex"}}>
                  <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" style={{marginLeft:"20px"}} /><img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg" /><img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" /><img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"  />
                  </div>
                  
                  <br />

                </div>
                <div>
                <p style={{marginTop:"10px",marginLeft:"15px",fontSize:"25px",fontWeight:"bolder"}}>Check-out</p>
                <br />
                <p style={{marginLeft:"12px"}}>Check-out before noon</p>
                </div>
               </div>
        </div>
        <div>
        <div style={{display:"flex"}} className={Style.main6}>

        <div style={{height:"100%",width:"32%"}}>
        <img src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" style={{height:"100%",borderRadius:"8px"}}/>

        </div>
        <div  style={{height:"100%",width:"40%",marginLeft:"20px"}}>
            <h1 style={{fontSize:"30px",fontWeight:"bolder"}}>Our app takes you further</h1>
                    <p>When you book on the app you can save up to 10% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</p>
                       <br />
                       <p style={{fontWeight:"bolder"}}>Text yourself a download link for easy access</p>
                       <div style={{display:"flex",marginTop:"20px"}}>
                        <div>
                            <Input h="50px" w="150px"  placeholder='Country Code'></Input>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                        <Input h="50px" w="150px"  placeholder='Phone'></Input>
                        </div>
                        <div>
                        <Button colorScheme='blue' size='lg' w="150px" ml="10px" >Get The App</Button>
                        </div>
                       </div>
                       <p style={{fontSize:"12px",marginTop:"10px"}}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
                       
            </div>
            <div style={{height:"200px",width:"200px",marginLeft:"40px",marginTop:"40px"}}>
                   <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png" />
                   <p style={{marginLeft:"35px"}}><b>Scan the QR code</b></p>
                </div>

        </div>
        
        </div>
        <div>
        <div style={{marginTop:"40px"}}>
        <div style={{display:"flex"}}>
        <div style={{marginLeft:"200px"}}>
                    <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" />

                </div>
                <div style={{marginLeft:"90px"}}>
                    <p style={{fontWeight:"bolder"}}>Company</p>
                    <br />
                    <p className={Style.f1} style={{color:"blue"}}>About us</p>
                    <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Jobs</p>
                    <p className={Style.f1} style={{color:"blue",marginTop:"10px"}} >List your property</p>
                    <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Partnerships</p>
                </div>
                <div style={{marginLeft:"90px"}}>
                <p style={{fontWeight:"bolder"}}>Explore</p>
                <br />
                <p className={Style.f1} style={{color:"blue"}}>India travel guide</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Hotels in India</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Holiday rentals in india</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Holiday Packages in india</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Domestic Flights</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Car hire in india</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>All accommodation in india</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Travel blog</p>
                </div>
                <div style={{marginLeft:"90px"}}>
                <p style={{fontWeight:"bolder"}}>Policies</p>
                <br />
                <p className={Style.f1} style={{color:"blue"}}>Privacy statement</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Terms of use</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Vrbo terms and conditions</p>
                </div>
                <div style={{marginLeft:"90px"}}>
                <p style={{fontWeight:"bolder"}}>Help</p>
                <br />
                <p className={Style.f1} style={{color:"blue"}} >Support</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Change or cancel your booking</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Refund process and timelines</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>Book a flight using an airline credit</p>
                <p className={Style.f1} style={{color:"blue",marginTop:"10px"}}>International travel documents</p>
                </div>
                
        </div>
        </div>
        <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
        <div style={{height:"60px",width:"200px",margin:"auto",marginTop:"60px"}}>
            <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" />
        </div>
        <div style={{marginLeft:"140px"}}>
            <p style={{fontSize:"13px"}}>© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc...</p>

        </div>
        </div>
    </div>
  )
}

export default Alldetails