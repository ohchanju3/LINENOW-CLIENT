import { useEffect, useState } from "react";

type countdownFormat = "MMSS";

interface Countdown {
  leftTotal: number;

  leftMinutes: number;
  leftSeconds: number;
}

interface useCountdownProps {
  targetDate: string | null;
  timeoverAction?: () => void;
}

const useCountdown = (props: useCountdownProps) => {
  const {
    targetDate,
    timeoverAction = () => {
      history.go(0);
    },
  } = props;
  const [countdown, setCountdown] = useState<Countdown>(
    calculateTime(targetDate)
  );
  const [isCountdownOver, setIsCountDownOver] = useState<boolean>(
    calculateTime(targetDate).leftTotal <= 0
  );

  useEffect(() => {
    if (calculateTime(targetDate).leftTotal > 0) {
      const intervalId = setInterval(() => {
        const newCountdown = calculateTime(targetDate);
        setCountdown(newCountdown);

        if (newCountdown.leftTotal <= 0) {
          clearInterval(intervalId);
          setIsCountDownOver(true);
          timeoverAction();
          return;
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [targetDate]);

  const getString = (format: countdownFormat) => {
    switch (format) {
      case "MMSS":
        return `${countdown.leftMinutes}:${String(
          countdown.leftSeconds
        ).padStart(2, "0")}`;
      default:
        return `${countdown.leftMinutes}분 ${countdown.leftSeconds}초`;
    }
  };

  return { countdown, getString, isCountdownOver };
};

export default useCountdown;

// 목표 날짜까지의 남은 시간을 계산하는 함수
function calculateTime(targetDate: string | null): Countdown {
  if (!targetDate) {
    return {
      leftTotal: 0,
      leftMinutes: 0,
      leftSeconds: 0,
    };
  }

  const now = new Date();
  const target = new Date(targetDate);
  const leftTotal = Math.max(target.getTime() - now.getTime(), 0);
  const leftMinutes = Math.floor(leftTotal / (1000 * 60));
  const leftSeconds = Math.floor((leftTotal % (1000 * 60)) / 1000);
  return { leftTotal, leftMinutes, leftSeconds };
}
