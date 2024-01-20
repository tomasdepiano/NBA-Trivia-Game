import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

function LeaderBoardModal({ closeModal, data }) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const navigate = useNavigate();

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
    setLeaderboardData(response);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">
          <h1>Here are the current Top 5 Players and Scores!</h1>
        </div>
        <div className="body">
          {data.map((player) => {
            // console.log(player);
            console.log(player.scores[0].timer);
            return (
              <div key={player.userId}>
                {player.fname} {player.lname} {player.scores[0].scores}{" "}
                {player.scores[0].timer}
              </div>
            );
          })}
        </div>
        <div className="footer">
          <button onClick={handleNewGame}>Play New Game</button>
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardModal;
