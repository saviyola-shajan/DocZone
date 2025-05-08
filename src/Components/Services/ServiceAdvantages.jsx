import React from "react";

function ServiceAdvantages() {
  return (
    <section className="bg-white pt-12 px-6 md:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Advantages of <span className="text-teal-500">Doczone!</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
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
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold 
    ${index % 2 === 0 ? "bg-teal-500" : "bg-black"}`}
              >
                {`0${index + 1}`}
              </div>
              <span className="text-gray-800 text-sm md:text-base">{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full max-w-sm">
        <div className="rounded-[40px] overflow-hidden shadow-xl bg-gradient-to-br from-teal-400 to-teal-600 p-6">
          <img
            src="/your-image-path.jpg" // Replace this with the correct path to the woman image inside the green shape
            alt="Doczone Representative"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceAdvantages;
