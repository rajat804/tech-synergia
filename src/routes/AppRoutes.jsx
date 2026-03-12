import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import FloatingContact from "../component/FloatingContact";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
      <Footer />
      <FloatingContact />
    </>
  );
};

export default AppRoutes;
