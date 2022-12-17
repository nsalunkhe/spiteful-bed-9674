import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterProductsButtons from '../Components/Products/filterProductsButtons'
import MapData from '../Components/Products/mapData'
import { getProductsData } from '../Components/Products/redux/products.action'

const Products = () => {
  const [data,setData] = useState([])
  const Products = useSelector((store)=>(store.productsManager.data))
  const dispatch = useDispatch()
  console.log(Products)

  const filtMen =()=>{
    setData(Products.filter((prod)=>{if(prod.ideal_for==="Men")return prod}))
  } 
  const filtWomen =()=>{
    setData(Products.filter((prod)=>{if(prod.ideal_for==="Women")return prod}))
  }
  const sizeS =()=>{
    setData(Products.filter((prod)=>{if(prod.size==="S")return prod}))
  }
  const sizeM =()=>{
    setData(Products.filter((prod)=>{if(prod.size==="M")return prod}))
  }
  const colorBlue =()=>{
    setData(Products.filter((prod)=>{if(prod.actual_color==="Blue")return prod}))
  }
  const colorRed =()=>{
    setData(Products.filter((prod)=>{if(prod.actual_color==="Red")return prod}))
  }
  const colorPink =()=>{
    setData(Products.filter((prod)=>{if(prod.actual_color==="Pink")return prod}))
  }
  console.log(filtMen)
  useEffect(()=>{
    getProductsData(dispatch)
  },[])
  return (
    <Box marginTop="30px">
      
      <Box display="flex">
        <FilterProductsButtons filtMen={filtMen} filtWomen={filtWomen} sizeS={sizeS} sizeM={sizeM} colorBlue={colorBlue} colorRed={colorRed} colorPink={colorPink} setData={setData}/>
        <MapData Products={Products} data={data} />
      </Box>


    </Box>
  )
}

export default Products