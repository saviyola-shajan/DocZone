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
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-[80%] p-8 flex bg-[linear-gradient(222deg,rgba(29,44,97,0.80)_-72.39%,#050F29_76.48%)] backdrop-blur-lg text-white shadow-lg rounded-2xl">
        <div className="w-1/3 relative">
          <img
            src={services1}
            alt="service img"
            className=" object-cover rounded-2xl"
          />
          <div className="absolute top-20 -left-8 w-full h-full pr-12 ">
            <img
              src={services2}
              alt="service img"
              className=" object-cover z-10 mt-20"
            />
          </div>
        </div>
        <div className="w-2/3 py-4 px-8 text-left">
          <h1 className="font-medium text-5xl text-[#FFFFFF]">
            Advantages Of <span className="text-[#41BEA1]">Joining US</span>
          </h1>
          <p className="font-light text-lg text-left mt-3">
            At Doczone Dubai, our commitment transcends the mere act of service
            delivery; it's an embodiment of our dedication to forging enduring
            relationships.
          </p>
          <div className=" text-white py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-y-14 gap-x-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3
              className="text-4xl font-medium text-[#41BEA1]"
            >
              {feature.number}
            </h3>
            <p className="text-2xl font-light text-left p-4">{feature.text}</p>
            {index < 3 && <div className="w-40 border-b-2 border-gray-500/50 mt-6"></div>}
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
