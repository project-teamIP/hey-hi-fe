import React, { useState, useEffect } from "react";
import * as S from "./style";
import SlideOne from "../../components/common/signup/SlideOne";
import SlideTwo from "../../components/common/signup/SlideTwo";
import SlideThree from "../../components/common/signup/SlideThree";

const Signup = () => {
  // 슬라이드의 번호를 체크
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const stepDotCount = 3;

  // 클릭 시 슬라이드 번호 이동
  const onClickNextButtonHandler = () => {
    goToSlide(slideIndex + 1);
  };

  // 슬라이드 이동
  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  // 브라우저 뒤로가기 클릭시 뒤로가는 로직
  useEffect(() => {
    // 뒤로가기 이벤트 리스너 생성
    const onClickPrevButtonHandler = () => {
      const prevToSlide = Math.max(0, slideIndex - 1);
      setSlideIndex(prevToSlide);
    };

    window.addEventListener("prev", onClickPrevButtonHandler);

    // 컴포넌트 언 마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("prev", onClickPrevButtonHandler);
    };
  }, [slideIndex]);

  return (
    <S.Wrap>
      <S.Container>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </S.Container>
    </S.Wrap>
  );
};

export default Signup;
