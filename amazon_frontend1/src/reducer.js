export const initialState = {
  cart: [],
  orderDetails: {
    shippingAddress: '',
    paymentType: '',
    products: [],
  },
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_BASKET': 
      return {
        ...state,
        cart: [...state.cart, action.data]
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.itemId)
      };
    case 'UPDATE_ORDER_DETAILS':
      return {
        ...state,
        orderDetails: {
          shippingAddress: action.shippingAddress,
          paymentType: action.paymentType,
          products: [...state.cart]
        }
      };
    case 'UPDATE_SHIPPING_ADDRESS':
        return {
          ...state,
          orderDetails: {
            ...state.orderDetails,
            shippingAddress: action.shippingAddress,
            products: [...state.cart]
          }
        };
    case 'UPDATE_PAYMENT_TYPE':
        return {
          ...state,
          orderDetails: {
            ...state.orderDetails,
            paymentType: action.paymentType,
            products: [...state.cart]
          }
        };
    case 'CLEAR_STORE':
      return {
        ...initialState
      }
    default:
      return state;
  }
}