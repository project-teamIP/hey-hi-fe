import React from "react";
import MyPageAside from "../components/myPage/myPageAside/MyPageAside";
import { styled } from "styled-components";
import MyPageEdit from "../components/myPage/myPageEdit/MyPageEdit";
import MyMemo from "../components/myPage/myMemo/MyMemo";
import MyFriend from "../components/myPage/myFriend/MyFriend";

const MyPage = () => {
  return (
    <MyPageBox>
      <MyPageAside />
      {/* <MyPageEdit /> */}
      {/* <MyMemo /> */}
      <MyFriend />
    </MyPageBox>
  );
};

export default MyPage;

export const MyPageBox = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  max-width: 1920px;
  width: 100vw;
  display: flex;
  justify-content: start;
  align-items: start;
`;
