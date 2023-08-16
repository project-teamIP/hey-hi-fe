import { styled } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul<{ open: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};
`;

export const DropdownMenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
