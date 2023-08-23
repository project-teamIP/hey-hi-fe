import { styled } from "styled-components";
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
    width: fit-content;
    height: 171px;
    line-height: 48px;
    text-align: center;
    margin: 21px 0 73px 0;
  }

  p {
    margin: 45px 0 98px 0;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #666;
    letter-spacing: -0.4px;
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
`;

export const KeywordImgBox = styled.div`
  &:nth-child(2n) {
    margin: 0 89px;
  }

  img {
    width: 206px;
    height: 288px;
    border-radius: 23px;
    object-fit: cover;
  }
`;
