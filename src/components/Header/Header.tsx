import React from 'react';
import s from './Header.module.scss';
import cn from 'classnames'
import {LogoIcon} from "../ui/icons/LogoIcon";
import {Link} from "react-router-dom";
import {ShoppingCartIcon} from "../ui/icons/ShoppingCartIcon";

export const Header = ():JSX.Element => {
  return (
    <header className={cn('container', s.header)}>
      <nav className={s.nav}>
        <ul className={cn(s.list, s.listLeft)}>
          <li className={s.listItem}>
            <Link to='/' className={s.link}>
              NEW
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to='/' className={s.link}>
              КАТАЛОГ
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to='/' className={s.link}>
              О НАС
            </Link>
          </li>
        </ul>
        <LogoIcon className={s.logo} />
        <ul className={s.listRight}>
          <li className={s.listItem}>
            <Link to='/'>
              <ShoppingCartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};