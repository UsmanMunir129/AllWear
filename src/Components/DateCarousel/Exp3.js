import React from "react";
import { Chrono } from "react-chrono";
import data from "./data";
import "./exp3.css";
const Exp3 = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div className="container timelinebox">
      <div style={{ width: "75%" }}>
        <Chrono
          items={data}
          theme={{
            // primary: "red",
            // secondary: "blue",
            cardBgColor: "yellow",
            titleColor: "black",
            // titleColorActive: "red",
          }}
          mediaSettings={{ align: "right", fit: "contain" }}
          mode="HORIZONTAL"
          showAllCardsHorizontal
          slideShow
          slideItemDuration={5000}
          slideShowType="reveal"
          cardWidth={450}
          cardHeight={300}
          contentDetailsHeight={100}
          fontSizes={{
            title: "1rem",
          }}
        />
      </div>
    </div>
  );
};

export default Exp3;
