
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
export default function ToggleColorMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Button onClick={()=>toggleColorMode()}
          
          >
        
      
      {colorMode ==='dark'? <SunIcon/>:<MoonIcon/>}

    </Button>
  )
}
