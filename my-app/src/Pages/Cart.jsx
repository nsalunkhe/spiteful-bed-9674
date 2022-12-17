import React from 'react'
import { Grid,Box,Button,Heading, GridItem,Flex ,Text} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts,removeItem } from '../Components/Cart/Redux/cart.actions'
import { NavLink } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar"
import MapCartData from '../Components/Cart/mapCartData'




const Cart = () => {




  const cartProducts = useSelector((store)=>(store.cartManager.data))
  // const cart=useSelector((store)=>(store.cartManager.data))
  const dispatch = useDispatch()
  console.log(cartProducts)
  useEffect(()=>{
    dispatch(fetchProducts)

   
  },[])

  const handleRemove=(id)=>{
    dispatch(removeItem(id))
   // fetchProducts(dispatch)
   dispatch(fetchProducts)
  }

  const total= cartProducts.reduce((tot,item)=>{
    return  tot+(item.variant_price*item.qty)
},0)
 
  return (

  <Box>
    <Navbar/>
    <Grid style={{padding:"5%", width:"100%"}}>
        <Flex gap="50px" width="80%" >
          {/* <Text fontSize='2xl' >Your bag is empty</Text>
          <Text>Sign in to see what you may have saved before, or start shopping now!</Text>    */}

           <Box >
              <MapCartData Products={cartProducts} handleRemove={handleRemove}/>
        
            </Box>
        </Flex>  

      </Grid>

      <hr  style={{border:"1px solid gray",margin:"auto",width:"95%"}}/>

      <Flex padding="5%" justifyContent="space-between" width="80%">
        <Box>
          <Text>Accepted Payment Methods</Text>


        </Box>
        <Flex width="50%" justifyContent="space-between">
        <Heading size="md">
        Total Price 
        </Heading>
          
        <Heading size="md">
         ₹ {total}
        </Heading>

       
         
        </Flex>
       
      </Flex>
     
      <Button  size="lg"><NavLink to="/Checkout">Checkout</NavLink></Button>

  </Box>
  )
}

export default Cart