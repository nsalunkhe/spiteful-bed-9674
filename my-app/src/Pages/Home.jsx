import { Image } from "@chakra-ui/image";
import {
  Box,
  HStack,
  Link,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import BannerSlider from "../Components/HomeLayouts/BannerSlider";
import { Footer } from "../Components/HomeLayouts/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box w={"100%"}>
        <UnorderedList
          m={"30px auto"}
          w={"95%"}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          <HStack w={"100%"} justify={"space-between"} align={"flex-start"}>
            <Image
              pt={"5px"}
              src={"/Homepage/line1.png"}
              w={{ base: "none", sm: "200px", md: "250px", lg: "300px" }}
              alt={"line1"}
            />
            <VStack>
              <Text
                fontSize={{ base: "none", sm: "16px", md: "18px", lg: "20px" }}
                fontWeight={"bold"}
              >
                Shop what you love faster and easier.
              </Text>
              <Link
                fontWeight={"500"}
                fontSize={{ base: "none", sm: "13px", md: "13px", lg: "14px" }}
                textDecor={"underline"}
              >
                Sign In or Create an Account
              </Link>
            </VStack>
            <Image
              pt={"5px"}
              src={"/Homepage/line2.png"}
              w={{ base: "none", sm: "200px", md: "250px", lg: "300px" }}
              alt={"line2"}
            />
          </HStack>
        </UnorderedList>

        <BannerSlider />

        <Footer />
      </Box>
    </>
  );
};

export default Home;
