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
import {getIdByName} from "../../functions";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export const ITEMS_PER_PAGE = 4;

export const CatalogPage = ():JSX.Element => {
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [productsInfo, setProductsInfo] = useState<ProductInfoType>({
    maxPrice: 100000, minPrice: 0, productProperties: [], products: [], productsCount: 0
  });
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([...productsInfo.products]);
  const [currentPage, setCurrentPage] = useState(1);
  const [brandSelections, setBrandSelections] = useState<string[]>([]);
  const [colorsSelections, setColorsSelections] = useState<string[]>([]);

  const { id } = useParams();

  useEffect(() => {
    getData('Brands').then(response => setBrands(response));
    getData("Colors").then(response => setColors(response))
    getData('Products').then(response => setProductsInfo(response));
    getData('Categories').then(response => setCategories(response));
  }, []);

  useEffect(() => {
    setBrandSelections([]);
    setColorsSelections([]);
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

  const handleBrandSelectChoose = (chosenOptions: string[]) => {
    console.log(chosenOptions)
    setBrandSelections(chosenOptions);
    handleSelectChoose()
  }

  const handleColorsSelectChoose = (chosenOptions: string[]) => {
    setColorsSelections(chosenOptions);
    handleSelectChoose()
  }
  const handleSelectChoose = () => {
    setCurrentPage(1);
    let brand_ids = brandSelections.map(function (value) {
      return getIdByName(value, brands)
    })
    let colors_ids = colorsSelections.map(function (value) {
      return getIdByName(value, colors)
    })
    let params = {
      Brands: brand_ids.toString().concat(),
      Colors: colors_ids.toString().concat()
    }
    console.log(params)
    getData('Products', params).then(response => setSortedProducts((response as ProductInfoType).products));
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
            <div className={s.selectContainer2}>
              <div className={s.selectContainer}>
                <div>
                  <Select
                      selectItems={brands}
                      selectDefaultTitle='Бренд'
                      handleChoose={handleBrandSelectChoose}
                      selectedValues={brandSelections}
                  />
                </div>
              </div>
              <div className={s.selectContainer}>
                <div>
                  <Select
                      selectItems={colors}
                      selectDefaultTitle='Цвета'
                      handleChoose={handleColorsSelectChoose}
                      selectedValues={colorsSelections}
                  />
                </div>
              </div>

            </div>
          </div>
          <div className={s.productsColumn}>
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
