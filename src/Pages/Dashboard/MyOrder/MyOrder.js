import React from "react";
import { Button } from "react-bootstrap";

const MyOrder = ({ myOrder, handleDelete }) => {
  const { _id, name, email, order, price, address, phone, status } = myOrder;
  //   console.log(status);
  //   const [shown, setShown] = useState(false);

  //   if (status === "Approved") {
  //     setShown(true);
  //   }
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

          {status === "Pending" && (
            <Button
              className="btn mt-3 btn-grad-common"
              onClick={() => handleDelete(_id)}
            >
              Cancel Order
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
