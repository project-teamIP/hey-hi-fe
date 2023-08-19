import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import CallingPageMemo from "../components/calling/memo/CallingPageMemo";
import CallingPageInterestSelect from "../components/calling/interest/CallingPageInterestSelect";
import styled from "styled-components";
import Video from "../components/calling/video/Video";

const Calling: React.FC = () => {
  return (
    <div>
      <Header />
      <TotalContentWrapper>
        <TotalContentContainer>
          <TotalCotentBox>
            <Video />
            <SideBox>
              <CallingPageMemo />
              <CallingPageInterestSelect />
            </SideBox>
          </TotalCotentBox>
        </TotalContentContainer>
      </TotalContentWrapper>
    </div>
  );
};

const TotalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const TotalContentContainer = styled.div`
  margin-top: 300px;
  width: 80%;
  height: 100%;
  /* background-color: lightgray; */
`;

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalCotentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export default Calling;
