import React from "react";
import styled from "styled-components";
import Video from "../components/calling/video/Video";

const Calling: React.FC = () => {
  return (
    <div>
      <TotalContentWrapper>
        <TotalCotentBox>
          <Video />
        </TotalCotentBox>
      </TotalContentWrapper>
    </div>
  );
};

const TotalContentWrapper = styled.div`
  /* background-color: blueviolet; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

// const TotalContentContainer = styled.div`
//   margin-top: 300px;
//   width: 100%;
//   height: 100%;
//   /* background-color: red; */
//   background-color: lightgray;
// `;

const TotalCotentBox = styled.div`
  margin-top: 5%;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
  width: 110%;
  /* height: 100%; */
  display: flex;
`;

export default Calling;
