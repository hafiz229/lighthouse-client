import React from "react";
import { Button } from "react-bootstrap";

const ManageAllOrder = ({ allOrder, handleDelete, handleApprove }) => {
  const { _id, name, email, order, price, address, phone, status } = allOrder;
  return (
    <div>
      <div
        className="product shadow"
        style={{
          backgroundColor: "rgba(128, 128, 128, 0.137)",
        }}
      >
        <div className="text-start p-5">
          <h3 className="fw-bold">{order}</h3>
          <p>{name}</p>
          <p>{email}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p className="fw-bold">{status}</p>
          <h2 className="fw-bold">${price}</h2>

          <Button
            className="btn mb-2 btn-grad-common"
            style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
            onClick={() => handleDelete(_id)}
          >
            Cancel Order
          </Button>
          <Button
            className="btn mb-3 btn-grad-common"
            style={{ backgroundColor: "rgb(93, 63, 211)", color: "white" }}
            onClick={() => handleApprove(_id, "Approved")}
          >
            Approve Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;
