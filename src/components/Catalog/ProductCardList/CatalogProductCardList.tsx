import React from 'react';
import s from './CatalogProductCardList.module.scss';
import {BrandType, ProductType} from "../../../types";
import {CatalogProductCard} from "../ProductCard/CatalogProductCard";
import {getNameById} from "../../../functions";

type ItemCardListProps = {
  products: ProductType[],
  brands: BrandType[],
};

export const CatalogProductCardList = (props: ItemCardListProps):JSX.Element => {
  const {
    products, brands,
  } = props;

  return (
    <ul className={s.cardList}>
      {products.map((item) => (
        <li className={s.card}>
          <CatalogProductCard
            key={item.id}
            id={item.id}
            img={item.images[0].url}
            title={item.name}
            price={Math.round(item.price)}
            brand={getNameById(item.brand.id, brands)}
            article={item.article}
          />
        </li>
      ))}
    </ul>
  );
};