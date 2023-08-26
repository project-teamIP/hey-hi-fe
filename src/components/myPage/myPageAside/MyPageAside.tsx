import React, { useState } from "react";
import * as S from "./style";
import { userLogout, withdrawalUser } from "../../../api/api";
import { logOut } from "../../../redux/modules/userAuth";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../common/button/Button";

interface MyPageAsideProps {
  activePage: string;
  onClickPageHandler: (page: string) => void;
}

const MyPageAside: React.FC<MyPageAsideProps> = ({ activePage, onClickPageHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //로그아웃 뮤테이션
  const logoutMutation = useMutation(userLogout, {
    onSuccess: () => {
      dispatch(logOut());
      localStorage.removeItem("activePage"); // 로그아웃 시 현재 페이지 데이타 삭제
      navigate("/");
    },
  });
  //로그아웃 버튼
  const onClickLogoutHandler = () => {
    logoutMutation.mutate();
  };

  //회원탈퇴 뮤테이션
  const withdrawMutation = useMutation(withdrawalUser, {
    onError: (error) => {
      alert("잠시 후 다시 시도해주세요😭");
    },
    onSuccess: () => {
      dispatch(logOut());
      localStorage.removeItem("activePage");
      navigate("/");
    },
  });
  //회원탈퇴 확인 모달
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const onClickConfirmModalHandler = () => {
    setIsConfirmModalOpen(true);
  };
  //회원탈퇴 버튼
  const onClickUserDeleteHandler = () => {
    setIsConfirmModalOpen(false);
    withdrawMutation.mutate();
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
      <S.Deactivate onClick={onClickConfirmModalHandler}>회원탈퇴</S.Deactivate>
      {isConfirmModalOpen && (
        <S.ConfirmModalOverlay>
          <S.ConfirmModal>
            <h4>회원탈퇴</h4>
            <p>회원탈퇴 시 계정과 관련된 모든 데이터가 삭제됩니다.</p>
            <p>진행하시겠습니까?</p>
            <S.ConfirmBtnBox>
              <Button.Primary
                size="small"
                color="black"
                bc="#EFF0F1"
                fw="700"
                onClick={() => setIsConfirmModalOpen(false)}>
                취소
              </Button.Primary>
              <Button.Primary size="small" bc="#FF6E46" onClick={onClickUserDeleteHandler}>
                탈퇴
              </Button.Primary>
            </S.ConfirmBtnBox>
          </S.ConfirmModal>
        </S.ConfirmModalOverlay>
      )}
    </S.AsideBox>
  );
};

export default MyPageAside;
