import { Box, Grid, HStack, Image, Link, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
export const Gift2 = ({ image, title, description, links }) => {

    return (
        <>
            <UnorderedList w={"100%"} m={"auto"}>

                <Grid w={"100%"} h={{ base: "500px", sm: "300px", md: "400px", lg: "500px" }} templateRows={"repeat(2, auto)"}
                    fontSize={"13px"} m={"auto"}>

                    <Image src={image} w={"100%"} alt="catelogs" />

                    <Box fontSize={{ base: "14px", sm: "12px", md: "13px", lg: "15px" }} w={"100%"} textAlign={"left"} pt={"10px"} pl={"1px"}>
                        <Text mb={"15px"} fontSize={{ base: "14px", sm: "13px", md: "14px", lg: "15px" }} fontWeight={"bold"} textAlign={"left"}>{title}</Text>
                        <Text w={"98%"} textAlign={"left"}>{description}</Text>
                        <Box w={"98%"} mt={"10px"}>
                            {
                                links?.map((link) => (
                                    <Link textDecor={"underline"} m={"10px 10px 10px 0px"}>{link}</Link>
                                ))
                            }
                        </Box>
                    </Box>

                </Grid>

            </UnorderedList>
        </>
    )
}