import styled, { css } from "styled-components";

// 미디어 쿼리
const mediaQuery = {
  desktop: "@media (max-width: 1463px)",
};
export interface DashBoardStyleProps {
  children: React.ReactNode;
  size?: "diallogBox" | "callLog" | "memo" | "interest";
  style?: React.CSSProperties;
}

export const StyledContainer = styled.div<DashBoardStyleProps>`
  border: 1px solid #d8dee9;
  border-radius: 30px;
  background-color: #ffffff;

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

          ${mediaQuery.desktop} {
            height: 392px;
            width: 1100px;
            margin-bottom: 57px;
          }
        `;
      default:
        return css`
          height: 392px;
          width: 450px;
        `;
    }
  }}
`;
