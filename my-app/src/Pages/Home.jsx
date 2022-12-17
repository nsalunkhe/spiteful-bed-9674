import { Image } from '@chakra-ui/image'
import { Box, Grid, HStack, Link, Stack, Text, UnorderedList, VStack } from '@chakra-ui/layout'
import React from 'react'
import { BannerCarousel } from '../Components/HomeLayouts/BannerCarousel/BannerCarousel'
import BannerSlider from '../Components/HomeLayouts/BannerSlider'
import { CatelogCarousel } from '../Components/HomeLayouts/CatelogCarousel/CatelogCarousel'
import { Footer } from '../Components/HomeLayouts/Footer'
import { Gift2Carousel } from '../Components/HomeLayouts/Gift2Carousel/Gift2Carousel'
import { Gift3Carousel } from '../Components/HomeLayouts/Gift3Carousel/Gift3Carousel'
import { GiftCarousel } from '../Components/HomeLayouts/GiftCarousel/GiftCarousel'
import { MultiItemCarousel } from '../Components/HomeLayouts/MultiItemCarousel'
import { ProductCarousel } from '../Components/HomeLayouts/ProductCarousel/ProductCarousel'
import { TypeCarousel } from '../Components/HomeLayouts/TypeCarousel/TypeCarousel'

const products = [
  {
    "id": 6937673,
    "title": "IMARA Women Black Solid Top",
    "brand": "IMARA",
    "size": "XL",
    "product_type": "Top",
    "variant_price": 959,
    "variant_mrp": 1599,
    "dominant_material": "Polyester",
    "care_instructions": "Polyester | Dry-clean",
    "actual_color": "Black",
    "dominant_color": "Black",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/88c6ad02-eab9-42c8-8b8e-cbcd8f015d361535627393491-IMARA-Women-Black-Solid-Top-7471535627393374-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/06f7fe3a-08c5-4718-9d5b-d2e82f7806a71535627393473-IMARA-Women-Black-Solid-Top-7471535627393374-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/9f9ad6fe-3260-4bf8-9088-59dd7351a0f41535627393453-IMARA-Women-Black-Solid-Top-7471535627393374-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/8e268984-4d24-4563-b3ee-c2ff0f2c600c1535627393440-IMARA-Women-Black-Solid-Top-7471535627393374-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/bf975857-fee6-4685-9630-ca7cd4f13d631535629577797-IMARA-Women-Black-Solid-Top-81535629577403-5.jpg"
    ],
    "type": "Clothing/Women/Tops/IMARA/More by IMARA",
    "ideal_for": "Women",
    "is_in_stock": "Out of Stock"
  },
  {
    "id": 7441182,
    "title": "House of Pataudi Men Black Printed Straight Kurta",
    "brand": "House of Pataudi",
    "size": "XL",
    "product_type": "Straight Kurta",
    "variant_price": 799,
    "variant_mrp": 1999,
    "dominant_material": "cotton",
    "care_instructions": "100% cottonMachine-wash",
    "actual_color": "Black",
    "dominant_color": "Black",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/7f473119-8e08-4548-b5f3-689c25b698b11541830165496-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/28c93a4d-ff32-4418-a213-d6c8d8ce4a761541830165474-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/d859a4ad-46e8-4a00-8fb0-581ad42371ff1541830165454-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/7441182/2018/11/10/f5427679-c669-42b7-86a1-9aec1d1837f81541830165438-House-of-Pataudi-Men-Black-Printed-Straight-Kurta-3381541830-4.jpg",
      ""
    ],
    "type": "Clothing/Men/Kurtas/House of Pataudi/More by House of Pataudi",
    "ideal_for": "Men",
    "is_in_stock": "In Stock"
  },

  {
    "id": 1314889,
    "title": "Dupatta Bazaar Pink Dupatta",
    "brand": "Dupatta Bazaar",
    "size": "Onesize",
    "product_type": "Dupatta",
    "variant_price": 349,
    "variant_mrp": 499,
    "dominant_material": "Chiffon",
    "care_instructions": "Chiffon | Hand-wash",
    "actual_color": "Pink",
    "dominant_color": "Pink",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070320-Dupatta-Bazaar-Black--Beige-Checked-Dupatta-1961461153069992-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070226-Dupatta-Bazaar-Black--Beige-Checked-Dupatta-1961461153069992-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/1314889/2016/4/20/11461153070149-Dupatta-Bazaar-Black--Beige-Checked-Dupatta-1961461153069992-3.jpg"
    ],
    "type": "Clothing/Women/Dupatta/Dupatta Bazaar/More by Dupatta Bazaar",
    "ideal_for": "Women",
    "is_in_stock": "In Stock"
  },
  {
    "id": 7705322,
    "title": "Manyavar Men Yellow & White Self Design Kurta with Churidar",
    "brand": "Manyavar",
    "size": "S",
    "product_type": "Kurta with Churidar",
    "variant_price": 2999,
    "variant_mrp": 2999,
    "dominant_material": "Silk",
    "care_instructions": "Top fabric: Silk Blend | Bottom fabric: Silk Blend | Dry-clean",
    "actual_color": "Yellow | White",
    "dominant_color": "Yellow",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/7705322/2018/10/29/e9ea701d-93aa-460f-a0dc-e916afdb4f6a1540807741626-Manyavar-Mens-Yellow-Full-Sleeve-Regular-Fit-Banded-Collar-Kurta--Churidar-Set-4991540807741431-1.jpg",
      "",
      "",
      "",
      ""
    ],
    "type": "Clothing/Men/Kurta Sets/Manyavar/More by Manyavar",
    "ideal_for": "Men",
    "is_in_stock": "Out of Stock"
  },

  {
    "id": 7766518,
    "title": "Geroo Women Green cotton hand block print skirt",
    "brand": "Geroo Jaipur",
    "size": "34",
    "product_type": "",
    "variant_price": 1572,
    "variant_mrp": 1850,
    "dominant_material": "",
    "care_instructions": "First wash dry clean than after hand wash",
    "actual_color": "Green",
    "dominant_color": "Green",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/ec7ea490-1f0a-47a2-952d-830bf7db95591542012680302-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/04ad2286-2977-48f4-9d47-df1fe73a84731542012680275-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/523a090a-0e40-4191-8044-0201172066de1542012680248-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/de412e35-424c-45d3-82f1-1d75bb8e321b1542012680224-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/991472fd-1e7b-4539-97d9-3d93953de8a01542012680206-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-5.jpg"
    ],
    "type": "Clothing/Women/Skirts/Geroo Jaipur/More by Geroo Jaipur",
    "ideal_for": "Women",
    "is_in_stock": "Out of Stock"
  },
  {
    "id": 1923426,
    "title": "The Indian Garage Co Men Blue & White Printed A-Line Kurta",
    "brand": "The Indian Garage Co",
    "size": "XL",
    "product_type": "A-Line Kurta",
    "variant_price": 479,
    "variant_mrp": 1199,
    "dominant_material": "Cotton",
    "care_instructions": "Cotton  | Machine-wash",
    "actual_color": "Blue | White",
    "dominant_color": "Blue",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802877-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802858-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802845-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802824-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/1923426/2017/6/21/11498040802800-The-Indian-Garage-Co-Men-Blue--White-Printed-A-Line-Kurta-7691498040798521-5.jpg"
    ],
    "type": "Clothing/Men/Kurtas/The Indian Garage Co/More by The Indian Garage Co",
    "ideal_for": "Men",
    "is_in_stock": "In Stock"
  },
  {
    "id": 6551403,
    "title": "Anouk Women Maroon Solid A-Line Kurta",
    "brand": "Anouk",
    "size": "XS",
    "product_type": "A-Line Kurta",
    "variant_price": 1359,
    "variant_mrp": 3399,
    "dominant_material": "Polyester",
    "care_instructions": "Polyester |  Dry-clean",
    "actual_color": "Maroon",
    "dominant_color": "Maroon",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/1ab6bfba-4825-4e59-ac0e-21e1ebb63aeb1545212392273-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/b3670fb6-a561-40b1-9d69-9493cbbc582c1545212392251-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/848be171-6b6f-41e6-9af8-0409bdb545f31545212392236-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/d3af7853-de3f-406e-a895-c86ca8a5347f1545212392223-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-4.jpg",
      ""
    ],
    "type": "Clothing/Women/Kurtas/Anouk/More by Anouk",
    "ideal_for": "Women",
    "is_in_stock": "In Stock"
  },
  {
    "id": 8389801,
    "title": "SALWAR STUDIO Boys Orange & White Printed Kurta with Pyjamas",
    "brand": "SALWAR STUDIO",
    "size": "3-4Y",
    "product_type": "Kurta with Pyjamas",
    "variant_price": 586,
    "variant_mrp": 1955,
    "dominant_material": "Cotton",
    "care_instructions": "Top fabric: Pure Cotton | Bottom fabric: Pure Cotton | Hand-wash",
    "actual_color": "White | Orange",
    "dominant_color": "Orange",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/524faa41-cecd-48b9-bfcf-f92b696e80581546592411715-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/0c80d05b-9e7e-4622-ab41-8a898caa906e1546592411750-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/6171830a-5f9c-4488-9d53-d8f34b002bce1546592411790-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/1/4/af14cc98-060c-4a8d-8ebc-f688d58662dd1546592411828-4.jpg",
      ""
    ],
    "type": "Clothing/Boys/Kurta Sets/SALWAR STUDIO/More by SALWAR STUDIO",
    "ideal_for": "Boys",
    "is_in_stock": "Out of Stock"
  },
  {
    "id": 9791991,
    "title": "Clora Creation Women Navy Blue Wide Leg Printed Palazzos",
    "brand": "Clora Creation",
    "size": "40",
    "product_type": "Printed Palazzos",
    "variant_price": 979,
    "variant_mrp": 1399,
    "dominant_material": "Viscose Rayon",
    "care_instructions": "Viscose Rayon | Hand-wash",
    "actual_color": "Blue | Navy",
    "dominant_color": "Navy",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cd9e6d5d-50cf-4188-b229-8b890c4210ae1558658750484-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/2e63922a-1ba1-41d1-a3e0-c698eef586fe1558658750516-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cb471a2d-c834-4178-ad78-28b99e4047261558658750548-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/97b1c435-8469-480e-bbf3-ec88d69734a81558658750576-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/1c7ad837-82e0-47e7-90fd-e6a60f586f161558658750603-5.jpg"
    ],
    "type": "Clothing/Women/Palazzos/Clora Creation/More by Clora Creation",
    "ideal_for": "Women",
    "is_in_stock": "Out of Stock"
  },
  {
    "id": 7098789,
    "title": "Libas Women Blue & White Striped Straight Kurta",
    "brand": "Libas",
    "size": "S",
    "product_type": "Straight Kurta",
    "variant_price": 519,
    "variant_mrp": 1299,
    "dominant_material": "Rayon",
    "care_instructions": "Rayon | Hand-wash",
    "actual_color": "Blue | White",
    "dominant_color": "Blue",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/dad722b8-f2c0-4e7e-aa5f-a3814856f8581534741627049-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/239210d3-5481-48a9-94b4-c52b84c915411534741627030-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/b433c95b-02df-4729-85d6-450f8a72c34e1534741627003-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/d0e224aa-9a05-429e-a699-d19e5e16e4d01534741626984-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/9b50c872-e850-4523-ba8f-8bab4b8e4c291534741626965-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-5.jpg"
    ],
    "type": "Clothing/Women/Kurtas/Libas/More by Libas",
    "ideal_for": "Women",
    "is_in_stock": "In Stock"
  },
  {
    "id": 7098851,
    "title": "Libas Women Coffee Brown Solid Kurta with Palazzos",
    "brand": "Libas",
    "size": "M",
    "product_type": "Kurta with Palazzos",
    "variant_price": 1119,
    "variant_mrp": 2799,
    "dominant_material": "Silk",
    "care_instructions": "Top fabric: Tussar Silk | Bottom fabric: Tussar Silk | Hand-wash",
    "actual_color": "Brown | Coffee Brown",
    "dominant_color": "Coffee Brown",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/8728af1c-969f-445c-b12d-12b6c3fb589e1534495475899-Libas-Women-Kurta-Sets-1471534495475783-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/be3fd714-e82a-472c-94b3-3481576f8d3d1534495475880-Libas-Women-Kurta-Sets-1471534495475783-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/dfc51022-ea2a-4732-aaee-a5cc34560cf01534495475862-Libas-Women-Kurta-Sets-1471534495475783-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/27d1a787-4ba5-40c9-a132-1ed8624c8d081534495475843-Libas-Women-Kurta-Sets-1471534495475783-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/7098851/2018/8/17/86e5b9d0-2843-4250-be39-f6ebb54244001534495475918-Libas-Women-Kurta-Sets-1471534495475783-5.jpg"
    ],
    "type": "Clothing/Women/Kurta Sets/Libas/More by Libas",
    "ideal_for": "Women",
    "is_in_stock": "Out of Stock"
  },
  {
    "id": 1681450,
    "title": "Anouk Women Navy Printed Straight Kurta",
    "brand": "Anouk",
    "size": "XL",
    "product_type": "Straight Kurta",
    "variant_price": 1099,
    "variant_mrp": 1099,
    "dominant_material": "viscose",
    "care_instructions": "100% viscose  Machine-wash",
    "actual_color": "Navy",
    "dominant_color": "Navy",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674302-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674283-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674263-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/1681450/2017/1/27/11485516674223-Anouk-Women-Navy-Blue-Printed-Straight-Kurta-361485516674086-4.jpg",
      ""
    ],
    "type": "Clothing/Women/Kurtas/Anouk/More by Anouk",
    "ideal_for": "Women",
    "is_in_stock": "Out of Stock"
  },
  {
    "id": 1849998,
    "title": "Global Desi White Net Sheer Shrug",
    "brand": "Global Desi",
    "size": "XS",
    "product_type": "Shrug",
    "variant_price": 719,
    "variant_mrp": 2399,
    "dominant_material": "cotton",
    "care_instructions": "80% cotton, 20% nylon | Hand-wash",
    "actual_color": "White",
    "dominant_color": "White",
    "images": [
      "http://assets.myntassets.com/v1/assets/images/1849998/2017/4/25/11493122405274-Global-Desi-White-Net-Shrug-7561493122405086-1.jpg",
      "http://assets.myntassets.com/v1/assets/images/1849998/2017/4/25/11493122405244-Global-Desi-White-Net-Shrug-7561493122405086-2.jpg",
      "http://assets.myntassets.com/v1/assets/images/1849998/2017/4/25/11493122405216-Global-Desi-White-Net-Shrug-7561493122405086-3.jpg",
      "http://assets.myntassets.com/v1/assets/images/1849998/2017/4/25/11493122405184-Global-Desi-White-Net-Shrug-7561493122405086-4.jpg",
      "http://assets.myntassets.com/v1/assets/images/1849998/2017/4/25/11493122405147-Global-Desi-White-Net-Shrug-7561493122405086-5.jpg"
    ],
    "type": "Clothing/Women/Shrug/Global Desi/More by Global Desi",
    "ideal_for": "Women",
    "is_in_stock": "Out of Stock"
  }
];


const Gifts1 = [
  { image: "/Homepage/gift1.PNG", title: "Our Editor's Guide to Dressing for the Holidays", links: "Read More" },
  { image: "/Homepage/gift2.PNG", title: "Holiday Gifts from Black-Owned Brands to Buy Now", links: "Read More" },
  { image: "/Homepage/gift3.PNG", title: "Holiday Tradition & Nostalgia with Leslie Odom Jr. & Family", links: "Read More" }
];

const Gifts2 = [
  { image: "/Homepage/gift4.PNG", title: "The Gift of Choice", description: "Get them what they really want with a Nordstrom Gift Card.", links: ["Gift Cards & eGift Cards"] },
  { image: "/Homepage/gift5.PNG", title: "Gift Wrapping", description: "We make it easy with festive options. Shop in store or online to see your choices.", links: ["Learn More"] },
  { image: "/Homepage/gift6.PNG", title: "Make Memories Together", description: "Festivities are in full swing with events like Santa Greetings, Holiday Breakfasts, Letters to Santa, virtual livestreams and more.", links: ["Explore Events"] },
  { image: "/Homepage/gift7.PNG", title: "Free Style Help—in Stores or Online", description: "Get festive fashion advice from our stylists.", links: ["Learn More", "Book an Appointment"] }
];

const type = [
  { image: "/Homepage/type1.PNG", type: "Women" },
  { image: "/Homepage/type2.PNG", type: "Men" },
  { image: "/Homepage/type3.PNG", type: "Kids" },
  { image: "/Homepage/type4.PNG", type: "Home" },
  { image: "/Homepage/type5.PNG", type: "Beauty & Fragrance" },
  { image: "/Homepage/type6.PNG", type: "Designer" }
];

const Gifts3 = [
  { image: "/Homepage/gift8.PNG", type: "Stocking Stuffers" },
  { image: "/Homepage/gift9.PNG", type: "Under $50" },
  { image: "/Homepage/gift10.PNG", type: "Under $100" },
  { image: "/Homepage/gift11.PNG", type: "Luxe Gifts" },
  { image: "/Homepage/gift12.PNG", type: "All Gifts" }
];

const Home = () => {

  return (
    <Box w={"100%"}>
      <UnorderedList m={"30px auto"} w={"95%"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

        <HStack w={"100%"} justify={"space-between"} align={"flex-start"}>

          <Image pt={"5px"} src={"/Homepage/line1.png"} w={{ base: "none", sm: "200px", md: "250px", lg: "300px" }} alt={"line1"} />
          <VStack>
            <Text fontSize={{ base: "none", sm: "16px", md: "18px", lg: "20px" }} fontWeight={"bold"} >Shop what you love faster and easier.</Text>
            <Link fontWeight={"500"} fontSize={{ base: "none", sm: "13px", md: "13px", lg: "14px" }} textDecor={"underline"}>Sign In or Create an Account</Link>
          </VStack>
          <Image pt={"5px"} src={"/Homepage/line2.png"} w={{ base: "none", sm: "200px", md: "250px", lg: "300px" }} alt={"line2"} />

        </HStack>

      </UnorderedList>

      <UnorderedList
        display={{ base: "none", sm: "block", md: "block", lg: "block" }}
        zIndex={"-99"}
        margin={"auto"}
        width={"100%"}
        mb={"50px"}>
        <BannerCarousel />
      </UnorderedList>


      <UnorderedList
        display={{ base: "block", sm: "none", md: "none", lg: "none" }}
        zIndex={"-99"}
        margin={"auto"}
        width={"100%"}
        mb={"50px"}>
        <MultiItemCarousel />
      </UnorderedList>

      <UnorderedList display={{ base: "none", sm: "block", md: "block", lg: "block" }} m={"50px auto 70px auto"} w={"95%"} >
        <Image src={"/Homepage/bannerCard.PNG"} w={"100%"} alt={"banner"} />
      </UnorderedList>

      <UnorderedList display={{ base: "block", sm: "none", md: "none", lg: "none" }} m={"50px auto 70px auto"} w={"95%"} >
        <Image src={"/Homepage/img8.jpg"} alt={"banner"} />
      </UnorderedList>

      <ProductCarousel data={products} boolean={true} />

      <UnorderedList m={"50px auto 70px auto"} w={"95%"} fontSize={{ base: "13px", sm: "13px", md: "14px", lg: "14px" }} bg={"#3441b6"} color={"white"}>
        <VStack p={{ base: "10px", sm: "10px", md: "15px", lg: "30px" }}>
          <Text fontWeight={"bold"} fontSize={{ base: "14px", sm: "14px", md: "18px", lg: "20px" }}>Get It in Time for Christmas</Text>
          <Text>LAST CHANCE for FREE standard shipping! Order by 8pm ET on December 17.</Text>
          <HStack textDecor={"underline"}>
            <Link>GiftseGift</Link>
            <Link>Cards</Link>
            <Link>Learn More</Link>
          </HStack>
        </VStack>
      </UnorderedList>

      <UnorderedList m={"50px auto"} w={"95%"}>
        <Image src={"/Homepage/fullLine.PNG"} alt={"line"} />
        <Text m={"30px auto"} letterSpacing={"3px"} fontWeight={"500"} fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>GIFTS BY PRICE</Text>
      </UnorderedList>

      <Gift3Carousel Gifts={Gifts3} />

      <UnorderedList m={"70px auto"} w={"95%"} fontSize={{ base: "13px", sm: "13px", md: "14px", lg: "14px" }} bg={"#fe3b1f"} color={"white"}>
        <VStack p={{ base: "10px", sm: "10px", md: "15px", lg: "30px" }}>
          <Text letterSpacing={"3px"} fontWeight={"bolder"} fontSize={{ base: "16px", sm: "20px", md: "25px", lg: "30px" }}>DESIGNER CLEARANCE</Text>
          <Text letterSpacing={"3px"} fontWeight={"bold"} fontSize={{ base: "14px", sm: "16px", md: "20px", lg: "25px" }}>UPTO 60% OFF</Text>
          <HStack>
            <Text>Save on the best brands and styles.</Text>
            <Link textDecor={"underline"}>Designer Sale</Link>
          </HStack>
        </VStack>
      </UnorderedList>

      <UnorderedList m={"50px auto"} w={"95%"}>
        <Image src={"/Homepage/fullLine.PNG"} alt={"line"} />
        <Text m={"30px auto"} letterSpacing={"3px"} fontWeight={"500"} fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>TRENDING NOW</Text>
      </UnorderedList>

      <CatelogCarousel />

      <Box w={"95%"} textAlign={"left"} m={"auto"}>
        <Text fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "23px" }} fontWeight={"500"} textAlign={"left"}>Great deals for holiday shopping</Text>
        <Text fontSize={"14px"} textAlign={"left"}>Items similar to what you've browsed are on sale</Text>
      </Box>

      <ProductCarousel data={products} boolean={false} />

      <UnorderedList m={"50px auto"} w={"95%"} fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px" }}>
        <Image src={"/Homepage/fullLine.PNG"} alt={"line"} />
        <Text m={"30px auto 0px auto"} letterSpacing={"3px"} fontWeight={"500"} fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>THE THREAD</Text>
        <Text mb={"10px"}>Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</Text>
        <Link textDecor={"underline"}>Get Inspired</Link>
      </UnorderedList>

      <GiftCarousel Gifts={Gifts1} />

      <Box w={"95%"} textAlign={"left"} m={"auto"}>
        <Text fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "23px" }} fontWeight={"500"} textAlign={"left"}>Holiday Ideas From Brands You Like</Text>
      </Box>

      <ProductCarousel data={products} boolean={false} />

      <UnorderedList m={"50px auto"} w={"95%"}>
        <Image src={"/Homepage/fullLine.PNG"} alt={"line"} />
        <Text m={"30px auto"} letterSpacing={"3px"} fontWeight={"500"} fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>SERVICES & EVENTS</Text>
      </UnorderedList>

      <Gift2Carousel Gifts={Gifts2} />

      <UnorderedList m={"0px auto 70px auto"} w={"95%"}>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 40% 60%)", lg: "repeat(2, 40% 60%)" }} bg={"black"} color={"white"}>

          <Box>
            <Image src={"/Homepage/img21.webp"} w={"100%"} alt={"banner"} />
          </Box>

          <Stack flexDir={"column"} justify={"center"} align={"center"} textAlign={"left"} p={{ base: "20px 10px", sm: "10px", md: "0 0 0 20px", lg: "0 0 0 40px" }} fontSize={{ base: "14px", sm: "12px", md: "13px", lg: "15px" }} w={"100%"}>
            <Box w={"100%"} fontSize={{ base: "14px", sm: "14px", md: "14px", lg: "18px" }}>
              <Text fontSize={{ base: "15px", sm: "17px", md: "15px", lg: "18px" }} fontWeight={"bold"} textAlign={"left"}>New Episodes Every Other Week</Text>
              <Text textAlign={"left"}>Go behind the scenes of Nordstrom with Pete Nordstrom and special guests. </Text>
              <Link textDecor={"underline"}>Learn More.</Link>

            </Box>

          </Stack>

        </Grid>
      </UnorderedList>

      <UnorderedList m={"40px auto 20px auto"} w={"95%"}>
        <Image src={"/Homepage/fullLine.PNG"} alt={"line"} />
        <Text m={"30px auto"} letterSpacing={"3px"} fontWeight={"500"} fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>SHOP BY CATEGORY</Text>
      </UnorderedList>

      <TypeCarousel Types={type} />

      <Box w={"95%"} textAlign={"left"} m={"auto"}>
        <Text fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "23px" }} fontWeight={"500"} textAlign={"left"}>Trending near you</Text>
        <Text fontSize={"14px"} textAlign={"left"}>The Most-viewed Items by Shoppers in Your Area</Text>
      </Box>

      <ProductCarousel data={products} boolean={false} />

      <Footer />
    </Box>
  )
}

export default Home