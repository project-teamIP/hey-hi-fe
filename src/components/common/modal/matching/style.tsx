import styled, { keyframes } from "styled-components";

//매칭 모달
export const MatchingContainer = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 541px;
  height: 376px;
  padding: 50px 23px 42px;
  border-radius: 30px;
  background: #ffffff;

  h2 {
    color: #000;
    font-size: 34px;
    text-align: center;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }
  h4 {
    color: #000;
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    line-height: 140%; /* 22.95px */
  }
`;
export const MatchingSpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  height: 156px;
  width: 541px;
`;
export const MatchingBtn = styled.button`
  width: 326px;
  height: 70px;
  border-radius: 50px;
  background-color: #eff0f1;
  color: #000;
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
  border: none;

  &:active {
    background-color: #ff6e46;
    color: #ffffff;
  }
`;

export const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const SpinnerImage = styled.img`
  width: 50px;
  height: 50px;
  animation: ${rotateAnimation} 1s linear infinite; // 회전 애니메이션 적용
`;
