import {CartActionsType, CartStateType, CartType} from "../../types";

export const cartReducer = (state: CartStateType, action: CartActionsType): CartStateType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log({...state, cart: [...state.cart, {...action.item, quantity: 1}]})
      return {...state, cart: [...state.cart, {...action.item, quantity: 1}]}
    case 'REMOVE_FROM_CART':
      return {...state, cart: state.cart.filter(item => item.sku !== action.item.sku)}
    default:
      return state;
  }
}