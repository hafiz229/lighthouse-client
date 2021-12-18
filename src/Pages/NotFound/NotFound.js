import React from "react";
import Navigation from "../Shared/Navigation/Navigation";

const NotFound = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="py-5">
        <img
          src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
          alt=""
        />
        <h3 className="fw-bold">We can’t find the page you’re looking for</h3>
      </div>
    </div>
  );
};

export default NotFound;
