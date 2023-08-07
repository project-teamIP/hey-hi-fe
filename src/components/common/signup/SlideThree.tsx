import React from "react";
import * as S from "./style";
import Categori from "./Categori";
import Button from "../button/Button";

const SlideThree = () => {
  return (
    <S.Wrap>
      {/* 관심사 */}
      <S.NameContainer>
        <S.Title>관심사</S.Title>
        <S.Count>1/4</S.Count>
      </S.NameContainer>

      {/* 관심사 컨테이너 */}
      <S.CategoriContainer>
        {/* 관심사 Items */}
        <Categori />
        <Categori />
        <Categori />
        <Categori />
        <Categori />
        <Categori />
        <Categori />
        <Categori />
        <Categori />
      </S.CategoriContainer>
      {/* 회원가입 완료 */}
      <Button.Primary size="middle">회원가입 완료</Button.Primary>
    </S.Wrap>
  );
};

export default SlideThree;
