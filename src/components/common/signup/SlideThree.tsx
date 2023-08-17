import React, { useState } from "react";
import * as S from "./style";
import Categori from "./Categori";
import Button from "../button/Button";
import { SlideProps } from "../../../types/types";
import interests from "../../../utils/interests.json";

const SlideThree = ({ userData, setUserData, onClickUserRegisterHandler }: SlideProps) => {
  // useState
  const [selectedInterest, setSelectedInterest] = useState("");
  // handler
  const handleInterestClick = (selectedInterest: string) => {
    // 관심사 선택 시 호출되는 핸들러 함수
    setUserData((prevUserData) => ({
      ...prevUserData,
      interest: selectedInterest,
    }));
    setSelectedInterest(selectedInterest);
  };

  // 관심사 선택시 버튼 활성화
  const isFormValid = selectedInterest !== "";

  return (
    <S.Wrap>
      {/* 관심사 */}
      <S.NameContainer>
        <S.Title>관심사</S.Title>
        <S.Count>1/4</S.Count>
      </S.NameContainer>

      {/* 관심사 컨테이너 */}
      <S.CategoriContainer>
        {/* 관심사 Items */}
        {interests.map((interest, index) => (
          <Categori
            key={index}
            interest={interest.name}
            image={interest.image}
            onClick={() => handleInterestClick(interest.name)}
            selected={selectedInterest === interest.name}
          />
        ))}
      </S.CategoriContainer>
      {/* 회원가입 완료 */}
      <Button.Primary
        size="middle"
        onClick={onClickUserRegisterHandler}
        bc={isFormValid ? "#FF6E46" : "#999"}
        disabled={!isFormValid}>
        회원가입 완료
      </Button.Primary>
    </S.Wrap>
  );
};

export default SlideThree;
