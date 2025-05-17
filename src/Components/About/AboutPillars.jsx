import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { values } from "../Constants/Constant";

function AboutPillars() {
  return (
    <div className="min-h-screen text-[#FFFFFF] bg-[#050F29] px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-16 sm:py-20 bg-[linear-gradient(222deg,rgba(29,44,97,0.80)_-72.39%,#050F29_76.48%)]">
      <h1 className="text-[#22EEBF] font-semibold text-3xl sm:text-4xl md:text-5xl">Our Commitment:</h1>
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">The Pillars of Doczone Dubai</h1>
      <p className="mt-8 sm:mt-10 font-normal text-base sm:text-lg text-justify">
        At Doczone Dubai, our commitment transcends the mere act of service
        delivery; it's an embodiment of our dedication to forging enduring
        relationships, cultivating trust, and guaranteeing that each encounter
        with our clients is marked by a sense of value and satisfaction. We are
        steadfast in our mission to not only meet but exceed expectations,
        providing an unparalleled level of service that is both professional and
        personal.
      </p>
      <p className="font-normal text-base sm:text-lg text-justify mt-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our commitment is multifaceted,
        encompassing a deep-seated respect for our clients' time, an unwavering
        focus on delivering results with integrity, and a relentless pursuit of
        innovation to streamline our processes. We understand that the world of
        document clearing and visa services can be complex and daunting, which
        is why we are committed to demystifying these processes, offering clear
        guidance, and ensuring that our clients are well-informed and supported
        throughout their journey with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 px-2 sm:px-6 md:px-10 py-12 sm:py-16">
      {values.map((value, index) => (
  <div
    key={index}
    className={`relative rounded-3xl py-6 sm:py-8 px-6 sm:px-12 shadow-lg border border-[#008364] ${
      index === 0 || index === 3 ? 'bg-black text-white' : 'bg-white text-black'
    }`}
  >
    <div className="text-6xl sm:text-7xl md:text-8xl font-medium flex gap-6 sm:gap-10">
    <span
          className={`${
            index === 0 || index === 3 ? 'text-[#22EEBF]' : 'text-[#006D54]'
          }`}
        >
          {value.number}
        </span>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 sm:mt-2 text-right">
        {value.title}
      </h3>
    </div>
    <p className="font-normal text-base sm:text-lg mt-2">
      {value.description}
    </p>
  </div>
))}
</div>


      <div className="items-center justify-center flex">
        <Link
          to="/contact"
          className="group relative transition-all duration-300 text-[#000000] border border-[#22EEBF] hover:bg-[#ffffff] text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%]"
        >
          Connect With Us
          <span className="w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center bg-[#FFFFFF] group-hover:bg-[#22EEBF]  rounded-full">
            <GoArrowUpRight className="text-black text-lg w-5 sm:w-6 h-5 sm:h-6" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AboutPillars;
