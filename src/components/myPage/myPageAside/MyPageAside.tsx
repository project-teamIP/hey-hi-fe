import React from "react";
import * as S from "./style";
import { userLogout } from "../../../api/api";
import { logOut } from "../../../redux/modules/userAuth";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

interface MyPageAsideProps {
  activePage: string;
  onClickPageHandler: (page: string) => void;
}

const MyPageAside: React.FC<MyPageAsideProps> = ({ activePage, onClickPageHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation(userLogout, {
    onSuccess: () => {
      dispatch(logOut());
      localStorage.removeItem("activePage"); // 로그아웃 시 현재 페이지 데이타 삭제
      navigate("/");
    },
  });

  const onClickLogoutHandler = () => {
    logoutMutation.mutate();
  };

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
        <S.LogoutBtn onClick={() => onClickLogoutHandler()}>로그아웃</S.LogoutBtn>
      </S.AsideNav>
      <S.Deactivate>회원탈퇴</S.Deactivate>
    </S.AsideBox>
  );
};

export default MyPageAside;
