import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const [show, setShow] = useState(false);
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    setShow(true);
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <Navigation></Navigation>

      <div style={{ backgroundColor: "lightgray" }}>
        <div className="py-3 container">
          <h1 className="fw-bold mb-3">Register</h1>
          <div
            className=" d-flex align-items-center rounded-3 py-3 fw-bold contact"
            id="contact"
          >
            <Form className="text-start mx-auto" style={{ width: "50%" }}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter password"
                  name="password2"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button
                onClick={handleLoginSubmit}
                className="fw-bold d-inline-block btn btn-grad-common"
                variant="primary"
                type="submit"
              >
                Register
              </Button>
              <br />
              <NavLink to="/login">
                <Button
                  style={{ textDecoration: "none" }}
                  className="px-0 fw-bold"
                  variant="link"
                >
                  Already Registered? Please Login
                </Button>
              </NavLink>
              {isLoading && show && (
                <Spinner animation="border" variant="primary" />
              )}
              {user?.email && show && (
                <Alert variant="success">User Created Successfully</Alert>
              )}
              {authError && show && <Alert variant="danger">{authError}</Alert>}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
