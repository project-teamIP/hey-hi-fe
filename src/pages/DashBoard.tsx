import React, { useState, useEffect } from "react";
import DiallogBox from "../components/dashboard/dialogbox/DiallogBox";
import CallLog from "../components/dashboard/calllog/CallLog";
import Memo from "../components/dashboard/memo/Memo";
import Interest from "../components/dashboard/interest/Interest";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getUserInfo } from "../api/api";
import SocialModal from "../components/common/modal/social/SocialModal";

const DashBoard = () => {
  // 모달
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  // 유저 정보
  const { data, isLoading } = useQuery("userInfo", () => getUserInfo());

  const userInfo = data;

  // 소셜 로그인 최초 로그인시
  useEffect(() => {
    if (!isLoading && userInfo && userInfo.interests) {
      if (
        userInfo.interests.length === 0 &&
        userInfo.country === "Default" &&
        userInfo.language === "Default"
      ) {
        openModal();
      }
    }
  }, [userInfo, isLoading]);

  return (
    <>
      <DashBoardWrapper>
        <DashBoardContainer>
          <UserContainer>
            <div style={{ display: "flex", flexDirection: "column", gap: "33px" }}>
              <div style={{ display: "flex", gap: "33px" }}>
                <DiallogBox />
                <CallLog />
              </div>
              <Memo />
            </div>
            <Interest />
          </UserContainer>
        </DashBoardContainer>
      </DashBoardWrapper>
      {showModal && <SocialModal />}
    </>
  );
};

// 미디어 쿼리
const mediaQuery = {
  desktop: "@media (max-width: 1463px)",
};

const DashBoardWrapper = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.desktop} {
    width: 100%;
    padding: 0px 182px 0px;
    box-sizing: border-box;
  }
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

  ${mediaQuery.desktop} {
    display: flex;
    gap: 33px;
    flex-direction: column;
  }
`;

const UserContainer = styled.div`
  display: flex;
  gap: 33px;

  ${mediaQuery.desktop} {
    display: flex;
    gap: 26px;
    flex-direction: column;
  }
`;

export default DashBoard;
