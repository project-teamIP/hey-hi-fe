import React from "react";
import DiallogBox from "../components/dashboard/dialogbox/DialogBox";
import CallLog from "../components/dashboard/calllog/CallLog";
import Review from "../components/dashboard/review/Review";
import DashBoardBox from "../components/dashboard/DashBoardBox";
import Interest from "../components/dashboard/interest/Interest";

const DashBoard = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "33px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "33px" }}>
          <div style={{ display: "flex", gap: "33px" }}>
            <DashBoardBox size="diallogBox">
              <DiallogBox />
            </DashBoardBox>
            <DashBoardBox size="callLog">
              <CallLog />
            </DashBoardBox>
          </div>
          <DashBoardBox size="review">
            <Review />
          </DashBoardBox>
        </div>
        <DashBoardBox size="interest">
          <Interest />
        </DashBoardBox>
      </div>
    </>
  );
};

export default DashBoard;
