import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user, token } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get my orders
  useEffect(() => {
    setIsLoading(true);
    const url = `https://desolate-scrubland-98270.herokuapp.com/orders?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .finally(() => setIsLoading(false));
  }, [user.email, token]);

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
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = myOrders.filter((myOrder) => myOrder._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div style={{ backgroundColor: "lightgray" }} className="pb-5">
      <div className="container pb-5">
        <h1 className="fw-bold py-3" id="products">
          My Orders
        </h1>
        {(isLoading && (
          <Spinner className="mt-5" animation="grow" variant="primary" />
        )) || (
          <div className="product-container">
            {myOrders.map((myOrder) => (
              <MyOrder
                key={myOrder._id}
                myOrder={myOrder}
                handleDelete={handleDelete}
              ></MyOrder>
            ))}
          </div>
        )}
      </div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
    </div>
  );
};

export default MyOrders;
