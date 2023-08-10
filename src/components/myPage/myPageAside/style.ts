import { styled } from "styled-components";

export const AsideBox = styled.div`
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
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 42px;
  }
`;

export const Deactivate = styled.div`
  text-decoration: underline;
  font-size: 18px;
  color: #747474;
`;

export const NavItem = styled.p<{ isActive: boolean }>`
  font-size: 22px;
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  margin-bottom: 38px;
  color: ${({ isActive }) => (isActive ? "#000" : "#5a5a5a")};
  cursor: pointer;
`;
