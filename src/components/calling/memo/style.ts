import styled from "styled-components";

export const MemoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 30px;
  border: 1px solid #ced0d7;
  background-color: #fff;
  width: 420px;
  height: 382px;
  gap: 10px;
  h3 {
    font-size: 22px;
    font-weight: 600;
  }

  hr {
    width: 366px;
    border-color: #eee;
  }
`;

export const MemoTitle = styled.input`
  /* background-color: yellow; */
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 20px;
  padding: 23px;
  width: 415px;
  height: 67px;
  text-align: start;
  font-weight: 600;
  line-height: normal;
  border: none;
`;

export const MemoTextArea = styled.textarea`
  /* background-color: beige; */
  width: 415px;
  height: 245px;
  padding: 23px;
  margin: 0px auto;
  resize: none;
  border: none;
  font-size: 17px;
  font-weight: 500;
  overflow-y: scroll;
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 366px;
  margin: 0px auto;
  p {
    color: #ff5049;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ErrorContentMessage = styled.div`
  display: flex;
  width: 300px;
  margin: 0px auto;
  p {
    color: #ff5049;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
  }
`;

export const TextGroupBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
  margin-bottom: 10px;
`;

export const CounterBox = styled.div`
  display: flex;
  justify-content: flex-end;
  p {
    color: #ff6e46;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }
  h5 {
    color: #939393;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const MemoContainer = styled.div`
  h2 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 13px;
  }
`;
