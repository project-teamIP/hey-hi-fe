import React from "react";
import { StyledButton, ButtonInner, PrimitiveButtonProps } from "./style";

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

const PrimitiveButton: React.FC<PrimitiveButtonProps> = ({ children, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <ButtonInner>
        <>{children}</>
      </ButtonInner>
    </StyledButton>
  );
};

interface PrimaryButtonProps extends PrimitiveButtonProps {
  onClick?: () => void; // 클릭 이벤트 핸들러 추가
}

/*--------------------------------------------------------*
 * Primary Style
 *--------------------------------------------------------*/

interface PrimaryButtonProps extends PrimitiveButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, ...props }) => {
  return (
    <PrimitiveButton
      {...props}
      bc="rgba(183, 183, 183, 1)"
      color="rgba(255, 255, 255, 1)"
      activeBc="rgba(50, 50, 50, 1)"
      onClick={onClick}
    />
  );
};

const Primary = PrimaryButton;

const Button = { Primary };

export default Button;
