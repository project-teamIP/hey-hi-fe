import React, { useEffect, useState } from "react";
import * as S from "./style";

const stepTexts = [
  {
    title: "회원가입을 해주세요",
    content:
      "헤이,안녕을 시작하기 전 먼저 회원가입을 진행해주세요. 성별,언어,관심사 등을 설정할 수 있어요.",
  },
  {
    title: "통화 시작하기를 눌러보세요",
    content:
      "로그인 후 메인페이지에서 통화 시작하기를 누르면 나의 관심사와 잘맞는 친구가 매칭이 된답니다.",
  },
  {
    title: "친구와 언어교환을 해보세요",
    content:
      "매칭된 친구와 언어를 교환해보세요. 서툴더라도 관심사로 대화를 시작하면 쉽게 친해질 수 있어요. ",
  },
  {
    title: "특별한 친구를 만들어보세요",
    content: "친구와의 대화가 즐거웠다면 친구추가를 통해 친구를 만들어보세요.",
  },
];

const images = ["step1-signup", "step2-dashboard", "step3-calling", "step4-friends"];

const MainSlide = () => {
  // 슬라이드 현재 페이지
  const [currentStep, setCurrentStep] = useState(1);

  // 이전 페이지
  // const onClickPrevSlideHandler = () => {
  //   const newStep = ((currentStep - 2 + stepTexts.length) % stepTexts.length) + 1;
  //   setCurrentStep(newStep);
  // };
  // 다음 페이지
  // const onClickNextSlideHandler = () => {
  //   const newStep = (currentStep % stepTexts.length) + 1;
  //   setCurrentStep(newStep);
  // };

  useEffect(() => {
    // 5초 간격으로 슬라이드 자동 넘김
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep % stepTexts.length) + 1);
    }, 5000);
    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.MainSlideBox>
      <S.SectionNum>02</S.SectionNum>
      <h2>헤이,안녕 이용방법</h2>
      <S.MainSlideInner>
        <S.ProgressBar>
          {stepTexts.map((text, index) => (
            <S.StepWrapper key={index} className="step-wrapper">
              {index !== stepTexts.length - 1 && (
                <S.StepLine
                  active={
                    index + 1 < currentStep || (currentStep === 1 && index === stepTexts.length - 1)
                  }
                />
              )}
              <S.Step key={index} active={index + 1 <= currentStep}></S.Step>
              <S.TextWrapper>
                <S.StepTitle active={index + 1 === currentStep}>{text.title}</S.StepTitle>
                <S.StepTitleUnderline
                  active={index + 1 === currentStep}
                  length={text.title.length}
                />
                <S.StepContent active={index + 1 === currentStep}>{text.content}</S.StepContent>
              </S.TextWrapper>
            </S.StepWrapper>
          ))}
        </S.ProgressBar>
        <S.SliderWrapper>
          <S.SliderImage
            src={require(`../../../assets/images/main/${images[currentStep - 1]}.png`)}
            alt={`Slide ${currentStep}`}
          />
          {/* <S.ButtonWrapper>
          <S.SlideBtn onClick={onClickPrevSlideHandler}>
            <img src={require(`../../../assets/images/main/prev.png`)} alt="prev-btn" />
          </S.SlideBtn>
          <S.SlideBtn onClick={onClickNextSlideHandler}>
            <img src={require(`../../../assets/images/main/next.png`)} alt="next-btn" />
          </S.SlideBtn>
        </S.ButtonWrapper> */}
        </S.SliderWrapper>
      </S.MainSlideInner>
    </S.MainSlideBox>
  );
};

export default MainSlide;
