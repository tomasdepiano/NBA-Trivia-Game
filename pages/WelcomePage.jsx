import { useState } from "react";
import LeaderBoardModal from "../src/components/LeaderBoardModal";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNewGame = () => {
    navigate("/new-game");
  };

  return (
    <>
      <div>Welcome back, User</div>
      <div>Here are your previous game scores!</div>

      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Click Here to see Current Leaderboard!
      </button>
      {openModal && <LeaderBoardModal closeModal={setOpenModal} />}
      <button onClick={handleNewGame}>Play New Game</button>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}
