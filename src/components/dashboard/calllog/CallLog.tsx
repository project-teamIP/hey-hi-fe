import React, { useEffect, useState } from "react";
import DashBoardBox from "../DashBoardBox";
import * as S from "./style";
import svgPath from "../../../assets/images/more_SVG.svg";
import instance from "../../../api/api";
import styled from "styled-components";
import { CallLogInfo } from "./style";
const CallLog = () => {
  const [callLogData, setCallLogData] = useState<CallLogInfo[]>([]); // 빈 배열로 초기화
  const [callLogInfo, setCallLogInfo] = useState<CallLogInfo>({
    image: "",
    nickname: "",
    country: "",
    time: "",
    date: "",
  });

  console.log("callLogData", callLogData);

  // 대시보드 정보 조회
  const getCallLogInfo = async () => {
    try {
      const response = await instance.get(`/api/users/dashboard`);
      const callLogData = response.data.matchRoomInfos;
      setCallLogData(callLogData); // callLogData를 상태에 저장
    } catch (error) {
      console.error("dashboard 조회 오류", error);
    }
  };

  useEffect(() => {
    getCallLogInfo();
  }, []); // 컴포넌트 마운트 시에만 대시보드 정보 조회

  useEffect(() => {
    if (callLogData.length > 0) {
      const selectedCallLog = callLogData[0]; // 예시로 첫 번째 메모 데이터 선택
      setCallLogInfo({
        image: selectedCallLog.image, // 수정: selectedCallLog로 변경
        nickname: selectedCallLog.nickname,
        country: selectedCallLog.country,
        time: selectedCallLog.time,
        date: selectedCallLog.date,
      });
    }
  }, [callLogData]);
  return (
    <DashBoardBox size="callLog">
      <S.CallLogWrapper>
        <h2>최근 통화 목록</h2>
        <S.CallLogContainer>
          {callLogData.length > 0 ? (
            callLogData.map((callLog, index) => {
              if (index < 4) {
                return (
                  <S.CallList key={index}>
                    <S.CallLogMatchingUserInfo>
                      <S.ProfileDiv image={callLog.image?.toString()} />
                      <p>
                        {callLog.nickname} | {callLog.country}
                      </p>
                      <h4 style={{ fontSize: "17px", fontWeight: "700" }}>{callLog.time}</h4>
                    </S.CallLogMatchingUserInfo>
                    <S.ButtonGroup>
                      <S.CallListBtn color="friend">
                        <img
                          src={require("../../../assets/images/addfriend.png")}
                          alt="addfriend"
                        />
                      </S.CallListBtn>
                      <S.CallListBtn color="more">
                        <img style={{ width: "100%" }} src={svgPath} alt="more" />
                      </S.CallListBtn>
                    </S.ButtonGroup>
                  </S.CallList>
                );
              }
              return null; // 3보다 큰 인덱스는 렌더링하지 않음
            })
          ) : (
            <p>메모 데이터가 없습니다.</p>
          )}
        </S.CallLogContainer>
      </S.CallLogWrapper>
    </DashBoardBox>
  );
};

export default CallLog;
