import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Review = ({ review }) => {
  const { name, profession, company, description, rating } = review;
  return (
    <div>
      <div
        className="product shadow pt-4"
        style={{
          backgroundColor: "rgba(128, 128, 128, 0.137)",
          height: "300px",
        }}
      >
        <div className="text-start px-5">
          <h3 className="fw-bold">{name}</h3>
          <strong className="fw-bold">{profession}</strong>
          <br />
          <strong className="fw-bold">{company}</strong>
          <br />
          <br />
          <p style={{ height: "100px" }}>{description}</p>
          {parseInt(rating) === 5 && (
            <div>
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
            </div>
          )}
          {parseInt(rating) === 4 && (
            <div>
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          )}
          {parseInt(rating) === 3 && (
            <div>
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          )}
          {parseInt(rating) === 2 && (
            <div>
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          )}
          {parseInt(rating) === 1 && (
            <div>
              <FontAwesomeIcon icon={fasStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          )}
          {parseInt(rating) === 0 && (
            <div>
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
              <FontAwesomeIcon icon={farStar} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
