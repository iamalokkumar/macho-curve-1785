import React,{useState} from 'react'
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


const Usecontext = () => {
    const [value, onChange] = useState(new Date());
   
    
    const { isOpen, onOpen, onClose } = useDisclosure()
   
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