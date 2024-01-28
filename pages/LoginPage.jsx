import { Outlet } from "react-router-dom";
import Modal from "../src/components/modals/CreateAccountModal.jsx";
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
    <main className="bg-blue-400 flex h-screen justify-center">
      {isHome && (
        <div className="flex flex-col items-center  justify-center space-y-4">
          <h1 className="font-bold">Please Log Into Your Account</h1>
          <form>
            <label className="flex justify-center">Email address</label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label className="flex justify-center">Password</label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              className="btn glass"
              type="submit"
              onClick={(e) => handleLogin(e)}
            >
              Submit
            </button>
          </form>
          <button
            className="btn glass"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Create an Account
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      )}
      <Outlet
        context={{
          ContextScore: [score, setScore],
          Timer: [secondsPassed, setSecondsPassed],
        }}
      />
    </main>
  );
}
