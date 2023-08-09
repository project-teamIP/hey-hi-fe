import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const MainReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 134px;
  width: 100%;
  height: 719px;

  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 53px;
    margin-top: 21px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    margin: 20px 0 102px 0;
  }
`;

export const SectionNum = styled.div`
  width: 36px;
  height: 23px;
  border-radius: 11.5px;
  background-color: ${colors.header_orange};
  text-align: center;
  line-height: 26px;
  font-weight: 400;
  margin-top: 102px;
  color: white;
`;

export const ReviewWrapper = styled.div`
  img:not(:last-child) {
    margin-right: 40px;
  }
`;
