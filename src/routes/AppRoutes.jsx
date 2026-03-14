import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import FloatingContact from "../component/FloatingContact";
import AboutUs from "../pages/AboutUs";
import WebsiteDevelopment from "../pages/services/WebsiteDevelopment";
import MobileAppDevelopment from "../pages/services/MobileAppDevelopment";
import EcommerceDevelopment from "../pages/services/EcommerceDevelopment";
import CustomSoftwareDevelopment from "../pages/services/CustomSoftwareDevelopment";
import ErpCrmSolutions from "../pages/services/ErpCrmSolutions";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route
          path="/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/ecommerce-development"
          element={<EcommerceDevelopment />}
        />
        <Route
          path="/custom-software-development"
          element={<CustomSoftwareDevelopment />}
        />
        {/* <Route path="/erp-crm-solution" element={<ErpCrmSolutions />} /> */}
       {/* <Route path="/api-development" element={< />} />
       <Route path="/maintenance" element={< />} />
      <Route path="/software-development" element={< />} />
      <Route path="/destop-app-development" element={< />} /> */}
      </Routes>
      <Footer />
      <FloatingContact />
    </>
  );
};

export default AppRoutes;
