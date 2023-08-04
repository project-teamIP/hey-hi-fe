import React from "react";
import * as S from "./style";

interface InputProps {
  readonly placeholder: string;
  readonly onChangeHandler?: (text: string) => void;
  readonly value: string;
}

const Input = ({ placeholder, onChangeHandler, value }: InputProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeHandler) {
      onChangeHandler(e.target.value);
    }
  };
  return <S.InputBox placeholder={placeholder} value={value} onChange={changeHandler} />;
};

export default Input;
