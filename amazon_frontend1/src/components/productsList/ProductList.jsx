import React from 'react'
import Product from '../product/Product'
import './ProductList.css';

const ProductList = () => {
  return (
    <>
    <div className='productList'>
      <Product horizontal />
      <Product horizontal />
      <Product horizontal />
      <Product horizontal />
    </div>
    <div className='productList'>
      <Product />
      <Product />
    </div>
    <div className='productList'>
      <Product />
    </div>
    </>
  )
}

export default ProductList
