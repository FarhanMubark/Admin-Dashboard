import React from 'react'
import { useState } from 'react'

import {
  FiBell,
 
} from "react-icons/fi"
import { LockIcon} from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  Text,
  Icon,
  Box,

} from '@chakra-ui/react'
import MyChart from '../Components/Charts/MyChart'
import MyChart2 from '../Components/Charts/Mychart2'
import ToggleColorMode from '../Components/toggleModeColor'
import DashboardTable from '../Components/Tables/DashTables'
import { useNavigate } from 'react-router'



export default function Dashboard() {
  const navigate = useNavigate()
  const [display, changeDisplay] = useState('hide');

  return (
    
    
    <Flex 
    h={[null, null, "100vh"]}
    maxW="1700px"
    flexDir={["column", "column", "row"]}
    overflow="hidden"
    ml={{base:'53px', md:'0', lg:'0'}}
>

    {/* Column 1 */}
    <Flex ml={{base:'28px', lg:'0', md:'0'}} >
    <ToggleColorMode  /> 
    <Box className='Lockicon' ml='10px' fontSize='2xl' onClick={() => navigate('/')}><Icon as={LockIcon} fontSize="2xl"/></Box>
                      
    </Flex>
      {/* col2 */}
      <Flex
        w={{base:'100%', md:'60%', lg:'60%'}}
        p='3%'
        flexDir='column'
        overflow='auto'
        minH='100vh'  >
           
           <Heading
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize={{base:'2xl', md:'3xl', lg:'3xl'}}
      fontWeight='extrabold'
    >
  Welcome Back FARHAN
</Heading>
             
            <Text color='gary' fontSize={{base:'15px', md:'15px', lg:'20px'}}>My Balance</Text>
            <Text fontWeight='bold' fontSize={{base:'20', md:'20', lg:'2xl'}}>200,893$</Text>
                  <Flex w={{base:'20%', md:'60%', lg:'100%'}} h={{base:'2%', md:'60%', lg:'100%'}}  className='chartotation' >
                    <MyChart/>
                  </Flex>
            <Flex justifyContent='space-between' mt={8}>
              <Flex align='flex-end'>
                      <Heading
          bgGradient='linear(to-l, #7921CA, #FF0180)'
          bgClip='text'
          fontSize={{base:'2xl', md:'3xl', lg:'3xl'}}
          fontWeight='extrabold'
        >
          Customers
        </Heading>
                <Text fontSize='small' color='gray' ml='4'>Apr 2023</Text>
              </Flex>
              <Icon as={FiBell} fontSize="2xl" />
            </Flex>
            <Flex flexDir='column'>
              <Flex overflow='auto' h='100%' w='100%'>
               <DashboardTable/>
              </Flex>
            </Flex>
      </Flex>
      {/* col3 */}
      <Flex
       w={{base:'100%', md:'40%',lg:'40%' }}
       flexDir='column'
       overflow='auto'>
        <Flex mt='16' ml='10'>
        <MyChart2 />
        </Flex>
      </Flex>
    </Flex>

  )
}
