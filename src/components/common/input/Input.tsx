import React from "react";
import * as S from "./style";

//<Input value={text} placeholder="Enter text" onChangeHandler={onChangeHandler} size="small" />
interface InputProps {
  readonly placeholder: string;
  readonly onChangeHandler?: (text: string) => void;
  readonly value: string;
  size?: "small" | "medium" | "large";
}

const Input = ({ placeholder, onChangeHandler, value, size }: InputProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeHandler) {
      onChangeHandler(e.target.value);
    }
  };
  return (
    <S.InputBox placeholder={placeholder} value={value} onChange={changeHandler} size={size} />
  );
};

export default Input;
