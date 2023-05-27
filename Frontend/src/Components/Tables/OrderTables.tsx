
import { useState, useEffect } from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Skeleton } from "@chakra-ui/react";


export default function OrdersTable(){
        
    const [orders, setOrders] = useState<any>([]);
    const[loading, setLoading] = useState<any>(false);

  const fetchData = () =>{
    setLoading(true)
    fetch("https://localhost:7137/api/Orders")
        .then(res => {
          return res.json();
        })

        .then(data =>{
          setOrders(data)
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
          <Th>Address</Th>
          <Th>Brand</Th>
          <Th>Category</Th>
          <Th>Price</Th>
          <Th>Number of Orders</Th>
        </Tr>
      </Thead>
      {orders.length > 0 && (
        <Tbody>
          {orders.map((item:any)=>(
            <Tr>
              <Td key={item.id}>{item.id}</Td>
              <Td key={item.id}>{item.title}</Td>
              <Td key={item.id}>{item.brand}</Td>
              <Td key={item.id}>{item.category}</Td>
              <Td key={item.id}>{item.price}</Td>
              <Td key={item.id}>{item.department}</Td>
            </Tr>
          ))}
        </Tbody>
      )}
    </Table>
    </TableContainer>
   </Skeleton>
  )

    }