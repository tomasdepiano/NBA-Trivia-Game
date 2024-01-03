import { useState } from "react";
import LeaderBoardModal from "../src/components/LeaderBoardModal";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNewGame = () => {
    navigate("/new-game");
  };

  const DataFromSQL = async () => {
    const res = await fetch("/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    console.log(response);
    setData(response);
  };

  return (
    <>
      <div>Welcome back, User</div>
      <div>Here are your previous game scores!</div>

      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
          DataFromSQL();
        }}
      >
        Click Here to see Current Leaderboard!
      </button>
      {openModal && <LeaderBoardModal closeModal={setOpenModal} data={data} />}
      <button onClick={handleNewGame}>Play New Game</button>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}
