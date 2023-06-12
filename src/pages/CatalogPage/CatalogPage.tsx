import React, {useEffect, useState} from 'react';
import s from './CatalogPage.module.scss'
import cn from "classnames";
import {Header} from "../../components/Header/Header";
import {getData} from "../../requets";
import {Select} from "../../components/ui/Select/Select";
import {Footer} from "../../components/Footer/Footer";
import {CatalogProductCardList} from "../../components/Catalog/ProductCardList/CatalogProductCardList";
import {Pagination} from "../../components/ui/Pagination/Pagination";
import {CategoryType, ProductInfoType, ProductType} from "../../types";
import {getBrandIdByName} from "../../functions";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export const ITEMS_PER_PAGE = 4;

export const CatalogPage = ():JSX.Element => {
  const [brands, setBrands] = useState([]);
  const [productsInfo, setProductsInfo] = useState<ProductInfoType>({
    maxPrice: 100000, minPrice: 0, productProperties: [], products: [], productsCount: 0
  });
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([...productsInfo.products]);
  const [currentPage, setCurrentPage] = useState(1);
  const [brandSelections, setBrandSelections] = useState<string[]>([]);

  const { id } = useParams();

  useEffect(() => {
    getData('Brands').then(response => setBrands(response));
    getData('Products').then(response => setProductsInfo(response));
    getData('Categories').then(response => setCategories(response));
  }, []);

  useEffect(() => {
    setBrandSelections([]);
    setSortedProducts(productsInfo.products);
  }, [id, productsInfo]);

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

  const handleSelectChoose = (chosenOptions: string[]) => {
    setBrandSelections(chosenOptions);
    setCurrentPage(1);
    let ids = chosenOptions.map(function (value) {
      return getBrandIdByName(value, brands)
    })
    getData('Products', {Brands: ids.toString().concat()}).then(response => setSortedProducts((response as ProductInfoType).products));
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
                  <Link to={`/catalog/${item.id}`} className={cn(s.link, { [s.active]: id === item.id.toString()})}>
                    {item.name}
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
