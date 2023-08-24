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
  width: 496px;
  height: 394px;
  margin: 0 auto;
  /* padding: 40px 76px 36px; */
  border-radius: 30px;
  /* background: #ffffff; */
  background-color: blueviolet;
  padding: 30px;
  gap: 20px;
`;

// 타이틀
export const Title = styled.div`
  /* margin-top: 59px; */
  color: #000;
  font-size: 34px;
  font-weight: 600;
  line-height: normal;
  /* margin-bottom: 47px; */
`;

// 신고 분류
export const ReportSelect = styled.div`
  background-color: green;
  display: flex;
  align-items: center;
  width: 90%;
  height: 40%;
  flex-direction: row;
  gap: 20px;
  /* margin: 47px 0px 22px; */
  color: #a0a0a0;
`;

// 신고 상세 내용
// export const Report = styled.input`
//   background-color: red;
//   width: 446px;
//   height: 48px;
//   border: 1px solid #a0a0a0;
//   border-radius: 15px;
//   background: #f8f8f8;
// `;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  /* background-color: beige; */
  display: flex;
  gap: 19px;
  /* margin: 46px 0px 60px; */
`;

export const ReportBtn = styled.button`
  width: 185px;
  height: 70px;
  border-radius: 50px;
  background: #eff0f1;
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

export const TwoSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: yellow;
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
    background-color: blue;
    margin-right: 30px;
    color: #a0a0a0;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  label:last-child {
    background: purple;
    margin: 0;
  }

  input.selected + label,
  label.selected {
    color: #323232;
  }
`;
