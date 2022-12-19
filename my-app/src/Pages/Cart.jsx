import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  Heading,
  GridItem,
  Flex,
  Text,
  UnorderedList,
  Input,
  Image,
  useToast
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  removeItem,
} from "../Components/Cart/Redux/cart.actions";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import MapCartData from "../Components/Cart/mapCartData";
import Discount from "./Discount.jpg";
import payimg from "./payimg.png"




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
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  const toast=useToast()
  const cartProducts = useSelector((store) => store.cartManager.data);
  const dispatch = useDispatch();
  const [boolean,setBoolean] = useState(false)
  console.log(cartProducts);
  useEffect(() => {
    dispatch(fetchProducts);

  }, [boolean]);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    
    setBoolean(!boolean)
  };

  const subTotal = cartProducts.reduce((tot, item) => {
    return tot + item.variant_price * item.qty;
  }, 0);

  const discount = (subTotal * discountPercent) / 100;

  const PROMOTIONS = [
    {
      code: "MASAI50",
      discount: "50%",
    },
    {
      code: "MASAI40",
      discount: "40%",
    },
    {
      code: "MASAI30",
      discount: "30%",
    },
  ];

  const TAX = 5;

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }

    toast({
      title: 'Coupon Not Valid.',
      description: "Please enter valide coupon code",
      status: "error",
      duration: 2000,
      isClosable: true,
      position:"top"
    });
  };

  return (
    <Box>
      <Navbar />

      <Grid width="100%" border="1px solid" padding="5%" margin="auto">
        <Flex
          width="100%"
          gap="50px"
          margin="auto"
          justifyContent="space-between"
        >
          {/* <Text fontSize='2xl' >Your bag is empty</Text>
          <Text>Sign in to see what you may have saved before, or start shopping now!</Text>    */}

          <Box>
            <MapCartData Products={cartProducts} handleRemove={handleRemove} />
          </Box>

          <Image width="30%"  src={Discount} />
        </Flex>
      </Grid>

      <hr style={{ border: "1px solid gray", margin: "auto", width: "95%" }} />

      <Flex padding="5%" justifyContent="space-between" width="100%">
        <Box>
          <Text textAlign="left">Accepted Payment Methods</Text>
          <Image width="30%" src={payimg}/>
          <Text textAlign="left">Need help? Call 1.888.282.6060 or chat with us</Text>
          <Text textAlign="left">Shipping internationally?</Text>
        </Box>
        <Box>
          <Heading size={"md"}>Order Summary</Heading>

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
          <Button width="100%" marginTop="30px" backgroundColor="black" color="white">
            <NavLink to="/Checkout">Checkout</NavLink>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
