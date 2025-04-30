import React from "react";
import { cardData } from "../Constants/Constant";
function WhyDoczone() {
  return (
<div className="px-24 py-16 min-h-screen bg-[#FFFFFF]">
    <h1 className="text-center text-[#008364] font-semibold text-5xl">Why Select Doczone Dubai for Your</h1>
    <h1 className="text-center text-[#000000] font-semibold text-5xl mt-2">Document Needs?</h1>
  <div className="p-8 space-y-6">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-6 bg-white shadow-lg rounded-lg  relative"
        >
          {/* Image Section */}
          <div className="w-1/3 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-2/3 pl-6">
            <h2 className="text-xl font-bold text-green-700">{item.title}</h2>
            <p className="mt-2 text-gray-700 text-justify">{item.content}</p>
            <p className="mt-2 text-gray-700 text-justify">{item.content2}</p>

          </div>
        </div>
      ))}
    </div>
</div>
  );
}

export default WhyDoczone;
