import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Login = () => {
  const [show, setShow] = useState(false);
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, SignInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // Email/Password Login Submit Handler
  const handleLoginSubmit = (e) => {
    setShow(true);
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  // Google Sign In Click Handler
  const handleGoogleSignIn = () => {
    SignInWithGoogle(location, history);
  };
  return (
    <div>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "lightgray" }}>
        <div className="pb-5 pt-3 container">
          <h1 className="fw-bold mb-3">Login</h1>
          <div
            className=" d-flex flex-column align-items-center rounded-3 py-3 fw-bold contact text-start mx-auto"
            id="contact"
          >
            <Form className="" style={{ width: "50%" }}>
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

              <Button
                onClick={handleLoginSubmit}
                className="fw-bold d-inline-block mt-3"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
              <br />
              <NavLink to="/register">
                <Button
                  style={{ textDecoration: "none" }}
                  className="px-0 my-3 fw-bold"
                  variant="link"
                >
                  New User? Please Register
                </Button>
              </NavLink>
              {isLoading && show && (
                <Spinner animation="border" variant="primary" />
              )}
              {user?.email && show && (
                <Alert variant="success">User Created Successfully</Alert>
              )}
              {authError && show && <Alert variant="danger">{authError}</Alert>}
              <br />
              <Button
                onClick={handleGoogleSignIn}
                className="fw-bold d-inline-block mb-5"
                variant="primary"
              >
                Google Sign In
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
