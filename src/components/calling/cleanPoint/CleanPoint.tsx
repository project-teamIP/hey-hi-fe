import React from "react";
import styled from "styled-components";
import svgPath from "../../../assets/images/cleanPointHandle.svg";
// CleanPoint 인터페이스 정의
interface CleanPointProps {
  cleanPoint: string; // cleanPoint의 타입을 숫자로 지정
}

const CleanPoint: React.FC<CleanPointProps> = ({ cleanPoint }) => {
  const cleanPointValue: number = parseInt(cleanPoint, 10);

  const CleanPointBar = styled.div`
    border-radius: 6px;
    height: 9px;
    width: ${3.52 * cleanPointValue}px; /* 수학 연산을 위해 괄호로 묶어줍니다 */
    background-color: #ff6e46;

    img {
      margin-left: ${3.52 * cleanPointValue - 20}px; /* 수학 연산을 위해 괄호로 묶어줍니다 */
      margin-top: -7%;
      width: 37px;
      height: 34px;
    }
  `;
  return (
    <CleanPointContainer>
      <CleanPointTextGroup>
        <h4>상대방의 매너점수</h4>
        <h2>{cleanPointValue}점</h2>
      </CleanPointTextGroup>
      <CleanPointBarStyle>
        <CleanPointBar>
          <img src={svgPath} alt="cleanPoint" />
        </CleanPointBar>
      </CleanPointBarStyle>
    </CleanPointContainer>
  );
};

const CleanPointContainer = styled.div`
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
`;

const CleanPointTextGroup = styled.div`
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

const CleanPointBarStyle = styled.div`
  border-radius: 6px;
  background-color: #e7e9ef;
  width: 352px;
  height: 9px;
`;

export default CleanPoint;
