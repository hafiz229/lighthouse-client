import React, { useEffect, useState } from "react";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // get all orders
  useEffect(() => {
    fetch("https://desolate-scrubland-98270.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  // update the status of an order
  const handleApprove = (id, status) => {
    const order = { status };
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      fetch(`https://desolate-scrubland-98270.herokuapp.com/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => alert("Order Approved Successfully"));
    }
  };

  // delete an order
  const handleDelete = (id) => {
    // ask for a confirmation before delete an order
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      const url = `https://desolate-scrubland-98270.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Order Canceled Successfully");
            const remaining = allOrders.filter(
              (allOrder) => allOrder._id !== id
            );
            setAllOrders(remaining);
          }
        });
    }
  };
  return (
    <div style={{ backgroundColor: "lightgray" }} className="pb-5">
      <div className="container pb-5">
        <h1 className="fw-bold py-3" id="products">
          Manage All Orders
        </h1>
        <div className="product-container">
          {allOrders.map((allOrder) => (
            <ManageAllOrder
              key={allOrder._id}
              allOrder={allOrder}
              handleDelete={handleDelete}
              handleApprove={handleApprove}
            ></ManageAllOrder>
          ))}
        </div>
      </div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
    </div>
  );
};

export default ManageAllOrders;
