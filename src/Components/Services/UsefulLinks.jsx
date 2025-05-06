import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const services = [
  "International Visa and Passport Services",
  "Emirates Health Services",
  "Dubai Insurance Services",
  "Customer Happiness Centers",
  "Dubai Medical Fitness Centers",
  "Unified Number Inquiry Service",
  "Fines Inquiry and Payment",
  "Zajel: Track your shipment",
  "EHS Medical Fitness Centers",
  "Digital ID Log-In",
  "MOHRE Inquiry Services",
  "Fines Inquiry Service",
];

function UsefulLimks() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24 items-center justify-center">
      <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#018264]">
        Useful Links
      </h1>
      <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
        For Quick access
      </h1>
      <p className="font-normal text-base sm:text-lg md:text-xl text-[#000000] mt-6 sm:mt-8 text-left  mx-auto px-2">
        At Doczone Dubai, our commitment transcends the mere act of service
        delivery; it's an embodiment of our dedication to forging enduring
        relationships, cultivating trust, and guaranteeing that each encounter
        with our clients is marked by a sense of value and satisfaction.
      </p>
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(222deg,_rgba(29,44,97,0.8)_-72.39%,_#050F29_76.48%)] text-white p-4 sm:p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-normal mb-4 sm:mb-6">{service}</h3>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-white text-[#121E41] text-sm sm:text-base px-4 py-2 rounded-full font-medium transition hover:bg-gray-200"
              >
                Visit Now
                <LuSquareArrowOutUpRight className="text-[#0037CD]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsefulLimks;
