import React, { useState, useEffect } from "react";
import * as S from "./style";
import SlideOne from "../../components/common/signup/SlideOne";
import SlideTwo from "../../components/common/signup/SlideTwo";
import SlideThree from "../../components/common/signup/SlideThree";
import { useNavigate } from "react-router-dom";

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

  // useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    // 뒤로가기 이벤트 감지 시 슬라이드 이동
    const handlePopstate = () => {
      if (slideIndex > 0) {
        goToSlide(slideIndex - 1);
      } else {
        navigate("/"); // 더 이상 뒤로 갈 슬라이드가 없으면 홈으로 이동
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [slideIndex, navigate]);

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
    // 슬라이드 이동 시 페이지 히스토리에 상태 저장
    window.history.pushState(null, "", `?slide=${index}`);
  };

  console.log(userData);
  return (
    <S.Wrap>
      {/* 회원가입 스탭 */}
      <S.Header>
        <h1>회원가입</h1>
        <S.StepDots>
          <S.StepDot className={slideIndex >= 0 ? "active hideAfter" : "hideAfter"}>1</S.StepDot>
          <S.StepDot className={slideIndex >= 1 ? "active" : ""}>2</S.StepDot>
          <S.StepDot className={slideIndex >= 2 ? "active" : ""}>3</S.StepDot>
        </S.StepDots>
      </S.Header>

      {/* 회원가입 내용 */}
      <S.Container>
        <S.Slides style={{ transform: `translateX(-${slideIndex * 462}px)` }}>
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
