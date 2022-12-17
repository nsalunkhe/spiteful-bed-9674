import {Select, Box, Heading, HStack, Img, SimpleGrid, Spacer,Button,Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState,useReducer } from 'react'
import Quantity from './quantity'




const MapCartData = ({Products,handleRemove}) => {
 


  


  return (
   
    <Box width="100%">{
     
       Products.map((prod)=>{
            return <Flex width="100%" gap="10px"  alignItems="center"  padding="5px" marginTop="10px" key={prod.id}>
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
                              <Box>
                               <Quantity quantity={prod.qty} id={prod.id}/>
                           
                              </Box>
                              <Button padding="10px 15px" size="sm" onClick={()=>handleRemove(prod.id)}>Remove</Button>

                              {/* <Box  textAlign="left">
                                <label htmlFor="" style={{fontWeight:"bold"}}> 
                                <input type="radio" /> Shiping
                                </label>
                                <p style={{textAlign:"justify"}}>International orders usually arrive within 5–13 business days. We'll give you shipping dates in checkout.</p>
                          
                              </Box> */}
                        </Flex>

                 
                 
                  
                
                
                
               
                    </Flex>
                  })}

       
      
    </Box>
   
  )
}

export default MapCartData