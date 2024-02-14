import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "react-bootstrap";

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

  // Function to handle slide click
  const handleSlideClick = (index) => {
    setCurrentSlide(index); // Update current slide index
  };
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    autoplay: true,
    // slidesToShow: 1,
    speed: 100,
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="containerhistory">
      <style>{cssstyle}</style>
      <h2>Center Mode</h2>
      <div className="imagecont">
        <img
          className="img-fluid w-100 datecarslimage"
          src={require("../../assets/land.jpeg")}
          alt=""
        />
        <div className="slidercont container ">
          <Slider {...settings}>
            <div>
              <h3 className="historyheading">2012</h3>
              <p className="historyparagrapgh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic?
              </p>
            </div>
            <div>
              <h3 className="historyheading">2013</h3>
              <p className="historyparagrapgh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic?
              </p>{" "}
            </div>
            <div onClick={() => handleSlideClick(2)}>
              <h3 className="historyheading">2014</h3>
              <p className="historyparagrapgh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic?
              </p>{" "}
            </div>
            <div onClick={() => handleSlideClick(3)}>
              <h3 className="historyheading">2015</h3>
              <p className="historyparagrapgh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic?
              </p>{" "}
            </div>
            <div onClick={() => handleSlideClick(4)}>
              <h3 className="historyheading">2016</h3>
              <p className="historyparagrapgh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic?
              </p>{" "}
            </div>
            <div onClick={() => handleSlideClick(5)}>
              <h3 className="historyheading">2017</h3>
              <p className="historyparagrapgh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic?
              </p>{" "}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
const cssstyle = `

.containerhistory {
 

}
.imagecont {
  position: relative;
}

.slidercont {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  z-index: 1;
}
.datecarslimage{
  filter: grayscale(40%);
  filter: blur(3px);
}
.historyheading {
    color: #fff;   
    position: relative;
    text-align: center;
}
.historyparagrapgh{
  text-align: center;
  color:#fff;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #000;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center .slick-center p {
  color: #000;
  opacity: 1;
  -ms-transform: scale(1.08);
  transform: scale(1.08);
}
.center h3 {
    transition: all .10s ease;
}
`;
