import React, { Children } from "react";
import DiallogBox from "../components/dashboard/dialogbox/DiallogBox";
import CallLog from "../components/dashboard/calllog/CallLog";
import Memo from "../components/dashboard/memo/Memo";
import Interest from "../components/dashboard/interest/Interest";
import Header from "../components/common/header/Header";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <>
      <DashBoardWrapper>
        <DashboardContainer>
          <div style={{ display: "flex", gap: "33px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "33px" }}>
              <div style={{ display: "flex", gap: "33px" }}>
                <DiallogBox />
                <CallLog />
              </div>
              <Memo />
            </div>
            <Interest />
          </div>
        </DashboardContainer>
      </DashBoardWrapper>
    </>
  );
};

const DashBoardWrapper = styled.div`
  margin-top: 99px;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DashboardContainer = styled.div`
  max-width: 1555px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  display: flex;
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default DashBoard;
