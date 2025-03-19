import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import UaeImage from "../assets/images/uae image.png";
function UaeSection({ bgColor = "#FFFFFF" }) {
  const isDarkBg = bgColor === "#081C46";

  return (
    <div className="h-[60vh] px-24 py-12  flex"style={{ backgroundColor: bgColor }}>
      <div className="w-1/2 p-6">
        <h1 className={`text-5xl font-medium ${isDarkBg ? "text-white" : "text-[#0E142A]"}`}>Unblocking</h1>
        <h3 className={` font-normal text-3xl mt-2 ${isDarkBg ? "text-white" : "text-[#0E142A]"}`}>Opportunities In UAE</h3>
        <p className={`mt-4 font-normal text-lg mb-4 ${isDarkBg ? "text-white" : "text-[#0E142A]"}`}>
          Making the UAE accessible – we simplify and streamline document
          clearing and visa processes for individuals and businesses.
        </p>
        <Link
              to="/contact"
              className="group relative transition-all duration-300 text-[#000000] text-lg px-4 py-2 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[40%]"
            >
              Connect Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
      </div>
      <div className="w-1/2">
        <img src={UaeImage} alt="uae" />
      </div>
    </div>
  );
}

export default UaeSection;
