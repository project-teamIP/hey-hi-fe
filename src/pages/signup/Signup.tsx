import React, { useState, useEffect } from "react";
import * as S from "./style";
import SlideOne from "../../components/common/signup/SlideOne";
import SlideTwo from "../../components/common/signup/SlideTwo";
import SlideThree from "../../components/common/signup/SlideThree";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../api/api";

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
  // Mutation
  const userRegisterMutation = useMutation(userRegister);

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
    goToSlide(slideIndex + 1);
  };

  // 슬라이드 이동
  const goToSlide = (index: number) => {
    setSlideIndex(index);
    // 슬라이드 이동 시 페이지 히스토리에 상태 저장
    window.history.pushState(null, "", `?slide=${index}`);
  };

  // 유저 회원가입 버튼
  const onClickUserRegisterHandler = () => {
    userRegisterMutation.mutate(userData);
    navigate("/login");
  };
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
          <SlideThree
            userData={userData}
            setUserData={setUserData}
            slideIndex={slideIndex}
            onClickUserRegisterHandler={onClickUserRegisterHandler}
          />
        </S.Slides>
      </S.Container>
    </S.Wrap>
  );
};

export default Signup;
