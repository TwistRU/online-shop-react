import React from 'react';
import s from './ItemCardList.module.scss';
import {BrandType, ProductType} from "../../types";
import ItemCard from "../ItemCard/ItemCard";
import {getBrandNameById} from "../../functions";

type ItemCardListProps = {
  products: ProductType[],
  brands: BrandType[],
};

export const ItemCardList = (props: ItemCardListProps):JSX.Element => {
  const {
    products, brands,
  } = props;

  console.log(brands)
  return (
    <ul className={s.cardList}>
      {products.map((item) => (
        <li className={s.card}>
          <ItemCard
            key={item.id}
            img={item.image}
            title={item.title}
            price={item.price}
            brand={getBrandNameById(item.brand, brands)}
            sku={item.sku}
            type={item.type}
          />
        </li>
      ))}
    </ul>
  );
};