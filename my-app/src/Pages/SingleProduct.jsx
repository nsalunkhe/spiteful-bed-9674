import { Box, Button, Heading, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ProductImage from '../Components/SingleProduct/ProductImage'

const SingleProduct = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [img,setImg] =useState(location.state.images[0])
    const sizes = ['XS','S','M','L','XL','XXL']

    console.log(location.state.images[0])

    
  return (
    <Box padding="2%">
        <SimpleGrid columns={[1,2,2,2]}>
        <Box>
            <Box marginBottom="10px">
                
                <ProductImage img={img}/>     
            </Box>
            <Box>
                <HStack>
                    <Image onClick={()=>setImg(location.state.images[1])} width="23%" src={location.state.images[1]}/>
                    <Image onClick={()=>setImg(location.state.images[2])} width="23%" src={location.state.images[2]}/>
                    <Image onClick={()=>setImg(location.state.images[3])} width="23%" src={location.state.images[3]}/>
                    <Image onClick={()=>setImg(location.state.images[4])} width="23%" src={location.state.images[4]}/>
                </HStack>
            </Box>
        </Box>
        <Box>
            <Box w={"270px"} h={"380px"} p={"8px"} m={"auto"}>

            <Stack justify={"space-between"} w={"100%"}  fontSize={"16px"} >

                <Heading size="md" textAlign={"left"} >{location.state.title}</Heading>
                <Text textAlign={"left"} fontWeight={"500"}>{location.state.brand}</Text>
                <Button backgroundColor="#eeefef" _hover="none" textAlign={"left"} width="90px" borderRadius="50%">{location.state.ideal_for}</Button><br />

                <HStack>
                    <Text color={"green"} fontWeight={"500"} fontSize={"23px"} textAlign={"left"}>INR ₹{location.state.variant_price}</Text>
                    <Text color={"red"} fontWeight={"500"} fontSize={"20px"} textDecor={"line-through"} textAlign={"left"}>₹{location.state.variant_mrp}</Text>
                </HStack><br />
                <HStack>  
                {
                    sizes.map((el)=> el==location.state.size? <Button borderRadius="50%"> {location.state.size}</Button> : <Button disabled borderRadius="50%"> {el}</Button>
                    )
                }
                </HStack><br />
                <HStack>
                    <Text textAlign={"left"} fontWeight={"500"}>Color  </Text>
                    <Button backgroundColor={location.state.actual_color} borderRadius="50%"></Button>
                </HStack><br />
                <Button backgroundColor={"skyblue"} >Add to Cart</Button>
            </Stack>

        </Box>
        </Box>
        </SimpleGrid>
    </Box>
  )
}

export default SingleProduct