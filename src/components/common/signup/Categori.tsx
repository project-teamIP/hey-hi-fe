import React from "react";
import * as S from "./style";
import { CategoriProps } from "../../../types/types";

const Categori = ({ interest, image, onClick }: CategoriProps) => {
  return (
    <S.Categori onClick={onClick}>
      <S.Image>
        <img src={`/categori/${image}`} alt={interest} />
      </S.Image>
      <S.Name>{interest}</S.Name>
    </S.Categori>
  );
};

export default Categori;
