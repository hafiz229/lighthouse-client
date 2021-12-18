import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, price, description, img } = product;

  return (
    <div id="product">
      <div
        className="product shadow"
        style={{
          backgroundColor: "rgba(128, 128, 128, 0.137)",
        }}
      >
        <img src={img} className="" alt="" />
        <div className="text-start px-5">
          <h3 className="fw-bold">{name}</h3>
          <p>{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-bold">${price}</h2>
            <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
              <button className="btn btn-grad-common">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
