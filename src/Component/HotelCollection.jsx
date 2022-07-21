import React,{useContext, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { Input,InputGroup,InputLeftAddon,InputLeftElement } from '@chakra-ui/react'
import { CheckIcon,SearchIcon } from '@chakra-ui/icons'
import Style from "../Component/Component.module.css"
import { TimeIcon,ViewIcon } from '@chakra-ui/icons'
import { calender } from './Concate'
import { calender1 } from './Concate1'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const HotelCollection = () => {
    const {data}=useContext(calender)
    const {data1}=useContext(calender1)
    let[arr1,setArr1]=useState("")
   

    let  Hotels=[

        {name:"ITC Grand Goa",place:"Arossim",Rating:4.5,reviews:"Very good (113 reviews)",photo:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/31000000/30790000/30783800/30783748/b015ad4a_b.jpg",price:1200},
        {name:"Double tree By Hilton Goa",place:"Chimbel",Rating:4.2,reviews:"Very good (52 reviews)",photo:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/22000000/21430000/21429100/21429037/460fe046_b.jpg",price:1440},
        {name:"Hyatt Centric Cndolim Goa",place:"Candolim",Rating:4.2,reviews:"Very good (110 reviews)",photo:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/13000000/12920000/12918300/12918286/0e484b93_b.jpg",price:2000},
        {name:"Radison Goa Baga",place:"Baga",Rating:5,reviews:"Very good (120 reviews)",photo:"https://images.trvl-media.com/hotels/71000000/70100000/70098400/70098316/add0e86c.jpg?impolicy=resizecrop&rw=455&ra=fit",price:3200},
       {name:"Taz Exotica Resort And Spa,Goa",place:"Benaulim",Rating:5,reviews:"Very good (120 reviews)",photo:"https://images.trvl-media.com/hotels/1000000/670000/663700/663615/5bb5e9f8.jpg?impolicy=resizecrop&rw=455&ra=fit",price:1000},
        {name:"The Leela Goa",place:"Cavelossim",Rating:4.0,reviews:"Very good (109 reviews)",photo:"https://images.trvl-media.com/hotels/1000000/440000/438400/438378/bdbe16ac.jpg?impolicy=resizecrop&rw=455&ra=fit",price:4000},
        {name:"Goa Marriot Resort & Spa",place:"Panaji",Rating:4.3,reviews:"Very good (130 reviews)",photo:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/530000/523000/522986/546c8e4c_b.jpg",price:3220},
        {name:"ROSA SALVO",place:"Anjuna",Rating:3.5,reviews:"Very good (13 reviews)",photo:"https://images.trvl-media.com/hotels/83000000/82970000/82968400/82968322/a2fdaaf6.jpg?impolicy=resizecrop&rw=455&ra=fit",price:3000},
        {name:"W Goa",place:"Chapora",Rating:4.9,reviews:"Very good (113 reviews)",photo:"https://images.trvl-media.com/hotels/16000000/15440000/15439200/15439133/75d1619b.jpg?impolicy=resizecrop&rw=455&ra=fit",price:2360},
        {name:"Vivanta Goa,Panji",place:"Panji",Rating:4.5,reviews:"Very good (115 reviews)",photo:"https://images.trvl-media.com/hotels/3000000/2710000/2703400/2703358/00a8ece2.jpg?impolicy=resizecrop&rw=455&ra=fit",price:4000},
        {name:"Azaya Beach,Goa",place:"Benaulim",Rating:5,reviews:"Very good (120 reviews)",photo:"https://images.trvl-media.com/hotels/25000000/24050000/24041500/24041444/e8849892.jpg?impolicy=resizecrop&rw=455&ra=fit",price:1500},
        {name:"Grand Hyatt,Goa",place:"Bambolim",Rating:4.2,reviews:"Very good (113 reviews)",photo:"https://images.trvl-media.com/hotels/5000000/4060000/4051300/4051243/3ddf6bab.jpg?impolicy=resizecrop&rw=455&ra=fit",price:1800},
        {name:"Coconut creek",place:"Bogmolo",Rating:4.5,reviews:"Very good (113 reviews)",photo:"https://images.trvl-media.com/hotels/7000000/6250000/6244400/6244326/aee15893.jpg?impolicy=resizecrop&rw=455&ra=fit",price:1900},
        {name:"Sterling Goa",place:"Versa",Rating:5,reviews:"Very good (113 reviews)",photo:"https://images.trvl-media.com/hotels/18000000/17440000/17437100/17437081/e4c80a1d.jpg?impolicy=resizecrop&rw=455&ra=fit",price:3200}
      ]
      let [collect,setCollect]=useState(Hotels)
      let myFun=(e)=>{
    
        if(e.target.value="price"){
       let p=[...collect].sort((a,b)=>{
          return a.price-b.price
       }) 
       setCollect(p)    
        }
      else  if(e.target.value="rating"){
            let r=[...collect].sort((a,b)=>{
                return b.Rating-a.Rating
            })
            setCollect(r)
        }
        
    }
  return (
    <div>
        <Navbar/>
        
        <div style={{marginTop:"50px"}}>
            <div style={{display:"flex",height:"50px",width:"80%",margin:"auto"}}>
                <div>
                <InputGroup >
    <InputLeftAddon children={<CheckIcon/>} />
    <Input h='10' type='tel' placeholder='Goa City' />
  </InputGroup>
 
                </div>
               <div style={{height:"100%",width:"200px",marginLeft:"60px",}} className={Style.r}>
                <div style={{marginTop:"7px",marginLeft:"6px"}}>
                <TimeIcon h={6} w={6}/>
                </div>
                <div style={{textAlign:"center",marginLeft:"25px",marginTop:"3px"}}>
                <p >Check-In</p>
                <p>{data}</p>
                </div>
               </div>
            
               <div style={{height:"100%",width:"200px",marginLeft:"60px",}} className={Style.r}>
                <div style={{marginTop:"7px",marginLeft:"6px"}}>
                <TimeIcon h={6} w={6}/>
                </div>
                <div style={{textAlign:"center",marginLeft:"25px",marginTop:"3px"}}>
                <p >Check-Out</p>
                <p>{data1}</p>
                </div>
               </div>
               <div style={{height:"100%",width:"250px",marginLeft:"60px",}} className={Style.r}>
                <div style={{marginTop:"7px",marginLeft:"6px"}}>
                <ViewIcon h={6} w={6}/>
                </div>
                <div style={{textAlign:"center",marginLeft:"20px",marginTop:"3px"}}>
                <p >Travellers</p>
                <p>1 Room,2 Travellers</p>
                </div>
               </div>
                <div style={{height:"100%",width:"200px",marginLeft:"60px",}} className={Style.r}>
                    <Button w="100%" h="100%" bg="blue" color="white">Search</Button>
                </div>
            </div>
        </div>
        <div style={{display:"flex"}}>
        <div>
           
            <div className={Style.d1}>
                <div className={Style.d}>
                    <div style={{height:"80%",width:"100%"}}>
                    <iframe style={{height:"100%",width:"100%"}}
                    
           loading="lazy"
         allowfullscreen
         referrerpolicy="no-referrer-when-downgrade"
           src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8y6B9yDV22myWoSlv5y3e-icj5lmkZo8
              &q=Goa">
</iframe>
                    </div>
                    <div style={{marginLeft:"35%",color:"blue"}}>
                        <NavLink to='/map'>
                        <p>View in a Map</p>
                        </NavLink>
                     
                    </div>
                </div>
                <br />
                        
                <div style={{width:"80%",border:"1px solid black",margin:"auto",borderTop:"none"}}></div>
                <br />
                <div style={{textAlign:"center"}}>
                    <h2 style={{fontSize:"26px"}}>Search by property name</h2>
                    <br />
                    <InputGroup>
    <InputLeftElement 
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input size='lg' type='tel' placeholder='e.g. Best Western'  />
  </InputGroup>
  <br />
  <div style={{width:"80%",border:"1px solid black",margin:"auto",borderTop:"none"}}></div>
  <br />
  
                </div>
                <div>
    <h2 style={{fontSize:"25px",marginLeft:"25px"}}>Filter by</h2>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Popular filters</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Dinner included</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"3px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Free airport shuttle</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"3px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Spa</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"3px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Old Port</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Apart-hotel</p>
    </div>
  </div>
  <br />
  <p style={{marginLeft:"25px",fontWeight:"bold"}}>Price per night</p>
  <br />
  <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Less than Rs2,000</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Rs2,000 to Rs4,000</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Rs4,000 to Rs8,000</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Rs8,000 to Rs11,000</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Greater than Rs11,000</p>
    </div>
    <br />
  <p style={{marginLeft:"25px",fontWeight:"bold"}}>Guest rating</p>
  <br />
  <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Any</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Wonderful 4.5+</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Very good 4+</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"5px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"3px"}} />
        <p >Good 3.5+</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Property class</p>
    <div className={Style.g}>
        <div style={{justifyContent:"center",textAlign:"center"}}>
            <p style={{padding:"10px",fontSize:"20px",fontWeight:"bolder"}}>1 *</p>
        </div>
        <div style={{justifyContent:"center",textAlign:"center"}}>
            <p style={{padding:"10px",fontSize:"20px",fontWeight:"bolder"}}>2 *</p>
        </div>
        <div style={{justifyContent:"center",textAlign:"center"}}>
            <p style={{padding:"10px",fontSize:"20px",fontWeight:"bolder"}}>3 *</p>
        </div>
        <div style={{justifyContent:"center",textAlign:"center"}}>
            <p style={{padding:"10px",fontSize:"20px",fontWeight:"bolder"}}>4 *</p>
        </div>
        <div style={{justifyContent:"center",textAlign:"center"}}>
            <p style={{padding:"10px",fontSize:"20px",fontWeight:"bolder"}}>5 *</p>
        </div>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Payment type</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Fully refundable</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Reserve now, pay later</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Property type</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Apart-hotel</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Bed & breakfast</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Hostel/Backpacker accommodation</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Area</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Genoa</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Sant'Ilario</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Sturla</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Boccadasse</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Foce</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Lagaccio</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >San Teodoro</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Castelletto</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Carignano</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Nervi</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >San Fruttuoso</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Prè</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Pegli</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Albaro</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Popular locations</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Port of Genoa Cruise Ship Terminal</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Aquarium of Genoa</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Old Port</p>
    </div>
        <br />

    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Meal plans available</p>
   <br />
   <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Breakfast included</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Lunch included</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Dinner included</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Amenities</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Free airport shuttle</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Spa</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Gym</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Expedia Rewards</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"26px",width:"26px"}} />
        <p >VIP Access properties
A collection of top-rated stays</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"28px",width:"28px",marginTop:"4px"}} />
        <p >Member Prices
Get instant savings when you're signed in</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Accessibility</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px"}} />
        <p >Wheelchair-accessible parking</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Lift</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"20px",width:"20px",marginTop:"4px"}} />
        <p >Accessible bathroom</p>
    </div>
    <br />
    <p style={{marginLeft:"25px",fontWeight:"bold"}}>Traveller experience</p>
    <br />
    <div style={{display:"flex",marginLeft:"25px",gap:"20px"}}>
        
        <input type="checkbox" style={{height:"42px",width:"42px"}} />
        <p >{<b>LGBTQ welcoming</b>} {<br/>}
See properties that pledge to make all guests feel safe, welcome and respected.</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"6px"}}>
        
        <input type="checkbox" style={{height:"42px",width:"42px"}} />
        <p >{<b>Business-friendly</b>} {<br/>}
See properties with amenities to help you work comfortably, like WiFi and breakfast.</p>
    </div>
    <div style={{display:"flex",marginLeft:"25px",gap:"20px",marginTop:"6px"}}>
        
        <input type="checkbox" style={{height:"48px",width:"48px"}} />
        <p >{<b>Family-friendly</b>} {<br/>}
        See properties that include family essentials like in-room conveniences and activities for the kids.</p>
    </div>
    
   
            </div>
            
              
        </div>
        <div style={{width:"45%",marginLeft:"20px",marginTop:"20px"}}>
            <div style={{width:"100%",height:"60px",display:"flex",justifyContent:"space-between"}}>
                <div>
                    <p>815 properties</p>
                    <p><b>See how we pick our recommended properties</b></p>
                </div>
                <div>
                <Select placeholder='Sort by' mt='10px' onChange={myFun}>
  <option value='price'>Price</option>
  <option value='rating'>Rating</option>
  <option value='reviews'>Reviews</option>
</Select>
                </div>
            </div>
              {collect.map((elem)=>(
                    <div style={{display:"flex",marginTop:"15px"}}>

               
                    <div>
                        <img src={elem.photo} className={Style.r1}/>
                    </div>
                    <div style={{marginLeft:"10px"}}>
                        <p style={{fontSize:"25px",fontWeight:"bolder",color:"blue"}}>{elem.name}</p>
                        <br />
                        <p  style={{fontWeight:"bold"}}>3.5 Km from Cristoforo Colombia (Goa)</p>
                        <p style={{fontWeight:"bold"}}>Rating: {elem.Rating},{elem.reviews}</p>
                        <br />
                        <br />
                        <p style={{fontWeight:"bold",fontSize:"28px"}}>Price: {elem.price}/-</p>
                    </div>
                    
                    </div> //map div
              ))}
           
        </div>
        
        <div style={{width:"220px",marginTop:"20px",marginLeft:"20px"}}>
            <div>
                <img src="https://tpc.googlesyndication.com/simgad/3300578970834289968?" style={{width:"100%",height:"600px"}}  />

            </div>
            <div style={{marginTop:"40px"}}>
               <img src="https://tpc.googlesyndication.com/simgad/4652945743188291985?" style={{width:"100%",height:"600px"}}/>
            </div>
        </div>
        </div>  
        <div>

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
                       <p style={{fontSize:"12px",marginTop:"10px"}}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
                       
            </div>
            <div style={{height:"200px",width:"200px",marginLeft:"40px",marginTop:"40px"}}>
                   <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_BNA_HP.png" />
                   <p style={{marginLeft:"35px"}}><b>Scan the QR code</b></p>
                </div>
            </div>
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
        </div>
        <div style={{width:"80%",border:"1px solid black",margin:"auto",marginTop:"20px",borderTop:"none"}}></div>
        <div style={{height:"60px",width:"200px",margin:"auto",marginTop:"60px"}}>
            <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" />
        </div>
        <div style={{marginLeft:"140px"}}>
            <p style={{fontSize:"13px"}}>© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</p>

        </div>
    </div>
  )
}

export default HotelCollection