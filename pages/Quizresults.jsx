import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import LeaderBoardModal from "../src/components/modals/LeaderBoardModal";
import { useState } from "react";
import { data } from "../scripts/quizdata";

export default function QuizResults({ closeModal }) {
  const navigate = useNavigate();

  function GoBackHome() {
    navigate("/welcome");
  }
  const { ContextScore, Timer, ShowModal } = useOutletContext();

  const [score, setScore] = ContextScore;
  const [secondsPassed, setSecondsPassed] = Timer;
  const [showModal, setShowModal] = ShowModal;
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setSecondsPassed(0);
  };

  return (
    <div className="flex justify-center flex-col items-center space-x-4 space-y-4">
      <h2 className="font-bold animate-bounce text-white">
        You scored {score} out of 10 in {secondsPassed} seconds.
      </h2>
      <button
        className="btn btn-glass"
        onClick={() => {
          reset();
          GoBackHome();
        }}
      >
        Go back to Home Screen
      </button>
      <button onClick={() => setShowModal(true)} className="btn btn-glass">
        View the current LeaderBoard
      </button>
      <Confetti />
      {showModal && (
        <LeaderBoardModal
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
