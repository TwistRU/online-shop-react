import React from 'react';
import s from './ItemCard.module.scss';
import {PriceType} from "../../types";
import {useCartState} from "../../context/shopping-cart/Context";
import {Button} from "../ui/Button/Button";

type ItemCardProps = {
  img: string,
  title: string,
  price: PriceType,
  brand: string,
  sku: string,
};

const ItemCard = (props: ItemCardProps) => {
  const {
    img, title, price, brand, sku
  } = props;

  const {
    // @ts-ignore
    state: { cart },
    // @ts-ignore
    dispatch,
  } = useCartState();

  const isItemInCart = () => {
    return cart.some((item: any) => item.sku === sku);
  }

  const handleCartChange = () => {
    dispatch({
      type: isItemInCart() ? 'REMOVE_FROM_CART' : 'ADD_TO_CART',
      item: {title, price, sku},
    })
  }

  //console.log(cart)

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
        <Button
          onClick={handleCartChange}
          text={isItemInCart() ? 'Удалить' : 'В корзину'}
          className={s.btn}
        />
      </div>
    </div>
  );
};

export default ItemCard;