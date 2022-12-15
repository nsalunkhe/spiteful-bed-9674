import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';

const banner1 = "/Homepage/img6.png"
const banner2 = "/Homepage/img7.png"

const Prev = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <>
      <Box zIndex={"10"} position={"absolute"} top={"32%"} left={"0px"} onClick={onClick}>
        <ChevronLeftIcon boxSize={10} color={"#3f4246"} />
      </Box>
    </>
  );
};

const Next = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <>
      <Box zIndex={"10"} position={"absolute"} top={"32%"} right={"0px"} onClick={onClick}>
        <ChevronRightIcon boxSize={10} color={"#3f4246"} />
      </Box>
    </>
  );
};


export const MultiItemCarousel = ({ data = [] }) => {
  return (
    <Box w={"100%"} position={"relative"}>

      <Slider prevArrow={<Prev />} nextArrow={<Next />} slidesToShow={1} slidesToScroll={1} >

        <VStack lineHeight={"15px"} m={"auto"} w={"90%"}>
          <img src={banner1} width={"100%"} alt={"banner1"} />
          <Text pb={"5px"} fontSize={"20px"} fontWeight={"bold"} >Last-Minute Gifts</Text>
          <Text>Just what they wanted, just in time. Need it now?</Text>
          <Text>Buy online and pick up the same day in store.</Text>
          <HStack pt={"10px"} fontWeight={"500"} fontSize={"14px"} align={"center"} justify={"center"}>
            <Link textDecor={"underline"}>Stocking Stuffers</Link>
            <Link textDecor={"underline"}>Last-Minute Gifts</Link>
            <Link textDecor={"underline"}>Gift Cards</Link>
          </HStack>
        </VStack>

        <VStack m={"auto"} w={"90%"}>
          <img src={banner2} width={"100%"} alt={"banner2"} />
          <Text pb={"5px"} fontSize={"20px"} fontWeight={"500"}>Hurry! Prices May Change</Text>
          <Link fontWeight={"500"} fontSize={"14px"} textDecor={"underline"}>Limited-Time Sale</Link>
        </VStack>

      </Slider>
    </Box>
  );
};