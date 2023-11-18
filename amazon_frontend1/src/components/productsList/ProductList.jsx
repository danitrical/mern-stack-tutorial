import React from 'react'
import Product from '../product/Product'
import './ProductList.css';

const ProductList = () => {
  return (
    <div className='productList'>
      <Product horizontal />
      <Product horizontal />
      <Product horizontal />
      <Product horizontal />
      <Product horizontal />
      <Product horizontal />
    </div>
  )
}

export default ProductList
