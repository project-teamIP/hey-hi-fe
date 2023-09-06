import React from "react";
import svgPath from "../../../assets/images/cleanPointHandle.svg";
import * as S from "./style";
// CleanPoint 인터페이스 정의
interface CleanPointProps {
  cleanPoint: string; // cleanPoint의 타입을 숫자로 지정
}

const CleanPoint: React.FC<CleanPointProps> = ({ cleanPoint }) => {
  const cleanpointvalue: number = parseInt(cleanPoint, 10) || 0;

  return (
    <S.CleanPointContainer>
      <S.CleanPointTextGroup key="text">
        <h4>상대방의 매너점수</h4>
        <h2>{cleanpointvalue}점</h2>
      </S.CleanPointTextGroup>
      <S.CleanPointBarStyle>
        <S.CleanPointBar key="bar" $cleanpointvalue={cleanpointvalue}>
          <img src={svgPath} alt="cleanPoint" />
        </S.CleanPointBar>
      </S.CleanPointBarStyle>
    </S.CleanPointContainer>
  );
};

export default CleanPoint;
