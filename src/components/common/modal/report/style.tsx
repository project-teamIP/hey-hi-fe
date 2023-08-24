import { styled } from "styled-components";

// 모달 내부
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 496px;
  height: 394px;
  margin: 0 auto;
  border-radius: 30px;
  background: #ffffff;
  padding: 30px;
  gap: 20px;
  justify-content: center;
  margin-top: 55px;
`;

// 타이틀
export const Title = styled.div`
  color: #000;
  font-size: 34px;
  font-weight: 600;
  line-height: normal;
`;

// 신고 분류
export const ReportSelect = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
  width: 90%;
  height: 40%;
  flex-direction: row;
  gap: 20px;
  color: #a0a0a0;
`;
// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
`;

export const TwoSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: yellow; */
  width: 100%;
  height: 70%;
`;

export const InputLabelGroup = styled.div`
  /* background-color: burlywood; */
  display: flex;
  align-items: center;
  input {
    width: 24px;
    height: 24px;
    stroke-width: 1.5px;
    stroke: #a0a0a0;
    /* input 요소에 마우스가 올라갔을 때의 스타일 
     &:hover {
      background-color: #ff6e46 /* 원하는 색상;
    } */
  }

  label {
    margin-right: 30px;
    color: #a0a0a0;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  label:last-child {
    margin: 0;
  }

  input.selected + label,
  label.selected {
    color: #323232;
  }
`;
