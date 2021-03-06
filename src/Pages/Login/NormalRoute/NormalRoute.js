import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NormalRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && !admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default NormalRoute;
