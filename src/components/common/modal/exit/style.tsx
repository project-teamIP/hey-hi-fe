import { styled } from "styled-components";

// 모달 내부
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 263px;
  margin: 0 auto;
  border-radius: 30px;
  background: #ffffff;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 타이틀
export const Title = styled.div`
  margin-top: 40px;
  color: #000;
  font-size: 34px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 18px;
`;

// 내용
export const Content = styled.div`
  color: #000;
  font-size: 17px;
  font-weight: 400;
  line-height: 140%;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
  margin-bottom: 38px;
`;
