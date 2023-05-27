import { Icon ,HamburgerIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import '../App.css'
import React, { Children } from 'react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox
  } from "react-icons/fi"
  
  import {
    Flex,
    Box,
    useColorMode,
    useColorModeValue
  } from '@chakra-ui/react'
  import { LockIcon } from '@chakra-ui/icons'

import { NavLink, Outlet, useNavigate } from 'react-router-dom'


const Sidebar = ({children}:any) => {
    const navigate = useNavigate()
    const [isOpen, setIsopen] = useState(false);
    const toggle=()=> setIsopen (!isOpen) 
    const menuItem=[
        {
            path:'/dashboard',
            name:'Dashboard',
            icon:<Icon as={FiPieChart} fontSize="2xl" className="active-icon"/>
        },
        {
            path:'/inventory',
            name:'Inventory',
            icon:<Icon as={FiBox} fontSize="2xl"/>
        },
        {
            path:'/orders',
            name:'Orders',
            icon:<Icon as={FiDollarSign} fontSize="2xl"/>
        }
    ]
    

    const { toggleColorMode } = useColorMode()
    const bg = useColorModeValue('linear-gradient(180deg, rgba(34,193,195,1) 25%, rgba(76,157,192,1) 43%, rgba(253,187,45,1) 87%)', '#6A5ACD')

  return (
    <Flex >
        <Flex>
        <Box className="sidebar" style={{width: isOpen? "190px" : "65px"}} display={{base:'inline', md:'inline', lg:'inline'}}
         bg={bg}
         pos={{base:'fixed', md:'sticky', lg:'sticky'}}  >
            <Box className='top_section'>
                <h3 className='logo' style={{display: isOpen? "block" : "none"}} >Farhan</h3>
                <Flex className='bars' style={{marginLeft: isOpen? '50px' : '0px'}} display={{base:'none', md:'initial', lg:'initial'}} >
                    <HamburgerIcon onClick={toggle} className='hamIcon' />
                </Flex>
            </Box>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className='link'>
                        <Box className='icon'>{item.icon}</Box>
                        <Box className='link-text' style={{display:isOpen?"block":"none"}}>{item.name}</Box>
                    </NavLink>
               ))
            }
{/*             
            <Box className='icon link link-text' ml='10px' fontSize='2xl' onClick={() => navigate('/')}><Icon as={LockIcon} fontSize="2xl"/></Box>
                        <Box  style={{display:isOpen?"block":"none"}}>{'LOGOUT'}</Box> */}

        </Box>
        </Flex>
        <main>{children}</main>
    </Flex>
  )
}

export default Sidebar
