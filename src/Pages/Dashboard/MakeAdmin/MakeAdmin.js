import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  // <Alert variant="success">User Created Successfully</Alert>
  // https://desolate-scrubland-98270.herokuapp.com/
  const [email, setEmail] = useState("");
  // show success msg if make admin success
  const [success, setSuccess] = useState(false);
  // clear msg
  const [show, setShow] = useState(false);
  // receive token from useAuth()
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    setShow(true);
    const user = { email };
    fetch("https://desolate-scrubland-98270.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <h1 className="py-3 fw-bold">Make Admin</h1>
      <form onSubmit={handleAdminSubmit} className="mb-5">
        <input
          type="email"
          onBlur={handleOnBlur}
          placeholder="Enter email"
          className="add-product py-2 fw-bold"
        />
        <br />
        <Button type="submit" className="py-2 my-3 btn btn-grad-common mx-auto">
          Make Admin
        </Button>
        {success && show && (
          <Alert severity="success" className="add-product mx-auto">
            Made Admin successfully!
          </Alert>
        )}
        {!success && show && (
          <Alert severity="danger" className="add-product mx-auto">
            Made Admin Failed!
          </Alert>
        )}
      </form>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
};

export default MakeAdmin;
