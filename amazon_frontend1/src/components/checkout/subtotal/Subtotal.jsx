import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom';
import './Subtotal.css'
import { useStateValue } from '../../../StateProvider'
import { calculateSubTotal } from '../../../helpers'

const Subtotal = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const {cart, orderDetails} = state;
  const placeOrder = async () => {
    const res = await fetch('http://localhost:4000/createOrder', {
      method: 'POST', body: JSON.stringify(orderDetails),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const jsonRes = await res.json()

    alert(jsonRes.message)
    navigate('/')
    dispatch({type: 'CLEAR_STORE'})
  }
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={
          (value) => (
            <>
            <p className='subtotalTitle'>
              Subtotal ({cart.length} items): <strong> {value} </strong>
            </p>
            <small className='subtotalGift'>
              <input type="checkbox" /> This order contains a gift
            </small>
            </>
          )
        }
        decimalScale={3}
        value={calculateSubTotal(cart)}
        displayType='text'
        thousandSeparator
        prefix = '$'
      />
      <button className='proceedToPaymentButton' onClick={placeOrder}>Place Order</button>
    </div>
  )
}

export default Subtotal
