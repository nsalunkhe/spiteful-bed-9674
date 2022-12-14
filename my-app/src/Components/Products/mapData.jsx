import { Box, Heading, HStack, Img, SimpleGrid, Spacer } from '@chakra-ui/react'
import React from 'react'

const MapData = ({Products}) => {
  console.log(Products)
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {
        Products.map((prod)=>{
            return <Box key={prod.id}>
                <Img src={prod.images[0]} alt="product image" />
                <Box width="95%" margin="auto"  >
                  <Heading size="sm">{prod.title}</Heading>
                  <p><span style={{color:'black',fontWeight:'bold'}}>Color:</span> {prod.actual_color}</p>
                  <p><span style={{color:'black',fontWeight:'bold'}}>Brand:</span> {prod.brand}</p>
                  <p><span style={{color:'black',fontWeight:'bold'}}>Size:</span> {prod.size}</p>
                  <HStack >
                    <p style={{ border:"2px solid black" ,padding:"5px 7px 5px 7px" ,}}><span style={{color:'black',fontWeight:'bold'}}>MRP:</span> ₹{prod.variant_mrp}</p>
                    <Spacer/>
                    <p style={{backgroundColor:'green', border:"1px solid black" ,padding:"5px 7px 5px 7px" ,color:'white'}}><span style={{fontWeight:'bold'}}>Offer Price:</span> ₹{prod.variant_price}</p>
                  </HStack>
                </Box>

            </Box>
        })
        }
      </SimpleGrid>
    </Box>
  )
}

export default MapData