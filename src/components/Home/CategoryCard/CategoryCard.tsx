import React from 'react';
import s from './CategoryCard.module.scss';

type CategoryCardProps = {
  title: string,
  img: string,
}

export const CategoryCard = (props: CategoryCardProps) => {
  const {
    title, img
  } = props;

  return (
    <div className={s.categoryCard}>
      <img className={s.img} src={img} alt={title} />
      <span className={s.title}>{title}</span>title
    </div>
  );
}