import React, { useState, useEffect } from "react";
import * as S from "./style";
import DashBoardBox from "../DashBoardBox";
import InterestSelect from "./InterestSelect";
import { useQuery } from "react-query";
import Chart from "chart.js/auto"; // chart.js의 최신 버전을 사용
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { fetchOnlineUsers } from "../../../api/api";
import { getDashboardData } from "../../../api/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const Interest: React.FC = () => {
  const { data: onlineUsersData } = useQuery("onlineUsers", fetchOnlineUsers, {
    refetchInterval: 60000, // 1분마다 데이터갱신
  });

  const getCountByHourData = async () => {
    try {
      const data = await getDashboardData();
      return data.countByHour;
    } catch (error) {
      console.error("시간당 유저수 조회 오류", error);
      return null;
    }
  };
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 24 }, (_, index) => index.toString()),
    datasets: [
      {
        label: "이 시각 접속인원",
        borderColor: "#FF6E46", // 선 색상
        backgroundColor: "linear-gradient(180deg, #FF6E46 0%, rgba(217, 217, 217, 0.00) 100%)", // 배경 색상
        borderWidth: 1,
        hoverBackgroundColor: "#FF6E46",
        hoverBorderColor: "#FF6E46",
        data: Array(24).fill(0), // 기본적으로 0으로 채움
      },
    ],
  });
  // console.log("차트", chartData.datasets[0].data);
  // 데이터가 업데이트될 때마다 데이터를 업데이트
  useEffect(() => {
    const fetchCountByHourData = async () => {
      try {
        const countByHourData = await getCountByHourData();
        if (countByHourData !== null) {
          // Find the canvas element
          const ctx = document.getElementById("custom-chart") as HTMLCanvasElement;

          // Check if a Chart.js instance is already associated with the canvas
          const existingChart = Chart.getChart(ctx);

          // If an existing instance is found, destroy it
          if (existingChart) {
            existingChart.destroy();
          }

          // Create a new chart instance
          new Chart(ctx, {
            type: "line",
            data: {
              labels: Array.from({ length: 24 }, (_, index) => index.toString()),
              datasets: [
                {
                  data: countByHourData,
                  borderColor: "#FF6E46",
                  backgroundColor: "rgba(255, 110, 70, 0.4)",
                  borderWidth: 1,
                  borderCapStyle: "round", // 라운드 선의 끝점 설정
                  fill: true,
                },
              ],
            },
            options: {
              scales: {
                // ... (설정을 원하시는 대로 변경하세요)
              },
              elements: {
                line: {
                  tension: 0.5, // 곡선의 곡률 설정 (0에 가까울수록 직선)
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    title: (context) => {
                      const dataIndex = context[0].dataIndex;
                      const time = dataIndex.toString();
                      const timeLabel = `${time}시`;
                      return timeLabel; // title로 설정될 문자열 반환
                    },
                    label: (context) => {
                      const value = context.raw;
                      const dataIndex = context.dataIndex;
                      const time = dataIndex.toString();
                      const valueLabel = `${value}명 접속 중`;

                      return valueLabel; // 문자열 반환
                    },
                  },
                  backgroundColor: "#fff",
                  bodyColor: "#000", // 원하는 폰트 색상으로 변경
                  displayColors: false, // 범례 박스 숨김
                  bodyFont: {
                    size: 16, // 폰트 크기 설정
                    weight: "bold", // 폰트 두께 설정
                  },
                  titleColor: "#000",
                  titleFont: {
                    size: 14,
                    weight: "bold",
                  },
                },
                filler: {
                  propagate: true, // 위 아래로 그래프 영역을 채움
                },
              },
            },
          });
        }
      } catch (error) {
        console.error("시간당 유저수 조회 오류", error);
      }
    };

    fetchCountByHourData();
  }, [onlineUsersData]);

  return (
    <DashBoardBox size="interest" style={{ display: "flex", alignItems: "center" }}>
      <S.InterestArea>
        <InterestSelect />
        <S.InterestWrapper>
          <S.ChartContainer>
            {onlineUsersData ? (
              <h3>지금 접속한 인원: {onlineUsersData.activeUser ?? "로딩 중..."}명</h3>
            ) : (
              <p>에러 발생</p>
            )}
            <S.ChartBox>
              <canvas id="custom-chart" width="389px" height="200px"></canvas>
            </S.ChartBox>
          </S.ChartContainer>
        </S.InterestWrapper>
      </S.InterestArea>
    </DashBoardBox>
  );
};

export default Interest;
