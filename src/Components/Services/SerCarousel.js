import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./sercarousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    imgPath: [require("../../assets/carouselimgs/111.jpg")],
  },
  {
    imgPath: [require("../../assets/carouselimgs/222.jpg")],
  },
  {
    imgPath: [require("../../assets/carouselimgs/333.jpg")],
  },
  //Second image url
  {
    imgPath: [require("../../assets/carouselimgs/666.jpg")],
  },
  //Third image url
  {
    imgPath: [require("../../assets/carouselimgs/444.jpg")],
  },

  //Fourth image url
  {
    imgPath: [require("../../assets/carouselimgs/555.jpg")],
  },
];
const SerCarousel = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="container w-75">
              <div className="serviceshead ">
                <h1 className="">Services</h1>
              </div>
              <div className="servicetext ">
                <p className="text-muted">
                  Explore our innovation, design and product development
                  expertise powered by our digitalised supply chain.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className="">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
              >
                {sliderImageUrl.map((imageUrl, index) => {
                  return (
                    <div className="slider" key={index}>
                      <img src={imageUrl.imgPath} alt="movie" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SerCarousel;
