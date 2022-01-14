import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import DiscoverProduct from "../DiscoverProduct/DiscoverProduct";

const DiscoverProducts = () => {
  const [discoverProducts, setDiscoverProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://desolate-scrubland-98270.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setDiscoverProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div style={{ backgroundColor: "lightgray" }} className="pb-5">
        <div className="container">
          <h2 className="fw-bold py-3" id="discover-products">
            Discover Products
          </h2>
          {(isLoading && (
            <Spinner className="mt-5" animation="grow" variant="primary" />
          )) || (
            <div className="product-container">
              {discoverProducts.map((discoverProduct) => (
                <DiscoverProduct
                  key={discoverProduct._id}
                  discoverProduct={discoverProduct}
                ></DiscoverProduct>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverProducts;
