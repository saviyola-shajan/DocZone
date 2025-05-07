import React from "react";
import dreamland from "../../assets/images/built successfull.jpg";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function DreamlandUAE() {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] sm:h-[450px] text-[#FFFFFF] px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-24"
      style={{ backgroundImage: `url(${dreamland})` }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
        Built Successful Business in
      </h1>
      <h1 className="text-[#22EEBF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-2">
        UAE’s Dreamland!
      </h1>
      <p className="font-light text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-[95%] sm:max-w-full">
        Expert Business Setup Consultants in the UAE, ready to assist you.
        Seamless <br className="hidden sm:block" />
        solutions to launch and grow your business successfully
      </p>
      <Link
        to="/contact"
        className="group relative transition-all mt-6 sm:mt-8 duration-300 text-[#000000] text-sm sm:text-base md:text-lg px-4 sm:px-6 py-3 rounded-full bg-[#FFFFFF] font-medium flex items-center justify-between w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[24%]"
      >
        Connect With Us
        <span className="w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center bg-[#22EEBF] rounded-full ml-2">
          <GoArrowUpRight className="text-black text-base sm:text-lg w-5 sm:w-6 h-5 sm:h-6" />
        </span>
      </Link>
    </div>
  );
}

export default DreamlandUAE;
