import React from "react";
import styled from "styled-components";
import * as S from "./style";

const InterestSelect = () => {
  return (
    <div>
      <h3>나의 관심사</h3>
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
    </div>
  );
};

export default InterestSelect;
