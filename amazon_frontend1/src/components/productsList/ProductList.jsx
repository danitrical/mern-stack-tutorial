import React from 'react'
import Product from '../product/Product'
import './ProductList.css';

const ProductList = ({ data, isHorzontal, direction }) => {

  const listDirection = direction === 'vertical' ? 'verticalList' : ''
  return (
    <>
    <div className={'productList ' + listDirection}>
      {
        data.map((product) => <Product data={product} horizontal= {isHorzontal}/>)
      }
    </div>
    </>
  )
}

export default ProductList
