import { Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'

const MapData = (Products) => {

  return (
    <Box>
        {
        Products.map((prod)=>{
            <Box>
                <Img src={prod.images[0]} alt="product image" />
                <Heading>{prod.title}</Heading>
                <p>Color: {prod.actual_color}</p>
                {/* <p>Type: </p> */}
                <p>{prod.size}</p>
                <p>MRP: {prod.variant_mrp}</p>
                <p>Offer Price: {prod.variant_price}</p>

            </Box>
        })
        }
    </Box>
  )
}

export default MapData