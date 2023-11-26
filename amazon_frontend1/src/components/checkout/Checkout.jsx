import React from 'react'
import './Checkout.css'
import Subtotal from './subtotal/Subtotal'
import ProductList from '../productsList/ProductList'
import { useStateValue } from '../../StateProvider'
import PlaceOrderForm from './placeOrderForm/PlaceOrderForm'

const Checkout = () => {
  const [{cart}] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkoutLeft">
          <h2 className='checkoutTitle'>
            Your Shopping Cart
          </h2>
          <div className='cartProductList'>
            <ProductList data={cart} isHorzontal direction={'vertical'}/>
          </div>
      </div>
      <div className="checkoutRight">
        { cart?.length ? <PlaceOrderForm /> : <></>}
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
