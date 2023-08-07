import React, { Children } from "react";
import DiallogBox from "../components/dashboard/dialogbox/DiallogBox";
import CallLog from "../components/dashboard/calllog/CallLog";
import Review from "../components/dashboard/review/Review";
import DashBoardBox from "../components/dashboard/DashBoardBox";
import Interest from "../components/dashboard/interest/Interest";
import Header from "../components/common/header/Header";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <>
      <Header />
      <DashBoardWrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "33px" }}>
          <div style={{ display: "flex", gap: "33px" }}>
            <DiallogBox />
            <CallLog />
          </div>
          <DashBoardBox size="review">
            <Review />
          </DashBoardBox>
        </div>
        <Interest />
      </DashBoardWrapper>
    </>
  );
};

const DashBoardWrapper = styled.div`
  display: flex;
  margin-top: 103px;
  gap: 33px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default DashBoard;
