import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import Logo from "../../../images/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div id="banner">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="btn-grad-banner"
      >
        <Container>
          <Navbar.Toggle className="mb-2" />
          <Navbar.Brand as={HashLink} to="/home#banner">
            <img style={{ height: "30px", width: "30px" }} alt="" src={Logo} />{" "}
            <span className="fw-bolder">
              <span style={{ color: "orange" }}>Light</span>House
            </span>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto text-start fw-bold">
              <Nav.Link as={HashLink} to="/home#banner">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/discover">
                Discover
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#feature">
                Feature
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#product">
                Product
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#chooseus">
                Why Us
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#review">
                Review
              </Nav.Link>

              {user?.email && (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}

              {user?.email ? (
                <div>
                  <Button className="button-design">{user?.displayName}</Button>
                  <Button className="button-design ms-2" onClick={logOut}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
