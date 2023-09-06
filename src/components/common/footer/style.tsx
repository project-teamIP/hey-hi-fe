import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterBox = styled.div`
  width: 100%;
  height: 328px;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
  }

  li {
    margin-left: 43px;
    font-size: 16px;
    font-weight: 400;
  }

  li:first-child {
    color: #ff6e46;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const FooterDivider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #444;
  margin: 35px 0;
`;

export const FooterBottom = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7d7d7d;
  font-size: 16px;
  font-weight: 600;
`;

export const FeedbackLink = styled(Link)`
  color: #7d7d7d;

  &:first-child {
    margin-left: 10px;
  }
`;

export const SpanDivider = styled.span`
  width: 1px;
  height: 10px;
  margin: 0 10px;
`;
