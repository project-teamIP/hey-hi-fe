import React from "react";
import * as S from "./style";

interface InputProps {
  placeholder: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  size?: string;
  type?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 추가
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeHandler,
  value,
  size,
  type,
  onKeyPress,
}) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeHandler) {
      onChangeHandler(e);
    }
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyPress && e.key === "Enter") {
      onKeyPress(e);
    }
  };

  return (
    <S.InputBox
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      onKeyPress={keyPressHandler}
      size={size}
      type={type}
    />
  );
};

export default Input;
