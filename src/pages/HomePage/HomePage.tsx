import React, {useEffect, useState} from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames'
import {Header} from "../../components/Header/Header";
import {Link} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";
import {CategoryType} from "../../types";
import {getData} from "../../requets";
import {Slider} from "../../components/ui/Slider/Slider";

export const HomePage = ():JSX.Element => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getData('Categories').then(response => setCategories(response));
  }, [])

  return (
    <div className={s.home}>
      <Header />
      <main className={s.main}>
        <section className={s.promo}>
          <span className={cn('mainTitle', s.title)}> Новая коллекция</span>
          <span className={s.line}></span>
          <Link to='/catalog' className={s.link}>Смотреть Новинки</Link>
        </section>
        <section className={cn('container', s.categories)}>
          <h2 className={cn(s.homeTitle)}>Категории</h2>
          <Slider categories={categories} />
        </section>
      </main>
      <Footer />
    </div>
  );
};