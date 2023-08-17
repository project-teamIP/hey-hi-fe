import { styled } from "styled-components";

interface PageProps {
  $isClicked: boolean;
}

export const PaginationBox = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const PageNumber = styled.button<PageProps>`
  font-weight: ${(props) => (props.$isClicked ? "bold" : "normal")};
  color: ${(props) => (props.$isClicked ? "#3F3F3F" : "#BFC5CB")};
  margin: 0 36px;
`;
