import axios from "axios"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./products.action.types"

export const getProductsData = async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let  responce =  await axios('http://localhost:8080/Products')
        console.log(responce.data)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:responce.data})
    }catch(error){
        dispatch({type:GET_PRODUCTS_ERROR,payload:error.message})
    }
       
} 