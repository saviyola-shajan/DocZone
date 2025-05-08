import React from "react";
import Image from "../../assets/images/fastsectionimg.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function FastAndQuality() {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col lg:flex-row">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 text-[#FFFFFF] block lg:hidden order-1">
        Fast and Quality: Your Trusted Partner in Dubai
      </h1>
      <div className="w-full lg:w-2/5 relative mb-8 lg:mb-0 order-2 lg:order-1">
        <div className="hidden lg:block border-2 border-white w-[70%] h-[80%] absolute rounded-tr-[110px] ml-20 rounded-md"></div>
        <img
          src={Image}
          alt="SLIDER IMG"
          className="rounded-lg relative z-20 pt-9 ml-0 lg:ml-12"
        />
      </div>
      <div className="w-full lg:w-3/5 text-[#FFFFFF] py-4 order-3 lg:order-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 hidden lg:block">
          Fast and Quality: Your Trusted Partner in Dubai
        </h1>
        <p className="text-base sm:text-lg font-light text-justify">
          At <span className="font-bold text-[#22EEBF]">DocZone Dubai</span>, we understand
          that time is money. That’s why we combine speed with precision to
          deliver fast, reliable, and high-quality services. From document
          clearing to visa processing, our team ensures every task is completed
          efficiently without compromising on quality. With us, you get the best
          of both worlds – quick turnaround times and exceptional results.
        </p>
        <h4 className="text-lg sm:text-xl font-medium mt-10 text-[#22EEBF]">
          Our mission is clear:
        </h4>
        <p className="text-base sm:text-lg font-light text-justify mt-3">
          To deliver top-tier services that combine efficiency, affordability,
          and unmatched quality. Whether you're starting a new venture or
          expanding an existing one, Doczone handles the complexities so you can
          focus on what truly matters – growth and innovation
        </p>
        <div>
          <Link
            to="/contact"
            className="group relative transition-all text-center border border-[#22EEBF] hover:bg-[#ffffff]  duration-300 text-[#000000] text-lg px-4 py-2 mt-6 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
          >
            Connect Us
            <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full group-hover:bg-[#22EEBF] ">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FastAndQuality;
