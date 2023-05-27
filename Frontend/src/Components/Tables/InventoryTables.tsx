import { useState, useEffect } from "react";
import { getInventory } from "../../API";
import { TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Table, useColorModeValue, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function InventoryTable(){
  const [items, setItems] = useState<any>([]);
  const[loading, setLoading] = useState<any>(false);

  const fetchData = () =>{
    setLoading(true)
    fetch("https://localhost:7137/api/Storage")
        .then(res => {
          return res.json();
        })

        .then(data =>{
          setItems(data)
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
          <Th>Country</Th>
          <Th>Stock</Th>
          <Th>Brand</Th>
        </Tr>
      </Thead>
      {items.length > 0 && (
        <Tbody>
          {items.map((item:any)=>(
            <Tr>
              <Td key={item.id}>{item.id}</Td>
              <Td key={item.id}>{item.title}</Td>
              <Td key={item.id}>{item.stock}</Td>
              <Td key={item.id}>{item.category}</Td>
            </Tr>
          ))}
        </Tbody>
      )}
    </Table>
    </TableContainer>
   </Skeleton>
  )
}


export  function InvetoryTable2(){
  const [items, setItems] = useState<any>([]);
  const[loading, setLoading] = useState<any>(false);

  const fetchData = () =>{
    setLoading(true)
    fetch("https://localhost:7137/api/Orders")
        .then(res => {
          return res.json();
        })

        .then(data =>{
          setItems(data)
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
       <Table bg={bg} w='100%'>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Brand</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      {items.length > 0 && (
        <Tbody>
          {items.map((item:any)=>(
            <Tr>
              <Td key={item.id}>{item.id}</Td>
              <Td key={item.id}>{item.brand}</Td>
              <Td key={item.id}>{item.price}</Td>
            </Tr>
          ))}
        </Tbody>
      )}
    </Table>
    </TableContainer>
   </Skeleton>
  )
}


