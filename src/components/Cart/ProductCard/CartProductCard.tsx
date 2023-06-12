import React from 'react';
import s from './CartProductCard.module.scss';
import {InputStepper} from "../../ui/Stepper/InputStepper";
import {CartRemoveIcon} from "../../ui/icons/CartRemoveIcon";

type CartProductCardProps = {
  img: string,
  article: string,
  name: string,
  quantity: number,
  price: number,
  changeQuantity: (item: { image: string; price: number; name: string; article: string }, step: number) => void,
  removeItem: (item: { image: string; price: number; name: string; article: string }) => void,
}

export const CartProductCard = (props: CartProductCardProps) => {
  const {
    img, article, name, quantity, price, changeQuantity, removeItem
  } = props;

  const handleQuantityChange = (step: number) => {
    const product = {article, name, price, image: img};
    changeQuantity(product, step);
  }

  const handleProductRemove = () => {
    const product = {article, name, price, image: img};
    removeItem(product);
  }

  return (
    <li className={s.cartProductCard}>
      <div className={s.mainInfoContainer}>
        <img className={s.img} src={img} alt={name} />
        <span className={s.titleContainer}>
          <span className={s.sku}>{article}</span>
          <span className={s.title}>{name}</span>
        </span>
      </div>
      <InputStepper inputValue={quantity} handleStepperChange={handleQuantityChange} />
      <div className={s.rightContainer}>
        <span className={s.price}>{`${price * quantity}`}</span>
        <CartRemoveIcon onClick={handleProductRemove} />
      </div>
    </li>
  );
};