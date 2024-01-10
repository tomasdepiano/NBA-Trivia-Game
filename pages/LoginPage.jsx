import { Outlet } from "react-router-dom";
import Modal from "../src/components/CreateAccountModal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

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
          <Container fluid>
            <div>Please Log Into Your Account</div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>

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
            </Form>
            <button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Create an Account
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
          </Container>
        </>
      )}
      <Outlet />
    </>
  );
}
