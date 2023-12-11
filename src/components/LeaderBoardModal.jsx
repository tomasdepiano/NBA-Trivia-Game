import React, { useState } from "react";
import "./Modal.css";

function LeaderBoardModal({ closeModal }) {
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
          <button>Play New Game</button>
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
