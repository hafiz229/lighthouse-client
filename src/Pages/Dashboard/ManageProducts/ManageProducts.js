import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://desolate-scrubland-98270.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  // delete a product
  const handleDelete = (id) => {
    // ask for a confirmation before delete a product
    const sure = window.confirm("Are you sure, you want to continue?");
    if (sure === true) {
      const url = `https://desolate-scrubland-98270.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Product Deleted Successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div className="pb-5">
        <div className="container mb-5">
          <h1 className="fw-bold py-3">Manage Products</h1>
          {(isLoading && (
            <Spinner className="mt-5" animation="grow" variant="primary" />
          )) || (
            <div className="product-container">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="product shadow"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.137)",
                  }}
                >
                  <img src={product.img} alt="" />
                  <div className="text-start px-5">
                    <h3 className="fw-bold">{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="fw-bold">${product.price}</h2>
                      <Button
                        className="btn btn-grad-common"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
    </div>
  );
};

export default ManageProducts;
