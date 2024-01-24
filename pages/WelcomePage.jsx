import { useState, useEffect } from "react";
import LeaderBoardModal from "../modals/LeaderBoardModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditModal from "../modals/EditAccountModal";
import DeleteModal from "../modals/DeleteAccountModal";

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
    <>
      <div>Welcome back, {user ? user.fname : "User"}</div>

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
      <button
        className="openModalBtn"
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
        className="openModalBtn"
        onClick={() => {
          setDeleteOpenModal(true);
        }}
      >
        Delete Your Account
      </button>
      {deleteOpenModal && <DeleteModal closeModal={setDeleteOpenModal} />}
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}
