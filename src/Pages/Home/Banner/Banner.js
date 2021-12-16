import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="banner"
      className="pb-5 d-md-flex justify-content-evenly align-items-center btn-grad-banner"
    >
      <div className="intro-banner mb-2">
        <img
          src={Logo}
          alt="Hafiz"
          className=" mx-auto d-block banner-radius"
        />
      </div>
      <div className="text-start mb-2">
        <span className="text-start">2021 Awards Winning Light</span>
        <h1 style={{ fontSize: "3.5em", fontWeight: "700" }}>
          Unique Light <br />
          For Your Home
        </h1>

        <Link
          to="/discover"
          className="text-white btn-grad-discover d-inline-block"
          style={{ textDecoration: "none" }}
        >
          Discover Now
        </Link>
        <div className="my-3 d-md-flex justify-content-between align-items-center">
          <div>
            <h1>
              5k<span className="stat-color">+</span>
            </h1>
            <span>
              Premium
              <br /> Product
            </span>
          </div>
          <div>
            <h1>
              1k<span className="stat-color">+</span>
            </h1>
            <span>
              Happy
              <br /> Customer
            </span>
          </div>
          <div>
            <h1>
              21<span className="stat-color">+</span>
            </h1>
            <span>
              Awards
              <br /> Winning
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
