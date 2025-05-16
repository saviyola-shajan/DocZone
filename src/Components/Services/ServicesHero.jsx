import React from 'react';
import serviceimg from "../../assets/images/home4.png";

function ServicesHero() {
  return (
    <div className="bg-white max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-12">
      {/* Hero Title Section */}
      <div className="text-center pt-16 md:pt-24 pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#161616]">
          Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#333] mt-6 max-w-4xl mx-auto">
          At Doczone Dubai, our commitment transcends the mere act of service
          delivery; it's an embodiment of our dedication to forging enduring
          relationships, cultivating trust, and guaranteeing that each encounter
          with our clients is marked by a sense of value and satisfaction.
        </p>
      </div>

      {/* Advantages Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image First on small devices */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg">
            <img
              src={serviceimg}
              alt="Doczone Representative"
              className="w-full object-cover rounded-xl aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]"
            />
          </div>
        </div>

        {/* Text Content Second on small devices */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 mt-6 lg:mt-0">
            Advantages of <span className="text-[#22EEBF]">Doczone!</span>
          </h2>
          <p className="text-black/80 text-base sm:text-lg leading-relaxed mb-8">
            At Doczone Dubai, our commitment goes far beyond simply delivering
            services. We believe in building lasting partnerships grounded in
            trust, reliability, and excellence. Every interaction is a reflection
            of our dedication to understanding your unique needs and offering
            tailored solutions that simplify complex processes. Whether it’s
            document clearing, visa assistance, or legal paperwork, we handle each
            task with precision and integrity.
          </p>

          <ul className="space-y-4">
            {[
              "100% Customer Satisfaction Guaranteed",
              "Expert Know-How You Can Trust",
              "Your Needs, Our Top Priority",
              "Providing Quick and Reliable Service",
              "Always Here To Help You",
              "Getting Better All The Time, Consistently",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base ${
                    index % 2 === 0 ? "bg-[#22EEBF]" : "bg-black"
                  }`}
                >
                  {`0${index + 1}`}
                </div>
                <span className="text-black/90 text-sm sm:text-lg font-semibold">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ServicesHero;
