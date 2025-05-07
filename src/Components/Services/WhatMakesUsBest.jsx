import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaBuilding, FaHandshake, FaUniversity, FaLock } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function WhatMakesUsBest() {
  const services = [
    { icon: <FaUserTie />, text: "Dedicated Expert Assistance" },
    { icon: <FaBuilding />, text: "Free Company Formation Consultation" },
    { icon: <FaHandshake />, text: "Full-Fledged Service Business Partner" },
    { icon: <FaUniversity />, text: "Close Association With All UAE government Department" },
    { icon: <FaLock />, text: "Multi-Step security for your identity documents" },
  ];

  return (
    <div className="h-auto lg:h-[70vh] flex flex-col lg:flex-row bg-[linear-gradient(93deg,_#3270BC_0%,_#092B60_48.48%,_#181325_97.53%)] backdrop-blur-[3px] mt-[20%] lg:mt-[35%] px-4 sm:px-10 md:px-16 lg:px-24 py-12 lg:py-24">
      <div className="w-full lg:w-1/3 text-[#FFFFFF] text-center mb-12 flex flex-col lg:mb-0 justify-center items-center">
        <h1 className="font-light text-4xl sm:text-5xl md:text-6xl">What Makes Us</h1>
        <h1 className="font-semibold text-5xl sm:text-7xl md:text-8xl mt-2 mb-8">The Best</h1>
        <Link
          to="/contact"
          className="group relative transition-all duration-300 text-[#000000] text-base sm:text-lg px-6 py-3 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between mx-auto w-[80%] sm:w-[60%] md:w-[65%]"
        >
          Connect With Us
          <span className="w-9 h-9 flex items-center justify-center bg-[#ffffff] rounded-full">
            <GoArrowUpRight className="text-black text-lg w-6 h-6" />
          </span>
        </Link>
      </div>

      <div className="w-full lg:w-2/3 px-2 sm:px-4 md:px-7">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-[#FFFFFF1A] p-6 rounded-lg backdrop-blur-md flex flex-col items-center text-center">
                <div className="text-3xl text-[#22EEBF] mb-2 w-8 h-8">{service.icon}</div>
                <p className="text-base text-[#FFFFFF]">{service.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {services.slice(3, 5).map((service, index) => (
              <div key={index} className="bg-[#FFFFFF1A] p-6 sm:p-7 rounded-lg backdrop-blur-md flex flex-col items-center text-center">
                <div className="text-3xl text-[#22EEBF] mb-2 w-8 h-8">{service.icon}</div>
                <p className="text-base text-[#FFFFFF]">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatMakesUsBest;
