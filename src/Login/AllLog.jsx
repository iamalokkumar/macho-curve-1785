import React from 'react'
import { useContext,useState } from 'react'
import { LogDetails } from './LogContext'
import axios from "axios"
import Style from "../Component/Component.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select
  } from '@chakra-ui/react'
import {CheckIcon} from "@chakra-ui/icons"
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
const AllLog = () => {
    let [email,setEmail]=useState("")
    let[password,setPassword]=useState("")
   
      let handleChange=(e)=>{
         setEmail(e.target.value)
      }
      let handleChange1=(e)=>{
        setPassword(e.target.value)
      }

  let {log,setLog}=  useContext(LogDetails)

 axios.post("https://reqres.in/api/login",{
    email:email,
    password: password
 }).then((res)=>{
       console.log(res.data.token)
 })
 const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })

 const initialRef = React.useRef(null)
 const finalRef = React.useRef(null)

 
  return (
    
    <div>
        <Navbar/>
        <br />
        
        <p style={{fontSize:"29px",fontWeight:"bold",marginLeft:"120px"}}>Review and book</p>
       
        <div style={{display:"flex",gap:"10px",marginTop:"10px",marginLeft:"120px"}}>
            <div>
                <CheckIcon color="green"/>
            </div>
            <div>
                <p style={{color:"green"}}>You've picked a winner! This hotel is rated 4.2/5.</p>
            </div>
            </div>
            
         <div style={{height:"40px",width:"50%",marginLeft:"120px",marginTop:"10px",display:"flex",gap:"25px"}} className={Style.cm}>
            
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8jHyAAAAAgHB0GAAAnIiOzs7Pn5uYKAAC8u7vFxMQOBQjLysuenZ0VEBGrqqt8ensaFRb09PTV1NUTDQ87ODnv7+8uKiuHhoZLSEmXlpZaWFne3t5VUlMMAAUZFBZhX19samtvbm6Bf4BCP0CjoqI1MzNXVVZLSUleXV3Z2dmrI868AAAFCUlEQVR4nO2de5uiLBiH14fKyrQwO0zTuZlm6/t/wN3ed/YSnVTAAzDzu/+H67kFAZHDr18AAAAAAAAAAAAAAAAAAAAAAAAA+Ic/n3xl7psOqxHiyeaWUBHJcTOJTYdYh3jwGlHAmVcE4wElt4GrktvZgQ7Fdqkl8dnWdLAabI8UVet9SkZ0cs0xntFBUu9/DjRzqq4OgkTJ70FCI9Nhy3Mm2fopwujsSDH6i0DD70GwcKKLnAdcU9Dz+HBuOvxqxlo19B+MxqYFqpg8E2Q8SoI8SfRsKGC94vyrIO/1VrvZJsyzme1W1PtSo5ndFXXJcoIsoNuguPnwBzcK8knYssOIVXnLFck+CavCXYbBPuvIF53EqsVlmAn1QBupZJtedvwzXLccpzYTygRKO9nezd/lUk5ajVOfVaa2kUpJrDOK7NpajLXY9DKCU6XE04wihS3FWItlplFUHkaPREUW2NiersXRqGIJPsiUYmBhY7MUv3e1WsPLXijEnn2fGe9CT8HftLJYCL3p8L3h+OrTF4qQ9KYktkI9ZauG46vNXIhO+yUSX2WybXi6TqctWKL7Di2FqbnEtram30hs4nOybHTqC5WU9KciGsqmDQbpeIZ/1MjnNW1Oe4PGomuCWZS28+qdfco07XOiWWPRNcEuffa1apfQYfDfjUXXBGlDU7Mji4SMbBrWxOmjPxxr5XRMK4NVo2+hctXsx4T+wqrGVPi6D+p92oXpsMaqUc04NazZyAuNqVVzGYJhzT9IQsdq1dwwDOWBoSlgKA8MTQFDeWBoChjKA0NTwFAeGJoChvLA0BQ/ynA/9WuwfA+aelZNMjpfhR/A+8LdFTII/0hZfxdaMWUaejJ7DnRgfE8n4473Va0Vs5VEkmvjWmPQrt8DOpoUHLUv6HlDg4r3LgT/luLFmOFCf1W+mqKpPxghVQfXCKxvyNDrpI4+MNT5j7sqQs/jRyOGF/XdW9qQEcNrZ5XU1P/g7iqpqRexS0MzC6RgCEMYwtBSQ8Z5yRkLrhuyiKi/O35ciRJFSzcMg+Fs/Lmgcr7uq31aumDIe+vMasopj6oTuWSYLPK7TJbHXnUydwyDZ8vb1/I5WG8Y7Z7mIK9ou2Hhku2b7Ltou2HhTNJyL9miWm54OBXmEQ6rkztgSPfCPGLJAY7dhqxsv+VM7k2027B0f8JILhe7DUv/5frfwrBsnizOnxXipGHpT065OUnLDcv2Pcer72BYWkvl/pDbbdgrm839Fi1N6WbQgdwnlN2GpXsuj3I/We02LOsQfcnD6yw35C+Fecj+obPcsPgsl7t0a2W5YWGXKNcZumDIvKe7lj+kp9usN/T46mspxh/yZ2Tab+jxIB/jZKUwYeqAocfotzhbsz0pTXq7YPi3GMUm9ayW2g3DzJkgkrMXMIQhDGEIQxjCEIYwhCEMYfgDDcWDzs5q19A4Yni4pYkVF/o7YihMfocKK75cMmT8U3GqKOiMocfodToahS/KSZ0x9Dy+J9K4aschQ01gCEMYwhCGMIThTzA0cxrPS0cnKvxnaOQi1o3uVZXqMGZCMHPxSsuYuichf1Nee5Ss9m+Vzo6NiG7VwbTDqZtzI9jQ2GFR8aqTekoG72Pxhx0omr1Iz7+23WVwjUvqmuUif4W6BozeDDWjAvdTQAlnLXDY05sdVyItB5eXVb9xFqfQfPkBAAAAAAAAAAAAAAAAAAAAAAAAAAAA3OMPXIddF8y+rvwAAAAASUVORK5CYII=" style={{height:"30px",width:"30px"}} />
                </div>
                <div>
                    <p style={{fontSize:"20px",color:"blue"}}>Sign in to earn 420 Expedia Rewards points</p>
                </div>
            </div>   
        <div style={{marginLeft:"120px",width:"50%",marginTop:"20px"}} className={Style.cm}>
            <div style={{display:"flex"}}>
            <div>
            <div style={{display:"flex",gap:"15px"}}>
                <div style={{marginTop:"10px",marginLeft:"20px"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"  style={{height:"20px",width:"20px"}}/>
                </div>
                <div>
                    <p style={{fontSize:"16px",fontWeight:"bold",marginTop:"6px"}}>Room 1:</p>
                </div>
                <div>
                    <p style={{marginTop:"6px"}}>2 Adults 1 King Bed Non-smoking</p>
                </div>
            </div>
            <div style={{display:"flex",marginLeft:"35px",gap:"10px"}}>
               <div style={{display:"flex",gap:"5px"}}>
                <div>
                <CheckIcon color="green"/>
                </div>
                <div>
                    <p style={{color:"green"}}>Breakfast included</p>
                </div>
               </div>
               <div style={{display:"flex",gap:"5px"}}>
                <div>
                <CheckIcon color="green"/>
                </div>
                <div>
                    <p style={{color:"green"}}>Free parking</p>
                </div>
               </div>
               <div style={{display:"flex",gap:"5px"}}>
                <div>
                <CheckIcon color="green"/>
                </div>
                <div>
                    <p style={{color:"green"}}> Free internet</p>
                </div>
               </div>
            </div>
            <div style={{display:"flex"}}>
                <div style={{marginLeft:"38px",marginTop:"15px"}}>
                    <p>First name*</p>
                    <div>
                        <Input/>
                    </div>
                </div>
                <div style={{marginLeft:"38px",marginTop:"15px"}}>
                    <p>Last Name*</p>
                    <div>
                        <Input/>
                    </div>
                </div>
            </div>
            <div style={{display:"flex"}}>
            <div style={{marginLeft:"38px",marginTop:"15px"}}>
                    <p>Mobile phone number*</p>
                    <div>
                        <Input/>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:"38px",marginTop:"15px",display:"flex",gap:"5px",marginBottom:"5px"}}>
                 <div>
                   <input type="checkbox" /> 
                 </div>
                 <div>
                    <p>Receive text alerts about this trip (free of charge).</p>
                 </div>
                 </div>
                
                 </div>
                
            </div>
           
        </div >
        <div style={{marginLeft:"120px",width:"50%",marginTop:"20px"}} className={Style.cm}>
              <div style={{display:"flex",gap:"20px"}}>
                <div style={{marginLeft:"10px"}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAACRkZHS0tIwMDAfHx/r6+u4uLj4+PjW1tYUFBT7+/vZ2dnMzMzw8PDm5ubFxcVmZmaZmZlFRUWkpKQpKSk5OTltbW1ycnKHh4cqKirg4OC1tbVOTk4NDQ2YmJhZWVl6enqjo6NRUVFISEhhYWE4ODgiIiJ/f38TExOKiop6nVwhAAAEv0lEQVR4nO2d6XaiQBBGCRBxYRMZkYBxj07e/wEHtwEXZLGaajjf/TVjsOEe6a7eKBQFAAAAAAAAAAAAAAAAAAAAAAAAAAB0moHhqQvfsrmvQwSO5c0+P658eT3uCyKkH8Xq/PvjnsDhvjAKbMufTR/criy4L+8tRo6hLr9y5c5sW1ofR1q8mhe4XfgbcV9sVRxXDT6LxTK0R7E/iMNJJbcLbbhRkzhQ8YfLonNf/kvsKP7dDmvLnQm5LXJI4kCQHwcqYXK7PBAZv8t9LZd9sLYcu6fNbj6dcAtl6Fv+qlZzkmiEsZk2KtFP9m8uo1JK5Krjem7DYOE+dtCWEv2I9sAPa9a4+SrWRjnFZu8Ftpo4clxvXK/G6TvVeN2z7mWO5mhO+2YcbusFucms3PjPT7/yJdznBtv1x/Xuys+5Gkf90ifKfLOxgZRphMt6AXw/S+JAxbOp6ddjITp3uPW6lUlzksSB8j9cBjMtQ6W2ecCtFQm+As99ZzIiLWlHZvKU0br6nbl5EQdKk9b2KYVHLvHjFMor9N3C6L0td2KX3g0k5T3HKV/7vqcrX6MczqVV4w9hqXfEJeU2qlEhDpSkCcNDsdx+tdYEzW02YFjQgi5DQ2iPUbzhLNdtGqxd8RMowg29Z27DzSEe0DSVhYg2NO/lfsZrlygOlGMn2DA7IT1Jmsrmp/Vsp9frOWasTvYiik8HL6FFHgeqIuQCLj2ZyWWSpGdqPJii7p1zqN+f/CKv5DKDIOaeiLn9k9Ph+C+DaNrzLaYGtaB9LPY47rR0brkLukVraCRlHotcMXtlOZAaqqd5WFuGGzRlStnoLD/8RPDdRRVqhoSK+jgJQrIJJqM0ui6V3r+ddZaFLZlhUgkX3DZP8cgUFYfbJQe6yeGaK0nCGVMJRtwmuVD14ErM0DBBtRBVf/OEaD5pBB8G+BJBM/vlF5+IjTWJYf40Gz8rEkMZ+zNXaDYuyDIqfAbNxJvMhjSNKQw5gSEMYcgPDGEIQ35gCEMY8gNDGMKQHxjCEIYS0HrD/cIdvKTthj6JgMSGp61PvVK00/C4jaf0Avs7DwtxGf5JBCs8wbJpn+FCUYIqx9evtFyGrtKvdHz9lTYuQ+3m6dhi6mdcgKEoYHhP9wz1UF3e/L9rhqcQr2U+6JrhZdeelX7SNcPrbqg0j0PXDK997XQ/U9cMr7tnt/8/6ZrhZSyROaRrhufB4yizJa1zhh8HV/OzW1+7Z3gPDGHYPN03tM5PPpbmp3WGfjacl+C3dYab26FDEd/1H9djmy/VFMUtfbD+xkNQbIZ/j4/eW0Yp3lrA4JvV3zeUdZZz7Wk1sPsvab1hwvAF3zRJo2ReIe3+GjAMYQhDfmAIQxjyA0MYwpAfGMIQhvzAEIYw5Kf7hjQpd+VKCXkLzWsEdsUnYoMmY9vTXN6SQJNYsPwKV/PQJKOttp+8WYhSX8uaNpEucaJVfComyDImyxov6F7CJuuPSJj0Ws6aSJa+VJG1OSV9h4CM+S+J3/oiX9gnzjwvX2tDLqgokUyjKF3MTptfbq//1N+kV4BT6ZlOYQQiX/Jo+9z5Wie+8Nf4jAbGWuXBM5p6vRQAAAAAAAAAAAAAAAAAAAAAAAAAAHjBP2bAeIxL/dV7AAAAAElFTkSuQmCC" style={{height:"26px",width:"26px"}}/>
                </div>
                <div style={{display:"flex",gap:"5px"}}>
                      <div>
                      <CheckIcon color="green"/>
                      </div>
                      <div>
                        <p> We use secure transmission</p>
                      </div>
                </div>
                <div style={{display:"flex",gap:"5px"}}>
                      <div>
                      <CheckIcon color="green"/>
                      </div>
                      <div>
                        <p> We protect your personal information</p>
                      </div>
                </div>
              </div>
              <br />
              <p style={{marginLeft:"10px"}}>Debit/Credit Card</p>
              <div style={{marginLeft:"10px",display:"flex",marginTop:"6px"}}>
                <div>
                    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg" />
                </div>
                <div>
                    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg" />
                </div>
                <div>
                    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg" />
                </div>
                <div>
                    <img src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg" />
                </div>
              </div>
              <div >
                <p style={{marginLeft:"10px"}}>Name on Card*</p>
                <Input ml="10px" placeholder='Enter Card Name' w="40%"/>
              </div>
              <br />
              <div >
                <p style={{marginLeft:"10px"}}>Debit/Credit card number*</p>
                <Input ml="10px" placeholder='Enter Card Number' w="40%"/>
              </div>
              <div>
                <br />
                <p style={{marginLeft:"10px"}}>Expiry Date</p>
                <div style={{display:"flex",marginLeft:"10px"}}>
                 
                            <Select w='26%'>
                                <option value="Month">Select</option>
                                <option value="jun 22">jun 22</option>
                                <option value="jun 23">jun 23</option>
                                <option value="jun 24">jun 24</option>
                                <option value="jun 25">jun 25</option>
                                <option value="jun 26">jun 26</option>
                            </Select>
                            <Select w='26%'>
                                <option value="Year">Select</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </Select>
                         
                </div>
              </div>
              <br />
              <p style={{marginLeft:"10px"}}>Security Code</p>
              <div style={{width:"22%",marginLeft:"10px"}}>
                <Input/>
              </div>
              <br />
              <NavLink to='/success'>
              <Button mb="5px" ml="10px" bg="red" >Complete Booking</Button>
              </NavLink>
              <br />
              </div>
              <br />
              <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
        <div style={{height:"60px",width:"200px",margin:"auto",marginTop:"60px"}}>
            <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" />
        </div>
        <div style={{marginLeft:"140px"}}>
            <p style={{fontSize:"13px"}}>© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc...</p>

        </div> 

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please LogIn</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Welcome Alok Kumar</h1>
           <div style={{display:"flex",gap:"10px"}}>
            <div>
                <CheckIcon color="green"/>
            </div>
            <div>
                <p>Hotel Price Guarantee - exclusive for Expedia Rewards members</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
            <div>
                <CheckIcon color="green"/>
            </div>
            <div>
                <p>Earn <span style={{color:"red"}}>Expedia Rewards points</span> towards free travel</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
            <div>
                <CheckIcon color="green"/>
            </div>
            <div>
                <p>Use saved account information for faster checkout</p>
            </div>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
            <div>
                <CheckIcon color="green"/>
            </div>
            <div>
                <p> View all of your itineraries in one convenient location</p>
            </div>
            </div>
            <br />

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='Enter Email' onChange={handleChange}/>
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Enter Password' onChange={handleChange1} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              SignIn
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AllLog