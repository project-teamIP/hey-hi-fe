import styled from "styled-components";

export const CategoriContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
  gap: 13px;
`;

export const CategoriStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8dee9;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
  /* 클래스 이름에 따라서 배경색을 설정하기 위한 mixin */
  &.box-color-0 {
    background-color: #f8f9fc; /* 예시 색상 1 */
  }

  &.box-color-1 {
    background-color: #004bc8; /* 예시 색상 2 */
    color: #fff;
  }

  &.box-color-2 {
    background-color: #000000; /* 예시 색상 3 */
    color: #fff;
  }

  &.box-color-3 {
    background-color: #ff6e46; /* 예시 색상 4 */
  }
  &.dashboard {
    width: 169px;
    height: 121px;
  }
  &.callroom {
    width: 198px;
    height: 101px;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const InterestBoxContainer = styled.div`
  /* background-color: green; */
  margin-top: 30px;
  display: grid;
  grid-template-rows: auto auto; /* 2개의 자동 크기 행 생성 */
  grid-template-columns: auto auto; /* 2개의 자동 크기 열 생성 */
  gap: 20px; /*그리드 아이템 사이의 간격 설정 */
`;

export const InterestWrapper = styled.div`
  margin: 46px auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 45%;
  h3 {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 23.87px;
    width: 82%;
  }
`;

export const ChartContainer = styled.div`
  height: 100%;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    line-height: 23.87px;
  }
`;

export const ChartBox = styled.div`
  display: flex;
  width: 389px;
  height: 268px;
  border-radius: 30px;
  border: 1px solid #d8dee9;
  background: #f8f9fc;
  align-items: center;
`;

export const InterestArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px auto;
  width: 100%;
`;
