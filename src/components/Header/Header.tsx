import React, {useState} from 'react';
import s from './Header.module.scss';
import cn from 'classnames'
import {LogoIcon} from "../ui/icons/LogoIcon";
import {Link} from "react-router-dom";
import {ShoppingCartIcon} from "../ui/icons/ShoppingCartIcon";
import {headerLinks} from "../../data/data";
import {useCartState} from "../../context/shopping-cart/Context";


type HeaderProps = {
  styled?: boolean,
};

export const Header = (props: HeaderProps):JSX.Element => {
  const {
    styled,
  } = props;

  const [isListShown, setListShow] = useState(false);

  const {state: {cart}} = useCartState();

  const handleListOpen = () => {
    setListShow(!isListShown);
  }

  const burgerOpen = (
    <div className={cn(s.burger)} onClick={handleListOpen}>
      <span className={cn(s.burgerLine, s.topLine, { [s.styled]: styled, [s.close]: isListShown })}></span>
      <span className={cn(s.burgerLine, s.middleLine, { [s.styled]: styled, [s.close]: isListShown })}></span>
      <span className={cn(s.burgerLine, s.bottomLine, { [s.styled]: styled, [s.close]: isListShown })}></span>
    </div>
  )

  return (
    <header className={cn('container', s.header)}>
      <nav className={s.nav}>
        {burgerOpen}
        <ul className={cn(s.list, s.listCategories, { [s.opened]: isListShown })}>
          {headerLinks.map((item) => (
            <li className={s.listItem} key={item.id}>
              <Link to={item.link} className={cn(s.link, { [s.styled]: styled } )}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link to='/' className={cn(s.logoLink)}>
          <LogoIcon className={cn(s.logo, { [s.styled]: styled })} />
        </Link>
        <ul className={s.listIcons}>
          <li className={s.listItem}>
            <Link to='/cart' className={s.cartLink}>
              {!!cart.length && <span className={s.itemsNumber}>{cart.length}</span>}
              <ShoppingCartIcon className={cn(s.shoppingCart, { [s.styled]: styled })} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};