import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div id="review">
      <div style={{ backgroundColor: "lightgray" }} className="pb-5">
        <div className="container">
          <h2 className="fw-bold py-3" id="products">
            Customer Reviews
          </h2>
          <div className="product-container">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
