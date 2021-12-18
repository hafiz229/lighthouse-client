import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="py-5 notfound-img">
        <img
          src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
          alt=""
        />
        <h3 className="fw-bold pb-5">
          We can’t find the page you’re looking for
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
