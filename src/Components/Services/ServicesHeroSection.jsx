import React from "react";
import servicesImg from "../../assets/images/servicesmain.png";
import Advantages from "./Advantages";

function ServicesHeroSection() {
  return (
    <div className="min-h-screen bg-cover bg-center relative bg-[#FFFFFF]">
      <img
        src={servicesImg}
        alt="service img"
        className="w-full h-full object-cover mt-24"
      />
      <div className="absolute inset-0 justify-center text-center p-24">
        <h1 className="text-6xl font-semibold text-[#FFFFFF]">Services</h1>
        <p className="font-normal text-[#FFFFFF] text-lg max-w-xl ml-[25%] mt-4" >
          A document clearing and visa services company simplifies complex
          administrative processes for individuals and businesses.{" "}
        </p>
        <div>
          <Advantages/>
        </div>
      </div>
    </div>
  );
}

export default ServicesHeroSection;
