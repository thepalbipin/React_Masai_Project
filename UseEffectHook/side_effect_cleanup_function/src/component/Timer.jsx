import { useState, useEffect } from "react";

function Timer(props) {
  const [isTimerMounted, setIsTimerMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(15);

  useEffect(() => {
    let timerId;
    if (isTimerMounted) {
      timerId = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerId);
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isTimerMounted]);

  const handleToggleTimer = () => {
    setIsTimerMounted(!isTimerMounted);
  };

  const formattedTime = String(currentTime % (60 * 60 * 24)).padStart(2, 0);

  return (
    <div>
      <button onClick={handleToggleTimer}>Toggle Timer</button>
      {isTimerMounted && <div>{formattedTime}</div>}
    </div>
  );
}

export default Timer;