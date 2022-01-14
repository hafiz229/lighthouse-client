import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // set a maximum limit to 8
  const size = 8;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://desolate-scrubland-98270.herokuapp.com/products?size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div style={{ backgroundColor: "lightgray" }} className="pb-5">
      <div className="container">
        <h2 className="fw-bold py-3" id="products">
          Top Products
        </h2>
        {(isLoading && (
          <Spinner className="mt-5" animation="grow" variant="primary" />
        )) || (
          <div className="product-container">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
