import styled, { css } from "styled-components";

export interface PrimitiveButtonProps {
  children: React.ReactNode;
  radius?: string;
  bc?: string;
  color?: string;
  fw?: string;
  size?: "large" | "middle" | "small" | "the smallest" | "loginbtn";
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
          font-weight: 600;
          font-size: 22px;
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
          height: 60px;
          width: 217px;
          border: 1px solid #bababa;
          border-radius: 15px;
          font-weight: 400;
          font-size: 16px;
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
