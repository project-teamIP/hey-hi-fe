import DiallogBox from "../components/dashboard/dialogbox/DiallogBox";
import CallLog from "../components/dashboard/calllog/CallLog";
import Memo from "../components/dashboard/memo/Memo";
import Interest from "../components/dashboard/interest/Interest";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <>
      <DashBoardWrapper>
        <DashBoardContainer>
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
        </DashBoardContainer>
      </DashBoardWrapper>
    </>
  );
};

const DashBoardWrapper = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DashBoardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 33px;
  position: relative;
  /* width: 100vw; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1555px;
  width: 100%;
`;
// const DashboardContainer = styled.div`
//   max-width: 1555px;
//   width: 100%;
//   display: flex;
//   justify-content: start;
//   align-items: start;
//   display: flex;
//   position: absolute;
//   height: 100%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

export default DashBoard;
