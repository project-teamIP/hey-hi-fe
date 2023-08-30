import styled from "styled-components";

export const CleanPointContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 20px;
  border: 1px solid #ced0d7;
  background-color: #fff;
  /* background-color: yellow; */
  width: 420px;
  height: 79px;
  padding-bottom: 23px;
`;

export const CleanPointTextGroup = styled.div`
  margin-top: 20px;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 352px;
  h2 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h4 {
    color: #9d9d9d;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const CleanPointBarStyle = styled.div`
  border-radius: 6px;
  background-color: #e7e9ef;
  width: 352px;
  height: 9px;
`;

export const CleanPointBar = styled.div<{ cleanPointValue: number }>`
  border-radius: 6px;
  height: 9px;
  width: ${(props) => (props.cleanPointValue > 100 ? 3.52 * 100 : 3.52 * props.cleanPointValue)}px;
  background-color: #ff6e46;

  img {
    margin-left: ${(props) =>
      props.cleanPointValue > 100 ? 3.52 * 100 - 20 : 3.52 * props.cleanPointValue - 20}px;
    margin-top: -12px;
    width: 37px;
    height: 34px;
    z-index: 1;
  }
`;
