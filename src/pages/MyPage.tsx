import React, { useEffect, useState } from "react";
import MyPageAside from "../components/myPage/myPageAside/MyPageAside";
import { styled } from "styled-components";
import MyPageEdit from "../components/myPage/myPageEdit/MyPageEdit";
import MyMemo from "../components/myPage/myMemo/MyMemo";
import MyFriend from "../components/myPage/myFriend/MyFriend";
import { useQueryClient } from "react-query";

const MyPage = () => {
  const queryClient = useQueryClient();
  const [activePage, setActivePage] = useState<string>("계정정보");

  // 새로고침해도 현재 페이지 유지
  useEffect(() => {
    const storedActivePage = localStorage.getItem("activePage");
    if (storedActivePage) {
      setActivePage(storedActivePage);
    }
  }, []);

  const onClickPageHandler = (page: string) => {
    queryClient.setQueriesData("activePage", page);
    setActivePage(page);
    localStorage.setItem("activePage", page);
  };

  return (
    <MyPageBox>
      <MyPageAside activePage={activePage} onClickPageHandler={onClickPageHandler} />
      {activePage === "계정정보" && <MyPageEdit />}
      {activePage === "나의메모" && <MyMemo />}
      {activePage === "친구관리" && <MyFriend />}
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
