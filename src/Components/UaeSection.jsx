import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import UaeImage from "../assets/images/uae image.png";

function UaeSection({ bgColor = "#FFFFFF" }) {
  const isDarkBg = bgColor === "#081C46";

  return (
    <div
      className="flex flex-col md:flex-row h-auto md:h-[60vh] px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-12"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full md:w-1/2 p-2 sm:p-4 md:p-6 flex flex-col justify-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-medium ${isDarkBg ? "text-white" : "text-[#0E142A]"}`}>
          Unblocking
        </h1>
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-normal mt-2 ${isDarkBg ? "text-white" : "text-[#0E142A]"}`}>
          Opportunities In UAE
        </h3>
        <p className={`mt-4 text-base sm:text-lg font-normal mb-6 ${isDarkBg ? "text-white" : "text-[#0E142A]"}`}>
          Making the UAE accessible – we simplify and streamline document
          clearing and visa processes for individuals and businesses.
        </p>
        <Link
          to="/contact"
          className="group relative transition-all duration-300 text-[#000000] text-sm sm:text-base md:text-lg px-4 py-2 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[70%] sm:w-[50%] md:w-[40%]"
        >
          Connect Us
          <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
            <GoArrowUpRight className="text-black text-lg w-6 h-6" />
          </span>
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <img src={UaeImage} alt="uae" className="w-full h-auto max-h-[350px] object-contain" />
      </div>
    </div>
  );
}

export default UaeSection;
