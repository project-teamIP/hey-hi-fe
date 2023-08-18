import React, { useState, useEffect } from "react";
import * as S from "./style";
import DashBoardBox from "../DashBoardBox";
import InterestSelect from "./InterestSelect";
import { format } from "date-fns";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
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
  const { data: onlineUsersData, error: onlineUsersError } = useQuery(
    "onlineUsers",
    fetchOnlineUsers,
    {
      refetchInterval: 60000, // 1분마다 데이터 갱신
    }
  );
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 24 }, (_, index) => index.toString()),
    datasets: [
      {
        label: "Online Users",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: Array(24).fill(0),
      },
    ],
  });
  const [minuteChartData, setMinuteChartData] = useState({
    labels: Array.from({ length: 60 }, (_, index) => index.toString()),
    datasets: [
      {
        label: "Minute Online Users",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: Array(60).fill(0),
      },
    ],
  });

  // 데이터가 업데이트될 때마다 데이터를 업데이트
  useEffect(() => {
    if (onlineUsersData) {
      const activeUser = onlineUsersData.activeUser;
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      setChartData((prevChartData) => {
        const newData = [...prevChartData.datasets[0].data];
        newData[hours] = (newData[hours] || 0) + activeUser;

        return {
          ...prevChartData,
          datasets: [{ ...prevChartData.datasets[0], data: newData }],
        };
      });

      setMinuteChartData((prevMinuteChartData) => {
        const newData = [...prevMinuteChartData.datasets[0].data];
        newData[minutes] = (newData[minutes] || 0) + activeUser;

        return {
          ...prevMinuteChartData,
          datasets: [{ ...prevMinuteChartData.datasets[0], data: newData }],
        };
      });
    }
  }, [onlineUsersData]);

  return (
    <DashBoardBox size="interest">
      <InterestSelect />
      <S.InterestWrapper>
        <S.ChartBox>
          {onlineUsersData ? (
            <h3>지금 접속한 인원: {onlineUsersData.activeUser ?? "로딩 중..."}명</h3>
          ) : (
            <p>에러 발생</p>
          )}
          <div>
            <Line
              data={chartData}
              options={{
                scales: {
                  x: {
                    type: "category",
                    title: {
                      display: true,
                      text: "시간대",
                    },
                  },
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: "접속 인원",
                    },
                  },
                },
              }}
            />
            <Line
              data={minuteChartData}
              options={{
                scales: {
                  x: {
                    type: "category",
                    title: {
                      display: true,
                      text: "분",
                    },
                  },
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: "접속 인원",
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                },
              }}
            />
          </div>
        </S.ChartBox>
      </S.InterestWrapper>
    </DashBoardBox>
  );
};

export default Interest;
