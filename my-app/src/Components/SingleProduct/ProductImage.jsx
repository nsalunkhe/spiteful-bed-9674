import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const ProductImage = ({img}) => {
  return (
    <Box>
      
        <Image width="80%" src={img}/>
    </Box>
  )
}

export default ProductImage