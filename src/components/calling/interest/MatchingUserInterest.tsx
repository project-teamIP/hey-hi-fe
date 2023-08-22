import React, { useRef } from "react";
import styled from "styled-components";
import { MatchingUserProps } from "../../../types/types";
import interests from "../../../utils/interests.json";
import { CallRoomCategoriProps } from "../../../types/types";

const CategoriContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
  gap: 13px;
`;

export const CategoriStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 144px;
  height: 102px; */
  width: 198px;
  height: 101px;
  border: none;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const Categori = ({ interest, image }: CallRoomCategoriProps) => {
  return (
    <CategoriStyle>
      <Image>
        <img src={`/categori/${image}`} alt={interest} />
      </Image>
      <Name>{interest}</Name>
    </CategoriStyle>
  );
};

const MatchingUserInterest = ({ MatchingUserData }: MatchingUserProps) => {
  console.log("MatchingUserData", MatchingUserData);
  const filteredInterests = useRef([]);

  if (Array.isArray(MatchingUserData) || MatchingUserData instanceof Array) {
    const arrayUserData = Array.from(MatchingUserData); // 유사 배열을 배열로 변환
    filteredInterests.current = interests.filter((interest) =>
      arrayUserData.includes(interest.name)
    );
    console.log("filteredInterests", filteredInterests.current);
  } else {
    console.log("MatchingUserData가 배열 형태가 아닙니다.");
  }

  console.log("영역밖 인터", filteredInterests);
  return (
    <>
      {/* 관심사 컨테이너 */}
      <CategoriContainer>
        {/* 관심사 Items */}
        {filteredInterests.current.map((interest, index) => (
          <Categori key={index} interest={interest.name} image={interest.image} />
        ))}
      </CategoriContainer>
    </>
  );
};
export default MatchingUserInterest;
