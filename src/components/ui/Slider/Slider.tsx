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
      slidesPerView={"auto"}
      navigation={true}
      modules={[Navigation]}
      className={s.slider}
      breakpoints={{
        320:{
          spaceBetween: 5,
        },
        481:{
          spaceBetween: 15,
        }
      }}
    >
      {categories.map(item => (
        <SwiperSlide key={item.id} className={s.slide}>
          <Link to={`/catalog/${item.id}`}>
            <CategoryCard title={item.name} img={item.image.url} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};