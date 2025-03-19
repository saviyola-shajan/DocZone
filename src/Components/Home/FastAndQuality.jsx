import React from "react";
import Image from "../../assets/images/fastsectionimg.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function FastAndQuality() {
  return (
    <div className="min-h-screen px-24 py-20 flex">
      <div className="w-2/5 relative">
        <div className="border-2 border-white w-[88%] h-[80%] absolute rounded-tr-[110px] rounded-md"></div>
        <img
          src={Image}
          alt="SLIDER IMG"
          className=" rounded-lg relative z-20 pt-9"
        />
      </div>
      <div className="w-3/5 text-[#FFFFFF] p-4">
        <h1 className="text-5xl font-normal mb-6 ">
          Fast and Quality: Your Trusted Partner in Dubai
        </h1>
        <p className="text-lg font-light text-justify">
          At <span className="font-bold ">DocZone Dubai</span>, we understand
          that time is money. That’s why we combine speed with precision to
          deliver fast, reliable, and high-quality services. From document
          clearing to visa processing, our team ensures every task is completed
          efficiently without compromising on quality. With us, you get the best
          of both worlds – quick turnaround times and exceptional results.
        </p>
        <h4 className="text-xl font-medium mt-10">Our mission is clear: </h4>
        <p className="text-lg font-light text-justify mt-3">
          To deliver top-tier services that combine efficiency, affordability,
          and unmatched quality. Whether you're starting a new venture or
          expanding an existing one, Doczone handles the complexities so you can
          focus on what truly matters – growth and innovation
        </p>
        <div>
        <Link
              to="/contact"
              className="group relative transition-all text-center duration-300 text-[#000000] text-lg px-4 py-2 mt-6 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[30%]"
            >
              Connect Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default FastAndQuality;
