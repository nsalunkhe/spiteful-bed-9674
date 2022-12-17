import { Box, Heading, HStack, Img, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SingleProduct from '../../Pages/SingleProduct'

const MapData = ({Products,data}) => {
  console.log(Products,data)
  const Men  = data.length!=0? data:Products 

  const navigate = useNavigate()

  const singleProductData =(prod)=>{
    navigate({pathname:'/SingleProduct'},{state:prod})
  }
  
  
  return (
   
        
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} width="100%" padding="0px 20px 0px 20px">
        {
        Men.map((prod)=>{
            return(<Box onClick={()=>{singleProductData(prod)}} key={prod.id} style={{fontFamily:"'Noto Sans', sans-serif" ,boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", paddingBottom:"10px"}}>
                <Img src={prod.images[0]} alt="product image" />
                <Box width="95%" margin="auto">
                <Heading size="sm">{prod.title}</Heading>
                  <Box paddingLeft="10px" >
                    
                    <Text textAlign="left" style={{color:'grey'}}><span style={{color:'grey',fontWeight:'bold'}}>Color:</span> {prod.actual_color}</Text>
                    <Text textAlign="left" style={{color:'grey'}}><span style={{color:'grey',fontWeight:'bold'}}>Brand:</span> {prod.brand}</Text>
                    <Text textAlign="left" style={{color:'grey'}}><span style={{color:'grey',fontWeight:'bold'}}>Size:</span> {prod.size}</Text>
                  </Box>
                 
                  <HStack >
                    <p style={{backgroundColor:"#f22f72", textDecoration:"line-through" , color:"whitesmoke" ,padding:"5px 7px 5px 7px" ,}}><span style={{fontWeight:'bold'}}>MRP:</span> ₹{prod.variant_mrp}</p>
                    <Spacer/>
                    <p style={{backgroundColor:"#1caf21" ,padding:"5px 7px 5px 7px" ,color:"whitesmoke"}}><span style={{fontWeight:'bold'}}>Offer Price:</span> ₹{prod.variant_price}</p>
                  </HStack>
                </Box>

            </Box>
           
        )})
        }
      </SimpleGrid>
     
  
  )
}

export default MapData