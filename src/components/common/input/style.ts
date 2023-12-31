import { styled } from "styled-components";

interface InputProps {
  size?: string;
}

export const InputBox = styled.input<InputProps>`
  width: ${(props) =>
    ({
      small: "300px",
      medium: "458px",
      large: "574px",
      etc: "411px",
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
    outline: 2px solid #323232;
  }
`;
