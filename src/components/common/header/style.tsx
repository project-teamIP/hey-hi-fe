import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
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
  }

  li {
    margin-right: 46px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
