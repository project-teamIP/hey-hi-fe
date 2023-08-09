import React, { useState } from "react";
import * as S from "./style";

const stepTexts = [
  {
    title: "텍스트를 입력해주세요.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsam vitae. Delectus asperiores quia quam amet libero pariatur.",
  },
  {
    title: "텍스트를 입력해주세요.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex numquam amet dicta eligendi accusamus. Incidunt perferendis aut id cumque sunt excepturi voluptas aliquam!",
  },
  {
    title: "텍스트를 입력해주세요.",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam accusamus in.",
  },
  {
    title: "텍스트를 입력해주세요.",
    content:
      "Lorem ipsum dolor sit amet. aut recusandae dolore libero earum, accusantium quod aperiam esse, dolorum alias porro quas?",
  },
];

const images = [
  "https://via.placeholder.com/924x698",
  "https://via.placeholder.com/924x698",
  "https://via.placeholder.com/924x698",
  "https://via.placeholder.com/924x698",
];

const MainSlide = () => {
  // 슬라이드 현재 페이지
  const [currentStep, setCurrentStep] = useState(1);
  // 이전 페이지
  const onClickPrevSlideHandler = () => {
    const newStep = ((currentStep - 2 + stepTexts.length) % stepTexts.length) + 1;
    setCurrentStep(newStep);
  };
  // 다음 페이지
  const onClickNextSlideHandler = () => {
    const newStep = (currentStep % stepTexts.length) + 1;
    setCurrentStep(newStep);
  };

  return (
    <S.MainSlideBox>
      <S.ProgressBar>
        {stepTexts.map((text, index) => (
          <S.StepWrapper>
            {index !== stepTexts.length - 1 && (
              <S.StepLine
                active={
                  index + 1 < currentStep || (currentStep === 1 && index === stepTexts.length - 1)
                }
              />
            )}
            <S.Step key={index} active={index + 1 <= currentStep}></S.Step>
            <S.TextWrapper>
              <h3>{text.title}</h3>
              <p>{text.content}</p>
            </S.TextWrapper>
          </S.StepWrapper>
        ))}
      </S.ProgressBar>
      <S.SliderWrapper>
        <S.SliderImage src={images[currentStep - 1]} alt={`Slide ${currentStep}`} />
        <S.ButtonWrapper>
          <S.SlideBtn onClick={onClickPrevSlideHandler}>
            <img src={require(`../../../assets/images/main/prev.png`)} alt="prev-btn" />
          </S.SlideBtn>
          <S.SlideBtn onClick={onClickNextSlideHandler}>
            <img src={require(`../../../assets/images/main/next.png`)} alt="next-btn" />
          </S.SlideBtn>
        </S.ButtonWrapper>
      </S.SliderWrapper>
    </S.MainSlideBox>
  );
};

export default MainSlide;
