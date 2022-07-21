import React,{useState,useContext} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '@chakra-ui/react'
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
  import { calender1 } from './Concate1'


const Usecontext = () => {
    const [value, onChange] = useState(new Date());
    const {setData1}=useContext(calender1)
    
    const { isOpen, onOpen, onClose } = useDisclosure()
     setData1(value.toDateString())
  return (
    <div>
         <p onClick={onOpen}>Check-out</p>
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
<div style={{marginLeft:"4px"}}>
                        <p  >{value.toDateString()}</p>
                    </div>
    </div>
  )
}

export default Usecontext