import React, { useState } from "react";
import "./exmple2car.css";
import ReactHorizontalTimeline from "react-horizontal-timeline";
function Example2Car() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  // Values should be only date
  const VALUES = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];

  // Description array corresponding to values
  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
  ];
  return (
    <div className="root-div my-5">
      <div
        style={{
          width: "60%",
          height: "100px",
          margin: "0 auto",
        }}
      >
        <ReactHorizontalTimeline
          styles={{ outline: "black", foreground: "red" }}
          index={value}
          indexClick={(index) => {
            setValue(index);
            setPrevious(value);
          }}
          values={VALUES}
        />
      </div>
      <div className="text-center">{description[value]}</div>
    </div>
  );
}

export default Example2Car;
{
  /* <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2" id="slider">
          <div id="myCarousel" className="carousel slide">
            <ul className="carousel-indicators list-inline">
              <li className="list-inline-item active">
                <a
                  id="carousel-selector-0"
                  className="selected"
                  data-slide-to={0}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=one"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-1"
                  data-slide-to={1}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=two"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-2"
                  data-slide-to={2}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=three"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-3"
                  data-slide-to={3}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=four"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-4"
                  data-slide-to={4}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=five"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-5"
                  data-slide-to={5}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=six"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-6"
                  data-slide-to={6}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=seven"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  id="carousel-selector-7"
                  data-slide-to={7}
                  data-target="#myCarousel"
                >
                  <img
                    src="http://placehold.it/80x60&text=eight"
                    className="img-fluid"
                  />
                </a>
              </li>
            </ul>
            <div className="carousel-inner">
              <div className="active item carousel-item" data-slide-number={0}>
                <img
                  src="http://placehold.it/1200x480&text=one"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={1}>
                <img
                  src="http://placehold.it/1200x480/888/FFF"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={2}>
                <img
                  src="http://placehold.it/1200x480&text=three"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={3}>
                <img
                  src="http://placehold.it/1200x480&text=four"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={4}>
                <img
                  src="http://placehold.it/1200x480&text=five"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={5}>
                <img
                  src="http://placehold.it/1200x480&text=six"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={6}>
                <img
                  src="http://placehold.it/1200x480&text=seven"
                  className="img-fluid"
                />
              </div>
              <div className="item carousel-item" data-slide-number={7}>
                <img
                  src="http://placehold.it/1200x480&text=eight"
                  className="img-fluid"
                />
              </div>
              <a
                className="carousel-control left pt-3"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left" />
              </a>
              <a
                className="carousel-control right pt-3"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
