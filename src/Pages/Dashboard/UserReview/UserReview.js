import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const UserReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Thanks for your feedback");
        reset();
      }
    });
  };
  return (
    <div className="py-1" style={{ backgroundColor: "lightgray" }}>
      <h1 className="fw-bold py-3">User Review</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column justify-content-center align-items-center mx-auto"
      >
        <input
          defaultValue={user.displayName}
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Enter name"
          className="py-2 fw-bold add-product my-3"
        />
        <input
          {...register("profession", { required: true })}
          placeholder="Enter profession"
          className="py-2 fw-bold add-product"
        />
        <input
          {...register("company", { required: true })}
          placeholder="Enter company"
          className="py-2 fw-bold add-product my-3"
        />
        <textarea
          {...register("description", { required: true, maxLength: 180 })}
          placeholder="Enter description"
          className="py-2 fw-bold add-product"
        />
        <select
          {...register("rating", { required: true })}
          className="py-2 fw-bold add-product my-3"
        >
          <option value="5">User Rating: 5</option>
          <option value="4">User Rating: 4</option>
          <option value="3">User Rating: 3</option>
          <option value="2">User Rating: 2</option>
          <option value="1">User Rating: 1</option>
          <option value="0">User Rating: 0</option>
        </select>

        <input
          className="d-inline-block btn btn-grad-common rounded p-2 fw-bold mb-5"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default UserReview;
