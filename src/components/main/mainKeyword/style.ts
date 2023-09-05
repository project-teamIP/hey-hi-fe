import styled, { css } from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const MainKeywordBox = styled.div`
  width: 100%;
  height: 839px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.gray}; //temp

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    margin: 21px 0 68px 0;
  }

  p {
    margin: 45px 0 98px 0;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #666;
    letter-spacing: -2.4px;
  }

  @media (max-width: 1464px) {
    height: 1200px;
  }
`;

export const SectionNum = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: #004bc8;
  color: #fff;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.52px;
  font-weight: 700;
  padding: 10px 0;
  margin-top: 75px;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1464px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 3.125rem;
    justify-items: center;
  }
`;

export const KeywordImgBox = styled.div`
  height: 385px;
  width: 206px;

  &:nth-child(2n) {
    margin: 0 89px;
  }

  img {
    width: 206px;
    height: 288px;
    border-radius: 23px;
    object-fit: cover;
  }

  @media (max-width: 1464px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      grid-column: 2 / span 2;
    }
    &:nth-child(5) {
      grid-column: 4 / span 2;
    }
  }
`;
