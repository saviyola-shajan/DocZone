import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function Milestones() {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-14 md:py-16 bg-[radial-gradient(50%_70%_at_90%_60%,#18275a_0%,rgba(66,98,216,0)_100%)]">
      <div className="bg-[#FFFFFF] rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 p-6 justify-between">
          <p className="font-medium text-base sm:text-lg md:text-xl text-[#18275a]">
            At DocZone Dubai, we turn complicated paperwork into simple,<br className="hidden sm:block" />
            stress-free solutions for all your document clearing and visa needs.
          </p>
          <Link
            to="/contact"
            className="group relative transition-all duration-300 text-[#000000] text-base sm:text-lg md:text-xl px-6 py-3 rounded-full bg-[#22EEBF] font-semibold flex items-center justify-between gap-4 sm:gap-6 w-fit"
          >
            Know More
            <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>

      <div className="p-6 sm:p-8 md:p-10 bg-[#595B734D] mt-10 sm:mt-14 md:mt-16 rounded-2xl flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-[#FFFFFF] px-2 sm:px-6 md:px-10">
          <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
            Our Milestones
          </h1>
          <p className="font-light text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10">
            Every step forward is a testament to our commitment.
          </p>
          <Link
            to="/contact"
            className="group relative transition-all duration-300 text-[#000000] text-base sm:text-lg md:text-xl px-6 py-3 rounded-full bg-[#22EEBF] font-semibold flex items-center justify-between w-full sm:w-[75%] md:w-[62%]"
          >
            Connect With Us
            <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-4xl sm:text-5xl font-semibold text-[#005945]">500+</p>
            <p className="text-[#161616] text-base sm:text-lg md:text-xl font-medium mt-1">
              Businesses Supported
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-4xl sm:text-5xl font-semibold text-[#005945]">50K+</p>
            <p className="text-[#161616] text-base sm:text-lg md:text-xl font-medium mt-1">
              Documents Processed
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-4xl sm:text-5xl font-semibold text-[#005945]">4.9</p>
            <p className="text-[#161616] text-base sm:text-lg md:text-xl font-medium mt-1">
              Customer<br className="hidden sm:block" /> Rating
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-4xl sm:text-5xl font-semibold text-[#005945]">10K+</p>
            <p className="text-[#161616] text-base sm:text-lg md:text-xl font-medium mt-1">
              Satisfied<br className="hidden sm:block" /> Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
