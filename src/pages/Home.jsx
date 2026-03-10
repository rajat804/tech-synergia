import React from "react";
import HeroSection from "../component/HeroSection";
import ServicesSection from "../component/ServicesSection";
import ProjectsSection from "../component/ProjectsSection";
import AboutSection from "../component/AboutSection";
import LatestNewsSection from "../component/LatestNewsSection";
import ClientsSection from "../component/ClientsSection";
import WhyChooseUsSection from "../component/WhyChooseUsSection";
import ContactSection from "../component/ContactSection";
import OurSolution from "../component/OurSolution";

const Home = () => {
  return (
    <>
      {/* <Topbar/> */}
      <HeroSection />
      <ServicesSection />
      <OurSolution />
      <ProjectsSection />
      <AboutSection />
      <LatestNewsSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
};

export default Home;
