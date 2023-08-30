import styled from "styled-components";

export const TextBox = styled.div`
  background-color: #f8f9fc;
  margin-top: 30px;
  /* margin: 30px; */
  width: 249px;
  height: 257px;
  flex-shrink: 0;
  padding: 24px 22px 24px 22px;
  border-radius: 20px;
  border: 1px solid #d8dee9;

  h2 {
    color: #3f3f3f;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }

  p {
    color: #8c8c8c;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const TextBoxTag = styled.div`
  padding-top: 5px;
  text-align: center;
  border-radius: 30px;
  width: 109px;
  height: 24px;
  flex-shrink: 0;
  background-color: #ffe4dc;
  color: #ff6e46;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
`;

export const TextBoxInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 27px;

  p {
    color: #939393;
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
  }
`;

export const TextContainer = styled.div`
  margin: 43px 23px 36px 23px;
  overflow: hidden;
`;

export const TextBoxGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const WordGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.87px;
  }
  p {
    font-size: 13px;
    font-weight: 600;
    color: #b5b5b5;
    line-height: 15.51px;
    cursor: pointer;
  }
`;

export const NoMemoWrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 100%;
`;

export const NoMemoBox = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 33px;
    color: #aeaeae;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    line-height: normal;
  }
`;
