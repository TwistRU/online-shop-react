import React, {useEffect, useState} from 'react';
import s from './CatalogPage.module.scss'
import cn from "classnames";
import {Header} from "../../components/Header/Header";
import {getData} from "../../requets";
import {Select} from "../../components/ui/Select/Select";
import {Footer} from "../../components/Footer/Footer";
import {ItemCardList} from "../../components/ItemCardList/ItemCardList";
import {Pagination} from "../../components/ui/Pagination/Pagination";

export const ITEMS_PER_PAGE = 6;

export const CatalogPage = ():JSX.Element => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getData('brands.json').then(response => setBrands(response));
    getData('/products.json').then(response => setProducts(response));
  }, [])

  const handlePaginationClick = (e: any) => {
    setCurrentPage(+e.target.innerText);
  }

  const handlePaginationArrowClick = (step: number) => {
    setCurrentPage(currentPage + step);
  }

  const getProductsPerPage = () => {
    const sliceSrart = ITEMS_PER_PAGE * (currentPage - 1);
    return products.slice(sliceSrart, sliceSrart + 6);
  }

  return (
    <div className={cn(s.catalogPage)}>
      <Header styled />
      <main className={'container'}>
        <div className={s.selectContainer}>
          <Select selectItems={brands} selectTitle='Бренд' />
        </div>
        <ItemCardList products={getProductsPerPage()} brands={brands} />
        <Pagination
          currentPage={currentPage}
          handleClick={handlePaginationClick}
          handleArrowClick={handlePaginationArrowClick}
          itemsNumber={products.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </main>
      <Footer />
    </div>
  );
};
