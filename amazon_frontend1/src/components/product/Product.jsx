import React from 'react'
import './Product.css'
const Product = ({ data, horizontal = false }) => {

  const { title, price, image} = data;
  const verticalProduct = () => (
    <div className='product'>
      <img
        src={image}
        alt="product__image"
        className='productImage'
      />
      <div className="productInfo">
        <span className='productInfoTitle'>{title}</span>
        <span className='productInfoPrice'>$ {price}</span>
      </div>
      <button className='addToCartButton'>
        Add to Cart
      </button>
    </div>
  );

  const horizontalProduct = () => (
    <div className="productH">
      <div className="productInfoAndButton">
      <div className="productInfoH">
        <span className='productInfoTitle'>{ title }</span>
        <span className='productInfoPrice'>$ { price }</span>
      </div>
      <button className='addToCartButton'>
        Add to Cart
      </button>
      </div>
      <img
        src={ image }
        alt="product__image"
        className='productImageH'
      />
    </div>
  )

  return horizontal ? horizontalProduct() : verticalProduct();
}

export default Product
