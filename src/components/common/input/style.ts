import { styled } from "styled-components";

interface InputProps {
  size?: "small" | "medium" | "large";
}

export const InputBox = styled.input<InputProps>`
  width: ${(props) =>
    ({
      small: "300px",
      medium: "458px",
      large: "574px",
    })[props.size || "large"]};
  height: 60px;
  padding: 20px 28px;
  border-radius: 15px;
  border: 1px solid #a0a0a0;
  font-size: 18px;

  &::placeholder {
    color: #a0a0a0;
    font-weight: 600;
    font-size: 18px;
  }

  &:focus {
    border: 1px solid #323232;
  }
`;
