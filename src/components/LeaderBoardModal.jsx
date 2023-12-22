import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

function LeaderBoardModal({ closeModal }) {
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/new-game");
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
        <div className="body"></div>
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
