import React from 'react';
import cn from "classnames";
import s from "./Footer.module.scss";
import {InstaFooterIcon} from "../ui/icons/InstaFooterIcon";
import {TelegramFooterIcon} from "../ui/icons/TelegramFooterIcon";
import {footerBlocks} from "../../data/data";
import {FooterBlock} from "./FooterBlock/FooterBlock";

export const Footer = ():JSX.Element => {
  return (
    <footer className={cn('container', s.footer)}>
      {footerBlocks.map((item) => (
        <FooterBlock item={item}/>
      ))}
      <div className={cn(s.footerBlock, s.full)}>
        <span className={s.titleContainer}>
          <h5 className={cn('h5', s.title)}>Контакты</h5>
        </span>
        <div className={s.socialMedias}>
          <InstaFooterIcon className={s.icon} />
          <TelegramFooterIcon className={s.icon} />
        </div>
        <a className={cn(s.footerListItem, s.footerText)} href="tel: +380730963644">+38(073) 096 36 44</a>
        <a className={cn(s.footerListItem, s.footerText)} href="mailto: info@lemodel.com">info@lemodel.com</a>
      </div>
    </footer>
  );
};