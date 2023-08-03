import React, { useState } from "react";
import * as S from "./style";

const Select = () => {
  // 토글 설정
  const [isOptionVisible, setOptionVisible] = useState<boolean>(false);

  // 클릭 시 열기/닫기
  const onClickToggleHandler = () => {
    setOptionVisible(!isOptionVisible);
  };

  return (
    <S.Wrap>
      <S.Select onClick={onClickToggleHandler}>
        <div>Select option</div>
        <div>icon</div>
      </S.Select>
      {isOptionVisible && (
        <S.Option>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </S.Option>
      )}
    </S.Wrap>
  );
};

export default Select;
