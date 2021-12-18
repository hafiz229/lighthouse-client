import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";

const AddProducts = () => {
  // http://localhost:5000/
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("Product Inserted Successfully");
        reset();
      }
    });
  };
  return (
    <div className="py-1" style={{ backgroundColor: "lightgray" }}>
      <h1 className="py-3">Add New Products</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column justify-content-center align-items-center mx-auto"
      >
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Enter Name"
          className="py-2 fw-bold add-product my-3"
        />
        <textarea
          {...register("description", { required: true, maxLength: 180 })}
          placeholder="Enter Description"
          className="py-2 fw-bold add-product"
        />
        <input
          {...register("img", { required: true })}
          placeholder="Enter Image URL"
          className="py-2 fw-bold add-product my-3"
        />
        <input
          type="number"
          {...register("price", { required: true, maxLength: 4 })}
          placeholder="Enter Price"
          className="py-2 fw-bold add-product"
        />
        <select
          {...register("status", { required: true })}
          className="py-2 fw-bold add-product my-3"
        >
          <option value="Pending">Pending</option>
        </select>

        <input
          className="d-inline-block btn-primary rounded p-2 fw-bold mb-5"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;
