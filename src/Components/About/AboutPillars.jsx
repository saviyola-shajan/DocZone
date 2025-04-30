import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { values } from "../Constants/Constant";

function AboutPillars() {
  return (
    <div className="min-h-screen text-[#FFFFFF] bg-[#050F29] p-24 bg-[linear-gradient(222deg,rgba(29,44,97,0.80) -72.39%,#050F29 76.48%)]">
      <h1 className="text-[#41BEA1] font-semibold text-5xl">Our Commitment:</h1>
      <h1 className=" font-semibold text-5xl">The Pillars of Doczone Dubai</h1>
      <p className="mt-10 font-normal text-lg text-justify">
        At Doczone Dubai, our commitment transcends the mere act of service
        delivery; it's an embodiment of our dedication to forging enduring
        relationships, cultivating trust, and guaranteeing that each encounter
        with our clients is marked by a sense of value and satisfaction. We are
        steadfast in our mission to not only meet but exceed expectations,
        providing an unparalleled level of service that is both professional and
        personal.
      </p>
      <p className="font-normal text-lg text-justify">
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our commitment is multifaceted,
        encompassing a deep-seated respect for our clients' time, an unwavering
        focus on delivering results with integrity, and a relentless pursuit of
        innovation to streamline our processes. We understand that the world of
        document clearing and visa services can be complex and daunting, which
        is why we are committed to demystifying these processes, offering clear
        guidance, and ensuring that our clients are well-informed and supported
        throughout their journey with us.
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 py-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-3xl py-8 px-12 shadow-lg border border-[#008364]"
            >
              <div className="text-8xl font-medium text-[#006D54] flex gap-10">
                {value.number}
                <h3 className="text-3xl font-semibold text-[#000000] mt-2 text-right">
                  {value.title}
                </h3>
              </div>
              <p className="text-[#000000] font-normal text-lg mt-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="items-center justify-center flex">
        <Link
          to="/contact"
          className="group relative transition-all duration-300 text-[#000000] text-lg px-6 py-3 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[25%]"
        >
          Connect With Us
          <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
            <GoArrowUpRight className="text-black text-lg w-6 h-6" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AboutPillars;
