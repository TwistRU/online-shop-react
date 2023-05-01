export const cartReducer = (state: any, action: { type: any; }) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // @ts-ignore
      return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
    case 'REMOVE_FROM_CART':
      // @ts-ignore
      return {...state, cart: state.cart.filter(item => item.sku !== action.payload.sku)}
    default:
      return state;
  }
}