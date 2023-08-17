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
  margin-top: 12px;
  font-size: 17px;
`;

// 평점 컨테이너
export const Grades = styled.div`
  display: flex;
  margin: 28px 0px;
  gap: 17px;
`;

export const Grade = styled.div`
  display: flex;
  width: 58px;
  height: 58px;
  background: red;
`;

// 후기
export const Review = styled.textarea`
  width: 446px;
  height: 160px;
  padding: 21px 23px;
  border-radius: 15px;
  font-size: 17px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
  margin: 46px 0px 60px;
`;
