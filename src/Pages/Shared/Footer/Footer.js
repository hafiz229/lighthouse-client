import React from "react";

const Footer = () => {
  return (
    <div className="btn-grad-banner">
      <div className="d-md-flex container justfy-content-center text-start">
        <div className="d-flex flex-column col-md-4 py-2">
          <h3>
            <span className="fw-bolder">
              <span style={{ color: "orange" }}>Light</span>House
            </span>
          </h3>
          <span>
            We have a vision to make lighting <br />
            able to be evenly distributed to all
            <br /> parts of the earth.
          </span>
        </div>
        <div className="d-flex flex-column col-md-2 py-2">
          <h4>About</h4>
          <span>About Us</span>
          <span>Features</span>
          <span>News & Blog</span>
        </div>
        <div className="d-flex flex-column col-md-2 py-2">
          <h4>Movement</h4>
          <span>What LightHouse</span>
          <span>Support Us</span>
        </div>
        <div className="d-flex flex-column col-md-2 py-2">
          <h4>Company</h4>
          <span>Why LightHouse</span>
          <span>Capital</span>
          <span>Security</span>
        </div>
        <div className="d-flex flex-column col-md-2 py-2">
          <h4>Support</h4>
          <span>FAQs</span>
          <span>Support Center</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
