import React from 'react';
import s from './CartProductCard.module.scss';
import {PriceType, ProductCartType} from "../../types";
import {InputStepper} from "../ui/Stepper/InputStepper";
import {CartRemoveIcon} from "../ui/icons/CartRemoveIcon";

type CartProductCardProps = {
  img: string,
  sku: string,
  title: string,
  quantity: number,
  price: PriceType,
  incrementQuantity: (item: ProductCartType) => void,
  changeQuantity: (item: ProductCartType, step: number) => void,
}

export const CartProductCard = (props: CartProductCardProps) => {
  const {
    img, sku, title, quantity, price, changeQuantity
  } = props;

  const handleQuantityChange = (step: number) => {
    const product = {sku, title, price, image: img};
    changeQuantity(product, step);
  }

  return (
    <li className={s.cartProductCard}>
      <div className={s.mainInfoContainer}>
        <img className={s.img} src={img} alt={title} />
        <span className={s.titleContainer}>
          <span className={s.sku}>{sku}</span>
          <span className={s.title}>{title}</span>
        </span>
      </div>
      <InputStepper inputValue={quantity} handleStepperChange={handleQuantityChange} />
      <div className={s.rightContainer}>
        <span className={s.price}>{`${price.value} ${price.currency}`}</span>
        <CartRemoveIcon />
      </div>
    </li>
  );
};