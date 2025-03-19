import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import conctact2 from "../../assets/images/contactimg2.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight} from "react-icons/go";


function Details() {
  return (
    <div className="bg-[#FFFFFF] px-24 py-20 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-20">
        <div className="bg-[#0D1B40] flex items-center text-white p-6 rounded-lg shadow-md w-full">
          <FaMapMarkerAlt className="text-[#41BEA1] text-3xl mr-6  w-10 h-10" />
          <div className="flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-[#41BEA1]">Location</h3>
              <p className="font-medium text-2xl">Visit Us</p>
            </div>
            <p className="text-lg mt-2 font-light">
              Near Naif Post Office, Al Nakhal - Deira Dubai
            </p>
          </div>
        </div>
        <div className="bg-[#0D1B40] flex items-center text-white p-6 rounded-lg shadow-md w-full">
          <FaPhoneAlt className="text-[#41BEA1] text-3xl mr-6 w-9 h-9" />
          <div className="flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-[#41BEA1]">
                24/7 Service
              </h3>
              <p className="font-medium text-2xl">Contact Us On</p>
            </div>
            <div className="mt-2">
              <p className="text-lg font-light">0568410424</p>
              <p className="text-lg font-light">03-2056269</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0D1B40] flex items-center text-white p-6 rounded-lg shadow-md w-full">
          <FaEnvelope className="text-[#41BEA1] text-3xl mr-6 w-9 h-9" />
          <div className="flex flex-col">
            <div>
              <h3 className="text-xl font-semibold text-[#41BEA1]">
                Drop a Mail
              </h3>
              <p className="font-medium text-2xl">Mail Address</p>
            </div>
            <p className="text-lg font-light mt-2">info@secondsoleit.com</p>
          </div>
        </div>
      </div>
      <div className="mt-12 relative">
        <img src={conctact2} alt="" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#FFFFFF] z-10">
          <h1 className="text-5xl font-semibold">Contact Us & Get</h1>
          <h1 className="text-5xl font-semibold">in touch with us</h1>
          <p className="mt-4 text-center text-lg font-light max-w-xl">
            A document clearing and visa services company simplifies complex
            administrative processes for individuals and businesses.
          </p>
          <Link
              to="/contact"
              className=" relative transition-all duration-300 mt-4 text-[#000000] text-lg px-6 py-2 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[22%]"
            >
              Connect With Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
