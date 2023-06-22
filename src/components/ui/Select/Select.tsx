import React, {useEffect, useState} from 'react';
import s from './Select.module.scss'
import cn from "classnames";
import arrow from '../../../assets/images/selectArrow.svg'
import {BaseNameAndId} from "../../../types";

type SelectProps = {
  selectItems: BaseNameAndId[],
  selectDefaultTitle: string,
  handleChoose: (chosenOptions: string[]) => void,
  selectedValues: string[],
};

export const Select = (props: SelectProps) => {
  const {
    selectItems,
    selectDefaultTitle,
    handleChoose,
    selectedValues,
  } = props;

  const [selectTitle, setSelectTitle] = useState(selectDefaultTitle);
  const [isSelectOpened, setSelectOpen] = useState(false);

  useEffect(() => {
    if (!selectedValues.length) {
      setSelectTitle(selectDefaultTitle);
    }
  },[selectedValues])

  const handleSelectOpen = (e: any) => {
    setSelectOpen(!isSelectOpened)
  };

  const handleOptionClick = (e: any) => {
    const option = e.target.innerText;
    const optionIndex = selectedValues.indexOf(option);
    let newValue = [...selectedValues];
    if (optionIndex === -1) {
      newValue.push(option);
    } else {
      newValue.splice(optionIndex, 1);
    }
    setSelectTitle(`${newValue.length} of ${selectItems.length} selected`)
    handleChoose(newValue);
  };

  return (
    <div className={cn(s.selectWrapper, { [s.open]: isSelectOpened })}>
      <div className={s.select}>
        <div className={s.selectTrigger} onClick={handleSelectOpen}>
          <span className={s.selectedValue}>{selectTitle}</span>
          <img src={arrow} alt='' className={cn(s.arrow, { [s.open]: isSelectOpened })}/>
        </div>
        <div className={s.customOptions}>
          {selectItems.map((item) => (
            <span
              key={item.id}
              className={cn(s.customOption, { [s.active]: selectedValues.includes(item.name) })}
              data-value={item.name}
              onClick={handleOptionClick}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};