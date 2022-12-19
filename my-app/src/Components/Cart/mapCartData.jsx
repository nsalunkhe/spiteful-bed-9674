import { Select, Box, Heading, HStack, Img, SimpleGrid, Spacer, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState, useReducer } from 'react'
import Quantity from './quantity'
const MapCartData = ({ Products, handleRemove }) => {
  
  const toast = useToast()
  return (
    <Box width="100%">{
      Products.map((prod) => {
        return <Flex width="100%" gap="10px" alignItems="center" padding="5px" marginTop="10px" key={prod.id}>
          <Img height="200px" width="150px" src={prod.images[0]} alt="product image" />
          <Box width="30%">
            <Text marginBottom="8px" textAlign="left" fontSize="sm" fontWeight="bold">{prod.title}</Text>
            <Text textAlign="left" fontSize="sm"><span >Color:</span> {prod.actual_color}</Text>
            <Text textAlign="left" fontSize="sm"><span >Brand:</span> {prod.brand}</Text>
            <Text textAlign="left" fontSize="sm"><span>Size:</span> {prod.size}</Text>
            <HStack marginTop="7px">
              <Text textAlign="left" color="red" textDecoration="line-through"><span >MRP:</span> ₹{prod.variant_mrp}</Text>
              <Spacer />
              <Text textAlign="left" color="green"><span >Offer Price:</span> ₹{prod.variant_price}</Text>
            </HStack>
          </Box>
          <Flex gap="30px">
            <Box>
              <Quantity quantity={prod.qty} id={prod.id} />
            </Box>
            <Button padding="10px 15px" size="sm" 
            onClick={() =>{
               handleRemove(prod.id)
               toast({
                title: '"Item Removed From Cart Successfully."',
                status: 'success',
                position:"top-right",
                duration: 9000,
                isClosable: true,
              })
               }}>Remove</Button>
            
          </Flex>
        </Flex>
      })}
    </Box>
  )
}
export default MapCartData