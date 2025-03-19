import React from 'react'
import HeroContact from '../Components/Contact/HeroContact'
import Footer from '../Components/Footer'
import Header from "../Components/Header"
import GetIntouch from '../Components/Contact/GetIntouch'
import Details from '../Components/Contact/Details'
function Contact() {
  return (
    <div>
       <div className='fixed top-0 left-0 w-full z-50'>
      <Header/>
      </div>
      <HeroContact/>
      <GetIntouch/>
      <Details/>
    </div>
  )
}

export default Contact
