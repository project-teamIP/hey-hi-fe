import styled, { css } from "styled-components";

export interface PrimitiveButtonProps {
  children: React.ReactNode;
  radius?: string;
  bc?: string;
  color?: string;
  fw?: string;
  size?: "large" | "middle" | "small" | "the smallest" | "loginbtn" | "sns";
  width?: string;
  height?: string;
  activebc?: string;
  outlined?: "true" | "false";
  onClick?: () => void;
  style?: React.CSSProperties; // style 속성 추가
}

export const StyledButton = styled.button<PrimitiveButtonProps>`
  border: none;
  cursor: pointer;

  border-radius: ${({ radius }) => radius};
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: ${({ fw }) => fw};

  &:active {
    background-color: ${({ activebc }) => activebc};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 66px;
          width: 471px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 25px;
        `;
      case "middle":
        return css`
          height: 60px;
          width: 458px;
          border-radius: 15px;
          font-weight: 700;
          font-size: 20px;
        `;
      case "small":
        return css`
          height: 70px;
          width: 185px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 26px;
        `;
      case "the smallest":
        return css`
          height: 60px;
          width: 141px;
          border-radius: 15px;
          font-weight: 600;
          font-size: 22px;
        `;
      case "loginbtn":
        return css`
          height: 44px;
          width: 153px;
          border: 1px solid #000;
          border-radius: 50px;
          font-weight: 400;
          font-size: 16px;
        `;
      case "sns":
        return css`
          width: 217px;
          height: 60px;
          background-color: #f8f8f8;
          border: 1px solid #bababa;
          border-radius: 15px;
          color: #000;
          font-size: 18px;
          font-weight: 600;
        `;
      default:
        return css`
          height: 66px;
          width: 471px;
          border-radius: 15px;
          font-weight: 700;
          font-size: 20px;
        `;
    }
  }}

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid rgba(0, 0, 0, 1);
      border-radius: 50px;
      background: transparent;
      color: rgba(0, 0, 0, 1);

      &:active {
        border: none;
        background-color: rgba(50, 50, 50, 1);
        font-weight: 600;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
      }
    `}
`;

export const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
