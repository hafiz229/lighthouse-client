import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import DiscoverProduct from "../DiscoverProduct/DiscoverProduct";

const DiscoverProducts = () => {
  const [discoverProducts, setDiscoverProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setDiscoverProducts(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "lightgray" }} className="pb-5">
        <div className="container">
          <h2 className="fw-bold py-3" id="discover-products">
            Discover Products
          </h2>
          <div className="product-container">
            {discoverProducts.map((discoverProduct) => (
              <DiscoverProduct
                key={discoverProduct._id}
                discoverProduct={discoverProduct}
              ></DiscoverProduct>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProducts;
