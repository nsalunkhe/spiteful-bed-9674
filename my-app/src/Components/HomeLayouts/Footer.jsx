import {
    Box, Link, SimpleGrid, Stack, Text, Tag, useColorModeValue,
    UnorderedList, Center, Input, Spacer, Button, Image, HStack
} from "@chakra-ui/react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShieldIcon from '@mui/icons-material/Shield';
import { Footer3 } from "./Footer3";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export const Footer = () => {
    return (
        <UnorderedList w={"100%"} bg={"white"} display={{ base: "none", sm: "block", md: "block", lg: "block" }} color={useColorModeValue('gray.700', 'gray.200')} boxSizing={"border-box"} m={"0"} p={"0"}>

            <SimpleGrid columns={{ base: "none", sm: 3, md: 3, lg: 6 }} fontSize={{ base: "13px", md: "14px", lg: "15px" }}  w={"95%"} m={"auto"} boxSizing={"border-box"} gap={"20px"} p={"20px 0px"}>

                <Stack align={'flex-start'} m={"auto"}>
                    <Text mb={"5px"} fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"bold"}>Customer Service</Text>
                    <Link href={'#'}>Contact Us</Link>
                    <Link href={'#'}>Order Status</Link>
                    <Link href={'#'}>Shipping</Link>
                    <Link href={'#'}>Return Policy</Link>
                    <Link href={'#'} textAlign={'left'}>Product Recalls</Link>
                    <Link href={'#'}>Show more</Link>
                </Stack>

                <Stack align={'flex-start'} m={"auto"}>
                    <Text mb={"5px"} fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"bold"}>Stores & Services</Text>
                    <Link href={'#'}>Miro</Link>
                    <Link href={'#'}>Jira</Link>
                    <Link href={'#'}>Clearbit</Link>
                    <Link href={'#'}>Loom</Link>
                    <Link href={'#'}>Formstack</Link>
                    <Link href={'#'}>Show more</Link>
                </Stack>

                <Stack align={'flex-start'} m={"auto"}>
                    <Text mb={"5px"} fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"bold"}>Popular Solutions</Text>
                    <Link href={'#'}>Marketing</Link>
                    <Link href={'#'}>Product Operations</Link>
                    <Link href={'#'}>Human Resources</Link>
                    <Link href={'#'}>Sales</Link>
                    <Link href={'#'}>Operations</Link>
                    <Link href={'#'}>Show more</Link>
                </Stack>

                <Stack align={'flex-start'} m={"auto"}>
                    <Text mb={"5px"} fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"bold"}>Learn More</Text>
                    <Stack direction={'row'} textAlign={'left'} spacing={2}>
                        <Link href={'#'}>Webinars</Link>
                        <Tag
                            size={'sm'}
                            bg={"#cce0fe"}
                            ml={2}
                            color={'#5288e0'}>
                            POPULAR
                        </Tag>
                    </Stack>
                    <Stack direction={'row'} textAlign={'left'} spacing={2} m={"auto"}>
                        <Link href={'#'}>Demos</Link>
                        <Tag
                            size={'sm'}
                            bg={"#d3ebd5"}
                            ml={2}
                            color={'#46806f'}>
                            NEW
                        </Tag>
                    </Stack>
                    <Link href={'#'}>Guides</Link>
                    <Link href={'#'}>Articles</Link>
                    <Link href={'#'}>Community</Link>
                    <Link href={'#'}>Show more</Link>
                </Stack>

                <Stack align={'flex-start'} m={"auto"}>
                    <Text mb={"5px"} fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"bold"}>Company</Text>
                    <Link href={'#'}>About</Link>
                    <Stack direction={'row'} textAlign={'left'} spacing={2}>
                        <Link href={'#'}>Careers</Link>
                        <Tag
                            size={'sm'}
                            bg={"#cce0fe"}
                            ml={2}
                            color={'#5288e0'}>
                            POPULAR
                        </Tag>
                    </Stack>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Status</Link>
                    <Link href={'#'}>Newsroom</Link>
                    <Link href={'#'}>Show more</Link>
                </Stack>

                <Stack align={'flex-start'} m={"auto"} >

                    <Box display={"flex"}
                        alignItems={"flex-start"} flexDir={"column"}>

                        <Input fontSize={"14px"} p={"18px 5px"} w={"90%"} placeholder='Your Email Address' h={"35px"} borderRadius={"5px"} variant='filled' mb={"4px"} />

                        <Button _active={{ backgroundColor: "rgb(48, 104, 207)" }} w={"90%"} bg={"cornflowerblue"} _hover={{ bg: "rgb(10, 73, 190)" }} >
                            <Text color={"white"} fontSize={"14px"}>Subscribe</Text>
                        </Button>
                    </Box>

                    <Text mb={"5px"} fontSize={{ base: "13px", md: "14px", lg: "15px" }} fontWeight={"500"}>Social Media</Text>

                    <Box display={"flex"} alignItems={"flex-start"}>
                        <InstagramIcon sx={{ color: "#ED64A6", fontSize: "20px", cursor: "pointer", marginRight: "10px" }} />
                        <FacebookIcon sx={{ color: "#4299E1", fontSize: "20px", cursor: "pointer", marginRight: "10px" }} />
                        <YouTubeIcon sx={{ color: "#E53E3E", fontSize: "20px", cursor: "pointer", marginRight: "10px" }} />
                        <LinkedInIcon sx={{ color: "#4299E1", fontSize: "20px", cursor: "pointer", marginRight: "10px" }} />
                    </Box>

                    <Text mb={"5px"} fontSize={{ base: "13px", md: "14px", lg: "15px" }} fontWeight={"500"}>Payment Solutions</Text>
                    <HStack>
                        <ShieldIcon sx={{ color: "#48BB78", fontSize: "20px", cursor: "pointer" }} />
                        <Image cursor={"pointer"} w={"40px"} borderRadius={"10px"} src="/Homepage/masterCard.png" />
                        <Image cursor={"pointer"} w={"40px"} borderRadius={"10px"} src="/Homepage/rupay.png" />
                        <Image cursor={"pointer"} w={"40px"} borderRadius={"10px"} src="/Homepage/paypal.png" />

                    </HStack>

                </Stack>

            </SimpleGrid>
            <Footer3/>
        </UnorderedList>
    );
}