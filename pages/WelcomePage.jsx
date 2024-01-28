import { useState, useEffect } from "react";
import LeaderBoardModal from "../src/components/modals/LeaderBoardModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditModal from "../src/components/modals/EditAccountModal";
import DeleteModal from "../src/components/modals/DeleteAccountModal";

export default function WelcomePage() {
  const [openModal, setOpenModal] = useState(false);
  const [editOpenModal, setEditOpenModal] = useState(false);
  const [deleteOpenModal, setDeleteOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/welcome").then((res) => {
      setUser(res.data);
    });
  }, []);

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
    <div className="flex justify-center flex-col items-center space-x-4 space-y-4 ">
      <div className="font-bold">
        Welcome back, {user ? user.fname : "User"}
      </div>

      <button
        className="btn btn-glass "
        onClick={() => {
          setOpenModal(true);
          DataFromSQL();
        }}
      >
        Click Here to see Current Leaderboard!
      </button>
      {openModal && <LeaderBoardModal closeModal={setOpenModal} data={data} />}
      <button className="btn btn-glass" onClick={handleNewGame}>
        Play New Game
      </button>
      <button
        className="btn btn-glass"
        onClick={() => {
          setEditOpenModal(true);
        }}
      >
        Edit Your Account
      </button>
      {editOpenModal && (
        <EditModal closeModal={setEditOpenModal} email={user.email} />
      )}
      <button
        className="btn btn-glass"
        onClick={() => {
          setDeleteOpenModal(true);
        }}
      >
        Delete Your Account
      </button>
      {deleteOpenModal && <DeleteModal closeModal={setDeleteOpenModal} />}
      <button className="btn btn-glass" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
