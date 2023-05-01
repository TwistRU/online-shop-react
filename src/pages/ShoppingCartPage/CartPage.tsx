import React from 'react';
import s from './CartPage.module.scss';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {useCartState} from "../../context/shopping-cart/Context";
import {CartProductCard} from "../../components/CartProductCard/CartProductCard";
import cn from "classnames";

export const CartPage = ():JSX.Element => {
  const {state: {cart}, addItem, removeItem, changeQuantity} = useCartState();

  return (
    <div className={s.cartPage}>
      <Header styled />
      <main className={'container'}>
        <h2 className={s.title}>Ваш заказ</h2>
        <ul className={cn('list-reset')}>
          {cart.map((item) => (
            <CartProductCard
              img={item.image}
              price={item.price}
              quantity={item.quantity}
              sku={item.sku}
              title={item.title}
              incrementQuantity={addItem}
              changeQuantity={changeQuantity}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};