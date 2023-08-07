import React from "react";
import * as S from "./style";
import Button from "../button/Button";
import Input from "../input/Input";
import Select from "../select/Select";

interface SlideTwoProps {
  slideIndex: number;
  onClickNextButtonHandler: () => void;
}

const SlideOne = ({ slideIndex, onClickNextButtonHandler }: SlideTwoProps) => {
  return (
    <S.Wrap>
      {/* 닉네임 */}
      <S.Title>닉네임</S.Title>
      <S.NameContainer>
        <Input placeholder="닉네임 입력" value="value" size="small" />
        <Button.Primary size="small">중복확인</Button.Primary>
      </S.NameContainer>

      {/* 거주국가 */}
      <S.Title>거주국가</S.Title>
      <Select label="국가를 선택해주세요." options={["한국", "미국"]} size="normal" />

      {/* 성별 */}
      <S.Title>성별</S.Title>
      <S.InputContainer>
        <input type="radio" name="gender" />
        <label>남성</label>
        <input type="radio" name="gender" />
        <label>여성</label>
      </S.InputContainer>
      <Button.Primary size="middle" onClick={onClickNextButtonHandler}>
        다음으로 넘어가기
      </Button.Primary>
    </S.Wrap>
  );
};

export default SlideOne;
