import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

function EditModal({ closeModal }) {
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
          <h1>Edit your Account</h1>
        </div>
        <form>
          <div className="body">
            <div>
              Current Email:
              <input type="text" />
            </div>
            <div>
              New Email:
              <input type="text" />
            </div>
          </div>

          <div className="footer">
            <button
              onClick={(e) => {
                e.preventDefault();
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
