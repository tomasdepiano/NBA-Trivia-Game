import { useState, useRef } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Stopwatch({ timeStarted, timeStopped }) {
  const [startTime, setStartTime] = useState(null);

  const intervalRef = useRef(null);

  const { Timer } = useOutletContext();

  const [now, setNow] = Timer;

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if (timeStarted) {
      handleStart();
    }
    return () => handleStop();
  }, [timeStarted]);

  useEffect(() => {
    if (timeStopped) {
      handleStop();
    }
    return () => handleStart();
  }, [timeStopped]);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
