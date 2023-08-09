import styled, { css } from "styled-components";

export interface DashBoardStyleProps {
  children: React.ReactNode;
  size?: "diallogBox" | "callLog" | "review" | "interest";
  style?: React.CSSProperties;
}

export const StyledContainer = styled.div<DashBoardStyleProps>`
  border: none;
  border-radius: 30px;
  background-color: rgba(246, 246, 246, 1);

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
      case "review":
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
