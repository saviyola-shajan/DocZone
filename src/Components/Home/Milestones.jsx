import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function Milestones() {
  return (
    <div className="min-h-screen px-24 py-16 bg-[radial-gradient(50%_70%_at_90%_60%,#18275a_0%,rgba(66,98,216,0)_100%)]">
      <div className="justify-items-center bg-[#FFFFFF] rounded-2xl">
        <div className="flex p-6 gap-40">
          <p className="font-medium text-xl text-[#18275a]">
            At DocZone Dubai, we turn complicated paperwork into simple,
            <br />
            stress-free solutions for all your document clearing and visa needs.
          </p>
          <Link
            to="/contact"
            className="group relative transition-all duration-300 text-[#000000] text-xl px-6 py-3 rounded-full bg-[#22EEBF] font-semibold flex items-center justify-between gap-6"
          >
            Know More
            <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>
      <div className=" p-10 bg-[#595B734D] mt-16 rounded-2xl flex">
        <div className="w-1/2 p-10 justify-center items-center text-[#FFFFFF]">
          <h1 className="font-normal text-6xl mb-2 ">
            Our Milestones
          </h1>
          <p className="font-light text-xl mb-10">Every step forward is a testament to our commitment.</p>
          <Link
            to="/contact"
            className="group relative transition-all duration-300 text-[#000000] text-xl px-6 py-3 rounded-full bg-[#22EEBF] font-semibold flex items-center justify-between w-[62%]"
          >
            Connect With Us
            <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-5xl font-semibold text-[#005945]">500+</p>
            <p className="text-[#161616] text-xl font-medium mt-1">Businesses Supported</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-5xl font-semibold text-[#005945]">50K+</p>
            <p className="text-[#161616] text-xl font-medium mt-1">Documents Processed</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-5xl font-semibold text-[#005945]">4.9</p>
            <p className="text-[#161616] text-xl font-medium mt-1">Customer<br/> Rating</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-5xl font-semibold text-[#005945]">10K+</p>
            <p className="text-[#161616] text-xl font-medium mt-1">Satisfied<br/> Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
