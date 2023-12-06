import React, { useState } from "react";
import "./Modal.css";

function Modal({ closeModal }) {
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
          <h1>Lets create a new account!</h1>
        </div>
        <div className="body">
          <div>
            First Name:
            <input type="text" name="fname" />
          </div>
          <div>
            Last Name:
            <input type="text" name="lname" />
          </div>
          <div>
            Email:
            <input type="text" name="email" />
          </div>
          <div>
            Password:
            <input type="text" name="password" />
          </div>
        </div>
        <div className="footer">
          <button>Continue</button>
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
