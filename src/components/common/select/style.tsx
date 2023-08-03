import { styled } from "styled-components";

export const Wrap = styled.div`
  position: relative;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 458px;
  height: 60px;
  padding: 13px 10px 12px 28px;
  border: 1px solid #bababa;
  border-radius: 15px;
`;

export const Option = styled.ul`
  width: 458px;
  margin-top: 9px;
  padding: 9px 10px;
  border: 1px solid #bababa;
  border-radius: 15px;

  li {
    width: 440px;
    height: 51px;
    padding: 16px 0px 14px 19px;
    border-radius: 10px;
    background: #ffffff;
  }

  li:hover {
    background: #f1f1f1;
  }
`;
