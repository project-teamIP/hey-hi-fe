import React, { useEffect } from "react";
import * as S from "./style";

interface TimerProps {
  onStart: () => void;
  running: boolean; // running 값을 전달받을 prop을 추가합니다.
  time: number;
  onTimeChange: (newTime: number) => void;
}
const Timer: React.FC<TimerProps> = (props) => {
  const { onStart, running, time, onTimeChange } = props;
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (running && time > 0) {
      interval = setInterval(() => {
        onTimeChange(time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [running, time, onTimeChange]);

  const handleStart = () => {
    onStart();
    onTimeChange(time); // 타이머 시작할 때 현재 time 값을 전달
  };

  const formattedMinutes = String(Math.floor(time / 60)).padStart(2, "0");
  const formattedSeconds = String(time % 60).padStart(2, "0");

  return (
    <div>
      <S.CallTimer>
        {formattedMinutes}: {formattedSeconds}
      </S.CallTimer>
      {running ? <button hidden={true} onClick={handleStart}></button> : <></>}
    </div>
  );
};

export default Timer;
