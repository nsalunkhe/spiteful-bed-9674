import React from 'react'
import { Grid,Box,Button,Heading, GridItem,Flex ,Text} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts,removeItem } from '../Components/Cart/Redux/cart.actions'


import MapCartData from '../Components/Cart/mapCartData'


const Cart = () => {


  const cartProducts = useSelector((store)=>(store.cartManager.data))

  const dispatch = useDispatch()
  console.log(cartProducts)
  useEffect(()=>{
    fetchProducts(dispatch)
   
  },[])
 
  return (

   
    <Grid style={{padding:"5%"}}>
        <Box style={{width:"50%",textAlign:"left"}}>
           <Flex marginBottom="30px">
           <Button  >Shoping Bag</Button>
          <Button  >Save for Later</Button>
            </Flex> 
         
          {/* <Text fontSize='2xl' >Your bag is empty</Text>
          <Text>Sign in to see what you may have saved before, or start shopping now!</Text>    */}

           <Box>
          <MapCartData Products={cartProducts}/>
        
          </Box> 

          
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