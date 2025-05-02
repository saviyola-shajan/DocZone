import React from "react";
import { cardData } from "../Constants/Constant";

function WhyDoczone() {
  return (
    <div className="px-2 sm:px-12 md:px-16 lg:px-24 py-16 min-h-screen bg-[#FFFFFF]">
      <h1 className="text-left px-2 text-[#008364] font-semibold text-3xl sm:text-4xl md:text-5xl">
        Why Select Doczone Dubai for Your
      </h1>
      <h1 className=" px-2 text-left text-[#000000] font-semibold text-3xl sm:text-4xl md:text-5xl mt-2">
        Document Needs?
      </h1>
      <div className="p-2 space-y-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center p-3 md:p-6 bg-white shadow-lg rounded-lg relative"
          >
            {/* Image Section */}
            <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full sm:w-2/3 pl-0 sm:pl-6">
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
