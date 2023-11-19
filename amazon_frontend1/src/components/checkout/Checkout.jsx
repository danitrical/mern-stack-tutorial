import React from 'react'
import './Checkout.css'
import Subtotal from './subtotal/Subtotal'
import ProductList from '../productsList/ProductList'
import { PRODUCTS_DATA_3 } from '../../constants/PRODUCT_DUMP'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkoutLeft">
          <h2 className='checkoutTitle'>
            Your Shopping Cart
          </h2>
          <div className='cartProductList'>
            <ProductList data={PRODUCTS_DATA_3} isHorzontal direction={'vertical'}/>
          </div>
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
