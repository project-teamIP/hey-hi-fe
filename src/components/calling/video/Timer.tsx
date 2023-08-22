import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface TimerProps {
  onStart: () => void;
  running: boolean; // running 값을 전달받을 prop을 추가합니다.
}
const Timer: React.FC<TimerProps> = (props) => {
  const { onStart, running } = props;
  const navigate = useNavigate();
  const initialTimeMinutes = 10; // 초기 시간을 분 단위로 설정합니다.
  const [time, setTime] = useState(initialTimeMinutes * 60); // 초 단위로 변환하여 저장합니다.
  const [isRunning, setIsRunning] = useState(running);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined; // 초기화를 위해 undefined로 설정

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => {
      if (interval !== undefined) {
        // undefined 체크 추가
        clearInterval(interval);
      }
    };
  }, [running, time]);

  const handleStart = () => {
    setIsRunning(true);
    onStart();
  };

  const minutes = Math.floor(time / 60); // 초를 분으로 변환
  const seconds = time % 60; // 남은 초 계산

  if (time === 0) {
    alert("통화시간이 종료되었습니다.");
    navigate("/dashboard");
  }
  return (
    <div>
      <S.CallTimer>
        {minutes}:{seconds}
      </S.CallTimer>
      {isRunning ? <button onClick={handleStart}></button> : <></>}
    </div>
  );
};

export default Timer;
