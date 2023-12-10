import { useState } from "react";
import LeaderBoardModal from "../src/components/LeaderBoardModal";

export default function WelcomePage() {
  const [openModal, setOpenModal] = useState(false);

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
      <div>Play New Game</div>
    </>
  );
}
