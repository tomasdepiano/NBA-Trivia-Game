import { Outlet } from "react-router-dom";
import Modal from "../src/components/CreateAccountModal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/welcome");
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      {isHome && (
        <>
          <div>Please Log Into Your Account</div>
          <form onSubmit={handleSubmit}>
            <div>
              Email:
              <input type="text" name="email" />
            </div>
            <div>
              Password:
              <input type="password" name="password" />
            </div>
            <button onClick={handleLogin}>Submit</button>
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
