import { Outlet } from "react-router-dom";
import Modal from "../modals/CreateAccountModal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <>
      {isHome && (
        <>
          <Container fluid>
            <div className="mx-auto">Please Log Into Your Account</div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address </Form.Label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Form.Text>
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleLogin(e)}
              >
                Submit
              </Button>
            </Form>
            <Button
              variant="primary"
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Create an Account
            </Button>
            {openModal && <Modal closeModal={setOpenModal} />}
          </Container>
        </>
      )}
      <Outlet
        context={{
          ContextScore: [score, setScore],
          Timer: [secondsPassed, setSecondsPassed],
        }}
      />
    </>
  );
}
