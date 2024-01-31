import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteModal({ closeModal }) {
  const navigate = useNavigate();
  function deleteUser() {
    axios.delete("/deleteUser").then(() => {
      alert("Your account has been deleted.");
      navigate("/");
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
          <h1>Are you sure you want to delete your account?</h1>
        </div>
        <form>
          <div className="footer">
            <button
              className="flex justify-center"
              onClick={(e) => {
                e.preventDefault();
                deleteUser();
                closeModal(false);
              }}
            >
              Yes
            </button>
            <button
              className="flex justify-center"
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
