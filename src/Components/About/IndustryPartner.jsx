import React from "react";
import indu1 from "../../assets/partnerimg/indu1.jpg";
import indu2 from "../../assets/partnerimg/indu2.jpg";
import indu3 from "../../assets/partnerimg/indu3.jpg";
import indu4 from "../../assets/partnerimg/indu4.jpg";
import indu5 from "../../assets/partnerimg/indu5.jpg";
const brands = [indu1, indu5, indu2, indu3, indu4];

function IndustryPartner() {
  return (
    <div className="h-auto px-6 sm:px-12 md:px-16 lg:px-24 py-16 text-[#000000] bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 md:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-semibold mb-2 md:mb-5">
          Trusted Alliances,
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase">
          Stronger Solutions
        </h3>
        <p className="text-xl sm:text-2xl font-normal my-6 md:my-12">
          Partnering with industry leaders to deliver <br /> seamless business
          services across the UAE.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          More Customers
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full lg:w-1/2 py-6 md:py-8">
        {brands.map((brand, index) => (
          <div key={index} className="justify-center items-center flex">
            <img
              src={brand}
              alt={`Slide ${index + 1}`}
              className="max-w-full h-[25vh] object-contain px-6 md:px-10"
            />
          </div>
        ))}
        <div className="hidden lg:flex justify-center items-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            More Brands
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndustryPartner;
