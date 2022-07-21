
import { ChakraProvider } from '@chakra-ui/react'
import { CalProvider } from './Component/Concate'
import { CalProvider1 } from './Component/Concate1'

import Menu from './Component/Menu'





function App() {


  return (
    <div  >
      <ChakraProvider>
      <CalProvider>
        <CalProvider1>
      <Menu/>
      </CalProvider1>
      </CalProvider>
      </ChakraProvider>
    </div>
  )
}

export default App
