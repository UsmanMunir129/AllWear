import React from "react";
import ProductCards from "../Products/ProductCards";
import GridImages from "../OtherComp/GridImages";
import Impact from "./Impact";
import SerCarousel from "../Services/SerCarousel";
import HistoryCarousel from "../DateCarousel/HistoryCarousel";

const HomeScreen = () => {
  return (
    <div>
      <img
        src={require("../../assets/land.jpeg")}
        alt=""
        className="img-fluid w-100"
      />
      <ProductCards />
      <GridImages />
      <Impact />
      <SerCarousel />
      <HistoryCarousel />
      {/* <Example2Car />
      <Exp3 /> */}
    </div>
  );
};

export default HomeScreen;
