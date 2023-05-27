
import React, { useState, useEffect} from 'react'
import { getInventory, getUsers } from '../../API';
import { Box, Tbody, Thead, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Table, Th, Tr,Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { Title } from 'chart.js';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function DashboardTable(){
  const [customers, setCustomers] = useState<any>([]);
  const[loading, setLoading] = useState<any>(false);

  const fetchData = () =>{
    setLoading(true)
    fetch("https://localhost:7137/api/Customers")
        .then(res => {
          return res.json();
        })

        .then(data =>{
          setCustomers(data)
          setLoading(false)
        })
  }

  useEffect(() => {
    fetchData()
  }, [])
 const { toggleColorMode } = useColorMode()
 const bg = useColorModeValue('white', '#6A5ACD')
  return(
    <Skeleton isLoaded={!loading}>
    <TableContainer w={{base:'100%', md:'100%', lg:'100%'}}>
       <Table bg={bg}>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Gender</Th>
        </Tr>
      </Thead>
      {customers.length > 0 && (
        <Tbody>
          {customers.map((customer:any)=>(
            <Tr>
              <Td key={customer.id}>{customer.id}</Td>
              <Td key={customer.id}>{customer.firstName}</Td>
              <Td key={customer.id}>{customer.lastName}</Td>
              <Td key={customer.id}>{customer.email}</Td>
              <Td key={customer.id}>{customer.gender}</Td>
            </Tr>
          ))}
        </Tbody>
      )}
    </Table>
    </TableContainer>
   </Skeleton>
  )
}



