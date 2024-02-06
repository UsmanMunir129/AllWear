import React from "react";
// import { GlobalStyle } from "../screens/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbaar from "../Components/navigation/Navbaar";
import HomeScreen from "../Components/screens/HomeScreen";
import { GlobalStyle } from "../style/GlobalStyle";
import Footer from "../Components/Footer/Footer";

const Routees = () => {
  return (
    <>
      <BrowserRouter>
        <Navbaar />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routees;
