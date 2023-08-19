import React, { useState, useEffect } from "react";
import * as S from "./style";
import DashBoardBox from "../DashBoardBox";
import InterestSelect from "./InterestSelect";
import { format } from "date-fns";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import axios from "axios";
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
import "chartjs-adapter-date-fns";
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

  const chartData = {
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
  };

  const minuteChartData = {
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
  };

  if (onlineUsersError) {
    console.log("Error fetching online users:", onlineUsersError);
  }

  if (onlineUsersData) {
    const activeUser = onlineUsersData.activeUser;
    const currentTime = new Date();

    // updateChartData 함수의 역할을 여기에 수행
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    chartData.datasets[0].data[hours] = (chartData.datasets[0].data[hours] || 0) + activeUser;
    minuteChartData.datasets[0].data[minutes] =
      (minuteChartData.datasets[0].data[minutes] || 0) + activeUser;
  }

  return (
    <DashBoardBox size="interest">
      <InterestSelect />
      <S.InterestWrapper>
        <S.ChartBox>
          <h3>지금 접속한 인원</h3>
          <div>
            {onlineUsersData ? (
              <p>현재 접속 인원: {onlineUsersData.activeUser ?? "로딩 중..."}</p>
            ) : (
              <p>에러 발생</p>
            )}
          </div>
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
