import React, {useEffect, useState} from 'react';
import s from './CatalogPage.module.scss'
import cn from "classnames";
import {Header} from "../../components/Header/Header";
import {getData} from "../../requets";
import {Select} from "../../components/ui/Select/Select";
import {Footer} from "../../components/Footer/Footer";
import {CatalogProductCardList} from "../../components/Catalog/ProductCardList/CatalogProductCardList";
import {Pagination} from "../../components/ui/Pagination/Pagination";
import {CategoryType, ProductType} from "../../types";
import {getBrandIdByName} from "../../functions";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export const ITEMS_PER_PAGE = 6;

export const CatalogPage = ():JSX.Element => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [currentPage, setCurrentPage] = useState(1);
  const [brandSelections, setBrandSelections] = useState<string[]>([]);

  const { id } = useParams();

  useEffect(() => {
    getData('Brands').then(response => setBrands(response));
    getData('products.json').then(response => setProducts(response));
    getData('categories.json').then(response => setCategories(response));
  }, []);

  useEffect(() => {
    setSortedProducts(getCategoryProducts(products));
    setBrandSelections([]);
  }, [id, products]);

  const handlePaginationClick = (e: any) => {
    setCurrentPage(+e.target.innerText);
  }

  const handlePaginationArrowClick = (step: number) => {
    setCurrentPage(currentPage + step);
  }

  const getProductsPerPage = () => {
    const sliceStart = ITEMS_PER_PAGE * (currentPage - 1);
    return sortedProducts.slice(sliceStart, sliceStart + 6);
  }

  const getCategoryProducts = (currentProducts: ProductType[]) => {
    if (id) {
      return currentProducts.filter((item: ProductType) => item.category === +id);
    }
    return currentProducts;
  }

  const handleSelectChoose = (chosenOptions: string[]) => {
    setBrandSelections(chosenOptions);
    setCurrentPage(1);
    if (chosenOptions.length) {
      let currentSortedProducts: ProductType[] = [];
      for (let i = 0; i < chosenOptions.length; i++) {
        const brandId = getBrandIdByName(chosenOptions[i], brands);
        currentSortedProducts = currentSortedProducts.concat(products.filter(item => item.brand === brandId))
      }
      setSortedProducts(getCategoryProducts(currentSortedProducts));
    } else {
      setSortedProducts(getCategoryProducts(products));
    }
  }

  return (
    <div className={cn(s.catalogPage)}>
      <Header styled />
      <main className={'container'}>
        <div className={s.contentContainer}>
          <div className={s.categoriesColumn}>
            <h2 className={cn('pageTitle', s.title)}>Каталог</h2>
            <ul className={s.categories}>
              {categories.map(item => (
                <li key={item.id}>
                  <Link to={`/catalog/${item.id}`} className={cn(s.link, { [s.active]: item.id.toString() === id })}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.productsColumn}>
            <div className={s.selectContainer}>
              <Select
                selectItems={brands}
                selectDefaultTitle='Бренд'
                handleChoose={handleSelectChoose}
                selectedValues={brandSelections}
              />
            </div>
            <CatalogProductCardList products={getProductsPerPage()} brands={brands} />
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          handleClick={handlePaginationClick}
          handleArrowClick={handlePaginationArrowClick}
          itemsNumber={sortedProducts.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </main>
      <Footer />
    </div>
  );
};
