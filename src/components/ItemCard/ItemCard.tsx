import React from 'react';
import s from './ItemCard.module.scss';
import {PriceType} from "../../types";

type ItemCardProps = {
  img: string,
  title: string,
  price: PriceType,
  brand: string,
};

const ItemCard = (props: ItemCardProps) => {
  const {
    img, title, price, brand
  } = props;

  return (
    <div className={s.itemCard}>
      <img src={img} alt={title} className={s.img}/>
      <div className={s.infoContainer}>
        <span className={s.title}>{title}</span>
        <span className={s.priceContainer}>
          <span className={s.priceValue}>{price.value}</span>
          <span className={s.priceCurrency}>{price.currency}</span>
        </span>
        <span className={s.brand}>{brand}</span>

      </div>

    </div>
  );
};

export default ItemCard;