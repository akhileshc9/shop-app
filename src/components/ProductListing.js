import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { fetchProducts, setProducts } from '../redux/actions/productActions'

function ProductListing(props) {
    const data = useSelector(state=>state.allproducts)
    const dispatch = useDispatch()
    /* const loadProducts = async()=>{
      const response = await axios.get('https://fakestoreapi.com/products')
      dispatch(setProducts(response.data))
    } */
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

    console.log(data)
  return (
    <div className='ui grid container'>
      <h3>Product Listing</h3>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
