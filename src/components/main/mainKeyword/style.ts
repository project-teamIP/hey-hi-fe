import { styled } from "styled-components";

export const MainKeywordBox = styled.div`
  width: 100%;
  height: 724px;
  text-align: center;
  padding: 79px 0 177px 0;
  background: #f6f6f6; //temp

  h2 {
    font-size: 50px;
    font-weight: 600;
    width: 600px;
    height: 171px;
    line-height: 53px;
    text-align: center;
    margin: 0 auto;
    padding-top: 60px;
  }

  p {
    margin: 32px 0 62px 0;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const KeywordImgBox = styled.div`
  width: 241px;
  height: 134px;
  background-color: #e5e5e5;

  &:not(:nth-child(2n)) {
    margin-top: 63px;
  }

  &:nth-child(2n) {
    margin: 0 76px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
