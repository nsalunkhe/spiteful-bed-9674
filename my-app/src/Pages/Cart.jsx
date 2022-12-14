import React from 'react'
import { Grid,Box,Button,Heading, GridItem,Flex ,Text} from '@chakra-ui/react'

const Cart = () => {
    let activeStyle = 
    { color: 'black',
     
     textDecorationLine:"none",
     cursor:"pointer",
     backgroundColor:"grey"
     
 
 }
   
   let normalStyle = { 
    color: 'black',
     
     textDecorationLine:"none",
     cursor:"pointer",
    
   } 

   //style={({ isActive }) => (isActive ?activeStyle :normalStyle )}

  return (
    <Grid style={{padding:"5%"}}>
        <Box style={{width:"50%",textAlign:"left"}}>
           <Flex marginBottom="30px">
           <Button  >Shoping Bag</Button>
          <Button  >Save for Later</Button>
            </Flex> 
         
          <Text fontSize='2xl' >Your bag is empty</Text>
          <Text>Sign in to see what you may have saved before, or start shopping now!</Text>   

          
        <Button
         w={'full'}
         maxW={'md'}
        height='48px'
        marginTop="30px"
        backgroundColor="black"
        marginBottom="20px"
        color="white"
        fontSize="md"
        >
         Sign In
        </Button> 

        <Text color="gray.500">Accepted Payment Methods</Text>
        </Box>  

       
            
       

    </Grid>
  )
}

export default Cart