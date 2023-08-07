import React, { useState } from "react";
import * as S from "./style";
import SlideOne from "../../components/common/signup/SlideOne";
import SlideTwo from "../../components/common/signup/SlideTwo";
import SlideThree from "../../components/common/signup/SlideThree";

const Signup = () => {
  // 슬라이드의 번호를 체크
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // 클릭 시 슬라이드 번호 이동
  const onClickNextButtonHandler = () => {
    goToSlide(slideIndex + 1);
  };

  // 슬라이드 이동
  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <S.Wrap>
      {/* 회원가입 스탭 */}
      <S.Header>
        <h1>회원가입</h1>
        <S.StepDots>
          <S.StepDot
            onClick={() => goToSlide(0)}
            className={slideIndex >= 0 ? "active hideAfter" : "hideAfter"}>
            1
          </S.StepDot>
          <S.StepDot onClick={() => goToSlide(1)} className={slideIndex >= 1 ? "active" : ""}>
            2
          </S.StepDot>
          <S.StepDot onClick={() => goToSlide(2)} className={slideIndex >= 2 ? "active" : ""}>
            3
          </S.StepDot>
        </S.StepDots>
      </S.Header>

      {/* 회원가입 내용 */}
      <S.Container>
        <S.Slides style={{ transform: `translateX(-${slideIndex * 458}px)` }}>
          <SlideOne slideIndex={slideIndex} onClickNextButtonHandler={onClickNextButtonHandler} />
          <SlideTwo slideIndex={slideIndex} onClickNextButtonHandler={onClickNextButtonHandler} />
          <SlideThree />
        </S.Slides>
      </S.Container>
    </S.Wrap>
  );
};

export default Signup;
