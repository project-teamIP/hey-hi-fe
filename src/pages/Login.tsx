import React from "react";
import { styled } from "styled-components";
import Button from "../components/common/button/Button";
import Input from "../components/common/input/Input";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useMutation } from "react-query";
import { userLogin } from "../api/api";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/images/LogoImage.svg";
const Login = () => {
  const navigate = useNavigate();
  // 아이디, 비밀번호
  const [userId, onChangeUserIdHandler] = useInput();
  const [password, onChangePasswordHnadler] = useInput();

  // Mutation
  const loginMutation = useMutation(userLogin, {
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  // Hanlder
  const onClickLoginHandler = () => {
    const loginData = {
      loginId: userId,
      password: password,
    };
    loginMutation.mutate(loginData);
  };

  return (
    <Wrap>
      <Logo>
        <img src={LogoImage} alt="로고" />
      </Logo>
      {/* 소셜로그인 */}
      <SocialContainer>
        <Button.Primary size="loginbtn">구글로 시작하기</Button.Primary>
        <Button.Primary size="loginbtn">카카오로 시작하기</Button.Primary>
      </SocialContainer>
      {/* OR */}
      <OR>OR</OR>
      {/* 일반로그인 */}
      <LoginContainer>
        <Input
          placeholder="아이디를 입력하세요"
          value={userId}
          onChangeHandler={onChangeUserIdHandler}
          size="medium"
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChangeHandler={onChangePasswordHnadler}
          size="medium"
        />
      </LoginContainer>
      {/* 로그인버튼 */}
      <LoginButton size="middle" onClick={onClickLoginHandler}>
        로그인하기
      </LoginButton>
      {/* 회원가입 안내문 */}
      <SignUp>
        아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
      </SignUp>
    </Wrap>
  );
};

export default Login;

// 로그인 컴포넌트 스타일
// 전체 컨테이너
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
  margin: 70px auto 0px;
`;

// 로고
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
`;

// 소셜로그인 컨테이너
const SocialContainer = styled.div`
  display: flex;
  gap: 14px;
  padding: 0px 5px;
`;

// OR
const OR = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 33px 0px;
  &::before {
    display: block;
    position: absolute;
    content: "";
    width: 194px;
    height: 1px;
    top: 50%;
    right: 50%;
    transform: translate(0%, 50%);
    margin-right: 30px;
    background: #bababa;
  }
  &::after {
    display: block;
    position: absolute;
    content: "";
    width: 194px;
    height: 1px;
    top: 50%;
    left: 50%;
    transform: translate(0%, 50%);
    margin-left: 30px;
    background: #bababa;
  }
`;

// 일반로그인 컨테이너
const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 로그인 버튼
const LoginButton = styled(Button.Primary)`
  margin: 20px 0px 80px;
`;

// 회원가입
const SignUp = styled.div`
  display: flex;
  justify-content: center;
`;
