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

// 신고 분류
export const ReportSelect = styled.div`
  display: flex;
  margin: 30px 0px 22px;
  color: #a0a0a0;

  label {
    margin-right: 30px;
  }
  label:last-child {
    margin: 0;
  }

  input.selected + label,
  label.selected {
    color: #323232;
  }
`;

// 신고 상세 내용
export const Report = styled.input`
  width: 446px;
  height: 48px;
  border: 1px solid #a0a0a0;
  border-radius: 15px;
  background: #f8f8f8;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
  margin: 46px 0px 60px;
`;
