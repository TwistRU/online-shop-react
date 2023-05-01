import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {CategoryType} from "../../../types";
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {CategoryCard} from "../../Home/CategoryCard/CategoryCard";
import {Link} from "react-router-dom";
import s from './Slider.module.scss';

export const Slider = ({categories}: {categories: CategoryType[]}) => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={"auto"}
      navigation={true}
      modules={[Navigation]}
      className={s.slider}
    >
      {categories.map(item => (
        <SwiperSlide key={item.id} className={s.slide}>
          <Link to={`/catalog/${item.id}`}>
            <CategoryCard title={item.title} img={item.img} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};