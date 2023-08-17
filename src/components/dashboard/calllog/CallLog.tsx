import React from "react";
import DashBoardBox from "../DashBoardBox";
import * as S from "./style";

const CallLog = () => {
  return (
    <DashBoardBox size="callLog">
      <S.CallLogWrapper>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>최근 통화 목록</p>
        <S.CallLogContainer>
          <S.CallList>
            <S.ProfileDiv />
            <p style={{ fontSize: "17px", fontWeight: "400" }}>에릭 제임스 | 미국 거주</p>
            <p style={{ fontSize: "17px", fontWeight: "700" }}>1:00:02</p>
            <S.ButtonGroup>
              <S.CallListBtn color="friend">
                <img src={require("../../../assets/images/addfriend.png")} alt="addfriend" />
              </S.CallListBtn>
              <S.CallListBtn color="call">
                <img
                  style={{ width: "85%" }}
                  src={require("../../../assets/images/call.png")}
                  alt="call"
                />
              </S.CallListBtn>
            </S.ButtonGroup>
          </S.CallList>
          <S.CallList>
            <S.ProfileDiv />
            <p style={{ fontSize: "17px", fontWeight: "400" }}>에릭 제임스 | 미국 거주</p>
            <p style={{ fontSize: "17px", fontWeight: "700" }}>1:00:02</p>
            <S.ButtonGroup>
              <S.CallListBtn color="friend">
                <img src={require("../../../assets/images/addfriend.png")} alt="addfriend" />
              </S.CallListBtn>
              <S.CallListBtn color="call">
                <img
                  style={{ width: "85%" }}
                  src={require("../../../assets/images/call.png")}
                  alt="call"
                />
              </S.CallListBtn>
            </S.ButtonGroup>
          </S.CallList>
          <S.CallList>
            <S.ProfileDiv />
            <p style={{ fontSize: "17px", fontWeight: "400" }}>에릭 제임스 | 미국 거주</p>
            <p style={{ fontSize: "17px", fontWeight: "700" }}>1:00:02</p>
            <S.ButtonGroup>
              <S.CallListBtn color="friend">
                <img src={require("../../../assets/images/addfriend.png")} alt="addfriend" />
              </S.CallListBtn>
              <S.CallListBtn color="call">
                <img
                  style={{ width: "85%" }}
                  src={require("../../../assets/images/call.png")}
                  alt="call"
                />
              </S.CallListBtn>
            </S.ButtonGroup>
          </S.CallList>
          <S.CallList>
            <S.ProfileDiv />
            <p style={{ fontSize: "17px", fontWeight: "400" }}>에릭 제임스 | 미국 거주</p>
            <p style={{ fontSize: "17px", fontWeight: "700" }}>1:00:02</p>
            <S.ButtonGroup>
              <S.CallListBtn color="friend">
                <img src={require("../../../assets/images/addfriend.png")} alt="addfriend" />
              </S.CallListBtn>
              <S.CallListBtn color="call">
                <img
                  style={{ width: "85%" }}
                  src={require("../../../assets/images/call.png")}
                  alt="call"
                />
              </S.CallListBtn>
            </S.ButtonGroup>
          </S.CallList>
        </S.CallLogContainer>
      </S.CallLogWrapper>
    </DashBoardBox>
  );
};

export default CallLog;
