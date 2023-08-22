import React, { useState } from "react";
import * as S from "./style";
import Categori from "./Categori";
import Button from "../button/Button";
import { SlideProps } from "../../../types/types";
import interests from "../../../utils/interests.json";

const SlideThree = ({ userData, setUserData, onClickUserRegisterHandler }: SlideProps) => {
  // useState
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // handler
  const handleInterestClick = (selectedInterest: string) => {
    const updatedInterests = selectedInterests.includes(selectedInterest)
      ? selectedInterests.filter((interest) => interest !== selectedInterest)
      : selectedInterests.length < 4 // 최대 4개까지 선택 가능
      ? [...selectedInterests, selectedInterest]
      : selectedInterests; // 4개 초과 선택 방지

    setSelectedInterests(updatedInterests);
    // 선택된 관심사로 사용자 데이터 업데이트
    setUserData((prevUserData) => ({
      ...prevUserData,
      interests: updatedInterests,
    }));
  };

  // 관심사 선택시 버튼 활성화
  const isFormValid = selectedInterests.length === 4;

  console.log(selectedInterests);
  return (
    <S.Wrap>
      {/* 관심사 */}
      <S.NameContainer>
        <S.Title>관심사</S.Title>
        <S.Count>{selectedInterests.length}/4</S.Count>
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
            selected={selectedInterests.includes(interest.name)}
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
