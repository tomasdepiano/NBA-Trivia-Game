import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../../scripts/quizdata";
import { useNavigate, useOutletContext } from "react-router-dom";
import StopWatch from "./Stopwatch";
import QuizResults from "../../../pages/Quizresults";

export default function Quiz({ userScore }) {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  // const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeStopped, setTimeStopped] = useState(false);

  // const doesthiswork = useOutletContext();
  // console.log(doesthiswork);

  const { ContextScore } = useOutletContext();

  const [score, setScore] = ContextScore;

  const navigate = useNavigate();

  function GoToResultsPage() {
    navigate("/results");
  }

  function GoBackHome() {
    navigate("/");
  }

  function startTime() {
    if (!timeStarted) {
      setTimeStarted(true);
    }
  }
  //save time, route to next page and stop time
  function handleFinishQuiz() {
    if (index === data.length - 1) {
      if (!timeStopped) {
        GoToResultsPage();
        setTimeStopped(true);
      }
    }
  }

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <div>
        {<StopWatch timeStarted={timeStarted} timeStopped={timeStopped} />}
      </div>
      <h1>NBA Trivia Game</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 1);
                startTime();
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 2);
                startTime();
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 3);
                startTime();
              }}
            >
              {question.option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, 4);
                startTime();
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button
            onClick={(e) => {
              if (index === data.length - 1) {
                return handleFinishQuiz();
              }
              next();
            }}
          >
            {index === data.length - 1 ? "Finish Quiz" : "Next"}
          </button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          {" "}
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
          <button onClick={GoBackHome}>Go back to Home Screen</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
