import React from "react";
import DashBoardBox from "../DashBoardBox";
import * as S from "./style";
import svgPath from "../../../assets/images/cellphone.svg";

const CallLog = () => {
  return (
    <DashBoardBox size="callLog">
      <S.CallLogWrapper>
        <S.CallLogContainer>
          <p style={{ fontSize: "20px", fontWeight: "600", marginBottom: "30px" }}>
            최근 통화 목록
          </p>
          <S.CallList>
            <S.ProfileDiv />
            <p style={{ fontSize: "17px", fontWeight: "400" }}>에릭 제임스 | 미국 거주</p>
            <p style={{ fontSize: "17px", fontWeight: "700" }}>1:00:02</p>
            <S.ButtonGroup>
              <S.CallListBtn color="friend">
                <img src={require("../../../assets/images/addfriend.png")} alt="addfriend" />
              </S.CallListBtn>
              <S.CallListBtn color="call">
                <img style={{ width: "80%", height: "100%" }} src={svgPath} alt="call" />
              </S.CallListBtn>
            </S.ButtonGroup>
          </S.CallList>
        </S.CallLogContainer>
      </S.CallLogWrapper>
    </DashBoardBox>
  );
};

export default CallLog;
