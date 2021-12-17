import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import "./Booking.css";

const Booking = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { reset, register, handleSubmit } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Order Placed Successfully");
        reset();
      }
    });
  };

  return (
    <div>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "lightgray" }}>
        <h1 className="py-3 fw-bold">Place Order</h1>
        <div className="col-md-12 pb-5 container d-md-flex justify-content-evenly align-items-center ">
          <div
            className="product shadow col-md-4 mb-3"
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
          <div className="add-booking col-md-6 mb-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <input
                className="w-100 py-2 fw-bold"
                defaultValue={user.displayName}
                {...register("name", { required: true })}
              />
              <input
                className="w-100 py-2 fw-bold"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              <input
                className="w-100 py-2 fw-bold"
                defaultValue={product.name}
                {...register("order", { required: true })}
              />
              <input
                className="w-100 py-2 fw-bold"
                type="number"
                defaultValue={product.price}
                {...register("price", { required: true })}
              />
              <input
                className="w-100 py-2 fw-bold"
                placeholder="Enter Address"
                defaultValue=""
                {...register("address", { required: true })}
              />
              <input
                className="w-100 py-2 fw-bold"
                type="number"
                placeholder="Enter Phone Number"
                defaultValue=""
                {...register("phone", { required: true })}
              />
              <input
                className="w-100 py-2 fw-bold"
                defaultValue={product.status}
                {...register("status", { required: true })}
              />
              <input
                className="d-inline-block btn-primary rounded p-2 fw-bold"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
