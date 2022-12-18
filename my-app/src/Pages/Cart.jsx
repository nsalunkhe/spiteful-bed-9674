import React from 'react'
import { Grid,Box,Button,Heading, GridItem,Flex ,Text,  UnorderedList,} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts,removeItem } from '../Components/Cart/Redux/cart.actions'

import { NavLink } from 'react-router-dom'
import MapCartData from '../Components/Cart/mapCartData'
import Navbar from "../Components/Navbar/Navbar"




function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode,
}) {
  const total = subTotal - discount + tax;

  return (
    <section className="container">
      <Box>
        <ul>
          <li>
            Subtotal <span style={{fontWeight:"bold",marginLeft:"30px"}}>₹{subTotal}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span style={{fontWeight:"bold",marginLeft:"30px"}}>₹{discount}</span>
            </li>
          )}

          <li>
            Tax<span style={{fontWeight:"bold",marginLeft:"30px"}}>{tax}%</span>
          </li>
          <li className="total">
            Total <span style={{fontWeight:"bold",marginLeft:"30px"}}>₹{total}</span>
          </li>
        </ul>

        <Flex>
          <Input
            placeholder="Apply Promocode"
            type="text"
            onChange={onEnterPromoCode}
          />
          <Button onClick={checkPromoCode}>Apply</Button>
        </Flex>
      </Box>
    </section>
  );
}

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
       <Box    m={"30px auto"}
          w={"95%"}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }} >
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
    </Box>
  )
}
export default Cart
