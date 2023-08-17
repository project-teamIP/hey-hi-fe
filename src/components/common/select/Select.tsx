import React, { useState } from "react";
import * as S from "./style";
import DropDownBtn from "../../../assets/images/DropDownBtn.svg";

interface SelectProps {
  label: string;
  options: string[];
  size?: "normal" | "large";
  onChangeHandler?: (selectedOption: string) => void;
}

const Select = ({ label, options, size, onChangeHandler }: SelectProps) => {
  // 토글 설정
  const [isOptionVisible, setOptionVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // 클릭 시 열기/닫기
  const onClickToggleHandler = () => {
    setOptionVisible(!isOptionVisible);
  };

  // 옵션 클릭 핸들러
  const onOptionClickHandler = (option: string) => {
    setSelectedOption(option);
    setOptionVisible(false);
    if (onChangeHandler) {
      // onChangeHandler가 제공되었을 때만 호출
      onChangeHandler(option);
    }
  };

  return (
    <S.Wrap>
      <S.Select onClick={onClickToggleHandler} size={size}>
        <div>{selectedOption || label}</div>
        <div>
          <img src={DropDownBtn} alt="dropdown" />
        </div>
      </S.Select>
      {isOptionVisible && (
        <S.Option size={size}>
          {options.map((option, index) => (
            <li key={index} onClick={() => onOptionClickHandler(option)}>
              {option}
            </li>
          ))}
        </S.Option>
      )}
    </S.Wrap>
  );
};

export default Select;
