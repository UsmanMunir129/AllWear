import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gridimages.css"; // Create a CSS file for custom styles

function GridImages() {
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeColumn1, setActiveColumn1] = useState(null);

  const handleMouseEnter = (column) => {
    setActiveColumn(column);
  };

  const handleMouseLeave = (column) => {
    if (column === 1) {
      setActiveColumn(null);
    }
  };
  const handleMouseEnter1 = (column) => {
    setActiveColumn1(column);
  };

  const handleMouseLeave1 = (column) => {
    if (column === 1) {
      setActiveColumn1(null);
    }
  };

  return (
    <Container className="my-5">
      {/*Starting First Row with Three Columns */}
      <Row className="">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={activeColumn !== null && activeColumn !== 1 ? 2 : 8}
          className={`box-cols
            ${activeColumn !== null && activeColumn !== 1 ? "col-2" : "col-8"}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="image-container ">
            <img
              src={require("../../assets/Women.avif")}
              alt="Image 1"
              className="img-fluid gridimg"
            />

            {activeColumn === 1 && (
              <div className="text-container">
                <h2>Heading 1</h2>
                <p>Text 1</p>
              </div>
            )}
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={activeColumn === 2 ? 8 : 2}
          className={`box-cols ${activeColumn === 2 ? "col-8" : "col-2"}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <div className="image-container">
            <img
              src={require("../../assets/cloth.jpg")}
              alt="Image 1"
              className="img-fluid gridimg"
            />
            {activeColumn !== null && activeColumn === 2 && (
              <div className="text-container">
                <h2>Heading 1</h2>
                <p>Text 1</p>
              </div>
            )}
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={activeColumn === 3 ? 8 : 2}
          className={`box-cols ${activeColumn === 3 ? "col-8" : "col-2"}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <div className="image-container ">
            <img
              src={require("../../assets/clothes.webp")}
              alt="Image 1"
              className="img-fluid gridimg"
            />
            {activeColumn !== null && activeColumn === 3 && (
              <div className="text-container">
                <h2>Heading 1</h2>
                <p>Text 1</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
      {/*Starting Second Row with Three Columns */}
      <Row className="">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={activeColumn1 === 1 ? 8 : 2}
          className={`box-cols ${activeColumn1 === 1 ? "col-8" : "col-2"}`}
          onMouseEnter={() => handleMouseEnter1(1)}
          onMouseLeave={() => handleMouseLeave1}
        >
          <div className="image-container">
            <img
              src={require("../../assets/Clothes-1.jpg")}
              alt="Image 1"
              className="img-fluid gridimg"
            />
            {activeColumn1 !== null && activeColumn1 === 1 && (
              <div className="text-container">
                <h2>Heading 1</h2>
                <p>Text 1</p>
              </div>
            )}
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={activeColumn1 === 2 ? 8 : 2}
          className={`box-cols ${activeColumn1 === 2 ? "col-8" : "col-2"}`}
          onMouseEnter={() => handleMouseEnter1(2)}
          onMouseLeave={() => handleMouseLeave1}
        >
          <div className="image-container ">
            <img
              src={require("../../assets/Hoodie.jpg")}
              alt="Image 1"
              className="img-fluid gridimg"
            />
            {activeColumn1 !== null && activeColumn1 === 2 && (
              <div className="text-container">
                <h2>Heading 2</h2>
                <p>Text 2</p>
              </div>
            )}
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={activeColumn1 !== null && activeColumn1 !== 3 ? 2 : 8}
          className={`box-cols
            ${
              activeColumn1 !== null && activeColumn1 !== 3 ? "col-2" : "col-8"
            }`}
          onMouseEnter={() => handleMouseEnter1(3)}
          onMouseLeave={handleMouseLeave1}
        >
          <div className="image-container ">
            <img
              src={require("../../assets/gym-clothing-uk.png")}
              alt="Image 1"
              className="img-responsive gridimg"
            />
            {activeColumn1 === 3 && (
              <div className="text-container">
                <h2>Heading 3</h2>
                <p>Text 3</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default GridImages;
