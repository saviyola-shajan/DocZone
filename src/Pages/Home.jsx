import React from 'react'
import Herosection from '../Components/Home/Herosection'
import Milestones from '../Components/Home/Milestones'
import ServiceSection from '../Components/Home/ServiceSection'
import UaeSection from '../Components/UaeSection'
import Whatwedo from '../Components/Home/Whatwedo'
import FastAndQuality from '../Components/Home/FastAndQuality'
import Reviews from '../Components/Home/Reviews'
import FAQ from '../Components/Home/FAQ'
import ConnectUs from '../Components/Home/ConnectUs'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div>
    <Herosection />
    <Milestones/>
    <ServiceSection/>
    <UaeSection/>
    <Whatwedo/>
    <FastAndQuality/>
    <Reviews/>
    <FAQ/>
    <ConnectUs/>
  </div>
  )
}

export default Home
