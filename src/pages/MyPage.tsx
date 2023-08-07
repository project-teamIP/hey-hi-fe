import React from "react";
import MyPageAside from "../components/myPage/myPageAside/MyPageAside";
import { styled } from "styled-components";

const MyPage = () => {
  return (
    <Layout>
      <MyPageAside />
    </Layout>
  );
};

export default MyPage;

const Layout = styled.div`
  margin-top: 70px;
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
`;
