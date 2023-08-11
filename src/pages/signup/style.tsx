import { styled } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
  margin: 170px auto 0px;
`;

// 회원가입 헤더
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 68px;

  h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;

export const StepDots = styled.div`
  display: flex;
  margin-bottom: 33px;
  gap: 90px;
`;

export const StepDot = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  color: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 20px;
  background: none;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translate(0%, -50%);
    display: block;
    content: "";
    width: 92px;
    height: 2px;
    background: #d9d9d9;
  }

  &.hideAfter::after {
    display: none;
  }

  &.active {
    color: #ffffff;
    border: 2px solid #ff6e46;
    background: #ff6e46;
  }

  &.active::after {
    background: #ff6e46;
  }
`;

// 슬라이드 컨테이너
export const Container = styled.div`
  overflow: hidden;
`;

export const Slides = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;
