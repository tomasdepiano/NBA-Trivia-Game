import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

function EditModal({ closeModal, email }) {
  const [newEmail, setNewEmail] = useState("");

  function changeEmail() {
    axios.put("/email", {
      email: newEmail,
    });
  }

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
          <h1 className="font-bold">Edit your Account</h1>
        </div>
        <form>
          <div className="body">
            <p>Current Email: {email}</p>
            <div>
              New Email:
              <input
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
                type="text"
                value={newEmail}
              />
            </div>
          </div>

          <div className="footer">
            <button
              onClick={(e) => {
                e.preventDefault();
                changeEmail();
                window.alert("Email has been changed");
                closeModal(false);
              }}
            >
              Change Email Address
            </button>
            <button
              onClick={() => {
                closeModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
