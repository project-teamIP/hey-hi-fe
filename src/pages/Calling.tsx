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
            <MediaBox>
              <div style={{ display: "flex", gap: "20px" }}>
                <CallingTextGroup>
                  <h4>서울에 거주중인</h4>
                  <h2>서울 홍길동 님과 통화 중</h2>
                </CallingTextGroup>
                <CallTimer>00:00:00</CallTimer>
              </div>
              <Video />
            </MediaBox>
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
  background-color: lightgray;
`;

const CallingTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 22px;
    font-weight: 600;
  }
  h4 {
    font-size: 17px;
    font-weight: 500;
    color: #5a5a5a;
  }
`;

const CallTimer = styled.div`
  background-color: #ff6e46;
  width: 141px;
  height: 49px;
  border-radius: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
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

const MediaBox = styled.div`
  background-color: yellow;
  width: 70%;
`;

export default Calling;
