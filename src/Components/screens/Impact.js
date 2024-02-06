import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./impact.css";

const impactdetail = [
  {
    id: 1,
    title: "Hosiery",
    description: "Economic value generated  ",
    img: [require("../../assets/onlin.png")],
  },
  {
    id: 2,
    title: "Denim",
    description: "Economic value generated ",
    img: [require("../../assets/Think (5).png")],
  },
  {
    id: 3,
    title: "Apparel",
    description: "Economic value generated ",
    img: [require("../../assets/research.png")],
  },
  {
    id: 4,
    title: "Activewear",
    description: "Economic value generated ",
    img: [require("../../assets/sample.png")],
  },
  {
    id: 5,
    title: "Apparel",
    description: "Economic value generated ",
    img: [require("../../assets/shipment.png")],
  },
  {
    id: 6,
    title: "Activewear",
    description: "Economic value generated ",
    img: [require("../../assets/supply.png")],
  },
];

const Impact = () => {
  return (
    <>
      <div className="impactbox container-fluid p-0 my-5">
        <img
          src={require("../../assets/land.jpeg")}
          alt="Nature"
          className="impactimg  w-100"
        />

        <div className="centeredbox container">
          <div className="">
            <span className="impactHead">IMPACTS</span>
          </div>
          {/* <span className="impacttxt">IMPACTS</span> */}
          <Container className="pt-md-5 bg-light " style={{ width: "90%" }}>
            <Row className="container">
              {impactdetail.map((items, index) => (
                <Col key={index} xs={6} md={6} lg={4} className="my-md-4 ">
                  <Row className="">
                    <Col
                      xs={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={items.img}
                        alt="Image 1"
                        className="img-fluid object-fit-contain"
                      />
                    </Col>
                    <Col xs={7} className="text-center text-dark">
                      <p className="text-dark mt-3">{items.description}</p>
                      <h5>{items.title}</h5>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Impact;
