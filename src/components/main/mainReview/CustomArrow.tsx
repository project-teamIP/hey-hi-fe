import React from "react";
import * as S from "./style";

interface CustomArrowProps {
  // onClick: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = () => (
  <div className="custom-prev-arrow">
    <img src={require(`../../../assets/images/main/chevron_left.png`)} alt="left-arrow" />
  </div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = () => (
  <div className="custom-next-arrow">
    <img src={require(`../../../assets/images/main/chevron_right.png`)} alt="right-arrow" />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
