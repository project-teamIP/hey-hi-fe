import React from "react";
import * as S from "./style";

interface MyPageAsideProps {
  activePage: string;
  onClickPageHandler: (page: string) => void;
}

const MyPageAside: React.FC<MyPageAsideProps> = ({ activePage, onClickPageHandler }) => {
  return (
    <S.AsideBox>
      <S.AsideNav>
        <h4>마이페이지</h4>
        <S.NavItem
          isActive={activePage === "계정정보"}
          onClick={() => onClickPageHandler("계정정보")}>
          계정정보
        </S.NavItem>
        <S.NavItem
          isActive={activePage === "나의메모"}
          onClick={() => onClickPageHandler("나의메모")}>
          나의메모
        </S.NavItem>
        <S.NavItem
          isActive={activePage === "친구관리"}
          onClick={() => onClickPageHandler("친구관리")}>
          친구관리
        </S.NavItem>
        <S.NavItem
          isActive={activePage === "로그아웃"}
          onClick={() => onClickPageHandler("로그아웃")}>
          로그아웃
        </S.NavItem>
      </S.AsideNav>
      <S.Deactivate>회원탈퇴</S.Deactivate>
    </S.AsideBox>
  );
};

export default MyPageAside;
