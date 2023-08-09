import React from "react";
import { StyledContainer, DashBoardStyleProps } from "./style";

const DashBoardBox: React.FC<DashBoardStyleProps> = ({ children, ...restProps }) => {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export default DashBoardBox;
