import { Outlet } from "react-router-dom";
import Modal from "../src/components/CreateAccountModal.jsx";
import { useState } from "react";

export default function LoginPage() {
  const path = window.location.pathname;

  const isHome = path === "/" ? true : false;

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {isHome && (
        <>
          <div>Please Log Into Your Account</div>
          <form>
            <div>
              Email:
              <input type="text" name="email" />
            </div>
            <div>
              Password:
              <input type="text" name="password" />
            </div>
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
