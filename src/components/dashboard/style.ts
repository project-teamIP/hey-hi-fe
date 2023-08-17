import styled, { css } from "styled-components";

export interface DashBoardStyleProps {
  children: React.ReactNode;
  size?: "diallogBox" | "callLog" | "memo" | "interest";
  style?: React.CSSProperties;
}

export const StyledContainer = styled.div<DashBoardStyleProps>`
  border: none;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 25px 0px #e2e8f2;

  ${({ size }) => {
    switch (size) {
      case "diallogBox":
        return css`
          height: 392px;
          width: 450px;
        `;
      case "callLog":
        return css`
          height: 392px;
          width: 623px;
        `;
      case "memo":
        return css`
          height: 392px;
          width: 1106px;
        `;
      case "interest":
        return css`
          height: 818px;
          width: 430px;
        `;
      default:
        return css`
          height: 392px;
          width: 450px;
        `;
    }
  }}
`;
