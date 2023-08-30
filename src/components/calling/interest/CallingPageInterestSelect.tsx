import React from "react";
import * as A from "../../dashboard/interest/style";
import styled from "styled-components";
import MatchingUserInterest from "./MatchingUserInterest";
import { MatchingUserProps } from "../../../types/types";

const CallingPageInterestSelect = ({ MatchingUserData }: MatchingUserProps) => {
  return (
    <MatchingUserInterstWrapper>
      <h3>상대방의 관심사</h3>
      <A.InterestBoxContainer>
        <MatchingUserInterest MatchingUserData={MatchingUserData} />
      </A.InterestBoxContainer>
    </MatchingUserInterstWrapper>
  );
};

const MatchingUserInterstWrapper = styled.div`
  width: 437px;
  height: 300px;
  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 30px;
    line-height: 23.87px;
  }

  @media (max-width: 1240px) {
    width: 400px;
  }
`;

export default CallingPageInterestSelect;
