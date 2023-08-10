import React, { useState } from "react";
import * as S from "./style";
import SlideOne from "../../components/common/signup/SlideOne";
import SlideTwo from "../../components/common/signup/SlideTwo";
import SlideThree from "../../components/common/signup/SlideThree";

const Signup = () => {
  // useState
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [userData, setUserData] = useState({
    loginId: "",
    password: "",
    nickname: "",
    country: "",
    gender: "",
    language: "",
    interest: "",
  });

  // 클릭 시 슬라이드 번호 이동
  const onClickNextButtonHandler = () => {
    // 슬라이드 1 에서 아이디와 비밀번호 입력을 마친 경우
    if (slideIndex === 0) {
      // 슬라이드 이동
      goToSlide(slideIndex + 1);
    } else {
      if (slideIndex === 2) {
        // Api 호출을 통해 통신 보내기
      }
      goToSlide(slideIndex + 1);
    }
  };

  // 슬라이드 이동
  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  console.log(userData);
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
          {/* 페이지 1 */}
          <SlideOne
            userData={userData}
            setUserData={setUserData}
            slideIndex={slideIndex}
            onClickNextButtonHandler={onClickNextButtonHandler}
          />
          {/* 페이지 2 */}
          <SlideTwo
            userData={userData}
            setUserData={setUserData}
            slideIndex={slideIndex}
            onClickNextButtonHandler={onClickNextButtonHandler}
          />
          {/* 페이지 3 */}
          <SlideThree />
        </S.Slides>
      </S.Container>
    </S.Wrap>
  );
};

export default Signup;
