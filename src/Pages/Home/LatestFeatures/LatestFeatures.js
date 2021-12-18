import React from "react";
import Light2 from "../../../images/light2.png";
import "./LatestFeatures.css";

const LatestFeatures = () => {
  return (
    <div id="feature">
      <div style={{ backgroundColor: "lightgray" }}>
        <div
          id="features"
          className="py-5 container d-md-flex justify-content-between align-items-center"
        >
          <div className="text-start">
            <h1 style={{ fontSize: "3.5em", fontWeight: "700" }}>
              Latest Features
            </h1>
            <span className="text-start">
              We always provide the latest and best features for
              <br /> our customers, dont't worry, we provide the latest
              <br /> technology for you
            </span>
            <div className="features d-md-flex justify-content-between align-items-center ">
              <div>
                <div className="single-feature">
                  Voltage
                  <br />
                  Settings
                </div>
                <div className="single-feature">
                  Application
                  <br />
                  Control
                </div>
              </div>
              <div>
                <div className="single-feature">
                  Voltage
                  <br />
                  Settings
                </div>
                <div className="single-feature">
                  Application
                  <br />
                  Control
                </div>
              </div>
            </div>
          </div>
          <div className="intro-banner pa-5">
            <img
              src={Light2}
              alt="Hafiz"
              className=" mx-auto d-block banner-radius"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestFeatures;
