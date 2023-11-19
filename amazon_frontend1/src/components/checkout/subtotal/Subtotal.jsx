import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'

const Subtotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={
          (value) => (
            <>
            <p className='subtotalTitle'>
              Subtotal (0 items): <strong> 0 </strong>
            </p>
            <small className='subtotalGift'>
              <input type="checkbox" /> This order contains a gift
            </small>
            </>
          )
        }
        decimalScale={3}
        value={0}
        displayType='text'
        thousandSeparator
        prefix = '$'
      />
      <button className='proceedToPaymentButton'>Proceed to Payment</button>
    </div>
  )
}

export default Subtotal
