import React, {useEffect, useState} from 'react';
import s from './CatalogPage.module.scss'
import cn from "classnames";
import {Header} from "../../components/Header/Header";
import {getData} from "../../requets";
import {Select} from "../../components/ui/Select/Select";
import {Footer} from "../../components/Footer/Footer";
import {ItemCardList} from "../../components/ItemCardList/ItemCardList";

export const CatalogPage = ():JSX.Element => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData('brands.json').then(response => setBrands(response));
    getData('/products.json').then(response => setProducts(response));
  }, [])

  return (
    <div className={cn(s.catalogPage)}>
      <Header styled />
      <main className={'container'}>
        <div className={s.selectContainer}>
          <Select selectItems={brands} selectTitle='Бренд' />
        </div>
        <ItemCardList products={products} brands={brands} />
      </main>
      <Footer />
    </div>
  );
};
