import styled from "styled-components";

export const InterestBox = styled.div`
  border: 1px solid #d8dee9;
  background-color: #f8f9fc;
  width: 177px;
  height: 134px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  p {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const InterestBoxContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-rows: auto auto; /* 2개의 자동 크기 행 생성 */
  grid-template-columns: auto auto; /* 2개의 자동 크기 열 생성 */
  gap: 20px; /*그리드 아이템 사이의 간격 설정 */
`;

export const InterestWrapper = styled.div`
  margin: 46px 30px 10px 30px;
  /* margin-left: 30px; */
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: green; */
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
    line-height: 23.87px;
  }
`;

export const ImageBox = styled.div`
  width: 54px;
  height: 54px;

  img {
    max-width: 100%;
    height: auto;
    size: cover;
    top: 0;
    left: 0;
  }
`;

export const ChartBox = styled.div`
  height: 100%;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    line-height: 23.87px;
  }
`;
