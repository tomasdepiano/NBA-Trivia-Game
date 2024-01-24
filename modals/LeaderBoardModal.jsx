import React, { useEffect, useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LeaderBoardModal({ closeModal }) {
  const [topScores, setTopScores] = useState([]);
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/new-game");
  };

  const Top5 = async () => {
    const res = await axios.get("/top5");
    setTopScores(res.data.topScores);
  };
  useEffect(() => {
    Top5();
  }, []);

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
          <div>Player Name</div>
          <div>Scores</div>
          <div>Timer</div>
        </div>
        <div className="body">
          {!!topScores.length &&
            topScores.map((score) => {
              console.log(topScores);
              return (
                <div key={score.scoreId}>
                  {score.user.fname} {score.user.lname} {score.scores}{" "}
                  {score.timer}
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
