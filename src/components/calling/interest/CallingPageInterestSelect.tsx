import React from "react";
import * as S from "../../dashboard/interest/style";
import styled from "styled-components";

const CallingPageInterestSelect: React.FC = () => {
  return (
    <MatchingUserInterstWrapper>
      <h3>상대방의 관심사</h3>
      <S.InterestBoxContainer>
        <S.InterestBox>
          <S.ImageBox>
            <img src={require("../../../assets/images/book.png")} alt="book" />
          </S.ImageBox>
          <p>텍스트</p>
        </S.InterestBox>
        <S.InterestBox style={{ backgroundColor: "#004BC8", color: "#FFFFFF" }}>
          <S.ImageBox>
            <img src={require("../../../assets/images/movie.png")} alt="movie" />
          </S.ImageBox>
          <p>텍스트</p>
        </S.InterestBox>
        <S.InterestBox style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
          <S.ImageBox>
            <img src={require("../../../assets/images/game.png")} alt="game" />
          </S.ImageBox>
          <p>텍스트</p>
        </S.InterestBox>
        <S.InterestBox style={{ backgroundColor: "#FF6E46" }}>
          <S.ImageBox style={{ width: "48px", height: "48px" }}>
            <img src={require("../../../assets/images/sport.png")} alt="sport" />
          </S.ImageBox>
          <p>텍스트</p>
        </S.InterestBox>
      </S.InterestBoxContainer>
    </MatchingUserInterstWrapper>
  );
};

const MatchingUserInterstWrapper = styled.div`
  width: 437px;
  height: 423px;

  h3 {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
    line-height: 23.87px;
  }
`;

export default CallingPageInterestSelect;
