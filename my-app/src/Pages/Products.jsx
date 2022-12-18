import { Box, Grid, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import FilterProductsButtons from '../Components/Products/filterProductsButtons'
import MapData from '../Components/Products/mapData'
import { getProductsData } from '../Components/Products/redux/products.action'
import Sliderr from '../Components/Slider'

const Products = () => {
  const [data, setData] = useState([])
  const Products = useSelector((store) => (store.productsManager.data))
  const dispatch = useDispatch()
  console.log(Products)

  const filtMen = () => {
    setData(Products.filter((prod) => { if (prod.ideal_for === "Men") return prod }))
  }
  const filtWomen = () => {
    setData(Products.filter((prod) => { if (prod.ideal_for === "Women") return prod }))
  }
  const sizeS = () => {
    setData(Products.filter((prod) => { if (prod.size === "S") return prod }))
  }
  const sizeM = () => {
    setData(Products.filter((prod) => { if (prod.size === "M") return prod }))
  }
  const colorBlue = () => {
    setData(Products.filter((prod) => { if (prod.actual_color === "Blue") return prod }))
  }
  const colorRed = () => {
    setData(Products.filter((prod) => { if (prod.actual_color === "Red") return prod }))
  }
  const colorPink = () => {
    setData(Products.filter((prod) => { if (prod.actual_color === "Pink") return prod }))
  }
  console.log(filtMen)
  useEffect(() => {
    getProductsData(dispatch)
  }, [])
  return (
    <Box marginTop="30px">

      <Grid templateColumns={{ base: "repeat(1, 100%)", sm: "repeat(1, 100%)", md: "repeat(2, 20% 80%)", lg: "repeat(2, 15% 85%)" }}>

        <UnorderedList display={{ base: "block", sm: "block", md: "none", lg: "none" }} position={"sticky"} top={"0px"}>

          <Sliderr filtMen={filtMen} filtWomen={filtWomen} sizeS={sizeS} sizeM={sizeM} colorBlue={colorBlue} colorRed={colorRed} colorPink={colorPink} setData={setData} />

        </UnorderedList>

        <UnorderedList display={{ base: "none", sm: "none", md: "block", lg: "block" }}>

          <Box position={"fixed"} left={"0"} pl={"10px"}>
            <FilterProductsButtons filtMen={filtMen} filtWomen={filtWomen} sizeS={sizeS} sizeM={sizeM} colorBlue={colorBlue} colorRed={colorRed} colorPink={colorPink} setData={setData} />

          </Box>

        </UnorderedList>

        <Box>
          <MapData Products={Products} data={data} />
        </Box>

      </Grid>


    </Box>
  )
}

export default Products