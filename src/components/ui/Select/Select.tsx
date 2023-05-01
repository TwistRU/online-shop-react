import React, {useState} from 'react';
import s from './Select.module.scss'
import cn from "classnames";
import arrow from '../../../assets/images/selectArrow.svg'
import {BrandType} from "../../../types";

type SelectProps = {
  selectItems: BrandType[],
  selectTitle: string,
};

export const Select = (props: SelectProps) => {
  const {
    selectItems,
    selectTitle,
  } = props;

  const [selectedValue, setSelectedValue] = useState(selectTitle);
  const [isSelectOpened, setSelectOpen] = useState(false);

  const handleSelectOpen = (e: any) => {
    console.log(e)
    setSelectOpen(!isSelectOpened)
  };

  const handleOptionClick = (e: any) => {
    console.log(e.target.innerText)
    setSelectedValue(e.target.innerText);
    setSelectOpen(!isSelectOpened);
  };

  return (
    <div className={cn(s.selectWrapper, { [s.open]: isSelectOpened })}>
      <div className={s.select}>
        <div className={s.selectTrigger} onClick={handleSelectOpen}>
          <span className={s.selectedValue}>{selectedValue}</span>
          <img src={arrow} alt='' className={cn(s.arrow, { [s.open]: isSelectOpened })}/>
        </div>
        <div className={s.customOptions}>
          {selectItems.map((item) => (
              <span
                key={item.id}
                className={cn(s.customOption)}
                data-value={item.title}
                onClick={handleOptionClick}
              >
                {item.title}
              </span>
          ))}
        </div>
      </div>
    </div>
  );
};