import { useState } from "react";
import Quiz from "../src/components/Quiz/quiz";
import { useOutletContext } from "react-router-dom";

export default function QuizResults() {
  const { ContextScore, Timer } = useOutletContext();

  const [score, setScore] = ContextScore;
  const [now, setNow] = Timer;

  console.log(score);
  return (
    <>
      <h2>
        Hello {score} {now}
        {/* {<Quiz userScore={userScore} />}
        You scored {setUserScore} out of 10. */}
      </h2>
      {/* <button onClick={reset}>Reset</button>
      <button onClick={GoBackHome}>Go back to Home Screen</button> */}
    </>
  );
}
