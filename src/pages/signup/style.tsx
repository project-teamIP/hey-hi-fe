import { styled } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
  margin: 0 auto;
`;

// 회원가입 헤더
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 68px;
`;

export const StepDots = styled.div`
  display: flex;
  gap: 90px;
`;

export const StepDot = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #d9d9d9;

  &::after {
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translate(0%, -50%);
    display: block;
    content: "";
    width: 90px;
    height: 2px;
    background: #d9d9d9;
  }

  &.hideAfter::after {
    display: none;
  }

  &.active {
    background: #323232;
  }

  &.active::after {
    background: #323232;
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
