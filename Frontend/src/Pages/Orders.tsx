import React from 'react'
import { Box, Flex, Heading, HStack,Icon,Text } from '@chakra-ui/react'
import OrdersTable from '../Components/Tables/OrderTables'
import ToggleColorMode from '../Components/toggleModeColor'
import { useNavigate } from 'react-router'
import { LockIcon } from '@chakra-ui/icons'
export default function Orders() {
  const navigate = useNavigate();

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
    <Box >
    <Box className='Lockicon' ml='10px' fontSize='2xl' onClick={() => {navigate('/')}}><Icon as={LockIcon} fontSize="2xl"/></Box>
    </Box>
    </Flex>
    <Flex
   w={{base:'100%',lg:'100%', md:'60%'}}
   p='3%'
   flexDir='column'
   overflow='auto'
   minH='100vh'
  >
  <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='3xl'
  fontWeight='extrabold'
  align='center'
  >
  Orders Table
</Text>
      <HStack>
      <OrdersTable />
      </HStack>
      </Flex>
      </Flex>
  )
}
