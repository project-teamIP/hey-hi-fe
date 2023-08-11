import styled from "styled-components";

export const MemoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  h3 {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const MemoTextArea = styled.textarea`
  width: 420px;
  height: 382px;
  padding: 30px;
  resize: none;
  border-radius: 30px;
  border: none;
  font-size: 17px;
  font-weight: 500;
`;
