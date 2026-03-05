import React from 'react'
import Header from '../component/Header/Header'
import HeroSection from '../component/HeroSection'
import ServicesSection from '../component/ServicesSection'

const Home = () => {
  return (
    <>  
        {/* <Topbar/> */}
        <Header/> 
        <HeroSection/>
        <ServicesSection/>
    </>
  )
}

export default Home
