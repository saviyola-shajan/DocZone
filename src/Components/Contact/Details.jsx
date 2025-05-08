import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import conctact2 from "../../assets/images/contactimg2.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function Details() {
  return (
    <div className="bg-[#FFFFFF] px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-16 lg:py-20 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        <div className="bg-[#0D1B40] flex items-start sm:items-center text-white p-4 sm:p-6 rounded-lg shadow-md w-full">
          <FaMapMarkerAlt className="text-[#22EEBF] text-2xl sm:text-3xl mr-4 sm:mr-6 w-8 sm:w-10 h-8 sm:h-10" />
          <div className="flex flex-col">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#22EEBF]">Location</h3>
              <p className="font-medium text-xl sm:text-2xl">Visit Us</p>
            </div>
            <p className="text-base sm:text-lg mt-2 font-light">
              Near Naif Post Office, Al Nakhal - Deira Dubai
            </p>
          </div>
        </div>

        <div className="bg-[#0D1B40] flex items-start sm:items-center text-white p-4 sm:p-6 rounded-lg shadow-md w-full">
          <FaPhoneAlt className="text-[#22EEBF] text-2xl sm:text-3xl mr-4 sm:mr-6 w-7 sm:w-9 h-7 sm:h-9" />
          <div className="flex flex-col">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#22EEBF]">24/7 Service</h3>
              <p className="font-medium text-xl sm:text-2xl">Contact Us On</p>
            </div>
            <div className="mt-2">
              <p className="text-base sm:text-lg font-light">0568410424</p>
              <p className="text-base sm:text-lg font-light">03-2056269</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0D1B40] flex items-start sm:items-center text-white p-4 sm:p-6 rounded-lg shadow-md w-full">
          <FaEnvelope className="text-[#22EEBF] text-2xl sm:text-3xl mr-4 sm:mr-6 w-7 sm:w-9 h-7 sm:h-9" />
          <div className="flex flex-col">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#22EEBF]">Drop a Mail</h3>
              <p className="font-medium text-xl sm:text-2xl">Mail Address</p>
            </div>
            <p className="text-base sm:text-lg font-light mt-2">info@secondsoleit.com</p>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 relative">
        <img src={conctact2} alt="" className="w-full h-[50dvh] rounded-xl" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#FFFFFF] px-4 text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Contact Us & Get in touch with us</h1>
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold"></h1> */}
          <p className="mt-4 text-sm sm:text-base md:text-lg font-light">
            A document clearing and visa services company simplifies complex
            administrative processes for individuals and businesses.
          </p>
          <Link
            to="/contact"
            className="relative transition-all duration-300 mt-4 text-[#000000] border border-[#22EEBF] hover:bg-[#ffffff]  text-sm sm:text-base md:text-lg px-6 py-2 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[70%] sm:w-[50%] md:w-[35%] lg:w-[22%]"
          >
            Connect With Us
            <span className="w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full group-hover:bg-[#22EEBF]">
              <GoArrowUpRight className="text-black text-base sm:text-lg w-5 sm:w-6 h-5 sm:h-6" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
