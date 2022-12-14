import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MapData from '../Components/Products/mapData'
import { getProductsData } from '../Components/Products/redux/products.action'

const Products = () => {
  const Products = useSelector((store)=>(store.productsManager.data))
  const dispatch = useDispatch()
  console.log(Products)
  useEffect(()=>{
    getProductsData(dispatch)
  },[])
  return (
    <div>
      <h1>PRODUCTS</h1>
      <MapData {...Products}/>


    </div>
  )
}

export default Products