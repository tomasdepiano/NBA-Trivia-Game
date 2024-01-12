import { useState } from "react";
import Quiz from "../src/components/Quiz/quiz";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function QuizResults() {
  const navigate = useNavigate();

  function GoBackHome() {
    navigate("/");
  }
  const { ContextScore, Timer } = useOutletContext();

  const [score, setScore] = ContextScore;
  const [now, setNow] = Timer;

  console.log(score);
  return (
    <>
      <h2>
        You scored {score} out of 10 in {now} seconds.
      </h2>
      <button onClick={GoBackHome}>Go back to Home Screen</button>
    </>
  );
}
