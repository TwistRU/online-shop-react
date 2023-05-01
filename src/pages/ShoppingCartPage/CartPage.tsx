import React from 'react';
import s from './CartPage.module.scss';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export const CartPage = ():JSX.Element => {
  return (
    <div className={s.basketPage}>
      <Header styled />
      <main>

      </main>
      <Footer />
    </div>
  );
};