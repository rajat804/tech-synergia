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
import ApiDevelopmentIntegration from "../pages/services/ApiDevelopmentIntegration";
import MaintenanceAndSupport from "../pages/services/MaintenanceAndSupport";
import SoftwareDevelopmentOutsourcing from "../pages/services/SoftwareDevelopmentOutsourcing";
import DesktopAppDevelopment from "../pages/services/DesktopAppDevelopment";
import AccountingSoftware from "../pages/solution/AccountingSoftware";
import RestaurantPOSSoftware from "../pages/solution/RestaurantPOSSoftware";
import InventoryManagement from "../pages/solution/InventoryManagement";
import FleetManagement from "../pages/solution/FleetManagement";
import WarehouseManagement from "../pages/solution/WarehouseManagement";
import HRManagement from "../pages/solution/HRManagement";
import FinanceManagement from "../pages/solution/FinanceManagement";
import SchoolManagement from "../pages/solution/SchoolManagement";
import LeadManagement from "../pages/solution/LeadManagement";
import OperationsManagement from "../pages/solution/OperationsManagement";
import KioskSoftware from "../pages/solution/KioskSoftware";
import PaymentSoftware from "../pages/solution/PaymentSoftware";
import Industries from "../pages/Industries";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import Help from "../pages/Help";
import Faq from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import CookiePolicy from "../pages/CookiePolicy";
import ScrollToTop from "../component/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/erp-crm-solution" element={<ErpCrmSolutions />} />
        <Route
          path="/api-development"
          element={<ApiDevelopmentIntegration />}
        />
        <Route path="/maintenance" element={<MaintenanceAndSupport />} />
        <Route
          path="/software-development"
          element={<SoftwareDevelopmentOutsourcing />}
        />
        <Route
          path="/destop-app-development"
          element={<DesktopAppDevelopment />}
        />

        {/* Solution */}
        <Route
          path={"/accounting-software"}
          element={<AccountingSoftware />}
        />

        <Route path="/restaurant-pos-software" element={<RestaurantPOSSoftware />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/fleet-management" element={<FleetManagement />} />
        <Route path="/warehouse-management" element={<WarehouseManagement />} />
        <Route path="/hr-management" element={<HRManagement />} />
        <Route path="/finance-management" element={<FinanceManagement />} />
        <Route path="/school-management" element={<SchoolManagement/>} />
        <Route path="/lead-management" element={<LeadManagement />} />
        <Route path="/operation-management" element={<OperationsManagement />} />
        <Route path="/kiosk-software" element={<KioskSoftware />} />
        <Route path="/payment-software" element={<PaymentSoftware />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/help-center" element={<Help />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>

      <Footer />
      <FloatingContact />
    </>
  );
};

export default AppRoutes;
