import React from 'react';
import s from './CatalogProductCard.module.scss';
import {ProductCartType} from "../../../types";
import {useCartState} from "../../../context/shopping-cart/Context";
import {Button} from "../../ui/Button/Button";

type ItemCardProps = {
  img: string,
  title: string,
  price: number,
  brand: string,
  article: string,
};

export const CatalogProductCard = (props: ItemCardProps) => {
  const {
    img, title, price, brand, article
  } = props;

  const {
    state: { cart },
    addItem,
    removeItem
  } = useCartState();

  const isItemInCart = () => {
    return cart.some((item: any) => item.article === article);
  }

  const handleCartChange = () => {
    const params: ProductCartType = {title, price, article, image: img};
    isItemInCart() ? removeItem(params) : addItem(params)
  }

  return (
    <div className={s.itemCard}>
      <img src={img} alt={title} className={s.img}/>
      <div className={s.infoContainer}>
        <span className={s.title}>{title}</span>
        <span className={s.priceContainer}>
          <span className={s.priceValue}>{price}</span>
        </span>
        <span className={s.brand}>{brand}</span>
        <Button
          onClick={handleCartChange}
          text={isItemInCart() ? 'Удалить' : 'В корзину'}
          className={s.btn}
        />
      </div>
    </div>
  );
};