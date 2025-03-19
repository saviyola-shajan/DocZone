import React from "react";
import dreamland from "../../assets/images/dreamland.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function DreamlandUAE() {
  return (
    <div
      className="relative bg-cover bg-center h-[450px] text-[#FFFFFF] p-24"
      style={{ backgroundImage: `url(${dreamland})` }}
    >
      <h1 className="text-6xl font-medium">Built Successful Business in</h1>
      <h1 className="text-[#34CFAB] text-6xl font-medium mt-2">
        UAE’s Dreamland!
      </h1>
      <p className="font-light text-xl mt-8">
        Expert Business Setup Consultants in the UAE, ready to assist you.
        Seamless <br />
        solutions to launch and grow your business successfully
      </p>
      <Link
              to="/contact"
              className="group relative transition-all mt-8 duration-300 text-[#000000] text-lg px-6 py-3 rounded-full bg-[#FFFFFF] font-medium flex items-center justify-between w-[24%]"
            >
              Connect With Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#41BEA1] rounded-full">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
    </div>
  );
}

export default DreamlandUAE;
