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
    slidesToShow: 1,
    speed: 100,
    centerMode: true,
    centerPadding: "60px",
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
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="containerhistory m-5">
      <style>{cssstyle}</style>
      <h2>Center Mode</h2>
      <img
        className="img-fluid"
        src={require("../../assets/land.jpeg")}
        alt=""
      />

      <Slider {...settings}>
        <div>
          <h3 className="historyheading">2012</h3>
          <p className="historyparagrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, hic?
          </p>
        </div>
        <div>
          <h3 className="historyheading">2013</h3>
          <p className="historyparagrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, hic?
          </p>{" "}
        </div>
        <div onClick={() => handleSlideClick(2)}>
          <h3 className="historyheading">2014</h3>
          <p className="historyparagrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, hic?
          </p>{" "}
        </div>
        <div onClick={() => handleSlideClick(3)}>
          <h3 className="historyheading">2015</h3>
          <p className="historyparagrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, hic?
          </p>{" "}
        </div>
        <div onClick={() => handleSlideClick(4)}>
          <h3 className="historyheading">2016</h3>
          <p className="historyparagrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, hic?
          </p>{" "}
        </div>
        <div onClick={() => handleSlideClick(5)}>
          <h3 className="historyheading">2017</h3>
          <p className="historyparagrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, hic?
          </p>{" "}
        </div>
      </Slider>
    </div>
  );
}
const cssstyle = `

.containerhistory {
  margin: 0 auto;
  position: relative;

}

.historyheading {
    color: #000;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.historyparagrapgh{
  padding: 2%;
  margin: 10px;
  color:#000;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .10s ease;
}
`;

// import React from "react";
// import "react-multi-carousel/lib/styles.css";
// import "./historycarousel.css";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 320 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };
// const sliderImageUrl = [
//   //First image url
//   {
//     imgPath: [require("../../assets/carouselimgs/111.jpg")],
//   },
//   {
//     imgPath: [require("../../assets/carouselimgs/222.jpg")],
//   },
//   {
//     imgPath: [require("../../assets/carouselimgs/333.jpg")],
//   },
//   //Second image url
//   {
//     imgPath: [require("../../assets/carouselimgs/666.jpg")],
//   },
//   //Third image url
//   {
//     imgPath: [require("../../assets/carouselimgs/444.jpg")],
//   },

//   //Fourth image url
//   {
//     imgPath: [require("../../assets/carouselimgs/555.jpg")],
//   },
// ];
// const SerCarousel = () => {
//   return (
//     <section id="timeline" className="my-5">
//       <div className="tl-item">
//         <div
//           className="tl-bg"
//           style={{
//             backgroundImage:
//               "url(https://wallpapers.com/images/hd/nature-vertical-rd0p65vxho7iovzq.jpg)",
//           }}
//         />
//         <div className="tl-year">
//           <p className="f2 heading--sanSerif">2011</p>
//         </div>
//         <div className="tl-content">
//           <h1>Lorem ipsum dolor sit</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit.
//           </p>
//         </div>
//       </div>
//       <div className="tl-item">
//         <div
//           className="tl-bg"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D)",
//           }}
//         />
//         <div className="tl-year">
//           <p className="f2 heading--sanSerif">2013</p>
//         </div>
//         <div className="tl-content">
//           <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
//           <p>
//             Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan
//             risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas.
//             Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis.
//             Morbi sed nisl et arcu.
//           </p>
//         </div>
//       </div>
//       <div className="tl-item">
//         <div
//           className="tl-bg"
//           style={{
//             backgroundImage:
//               "url(https://wallpapers.com/images/hd/nature-vertical-l80u77eeto453jpa.jpg)",
//           }}
//         />
//         <div className="tl-year">
//           <p className="f2 heading--sanSerif">2014</p>
//         </div>
//         <div className="tl-content">
//           <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
//           <p>
//             Mauris cursus magna at libero lobortis tempor. Suspendisse potenti.
//             Aliquam interdum vulputate neque sit amet varius. Maecenas ac
//             pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at,
//             porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque
//             non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium
//             sed.
//           </p>
//         </div>
//       </div>
//       <div className="tl-item">
//         <div
//           className="tl-bg"
//           style={{
//             backgroundImage:
//               "url(https://wallpapers.com/images/hd/nature-vertical-70ss5mc1je7nt9py.jpg)",
//           }}
//         />
//         <div className="tl-year">
//           <p className="f2 heading--sanSerif">2016</p>
//         </div>
//         <div className="tl-content">
//           <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
//           <p>
//             Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare
//             purus non euismod. Donec vestibulum efficitur tortor, eget efficitur
//             enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius
//             metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus
//             nec, pulvinar porttitor lorem. Pellentesque dolor elit.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SerCarousel;
