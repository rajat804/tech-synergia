import React from "react";
import HeroSection from "../component/HeroSection";
import ServicesSection from "../component/ServicesSection";
import ProjectsSection from "../component/ProjectsSection";
import AboutSection from "../component/AboutSection";
import LatestNewsSection from "../component/LatestNewsSection";
import WhyChooseUsSection from "../component/WhyChooseUsSection";
import ContactSection from "../component/ContactSection";
import OurSolution from "../component/OurSolution";
import Technologies from "../component/Technologies";
import ProcessSection from "../component/services/ProcessSection";

const Home = () => {
  return (
    <>
      {/* <Topbar/> */}
      <HeroSection />
      <ServicesSection />
      <OurSolution />
      <ProcessSection/>
      <ProjectsSection />
      <AboutSection />
      <LatestNewsSection />
      {/* <ClientsSection /> */}
      <Technologies/>
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
};

export default Home;
