import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://desolate-scrubland-98270.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div id="review">
      <div style={{ backgroundColor: "lightgray" }} className="pb-5">
        <div className="container">
          <h2 className="fw-bold py-3" id="products">
            Customer Reviews
          </h2>
          {(isLoading && (
            <Spinner className="mt-5" animation="grow" variant="primary" />
          )) || (
            <div className="product-container">
              {reviews.map((review) => (
                <Review key={review._id} review={review}></Review>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
