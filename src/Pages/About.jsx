import React from 'react'
import Header from '../Components/Header'
import AboutHeroSection from '../Components/About/AboutHeroSection'
import AboutPillars from '../Components/About/AboutPillars'
import MissionVision from '../Components/About/MissionVision'
import WhyDoczone from '../Components/About/WhyDoczone'
import UaeSection from '../Components/UaeSection'
import Footer from '../Components/Footer'
import IndustryPartner from '../Components/About/IndustryPartner'

function About() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full z-50'>
      <Header/>
      </div>
      <AboutHeroSection/>
      <AboutPillars/>
      <MissionVision/>
      <WhyDoczone/>
      <UaeSection bgColor="#081C46"/>
      <IndustryPartner/>
    </div>
  )
}

export default About
