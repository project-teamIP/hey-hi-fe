import React from "react";
import * as S from "../../dashboard/interest/style";
import styled from "styled-components";
import MatchingUserInterest from "./MatchingUserInterest";
import { MatchingUserProps } from "../../../types/types";

const CallingPageInterestSelect = ({ MatchingUserData }: MatchingUserProps) => {
  console.log("MatchingUserData", MatchingUserData);
  return (
    <MatchingUserInterstWrapper>
      <h3>상대방의 관심사</h3>
      <S.InterestBoxContainer>
        <MatchingUserInterest MatchingUserData={MatchingUserData} />
      </S.InterestBoxContainer>
    </MatchingUserInterstWrapper>
  );
};

const MatchingUserInterstWrapper = styled.div`
  width: 437px;
  height: 423px;

  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
    line-height: 23.87px;
  }
`;

export default CallingPageInterestSelect;
