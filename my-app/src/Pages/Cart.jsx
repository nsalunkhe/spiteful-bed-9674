import React from 'react'
import { Grid,Box,Button,Heading, GridItem,Flex ,Text} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts,removeItem } from '../Components/Cart/Redux/cart.actions'
import MapCartData from '../Components/Cart/mapCartData'



const Cart = () => {


  const cartProducts = useSelector((store)=>(store.cartManager.data))
  // const cart=useSelector((store)=>(store.cartManager.data))
  const dispatch = useDispatch()
  console.log(cartProducts)
  useEffect(()=>{
    fetchProducts(dispatch)
   
  },[])
 
  return (

   <Box>
    <Grid style={{padding:"5%", width:"100%"}}>
        <Box width="80%" >
           <Flex marginBottom="30px">
           <Button  >Shoping Bag</Button>
          <Button  >Save for Later</Button>
            </Flex> 
         
          {/* <Text fontSize='2xl' >Your bag is empty</Text>
          <Text>Sign in to see what you may have saved before, or start shopping now!</Text>    */}

           <Box  width="60%">
              <MapCartData Products={cartProducts}/>
        
            </Box> 

         
       
        </Box>  

      

       
       
       

    </Grid>

     

      

        

    </Box>
  )
}

export default Cart