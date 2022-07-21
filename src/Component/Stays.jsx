import React, { useContext, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import Style from "../Component/Component.module.css"
import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import {SearchIcon,TimeIcon,ViewIcon  } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { NavLink } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
import Usecontext from './Usecontext'
import { calender } from './Concate'



const Stays = () => {
    const [value, onChange] = useState(new Date());
   
    
    const { isOpen, onOpen, onClose } = useDisclosure()
   const {setData}=useContext(calender)
   setData(value.toDateString())
  
  return (
    <div>
     
    
        <Navbar/>
        <div>
            <div className={Style.main}>
                <div className={Style.collect}>
                    <div className={Style.nav}>
                   
                    <NavLink to='/'>Stays</NavLink>
                    </div>
                    <div style={{ height: "100%", width: "100px",textAlign:"center"}}>
                    <p>Flights</p>
                    </div>
                    <div style={{ height: "100%", width: "100px",textAlign:"center"}}>
                    <p>Cars</p>
                    </div>
                    <div style={{ height: "100%", width: "100px",textAlign:"center"}}>
                    <p>Packages</p>
                    </div>
                    <div style={{ height: "100%", width: "100px",textAlign:"center",marginLeft:"30px"}}>
                    <p>Things To Do</p>
                    </div>
                </div>
               
                <div style={{marginTop:"40px",marginLeft:"50px",display:"flex"}}>
            <div style={{height:"50px",width:"35%",borderRadius:"5px",border:"1px solid black"}}>
            <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input size='lg' type='tel' placeholder='Going To'  />
  </InputGroup>
            </div>
            <div style={{height:"49px",width:"15%",border:"1px solid black",borderRadius:"5px",marginLeft:"10px",display:"flex",justifyContent:"space-around"}}>
                <div style={{marginTop:"7px",marginLeft:"6px"}}>
                    <TimeIcon h={6} w={6}/>
                </div>
                <div >
                    <div >
                        {/* <p >Check-in</p> */}
                        <p onClick={onOpen}>Check-In</p>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Check-In-Date</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <Calendar  onChange={onChange} value={value}/>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Select
      </Button>
     
    </ModalFooter>
  </ModalContent>
</Modal>
                    </div>
                    <div style={{marginLeft:"4px"}}>
                        <p  >{value.toDateString()}</p>
                    </div>
                </div>
            </div>
            <div style={{height:"49px",width:"15%",border:"1px solid black",borderRadius:"5px",marginLeft:"10px",display:"flex",justifyContent:"space-around"}}>
            <div style={{marginTop:"7px",marginLeft:"4px"}}>
                    <TimeIcon h={6} w={6}/>
                </div>
                <div>
                    <div>
                       

                    <Usecontext/>
                    </div>
                   
                </div>
            </div>
            <div style={{height:"49px",width:"20%",border:"1px solid black",borderRadius:"5px",marginLeft:"10px",display:"flex",justifyContent:"space-around"}}>
            <div style={{marginTop:"7px",marginLeft:"6px"}}>
                    <ViewIcon h={6} w={6}/>
                </div>
                <div>
                    <div>
                        <p>Travellers</p>
                    </div>
                    <div style={{marginLeft:"1px"}}>
                        <p>1 Room,2 Travellers</p>
                    </div>
                </div>
            </div>
           </div>
           
           <div style={{display:"flex"}}>
               <div style={{display:"flex",marginTop:"25px",marginLeft:"48px",alignItems:"center",gap:"20px"}}>
                <input type="checkbox" style={{height:"18px",width:"18px"}}/>
                <p>Add a Flight</p>
               </div>
               <div  style={{display:"flex"}}>
               <div style={{display:"flex",marginTop:"25px",marginLeft:"48px",alignItems:"center",gap:"20px"}}>
                <input type="checkbox" style={{height:"18px",width:"18px"}}/>
                <p>Add a Car</p>
               </div>
               </div>
           </div>
               <div>
                <div style={{marginTop:"20px",marginLeft:"40%"}}>
                    <NavLink to='/hotel'>
                <Button colorScheme='blue' size='lg' w="200px">Search</Button>
                </NavLink>
                </div>
               </div>
            </div>
           
        <div>
            <div style={{display:"flex"}} className={Style.main2}>
                <div style={{height:"100%",width:"30%"}}>
                    <img src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" style={{height:"100%",borderRadius:"8px"}}/>
                </div>
                <div  style={{height:"100%",width:"40%",marginLeft:"40px"}}>
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
                      
                      

                </div>
                <div style={{height:"200px",width:"200px",marginLeft:"40px",marginTop:"40px"}}>
                   <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png" />
                   <p style={{marginLeft:"35px"}}><b>Scan the QR code</b></p>
                </div>
            </div>

            <div className={Style.main3}>
                <div style={{width:"40%",marginLeft:"40px"}}>
                   <h1 style={{fontSize:"50px",fontWeight:"bolder",color:"white"}}>Save instantly with Expedia Rewards</h1> 
                </div>
                <div style={{width:"40%",marginLeft:"40px",marginTop:"50px"}}>
                    <p style={{color:"white"}}>You can enjoy access to perks like Member Prices, saving you 10% or more on select hotels. Terms may apply.</p>
                </div>
                <div style={{width:"40%",marginLeft:"40px",marginTop:"50px"}}>
                    <Button bg="blue" color="white">See Member Prices</Button>
                </div>
            </div>
        </div>
        <div className={Style.main4}>
          <div style={{marginLeft:"20px"}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div  style={{height:"40px"}}>
                <p style={{color:"white"}}>Plan Ahead And Save</p>
                <br />
                <p style={{color:"white"}}>Book 60 Days in advance for 20% off select stays.</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className={Style.footer}>
       <p>Explore a world of travel with Expedia</p>
       <p style={{color:"blue",marginLeft:"4px"}} className={Style.f1}>Discover new places and experiences</p>
        </div>
        <div style={{marginTop:"40px"}}>
            <div style={{display:"flex"}}>
                <div style={{marginLeft:"135px"}}>
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
            <p style={{fontSize:"13px"}}>© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</p>

        </div>
        </div>
    </div>
  )
}

export default Stays