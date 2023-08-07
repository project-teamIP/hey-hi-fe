import React, { useState } from "react";
import * as S from "./style";

interface SelectProps {
  label: string;
  options: string[];
  size?: "normal" | "large";
}

const Select = ({ label, options, size }: SelectProps) => {
  // 토글 설정
  const [isOptionVisible, setOptionVisible] = useState<boolean>(false);

  // 클릭 시 열기/닫기
  const onClickToggleHandler = () => {
    setOptionVisible(!isOptionVisible);
  };

  return (
    <S.Wrap>
      <S.Select onClick={onClickToggleHandler} size={size}>
        <div>{label}</div>
        <div>icon</div>
      </S.Select>
      {isOptionVisible && (
        <S.Option size={size}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </S.Option>
      )}
    </S.Wrap>
  );
};

export default Select;
