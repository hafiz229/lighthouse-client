import React from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import Light1 from "../../../images/light1.png";
import "./ChooseUs.css";

const ChooseUs = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Link
        className="btn-grad-expand d-inline-block"
        onClick={decoratedOnClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <div style={{ backgroundColor: "lightgray" }} className="py-3">
      <div
        id="chooseus"
        className="container d-md-flex justify-content-evenly align-items-center"
      >
        <div className="text-start mb-2">
          <h1 style={{ fontSize: "3.5em", fontWeight: "700" }}>
            Why Choose Us
          </h1>
          <p className="text-start details-color">
            Our products have won numerous awards this year,
            <br /> and yes we can ensure the unlimited quality of our <br />{" "}
            products
          </p>
          {/* ----------- */}
          <Accordion defaultActiveKey="0">
            <Card style={{ backgroundColor: "lightgray" }}>
              <Card.Header>
                <CustomToggle eventKey="0">+</CustomToggle>
                <span className="fw-bolder">Frequently New Design</span>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="details-color">
                  we have the entire industrial chanin of lighting <br />{" "}
                  products and provide the most advantegeou <br /> price.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "lightgray" }}>
              <Card.Header>
                <CustomToggle eventKey="1">+</CustomToggle>
                <span className="fw-bolder">Original Production</span>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="details-color">
                  we have the entire industrial chanin of lighting <br />{" "}
                  products and provide the most advantegeou <br /> price.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "lightgray" }}>
              <Card.Header>
                <CustomToggle eventKey="2">+</CustomToggle>
                <span className="fw-bolder">Production With Large Stock</span>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="details-color">
                  we have the entire industrial chanin of lighting <br />{" "}
                  products and provide the most advantegeou <br /> price.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "lightgray" }}>
              <Card.Header>
                <CustomToggle eventKey="3">+</CustomToggle>
                <span className="fw-bolder">Professional Quality Control</span>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="details-color">
                  we have the entire industrial chanin of lighting <br />{" "}
                  products and provide the most advantegeou <br /> price.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="intro-banner mb-2">
          <img
            src={Light1}
            alt="Light1"
            className=" mx-auto d-block banner-radius"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;