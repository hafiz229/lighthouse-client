import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import Logo from "../../../images/logo.png";

const Navigation = () => {
  return (
    <div>
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
            <Nav className="me-auto text-start">
              <Nav.Link as={HashLink} to="/home#banner">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/discover">
                Discover
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#product">
                Product
              </Nav.Link>

              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#about">
                About
              </Nav.Link>

              <Nav.Link as={HashLink} to="/home#contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
