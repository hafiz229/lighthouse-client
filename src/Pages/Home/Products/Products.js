import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  // set a maximum limit to 8
  const size = 8;

  useEffect(() => {
    fetch(`http://localhost:5000/products?size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ backgroundColor: "lightgray" }} className="pb-5">
      <div className="container">
        <h2 className="fw-bold py-3" id="products">
          Top Products
        </h2>
        <div className="product-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
