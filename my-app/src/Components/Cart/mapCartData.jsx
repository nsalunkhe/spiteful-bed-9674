import {Select, Box, Heading, HStack, Img, SimpleGrid, Spacer,Button,Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from './Redux/cart.actions'

const MapCartData = ({Products}) => {
  const dispatch=useDispatch();

  
  console.log(Products)
  return (
   
    <Box width="100%">{
     
       Products.map((prod)=>{
            return <Flex width="100%" justifyContent="space-between" alignItems="center"  padding="5px" marginTop="10px" key={prod.id}>
                <Img height="200px" width="150px" src={prod.images[0]} alt="product image" />
               
                 
                  <Box  width="30%">
                  <Text marginBottom="8px" textAlign="left"  fontSize="sm" fontWeight="bold">{prod.title}</Text>
                  <Text textAlign="left" fontSize="sm"><span >Color:</span> {prod.actual_color}</Text>
                  <Text textAlign="left" fontSize="sm"><span >Brand:</span> {prod.brand}</Text>
                  <Text textAlign="left" fontSize="sm"><span>Size:</span> {prod.size}</Text>
                  <HStack marginTop="7px">
                    <Text textAlign="left" color="red" textDecoration="line-through"><span >MRP:</span> ₹{prod.variant_mrp}</Text>
                    <Spacer/>
                    <Text textAlign="left" color="green"><span >Offer Price:</span> ₹{prod.variant_price}</Text>
                  </HStack>

                


                  </Box>

                  <Flex  gap="30px">
                  <Select size="xs" width="50%" placeholder='Qty'>
                    <option value='1'> 1</option>
                    <option value='2'> 2</option>
                    <option value='3'> 3</option>
                    <option value='4'> 4</option>
                    <option value='5'> 5</option>
                    <option value='6'> 6</option>
                    <option value='7'> 7</option>
                    <option value='8'> 8</option>
                    <option value='9'> 9</option>
                    <option value='10'> 10</option>
                  </Select>
                  <Button size="sm" onClick={()=>dispatch(removeItem(prod.id))}>Remove</Button>
                  </Flex>

                 
                 
                  
                
                
                
               
            </Flex>
        })


        }

       
      
    </Box>
   
  )
}

export default MapCartData