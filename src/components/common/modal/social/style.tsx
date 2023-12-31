import { styled } from "styled-components";

// 전체 레이아웃
export const Wrap = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
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
  padding: 40px 63px 36px;
  border-radius: 30px;
  background: #ffffff;
`;

// 이미지
export const Img = styled.img`
  margin-bottom: 16px;
`;

// 타이틀
export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -4px;
`;

// 보조 타이틀
export const SubTitle = styled.div`
  margin-top: 25px;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 135%;
`;

// 내용
export const Content = styled.div`
  margin: 36px 0px 33px;
  color: #6d6d6d;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
`;
