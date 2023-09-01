import { styled } from "styled-components";

export const AsideBox = styled.div`
  min-width: 217px;
  width: 396px;
  height: 874px;
  border-radius: 20px;
  margin-top: 67px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 66px 0 43px 48px;
`;

export const AsideNav = styled.div`
  h4 {
    width: 130px;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 42px;
  }
`;

export const Deactivate = styled.button`
  text-decoration: underline;
  font-size: 18px;
  color: #747474;
  background: none;
  border: none;
  text-align: start;
  padding: 0;
  cursor: pointer;
`;

export const NavItem = styled.p<{ isActive: boolean }>`
  width: 80px;
  font-size: 22px;
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  margin-bottom: 38px;
  color: ${({ isActive }) => (isActive ? "#000" : "#5a5a5a")};
  cursor: pointer;
`;

export const LogoutBtn = styled.button`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 38px;
  color: #5a5a5a;
  cursor: pointer;
  margin: 0px;
  border: none;
  background: none;
  padding: 0px;
`;

/* 회원 탈퇴 확인 모달 */
export const ConfirmModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(94, 94, 94, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ConfirmModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 541px;
  height: 281px;
  background-color: white;
  padding: 40px 0 36px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 17px;
  }

  p {
    font-size: 17px;
    font-weight: 400;
    line-height: 140%;
  }

  button:first-child {
    margin-right: 19px;
    cursor: pointer;
  }
`;

export const ConfirmBtnBox = styled.div`
  margin-top: 29px;
`;
