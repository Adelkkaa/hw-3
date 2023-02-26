import React, { useEffect, useState } from "react";

import style from "./MultiDropdown.module.scss";

export type Option = {
  id: number;
  name: string;
};

export type MultiDropdownProps = React.PropsWithChildren<{
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions: (value: Option[]) => string;
}>;

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  pluralizeOptions,
  disabled,
  children,
}) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const result = pluralizeOptions(value);
    setInputValue(result);
  });

  const onClicked = () => {
    setActive((prev) => !prev);
  };

  const onChangeElement = (e: React.ChangeEvent<any>, item: Option) => {
    if (e.target.className === `${style.select} ${style.active}`) {
      // 'select active'
      e.target.className = `${style.select}`;
      onChange(value.filter((param) => param.id !== item.id));
    } else {
      e.target.className += ` ${style.active}`;
      onChange([...value, item]);
    }
  };

  const onRender = (item: Option) => {
    if (value.length === 0) {
      return `${style.select}`;
    }
    for (let i = 0; i < value.length; i++) {
      if (value[i].id === item.id) {
        return `${style.select} ${style.active}`;
      }
    }
    return `${style.select}`;
  };
  return (
    <div
      className={
        active
          ? `${style.multi_dropdown} ${style.active}`
          : `${style.multi_dropdown}`
      }
    >
      <div className={style.textBox} onClick={onClicked}>
        {children}
        {inputValue}
      </div>
      {active && !disabled && (
        <div className={style.option}>
          {options.map((item) => (
            <div
              className={onRender(item)}
              onClick={(e) => onChangeElement(e, item)}
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
