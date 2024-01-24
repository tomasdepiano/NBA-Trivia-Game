import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

function DeleteModal({ closeModal }) {
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
          <h1>Are you sure you want to delete your account?</h1>
        </div>
        <form>
          <div className="footer">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Yes
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

export default DeleteModal;
