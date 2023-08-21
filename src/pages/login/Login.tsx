import React from "react";
import { styled } from "styled-components";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-query";
import { userLogin } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/modules/userAuth";
import LogoImage from "../../assets/images/LogoImage.svg";
import Google from "../../assets/images/google.svg";
import Kakao from "../../assets/images/kakao.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 아이디, 비밀번호
  const [userId, onChangeUserIdHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  // KaKao 로그인
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  // Google 로그인
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const GOOGLE_SCOPE = "openid profile email";
  const GOOGLE_RESPONSE_TYPE = "code";
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=${GOOGLE_SCOPE}&response_type=${GOOGLE_RESPONSE_TYPE}`;

  // Mutation
  const loginMutation = useMutation(userLogin, {
    onSuccess: () => {
      dispatch(logIn());
      navigate("/dashboard");
    },
    onError: () => {
      // 아이디나 비밀번호가 올바르지 않을때.
      alert("아이디나 비밀번호가 올바르지 않습니다.");
    },
  });

  // Handler
  const onClickLoginHandler = () => {
    const loginData = {
      loginId: userId,
      password: password,
    };
    loginMutation.mutate(loginData);
  };

  const onClickKaKaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const onClickGoogleLoginHandler = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };
  return (
    <Wrap>
      <Logo>
        <img src={LogoImage} alt="로고" />
      </Logo>
      {/* 일반로그인 */}
      <LoginContainer>
        <Input
          placeholder="이메일을 입력하세요"
          value={userId}
          onChangeHandler={onChangeUserIdHandler}
          size="medium"
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          type="password"
          value={password}
          onChangeHandler={onChangePasswordHandler}
          size="medium"
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onClickLoginHandler();
            }
          }}
        />
      </LoginContainer>
      {/* OR */}
      <OR>OR</OR>
      {/* 소셜로그인 */}
      <SocialContainer>
        <Button.Primary
          size="loginbtn"
          bc="#F8F8F8"
          color="#000000"
          onClick={onClickGoogleLoginHandler}>
          <img src={Google} alt="google" />
          구글로 시작하기
        </Button.Primary>
        <Button.Primary
          size="loginbtn"
          bc="#F8F8F8"
          color="#000000"
          onClick={onClickKaKaoLoginHandler}>
          <img src={Kakao} alt="kakao" />
          카카오로 시작하기
        </Button.Primary>
      </SocialContainer>
      {/* 로그인버튼 */}
      <LoginButton size="middle" onClick={onClickLoginHandler} bc="#FF6E46">
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
  margin: 210px auto 0px;
`;

// 로고
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 55px;
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
  margin: 35px 0px;
  font-size: 18px;
  font-weight: 600;
  color: #a0a0a0;

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
  gap: 35px;
`;

// 로그인 버튼
const LoginButton = styled(Button.Primary)`
  margin: 35px 0px 80px;
`;

// 회원가입
const SignUp = styled.div`
  display: flex;
  justify-content: center;
`;
