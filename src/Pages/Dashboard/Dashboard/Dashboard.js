import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import Logo from "../../../images/logo.png";
import Home from "../../Home/Home/Home";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import NormalRoute from "../../Login/NormalRoute/NormalRoute";
import AddProducts from "../AddProducts/AddProducts";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import UserReview from "../UserReview/UserReview";

const Dashboard = () => {
  // from react router nesting
  let { path, url } = useRouteMatch();
  //   console.log(url);

  // receive admin from useAuth()
  const { admin, logOut } = useAuth();
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
          <Navbar.Brand as={Link} to={`${url}`}>
            <img style={{ height: "30px", width: "30px" }} alt="" src={Logo} />{" "}
            <span className="fw-bolder">
              <span style={{ color: "orange" }}>Dashboard</span>
            </span>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto text-start">
              <Nav.Link as={HashLink} to="/home#banner">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/home" onClick={logOut}>
                Logout
              </Nav.Link>
              {/* common routes */}
              <Nav.Link as={Link} to={`${url}`}>
                Dashboard Home
              </Nav.Link>
              {/* admin routes */}
              {admin && (
                <div className="d-md-flex">
                  <Nav.Link as={Link} to={`${url}/addProducts`}>
                    Add Products
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/makeAdmin`}>
                    Make Admin
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageAllOrders`}>
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageProducts`}>
                    Manage Products
                  </Nav.Link>
                </div>
              )}
              {/* normal user routes */}
              {!admin && (
                <div className="d-md-flex">
                  <Nav.Link as={Link} to={`${url}/myOrders`}>
                    My Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/userReview`}>
                    User Review
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        {/* admin routes */}
        <AdminRoute path={`${path}/addProducts`}>
          <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        {/* normal user routes */}
        <NormalRoute path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </NormalRoute>
        <NormalRoute path={`${path}/userReview`}>
          <UserReview></UserReview>
        </NormalRoute>
      </Switch>
    </div>
  );
};

export default Dashboard;
