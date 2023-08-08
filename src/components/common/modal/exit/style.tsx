import { styled } from "styled-components";

// 전체 레이아웃
export const Wrap = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgb(160, 160, 160, 0.8);
  z-index: 1;
`;

// 모달 내부
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  margin: 0 auto;
  padding: 40px 76px 36px;
  border-radius: 30px;
  background: #ffffff;
`;

// 타이틀
export const Title = styled.div`
  font-size: 34px;
`;

// 내용
export const Content = styled.div`
  margin: 18px 0px 34px;
  font-size: 17px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
`;
