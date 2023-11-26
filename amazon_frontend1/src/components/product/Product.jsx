import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider';
import { availableInCart } from '../../helpers';
const Product = ({ data, horizontal = false }) => {
  const [state, dispatch] = useStateValue();
  const { id, name, price, imageUrl} = data;

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      data,
    })
  };
  
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      itemId: id,
    })
  };

  const renderButton = () => availableInCart(state.cart, id)
  ? <button className='removeCartButton' onClick={removeFromBasket}>Remove from Cart</button>
  : <button className='addToCartButton' onClick={addToBasket}>Add to Cart</button>

  console.log(state, 'this is my state')
  const verticalProduct = () => (
    <div className='product'>
      <img
        src={imageUrl}
        alt="product__image"
        className='productImage'
      />
      <div className="productInfo">
        <span className='productInfoTitle'>{name}</span>
        <span className='productInfoPrice'>$ {price}</span>
      </div>
      { renderButton() }
    </div>
  );

  const horizontalProduct = () => (
    <div className="productH">
      <div className="productInfoAndButton">
      <div className="productInfoH">
        <span className='productInfoTitle'>{ name }</span>
        <span className='productInfoPrice'>$ { price }</span>
      </div>
      { renderButton() }
      </div>
      <img
        src={ imageUrl }
        alt="product__image"
        className='productImageH'
      />
    </div>
  )

  return horizontal ? horizontalProduct() : verticalProduct();
}

export default Product
