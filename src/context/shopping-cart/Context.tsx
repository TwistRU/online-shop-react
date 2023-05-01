import React, {createContext, useCallback, useContext, useEffect, useReducer, useState} from 'react';
import {CartActionsType, CartContextType, CartType} from "../../types";
import {getData} from "../../requets";
import {cartReducer} from "./Reducer";

const CartContext = createContext([]);

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

  return (
      // @ts-ignore
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartState = () => {
  return useContext(CartContext);
}