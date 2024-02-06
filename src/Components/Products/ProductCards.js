import React from "react";
import "./productcards.css";
import Card from "./Card";

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
  },
  {
    id: 4,
    title: "Activewear",
    description: "4 million garments annual production capacity",
    img: "https://i.imgur.com/lAQxXCK.jpg",
    link: "/motorsp",
  },
];

const ProductCards = () => {
  return (
    <>
      <div className="container ">
        <div className="ms-lg-5">
          <h1 className="font-weight-bold my-3">FULL FAMILY CLOTHING</h1>
          <p className="text-muted ">
            We carry product expertise in hosiery, denim, knitted apparel, and
            <br />
            seamless activewear – across all ages, genders, and abilities.
          </p>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default ProductCards;
