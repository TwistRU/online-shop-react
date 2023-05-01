import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import {CartActionsType, CartContextType, CartType} from "../../types";
import {getData} from "../../requets";
import {cartReducer} from "./Reducer";

const CartContext = createContext([]);

export const CartContextComponent = ({children}: {children: React.ReactNode}) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

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