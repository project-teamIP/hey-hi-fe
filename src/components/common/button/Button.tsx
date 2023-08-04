import React from "react";
import styled, { css } from "styled-components";

/*--------------------------------------------------------*
 *  Primitive Button
 *--------------------------------------------------------*/
/*--------------------------------------------------------*
 *  사용법:
import Button, { PrimaryButtonProps } from "../components/common/button/Button"; 
        <Button.Primary
          size="large"
          //   outlined
        >
          BUTTON
        </Button.Primary>
        <Button.Primary size="middle">BUTTON</Button.Primary>
        <Button.Primary size="small">BUTTON</Button.Primary>
        <Button.Primary size="loginbtn" outlined>
          로그인/회원가입
        </Button.Primary>
      </div>
 *--------------------------------------------------------*/

interface PrimitiveButtonProps {
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
  radius?: string;
  bc?: string;
  color?: string;
  fw?: string;
  size?: "large" | "middle" | "small" | "loginbtn";
  activeBc?: string;
  outlined?: boolean;
}

const PrimitiveButton: React.FC<PrimitiveButtonProps> = ({ children, rightSlot, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      {rightSlot ? (
        <ButtonInner>
          <>{rightSlot}</>
          <>{children}</>
        </ButtonInner>
      ) : (
        <>{children}</>
      )}
    </StyledButton>
  );
};

/*--------------------------------------------------------*
 * Primary Style
 *--------------------------------------------------------*/

interface PrimaryButtonProps extends PrimitiveButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <PrimitiveButton
      {...props}
      bc="rgba(183, 183, 183, 1)"
      color="rgba(255, 255, 255, 1)"
      activeBc="rgba(50, 50, 50, 1)"
    />
  );
};

const Primary = PrimaryButton;

const Button = { Primary };

const StyledButton = styled.button<PrimitiveButtonProps>`
  border: none;
  cursor: pointer;

  border-radius: ${({ radius }) => radius};
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: ${({ fw }) => fw};

  &:active {
    background-color: ${({ activeBc }) => activeBc};
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
          border-radius: 50px;
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

  ${({ outlined }) => {
    if (outlined) {
      return css`
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 1);
        color: rgba(0, 0, 0, 1);

        &:active {
          border: none;
          background-color: rgba(50, 50, 50, 1);
          font-weight: 600;
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
        }
      `;
    }
  }}
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export type { PrimaryButtonProps };
export default Button;
