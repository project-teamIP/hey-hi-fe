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
      {/* <Header /> */}
      <DashBoardWrapper>
        <DashBoardContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: "33px" }}>
            <div style={{ display: "flex", gap: "33px" }}>
              <DiallogBox />
              <CallLog />
            </div>
            <Memo />
          </div>
          <Interest />
        </DashBoardContainer>
      </DashBoardWrapper>
    </>
  );
};

const DashBoardWrapper = styled.div`
  margin: 0 auto;
  margin-top: 169px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DashBoardContainer = styled.div`
  display: flex;
  gap: 33px;
`;
export default DashBoard;
