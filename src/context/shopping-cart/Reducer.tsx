import {CartActionsType, CartStateType, CartType, ProductCartType} from "../../types";

const changeQuantity = (cart: CartType[], product: ProductCartType, step: number) => {
  console.log(cart, product, step)
  const itemIndex = cart.findIndex(item => item.article === product.article);
  let newCart = [...cart];
  if (itemIndex >= 0) {
    let newItem = {...newCart[itemIndex]};
    let quantity = newItem.quantity;
    quantity += quantity + step > 0 ? step : 0;
    newItem.quantity = quantity;
    newCart[itemIndex] = newItem;
  }
  return newCart;
}

export const cartReducer = (state: CartStateType, action: CartActionsType): CartStateType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, {...action.item, quantity: 1}]};
    case 'CHANGE_QUANTITY':
      return {...state, cart: changeQuantity(state.cart, action.item, action.step)};
    case 'REMOVE_FROM_CART':
      return {...state, cart: state.cart.filter(item => item.article !== action.item.article)};
    default:
      return state;
  }
}