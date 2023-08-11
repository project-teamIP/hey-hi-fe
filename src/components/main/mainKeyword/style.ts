import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const MainKeywordBox = styled.div`
  width: 100%;
  height: 947px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.gray}; //temp

  h2 {
    font-size: 50px;
    font-weight: 700;
    width: fit-content;
    height: 171px;
    line-height: 53px;
    text-align: center;
    margin: 21px 0 79px 0;
  }

  p {
    margin: 45px 0 98px 0;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }
`;

export const SectionNum = styled.div`
  width: 36px;
  height: 23px;
  border-radius: 11.5px;
  background-color: #d9d9d9;
  text-align: center;
  line-height: 26px;
  font-weight: 400;
  margin-top: 101px;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const KeywordImgBox = styled.div`
  width: 233px;
  height: 326px;
  border-radius: 23px;

  &:nth-child(2n) {
    margin: 0 65px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
