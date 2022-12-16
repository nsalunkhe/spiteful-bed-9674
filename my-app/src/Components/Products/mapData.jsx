import { Box, Checkbox, CheckboxGroup, CheckboxIcon, Heading, HStack, Img, Select, SimpleGrid, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'

const MapData = ({Products}) => {
  console.log(Products)
  return (
    <Box>
      <Box display="flex" >
        <Box width="20%">
          <Box  position="Fixed"> 
            <Heading  paddingLeft="-50px" marginLeft="0px" size='md'>Gender</Heading>

            <Box display="flex" flexDirection="column" justifyContent="flex-start">
      
              <Checkbox pl="6" size='md' colorScheme='green' >Mens</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Womens</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Boys</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >Girls</Checkbox>
                
            </Box>
            <Heading pl={-10} size='md'>Size</Heading>
            <Box display="flex" flexDirection="column" justifyContent="flex-start">
            
              <Checkbox pl="6" size='md' colorScheme='green' >S</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >M</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >L</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >XL</Checkbox>
              <Checkbox pl="6" size='md' colorScheme='green' >XXL</Checkbox>

            </Box>

          </Box>
        </Box>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} width="100%">
        {
        Products.map((prod)=>{
            return <Box key={prod.id} style={{fontFamily:"'Noto Sans', sans-serif" ,boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", paddingBottom:"10px"}}>
                <Img src={prod.images[0]} alt="product image" />
                <Box width="95%" margin="auto">
                  <Box>
                    <Heading size="sm">{prod.title}</Heading>
                    <p><span style={{color:'black',fontWeight:'bold'}}>Color:</span> {prod.actual_color}</p>
                    <p><span style={{color:'black',fontWeight:'bold'}}>Brand:</span> {prod.brand}</p>
                    <p><span style={{color:'black',fontWeight:'bold'}}>Size:</span> {prod.size}</p>
                  </Box>
                 
                  <HStack >
                    <p style={{backgroundColor:"#f22f72", textDecoration:"line-through" , color:"whitesmoke" ,padding:"5px 7px 5px 7px" ,}}><span style={{fontWeight:'bold'}}>MRP:</span> ₹{prod.variant_mrp}</p>
                    <Spacer/>
                    <p style={{backgroundColor:"#1caf21" ,padding:"5px 7px 5px 7px" ,color:"whitesmoke"}}><span style={{fontWeight:'bold'}}>Offer Price:</span> ₹{prod.variant_price}</p>
                  </HStack>
                </Box>

            </Box>
        })
        }
      </SimpleGrid>
      </Box>
    </Box>
  )
}

export default MapData