export const availableInCart
  = (cart, id) => 
    cart?.find(x => x.id === id);

export const calculateSubTotal
  = (cart) => cart.reduce((last, next) => {
    return last + next?.price;
    }, 0);