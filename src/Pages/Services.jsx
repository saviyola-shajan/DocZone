import React from 'react'
import Header from '../Components/Header'
import WhatMakesUsBest from '../Components/Services/WhatMakesUsBest'
import Services8 from "../Components/Services/Services8"
import DreamlandUAE from '../Components/Services/DreamlandUAE'
import UsefulLinks from '../Components/Services/UsefulLinks'
import ServicesHero from '../Components/Services/ServicesHero'
import ServiceAdvantages from '../Components/Services/ServiceAdvantages'
function Services() {
  return (
    <div className='bg-[#FFFFFF]'>
       <div className='fixed top-0 left-0 w-full z-50'>
      <Header/>
      </div>
      <ServicesHero/>
      <ServiceAdvantages/>
      <WhatMakesUsBest/>
      <Services8/>
      <DreamlandUAE/>
      <UsefulLinks/>
    </div>
  )
}

export default Services
