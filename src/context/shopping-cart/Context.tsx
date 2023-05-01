import React, {createContext, useCallback, useContext, useReducer} from 'react';
import {CartContextType} from "../../types";
import {cartReducer} from "./Reducer";

const CartContext = createContext<CartContextType>({
  state: {cart: []},
  addItem: () => null,
  removeItem: () => null,
});

export const CartContextComponent = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const addItem = useCallback<CartContextType['addItem']>(
    (params) => {
      dispatch({ type: "ADD_TO_CART", item : {...params} });
    },
    [dispatch]
  );

  const removeItem = useCallback<CartContextType['removeItem']>(
      (params) => {
        dispatch({ type: "REMOVE_FROM_CART", item: {...params }});
      },
      [dispatch]
  );

  return (
    <CartContext.Provider value={{ state, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartState = () => {
  return useContext(CartContext);
}