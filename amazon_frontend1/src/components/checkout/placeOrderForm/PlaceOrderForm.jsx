import React from 'react'
import './PlaceOrderForm.css';
import { useStateValue } from '../../../StateProvider';
const PlaceOrderForm = () => {
  const [state, dispatch] = useStateValue()

  const { orderDetails } = state;
  const { paymentType, shippingAddress} = orderDetails;

  const changeShippingAddress = (e) => {
    dispatch({
      type: 'UPDATE_SHIPPING_ADDRESS',
      shippingAddress: e.target.value
    })
  }
  
  const changePaymentType = (e) => {
    dispatch({
      type: 'UPDATE_PAYMENT_TYPE',
      paymentType: e.target.value
    })
  }

  return (
    <div className='placeOrderForm'>
        <h3>
          Checkout
        </h3>
      <form>
        <label htmlFor="">Shipping Address</label>
        <input type='text' value={shippingAddress} onChange={changeShippingAddress}/>
        <label htmlFor="">Payment Methods</label>
        <select value={paymentType} onChange={changePaymentType}>
          <option disabled selected value=''>Select Payment Method</option>
          <option value='COD'>Cash On Delivery</option>
          <option value='CC'>Credit Card</option>
        </select>
      </form>
    </div>
  )
}

export default PlaceOrderForm;
