import { useState, useRef } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Stopwatch({ timeStarted, timeStopped }) {
  const [startTime, setStartTime] = useState(null);

  const intervalRef = useRef(null);

  const { Timer } = useOutletContext();

  const [secondsPassed, setSecondsPassed] = Timer;

  console.log(timeStopped);

  function handleStart() {
    setStartTime(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (startTime != null && secondsPassed != null) {
        setSecondsPassed((Date.now() - startTime) / 1000);
      }
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

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
