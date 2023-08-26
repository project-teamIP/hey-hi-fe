import React from "react";
import * as S from "./style";

interface CustomArrowProps {
  // onClick: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = () => (
  <S.CustomArrow style={{ left: "0" }}>
    <img src={require(`../../../assets/images/main/chevron_left.png`)} alt="left-arrow" />
  </S.CustomArrow>
);

const CustomNextArrow: React.FC<CustomArrowProps> = () => (
  <S.CustomArrow style={{ right: "0" }}>
    <img src={require(`../../../assets/images/main/chevron_right.png`)} alt="right-arrow" />
  </S.CustomArrow>
);

export { CustomPrevArrow, CustomNextArrow };
