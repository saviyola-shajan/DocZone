import React from "react";
import servicesImg from "../../assets/images/servicesmain.png";
import Advantages from "./Advantages";

function ServicesHeroSection() {
  return (
    <div className="h-96 md:min-h-screen bg-cover bg-center relative bg-[#FFFFFF]">
      <img
        src={servicesImg}
        alt="service img"
        className="w-full h-full object-cover mt-24"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl -mt-44 -md:mt-72 font-semibold text-[#FFFFFF]">
          Services
        </h1>
        <p className="font-normal text-[#FFFFFF] text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-xl mt-4">
          A document clearing and visa services company simplifies complex
          administrative processes for individuals and businesses.
        </p>
        <div>
          <Advantages />
        </div>
      </div>
    </div>
  );
}

export default ServicesHeroSection;
