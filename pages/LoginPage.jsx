import { Outlet } from "react-router-dom";
import Modal from "../src/components/CreateAccountModal.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <div>
              Email:
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              Password:
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
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
      <Outlet />
    </>
  );
}
