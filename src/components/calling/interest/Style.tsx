import styled, { css } from "styled-components";

export const CategoriContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
  gap: 13px;
`;

export const CategoriStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 198px;
  height: 101px;
  border: 1px solid #d8dee9;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;

  ${(props) =>
    props.className === "box-color-0" &&
    css`
      background-color: #f8f9fc; /* 예시 색상 1 */
    `}

  ${(props) =>
    props.className === "box-color-1" &&
    css`
      background-color: #004bc8; /* 예시 색상 2 */
      color: #fff;
    `}

  ${(props) =>
    props.className === "box-color-2" &&
    css`
      background-color: #000000; /* 예시 색상 3 */
      color: #fff;
    `}

  ${(props) =>
    props.className === "box-color-3" &&
    css`
      background-color: #ff6e46; /* 예시 색상 4 */
    `}
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
