import React from "react";
import services1 from "../../assets/images/servicespage1.png";
import services2 from "../../assets/images/servicespage2.png";

function Advantages() {
  const features = [
    { number: "01", text: "Always Here To Help" },
    { number: "02", text: "Know-How You Can Trust" },
    { number: "03", text: "Your Needs, Our Priority" },
    { number: "04", text: "Providing Quick Service" },
    { number: "05", text: "100% Customer Satisfaction" },
    { number: "06", text: "Getting Better All The Time" },
  ];

  return (
    <div>
<div className="min-h-screen relative lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 w-[95%] sm:w-[90%] md:w-[80%] p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row bg-[linear-gradient(222deg,rgba(29,44,97,0.80)_-72.39%,#050F29_76.48%)] backdrop-blur-lg text-white shadow-lg rounded-2xl">
<div className="w-full lg:w-1/3 relative flex justify-center">
          <img
            src={services1}
            alt="service img"
            className="object-cover rounded-2xl w-[80%] sm:w-full"
          />
          <div className="absolute top-20 -left-4 sm:-left-8 w-full h-full pr-6 sm:pr-12">
            <img
              src={services2}
              alt="service img"
              className="object-cover z-10 mt-20 w-[80%] sm:w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 py-4 px-4 sm:px-8 text-left mt-6 lg:mt-0">
          <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF]">
            Advantages Of <span className="text-[#41BEA1]">Joining US</span>
          </h1>
          <p className="font-light text-base sm:text-lg text-left mt-3">
            At Doczone Dubai, our commitment transcends the mere act of service
            delivery; it's an embodiment of our dedication to forging enduring
            relationships.
          </p>
          <div className="text-white py-10">
            <div className="max-w-full sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-y-14 gap-x-6 text-center">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#41BEA1]">
                    {feature.number}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-left p-2 sm:p-4">
                    {feature.text}
                  </p>
                  {index < 3 && (
                    <div className="w-32 sm:w-40 border-b-2 border-gray-500/50 mt-4 sm:mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
