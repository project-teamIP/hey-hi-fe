import styled, { css } from "styled-components";

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
  ${(props) =>
    props.className === "box-color-0" &&
    css`
      background-color: #f8f9fc; /* 예시 색상 1 */
    `}

  ${(props) =>
    props.className === "box-color-1" &&
    css`
      background-color: #004bc8; /* 예시 색상 2 */
      color: #fff;
    `}

  ${(props) =>
    props.className === "box-color-2" &&
    css`
      background-color: #000000; /* 예시 색상 3 */
      color: #fff;
    `}

  ${(props) =>
    props.className === "box-color-3" &&
    css`
      background-color: #ff6e46; /* 예시 색상 4 */
    `}

  ${({ size }) => {
    switch (size) {
      case "dashboard":
        return css`
          width: 169px;
          height: 121px;
        `;
      case "callroom":
        return css`
          width: 198px;
          height: 101px;
        `;
      default:
        return css`
          width: 198px;
          height: 101px;
        `;
    }
  }}
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

// export const InterestBox = styled.div`
//   border: 1px solid #d8dee9;
//   background-color: #f8f9fc;
//   width: 177px;
//   height: 134px;
//   border-radius: 30px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 10px;
//   align-items: center;

//   p {
//     font-size: 15px;
//     font-weight: 600;
//   }
// `;

export const InterestBoxContainer = styled.div`
  /* background-color: green; */
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
    line-height: 23.87px;
  }
`;

// export const ImageBox = styled.div`
//   width: 54px;
//   height: 54px;

//   img {
//     max-width: 100%;
//     height: auto;
//     size: cover;
//     top: 0;
//     left: 0;
//   }
// `;

export const ChartBox = styled.div`
  height: 100%;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    line-height: 23.87px;
  }
`;
