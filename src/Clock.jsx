import { useState, useEffect } from "react";

export function Clock() {
  const [targetTime] = useState(1693587600000);
  //correct day: 1693587600000
  const [remainingTime, setRemainingTime] = useState(targetTime - Date.now());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = targetTime - currentTime;
      setRemainingTime(timeDifference);

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400000)
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((time % 86400000) / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600000) / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");

    return remainingTime <= 0
      ? `Còn 00 ngày, 00 giờ, 00 phút, 00 giây`
      : `Còn ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây thoii`;
  };
  return (
    <div>
      <div className="countdown-clock">{formatTime(remainingTime)}</div>
    </div>
  );
}
