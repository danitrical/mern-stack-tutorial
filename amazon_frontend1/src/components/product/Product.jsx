import React from 'react'
import './Product.css'
const Product = ({ horizontal = false }) => {

  const verticalProduct = () => (
    <div className='product'>
      <img
        src="https://m.media-amazon.com/images/I/51dRGPgTtvL._AC_UF226,226_FMjpg_.png"
        alt="product__image"
        className='productImage'
      />
      <div className="productInfo">
        <span className='productInfoTitle'>Title</span>
        <span className='productInfoPrice'>$ 15.00</span>
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
        <span className='productInfoTitle'>Title</span>
        <span className='productInfoPrice'>$ 15.00</span>
      </div>
      <button className='addToCartButton'>
        Add to Cart
      </button>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/51dRGPgTtvL._AC_UF226,226_FMjpg_.png"
        alt="product__image"
        className='productImageH'
      />
    </div>
  )

  return horizontal ? horizontalProduct() : verticalProduct();
}

export default Product
