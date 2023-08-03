import { styled } from "styled-components";

interface InputProps {
  size?: "small" | "large"; // size는 "small" 또는 "large" 문자열 타입으로 지정
}

export const InputBox = styled.input<InputProps>`
  width: ${(props) => (props.size === "small" ? "300px" : "458px")};
  height: 60px;
  padding: 20px 28px;
  border-radius: 4px;
  border: 2px solid #a0a0a0;
  font-size: 18px;

  &::placeholder {
    color: #a0a0a0;
    font-weight: 600;
    font-size: 18px;
  }

  &:focus {
    border: 2px solid #323232;
  }
`;
