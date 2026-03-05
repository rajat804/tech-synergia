import React from 'react'
import Header from '../component/Header/Header'
import HeroSection from '../component/HeroSection'
import ServicesSection from '../component/ServicesSection'
import ProjectsSection from '../component/ProjectsSection'
import AboutSection from '../component/AboutSection'
import LatestNewsSection from '../component/LatestNewsSection'
import ClientsSection from '../component/ClientsSection'
import WhyChooseUsSection from '../component/WhyChooseUsSection'
import ContactSection from '../component/ContactSection'
import Footer from '../component/Footer/Footer'
import FloatingContact from '../component/FloatingContact'

const Home = () => {
  return (
    <>  
        {/* <Topbar/> */}
        <Header/> 
        <HeroSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <AboutSection/>
        <LatestNewsSection/>
        <ClientsSection/>
        <WhyChooseUsSection/>
        <ContactSection/>
        <Footer/>
        <FloatingContact/>

    </>
  )
}

export default Home
