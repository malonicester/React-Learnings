import React, { useState, useEffect, useRef } from 'react'

const fixTimeString = (timeVal) => {
  return timeVal < 10 ? `0${timeVal}` : timeVal;
}
const timeString = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  return `${fixTimeString(minutes)}m : ${fixTimeString(seconds)}s`;
}
console.log(timeString(100))
export const Timer = () => {
  const [count, setCount] = useState(100);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      stopTimer();
    }
  }, [])

  const startTimer = () => {
    if (timerRef.current != null) return;
    timerRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount == 0) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prevCount - 1;
      })

    }, 1000);
  }

  const resetTime = () => {
    stopTimer();
    setCount(10);
  }

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  return (
    <div>
      <h1>Timer : {timeString(count)}</h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTime}>RESET</button>
    </div>
  )
}

export default Timer;