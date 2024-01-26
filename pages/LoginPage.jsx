import { Outlet } from "react-router-dom";
import Modal from "../modals/CreateAccountModal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [secondsPassed, setSecondsPassed] = useState(0);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("/auth", {
      email,
      password,
    });
    if (res.data.success) {
      navigate("/welcome");
    } else {
      alert("Email or password is not correct. Try again please.");
    }
  };

  return (
    <>
      {isHome && (
        <>
          <div>Please Log Into Your Account</div>
          <form>
            <label>Email address </label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button type="submit" onClick={(e) => handleLogin(e)}>
              Submit
            </button>
          </form>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Create an Account
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </>
      )}
      <Outlet
        context={{
          ContextScore: [score, setScore],
          Timer: [secondsPassed, setSecondsPassed],
        }}
      />
    </>
  );
}
