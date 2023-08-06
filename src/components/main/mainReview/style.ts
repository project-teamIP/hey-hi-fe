import { styled } from "styled-components";

export const MainReviewBox = styled.div`
  text-align: center;
  margin-bottom: 134px;

  h1 {
    font-size: 50px;
    font-weight: 600px;
    line-height: 53px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 64px;
  }
`;

export const ReviewWrapper = styled.div`
  img:not(:last-child) {
    margin-right: 40px;
  }
`;
