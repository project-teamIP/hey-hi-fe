import React from "react";
import * as S from "./style";

const MainKeyword = () => {
  return (
    <S.MainKeywordBox>
      <h2>
        텍스트를 입력하고
        <br />
        새로 텍스트를 입력해주세요!
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <S.BoxContainer>
        <S.KeywordImgBox>
          <img src="" alt="keyword_1" />
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src="" alt="keyword_2" />
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src="" alt="keyword_3" />
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src="" alt="keyword_4" />
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src="" alt="keyword_5" />
        </S.KeywordImgBox>
      </S.BoxContainer>
    </S.MainKeywordBox>
  );
};

export default MainKeyword;
