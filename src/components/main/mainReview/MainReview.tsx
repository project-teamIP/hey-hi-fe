import React from "react";
import * as S from "./style";

const MainReview = () => {
  return (
    <S.MainReviewBox>
      <S.SectionNum>02</S.SectionNum>
      <h1>생생한 유저들의 후기!</h1>
      <p>계속 한줄로 텍스트를 입력해 문장을 완성해주세요.</p>
      <S.ReviewWrapper>
        <img src="https://via.placeholder.com/376x491" alt="review1" />
        <img src="https://via.placeholder.com/376x491" alt="review2" />
        <img src="https://via.placeholder.com/376x491" alt="review3" />
        <img src="https://via.placeholder.com/376x491" alt="review4" />
      </S.ReviewWrapper>
    </S.MainReviewBox>
  );
};

export default MainReview;
