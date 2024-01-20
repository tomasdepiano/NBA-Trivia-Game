import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function QuizResults() {
  const navigate = useNavigate();

  function GoBackHome() {
    navigate("/");
  }
  const { ContextScore, Timer } = useOutletContext();

  const [score, setScore] = ContextScore;
  const [secondsPassed, setSecondsPassed] = Timer;

  return (
    <>
      <h2>
        You scored {score} out of 10 in {secondsPassed} seconds.
      </h2>
      <button onClick={GoBackHome}>Go back to Home Screen</button>
      <button>View the current LeaderBoard</button>
      <Confetti />
    </>
  );
}
