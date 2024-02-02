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
        <div>
          <h1 className="flex justify-center font-bold underline">
            Here are the current Top 5 Players and Scores!
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-6 gap-10">
          <div className="font-bold underline">Player Name</div>
          <div className="font-bold underline">Scores</div>
          <div className="font-bold underline">Timer</div>

          {!!topScores.length &&
            topScores.map((score) => {
              return (
                <>
                  <div key={score.scoreId}>
                    {score.user.fname} {score.user.lname}
                  </div>
                  <div className="flex text-center">{score.scores}</div>{" "}
                  <div className="flex text-end">{score.timer}</div>
                </>
              );
            })}
        </div>
        <div className="footer">
          <button className="flex justify-center" onClick={handleNewGame}>
            Play New Game
          </button>
          <button
            className="flex justify-center"
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
