import React from "react";
import * as S from "./style";
import Button from "../button/Button";
import Input from "../input/Input";

interface SlideOneProps {
  slideIndex: number;
  onClickNextButtonHandler: () => void;
}

const SlideOne = ({ slideIndex, onClickNextButtonHandler }: SlideOneProps) => {
  return (
    <S.Wrap>
      {/* 닉네임 */}
      <S.Title>이메일</S.Title>
      <S.NameContainer>
        <Input placeholder="example@gmail.com" value="value" size="small" />
        <Button.Primary size="small">중복확인</Button.Primary>
      </S.NameContainer>

      {/* 비밀번호 */}
      <S.Title>비밀번호</S.Title>
      <Input placeholder="비밀번호" value="value" />

      {/* 비밀번호 확인 */}
      <S.Title>성별</S.Title>
      <Input placeholder="비밀번호 재입력" value="value" />

      {/* 다음으로 넘어가기 */}
      <S.NextButton size="middle" onClick={onClickNextButtonHandler}>
        다음으로 넘어가기
      </S.NextButton>
    </S.Wrap>
  );
};

export default SlideOne;
