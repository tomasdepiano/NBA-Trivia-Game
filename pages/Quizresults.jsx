import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import LeaderBoardModal from "../src/components/modals/LeaderBoardModal";

export default function QuizResults({ closeModal }) {
  const navigate = useNavigate();

  function GoBackHome() {
    navigate("/welcome");
  }
  const { ContextScore, Timer, ShowModal } = useOutletContext();

  const [score, setScore] = ContextScore;
  const [secondsPassed, setSecondsPassed] = Timer;
  const [showModal, setShowModal] = ShowModal;

  return (
    <div className="flex justify-center flex-col items-center space-x-4 space-y-4">
      <h2 className="font-bold animate-bounce text-white">
        You scored {score} out of 10 in {secondsPassed} seconds.
      </h2>
      <button className="btn btn-glass" onClick={GoBackHome}>
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
