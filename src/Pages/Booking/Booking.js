import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";

const Booking = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "lightgray" }}>
        <h1 className="py-3 fw-bold">Place Order</h1>
        <div className="pb-5 container d-md-flex justify-content-between align-items-center ">
          <div
            className="product shadow"
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.137)",
            }}
          >
            <img src={product.img} className="" alt="" />
            <div className="text-start px-5">
              <h3 className="fw-bold">{product.name}</h3>
              <p>{product.description}</p>
              <h2 className="fw-bold">${product.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
