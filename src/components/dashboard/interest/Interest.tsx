import React from "react";
import styled from "styled-components";
import DashBoardBox from "../DashBoardBox";
import LineChart from "./LineChart";

const Interest: React.FC = () => {
  const data = [10, 15, 13, 30, 40, 5];
  const labels = [
    "2023-08-07T08:00:00",
    "2023-08-07T09:00:00",
    "2023-08-07T10:00:00",
    "2023-08-07T11:00:00",
    "2023-08-07T12:00:00",
    "2023-08-07T13:00:00",
    "2023-08-07T14:00:00",
  ];

  return (
    <DashBoardBox size="interest">
      <InterestWrapper>
        <div>
          <h3>나의 관심사</h3>
          <InterestBoxContainer>
            <InterestBox>
              <ImageBox>
                <img src={require("../../../assets/images/book.png")} alt="book" />
              </ImageBox>
              <p>텍스트</p>
            </InterestBox>
            <InterestBox>
              <ImageBox>
                <img src={require("../../../assets/images/movie.png")} alt="movie" />
              </ImageBox>
              <p>텍스트</p>
            </InterestBox>
            <InterestBox>
              <ImageBox>
                <img src={require("../../../assets/images/game.png")} alt="game" />
              </ImageBox>
              <p>텍스트</p>
            </InterestBox>
            <InterestBox>
              <ImageBox style={{ width: "48px", height: "48px" }}>
                <img src={require("../../../assets/images/sport.png")} alt="sport" />
              </ImageBox>
              <p>텍스트</p>
            </InterestBox>
          </InterestBoxContainer>
        </div>
        <div>
          <h3>지금 접속한 인원</h3>
          <LineChart data={data} labels={labels} />
        </div>
      </InterestWrapper>
    </DashBoardBox>
  );
};

const InterestBox = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 177px;
  height: 134px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  p {
    font-size: 21px;
    font-weight: 600;
  }
`;

const InterestBoxContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto; /* 2개의 자동 크기 행 생성 */
  grid-template-columns: auto auto; /* 2개의 자동 크기 열 생성 */
  gap: 20px; /* 그리드 아이템 사이의 간격 설정 */
`;

const InterestWrapper = styled.div`
  margin: 40px 20px 10px 20px;
  gap: 20px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const ImageBox = styled.div`
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
export default Interest;
