import React from 'react'
import { styled } from 'styled-components'
import Error404 from '../assets/images/Error404.svg'
import { useNavigate } from 'react-router'
import { useSelector } from "react-redux";
import { RootState } from '../types/user';

interface ButtonProps {
  bc: string;
  color: string;
}

const Error = () => {
  // 로그인 상태
  const state = useSelector((state: RootState) => state.isLoggedIn.isLoggedIn);

  // 네비게이트
  const navigate = useNavigate();

  // 이동로직
  const goBack = () => {
    navigate(-1); // 뒤로 가기
  };

  const goHome = () => {
    if (state) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };
  
  return (
    <Wrap>
      <Img src={Error404} />
      <Title>죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.</Title>
      <SubTitle>
        페이지의 주소가 잘못 입력되었거나, <br/>
        주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
      </SubTitle>
      <ButtonContainer>
        <Button bc="#EFF0F1" color={"#000000"} onClick={goHome}>홈으로</Button>
        <Button bc="#FF6E46" color={"#FFFFFF"} onClick={goBack}>이전 페이지로</Button>
      </ButtonContainer>
    </Wrap>
  )
}

export default Error

// 전체
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 70px auto 0px;
`

// 404 이미지
const Img = styled.img`
  margin-top: 194px;
`

// 타이틀
const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  margin: 18px 0px 40px;
`

// 서브 타이틀
const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: normal; 
  text-align: center;
  margin-bottom: 62px;
`

// 버튼 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
`

// 버튼
const Button = styled.button<ButtonProps>`
  width: 224px;
  height: 62px;
  border-radius: 50px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  background: ${({ bc }) => bc};

  color: ${({ color }) => color};
  cursor: pointer;
`