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

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  bc,
  color,
  activeBc,
  ...props
}) => {
  // 기본값을 설정합니다.
  const defaultBc = "rgba(183, 183, 183, 1)";
  const defaultColor = "rgba(255, 255, 255, 1)";
  const defaultActiveBc = "rgba(50, 50, 50, 1)";

  return (
    <PrimitiveButton
      {...props}
      bc={bc || defaultBc} // bc 값이 없을 경우 기본값을 사용합니다.
      color={color || defaultColor} // color 값이 없을 경우 기본값을 사용합니다.
      activeBc={activeBc || defaultActiveBc} // activeBc 값이 없을 경우 기본값을 사용합니다.
      onClick={onClick}
    />
  );
};

const Primary = PrimaryButton;

const Button = { Primary };

export default Button;
