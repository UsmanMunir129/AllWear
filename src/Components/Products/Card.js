import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./card.css";
const product = [
  {
    id: 1,
    title: "Hosiery",
    description: "830 million pairs of socks annual production capacity ",
    img: "https://i.imgur.com/tL7ZE46.jpg",
    link: "/ECO-Friendly",
    btn: "Learn more",
  },
  {
    id: 2,
    title: "Denim",
    description: "6 million garments annual production capacity",
    img: "https://i.imgur.com/lAQxXCK.jpg",
    link: "http://cuirconintl.com/qq/form.php",
    btn: "Learn more",
  },
  {
    id: 3,
    title: "Apparel",
    description: "20 million garments annual production capacity",
    img: "https://i.imgur.com/HxEEu5g.jpg",
    link: "/CustomInfo",
    btn: "Learn more",
  },
  {
    id: 4,
    title: "Activewear",
    description: "4 million garments annual production capacity",
    img: "https://i.imgur.com/lAQxXCK.jpg",
    link: "/motorsp",
    btn: "Learn more",
  },
];
const Card = () => {
  return (
    <div className=" ">
      <div id="content" className="px-mb-5 mb-5">
        <Row>
          {product.map((items, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className="mb-3 mb-lg-0 item e1 "
            >
              <img
                src={items.img}
                className="img-fluid"
                alt={`Product ${index}`}
              />

              <div className="text1 ">
                <h3 className="cardheading">{items.title}</h3>
                <p className="cardtext">
                  {items.description} <br />
                </p>
                <span className="text-decoration-underline fw-bold">
                  {items.btn}
                </span>
                {/* <h4>{items.btn}</h4> */}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Card;
