import React, {useState} from 'react';
import s from '../Footer.module.scss';
import cn from "classnames";
import ArrowIcon from "../../ui/icons/ArrowIcon";
import {Link} from "react-router-dom";
import {FooterInfo} from "../../../types";

type FooterBlockProps = {
  item: FooterInfo,
};

export const FooterBlock = (props: FooterBlockProps) => {
  const {
    item
  } = props;

  const [isOpened, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpened);
  }

  return (
    <div className={cn(s.footerBlock, { [s.opened]: isOpened })} key={item.id}>
      <span className={s.titleContainer} onClick={handleOpen}>
        <h5 className={cn('h5', s.title)}>{item.name}</h5>
        <ArrowIcon className={cn(s.arrow, { [s.opened]: isOpened })} />
      </span>
      <ul className={s.footerList}>
        {item.links.map((link) => (
          <li className={s.footerListItem}>
            <Link to={link.link} className={s.footerText}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};