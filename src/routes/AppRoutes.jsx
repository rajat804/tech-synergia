import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import FloatingContact from "../component/FloatingContact";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </>
  );
};

export default AppRoutes;
