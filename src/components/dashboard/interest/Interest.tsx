import React from "react";
import * as S from "./style";
import DashBoardBox from "../DashBoardBox";
import LineChart from "./LineChart";
import InterestSelect from "./InterestSelect";

const Interest: React.FC = () => {
  const data = [10, 15, 13, 30, 40, 5];
  const labels = [
    "2023-08-07T08:00:00",
    "2023-08-07T09:00:00",
    "2023-08-07T10:00:00",
    "2023-08-07T11:00:00",
    "2023-08-07T12:00:00",
    "2023-08-07T13:00:00",
    "2023-08-07T14:00:00",
  ];

  return (
    <DashBoardBox size="interest">
      <InterestSelect />
      <S.InterestWrapper>
        <S.ChartBox>
          <h3>지금 접속한 인원</h3>
          <LineChart data={data} labels={labels} />
        </S.ChartBox>
      </S.InterestWrapper>
    </DashBoardBox>
  );
};

export default Interest;
