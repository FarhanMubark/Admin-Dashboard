import React from 'react'
import { useState } from 'react'
import {
  FiBell
 
} from "react-icons/fi"

import { LockIcon} from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  Box
} from '@chakra-ui/react'
import {Text} from '@chakra-ui/react';
import InventryTable from '../Components/Tables/InventoryTables'
import LineChart from '../Components/Charts/LineChart'
import { InvetoryTable2 } from '../Components/Tables/InventoryTables'
import ToggleColorMode from '../Components/toggleModeColor'
import { useNavigate } from 'react-router';




export default function Inventory() {
  const navigate = useNavigate()
  const [display, changeDisplay] = useState('hide');

  return (
    <Flex
    h={[null, null, "100vh"]}
    maxW="2000px"
    flexDir={["column", "column", "row"]}
    overflow="hidden"
    ml={{base:'53px', md:'0', lg:'0'}}
    >
      <Flex ml={{base:'34px', lg:'0', md:'0'}} >
    <ToggleColorMode  /> 
    <Box className='Lockicon' ml='10px' fontSize='2xl' onClick={() => navigate('/')}><Icon as={LockIcon} fontSize="2xl"/></Box>
    </Flex>
      
      {/* col2 */}
      <Flex
        w={{base:'100%',lg:'60%', md:'60%'}}
        p='3%'
        flexDir='column'
        overflow='auto'
        minH='100vh'>
                  <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize={{base:'2xl', md:'3xl', lg:'3xl'}}
            fontWeight='extrabold'
          >
            Revenue
          </Text>
            
            <Flex w={{base:'20%', md:'60%', lg:'100%'}} h={{base:'2%', md:'60%', lg:'100%'}}>
            <LineChart />
            </Flex>
            <Flex justifyContent='space-between' mt={8}>
              <Flex align='flex-end'>
              <Text
           bgGradient='linear(to-l, #7928CA, #FF0080)'
           bgClip='text'
           fontSize={{base:'2xl', md:'3xl', lg:'3xl'}}
           fontWeight='extrabold'
             >
            Storage
          </Text>
                <Text fontSize='small' color='gray' ml='4'>Apr 2023</Text>
              </Flex>
              <Icon as={FiBell} fontSize="2xl" />
            </Flex>
            <Flex flexDir={["column", "column", "row"]}>
              <Flex overflow='auto'>
                  <InventryTable />
              </Flex>
            </Flex>
      </Flex>
      <Flex
        w={{base:'100%',lg:'26%', md:'60%'}}
        flexDir='column'
        overflow='auto'
       >  
       <Text ml='12px'  bgGradient='linear(to-l, #7928CA, #FF0080)'
           bgClip='text'
           fontSize={{base:'2xl', md:'3xl', lg:'3xl'}}
           fontWeight='extrabold'>Items</Text>
            <Flex>
              <InvetoryTable2 />
            </Flex>
      </Flex>
      <Flex
        w={{base:'none',lg:'20%', md:'none'}}
        flexDir='column'
        overflow='auto'
       >  
    
      </Flex>
    </Flex>

  )
}
