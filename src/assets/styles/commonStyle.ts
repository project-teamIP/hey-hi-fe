import { keyframes, styled } from "styled-components";

//로딩중 스피너
export const SpinnerBox = styled.div`
  width: 100%;
  height: 874px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  animation: ${rotate} 2s linear infinite;
`;
//스피너 끝
