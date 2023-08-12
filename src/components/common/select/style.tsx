import { styled } from "styled-components";

interface SelectProps {
  size?: "normal" | "large";
}

export const Wrap = styled.div`
  position: relative;
`;

export const Select = styled.div<SelectProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) =>
    ({
      normal: "458px",
      large: "575px",
    })[props.size || "large"]};
  height: 60px;
  padding: 13px 10px 12px 28px;
  border: 1px solid #bababa;
  border-radius: 15px;
  color: #a0a0a0;
  font-size: 18px;
  font-weight: 600;
`;

export const Option = styled.ul<SelectProps>`
  position: relative;
  width: ${(props) =>
    ({
      normal: "458px",
      large: "575px",
    })[props.size || "large"]};
  max-height: 273px;
  margin-top: 9px;
  padding: 9px 10px;
  border: 1px solid #bababa;
  border-radius: 15px;
  color: #a0a0a0;
  font-size: 18px;
  font-weight: 600;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  li {
    width: 100%;
    height: 51px;
    padding: 16px 0px 14px 19px;
    border-radius: 10px;
    background: #ffffff;
  }

  li:hover {
    background: #f1f1f1;
  }
`;
