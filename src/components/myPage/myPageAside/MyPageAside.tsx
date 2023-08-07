import React from "react";
import * as S from "./style";

const MyPageAside = () => {
  return (
    <S.AsideBox>
      <S.AsideNav>
        <h4>마이페이지</h4>
        <p>계정정보</p>
        <p>나의메모</p>
        <p>친구관리</p>
        <p>로그아웃</p>
      </S.AsideNav>
      <S.Deactivate>회원탈퇴</S.Deactivate>
    </S.AsideBox>
  );
};

export default MyPageAside;
