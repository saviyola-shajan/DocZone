import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import HomeImg from "../../assets/images/HOME IMAGE.jpg";
import Header from "../Header";
import { content } from "../Constants/Constant";
import { motion } from "framer-motion";
function Herosection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100svh] md:h-auto bg-cover bg-center relative mt-12 md:mt-0">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <img
        src={HomeImg}
        alt="home img"
        className="w-full h-[100lvh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col-reverse lg:flex-row justify-center items-center px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="w-full lg:w-1/2 mt-10 sm:mt-16 md:mt-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#FFF] mb-2">
            {content[index].text}
          </p>
          <motion.h1
            key={index} // 👈 this triggers the animation on every change
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FFFFFF] leading-tight"
          >
            {content[index].heading.split("\n")[0]} <br />
            {content[index].heading.split("\n")[1]}{" "}
            <span style={{ color: content[index].highlight }}>
              {content[index].heading.split("\n")[2]}
            </span>
          </motion.h1>
          <div className="pt-6 sm:pt-8 lg:pt-10 flex flex-col sm:flex-row">
            <Link
              to="/contact"
              className="group relative transition-all duration-300 text-[#000000] text-base sm:text-lg px-6 py-3 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-full sm:w-[60%] md:w-[50%]"
            >
              Connect With Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full ml-2">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
            <a
              href="/services"
              className="text-[#FFFFFF] text-base sm:text-lg font-extralight sm:ml-6 mt-4 sm:mt-0 relative group flex items-center justify-center"
            >
              Useful Links
              <span>
                <GoArrowRight className="w-5 h-5 ml-2 mt-1" />
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-20 lg:ml-40 flex justify-center lg:justify-end">
          <img
            src={content[index].image}
            alt="SLIDER IMG"
            className="w-64 sm:w-80 md:w-full h-[340px] sm:h-[400px] md:h-full lg:mr-20 rounded-lg relative z-20 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
