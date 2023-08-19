import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

interface HeaderBoxProps {
  ismainpage: boolean;
}

export const HeaderBox = styled.div<HeaderBoxProps>`
  width: 100%;
  height: 70px;
  background-color: ${({ ismainpage }) => (ismainpage ? colors.header_orange : colors.white)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;

  h1 {
    width: 80px;
    height: 34px;
  }

  ul {
    display: flex;
    margin-left: 45px;
  }

  li {
    margin-right: 46px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  gap: 14px;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 30px;
`;
