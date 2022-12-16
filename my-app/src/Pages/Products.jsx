import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MapData from '../Components/Products/mapData'
import { getProductsData } from '../Components/Products/redux/products.action'

const Products = () => {
  const [data,setdata] = useState([])
  const Products = useSelector((store)=>(store.productsManager.data))
  const dispatch = useDispatch()
  console.log(Products)

  // const filtMen =()=>{
  //   setData(Products.map((prod)=>prod.ideal_for==="Men"))
  // } 
  // console.log(filtMen)
  useEffect(()=>{
    getProductsData(dispatch)
  },[])
  return (
    <div>
      <h1>PRODUCTS</h1>
      <MapData Products={Products}/>


    </div>
  )
}

export default Products