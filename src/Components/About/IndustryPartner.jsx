import React from "react";
import indu1 from "../../assets/partnerimg/indu1.jpg";
import indu2 from "../../assets/partnerimg/indu2.jpg";
import indu3 from "../../assets/partnerimg/indu3.jpg";
import indu4 from "../../assets/partnerimg/indu4.jpg";
import indu5 from "../../assets/partnerimg/indu5.jpg";
const brands = [indu1, indu5, indu2, indu3, indu4];
function IndustryPartner() {
  return (
    <div className="h-auto px-24 py-16 text-[#000000] bg-white flex">
      {/* Left Text */}
      <div className="w-1/2 py-16">
        <h2 className=" text-5xl uppercase font-semibold mb-5">
          Trusted Alliances,
        </h2>
        <h3 className="text-5xl font-semibold uppercase">Stronger Solutions</h3>
        <p className="text-2xl font-normal my-12">
          Partnering with industry leaders to deliver <br/> seamless business
          services across the UAE.{" "}
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          More Customers
        </button>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2  gap-4 w-1/2 py-8">
        {brands.map((brand, index) => (
          <div key={index} className="justify-center items-center flex">
            <img
              src={brand}
              alt={`Slide ${index + 1}`}
              className="max-w-full h-[20vh] object-contain px-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustryPartner;
