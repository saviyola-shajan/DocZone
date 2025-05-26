import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import HomeImg from "../../assets/images/HOME IMAGE.jpg";
import Header from "../Header";
import { content } from "../Constants/Constant";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
function Herosection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center relative mt-12 md:mt-0">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <img
        src={HomeImg}
        alt="home img"
        className="w-full h-screen object-cover"
      />
      {/* Desktop View */}
      <div className="hidden lg:flex absolute inset-0 flex-row justify-center items-center px-4 sm:px-8 md:px-12 lg:px-24 pt-20 md:pt-24">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <p className="text-lg lg:text-2xl font-light text-white mb-2">
            {content[index].text}
          </p>
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-4xl lg:text-6xl font-semibold text-white leading-tight min-h-[14rem] pt-10"
          >
            {content[index].heading.split("\n")[0]} <br />
            {content[index].heading.split("\n")[1]}{" "}
            <span style={{ color: content[index].highlight }}>
              {content[index].heading.split("\n")[2]}
            </span>
          </motion.h1>

          {/* Buttons */}
          <div className="pt-8 flex gap-6">
            <Link
              to="/contact"
              className="group transition-all duration-300 text-black border-2 border-[#22EEBF] px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#22EEBF] hover:bg-white font-medium flex items-center justify-between  md:w-[60%]"
            >
              Connect With Us
              <span className="w-5 h-5 md:w-9 md:h-9 flex items-center justify-center bg-white group-hover:bg-[#22EEBF] rounded-full ml-2">
                <GoArrowUpRight className="text-black text-lg w-6 h-6 " />
              </span>
            </Link>
            <HashLink
              to="/services#usefullinks"
              scroll={(el) => {
                const yOffset = -80;
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className="text-white font-light relative group flex items-center"
            >
              Useful Links
              <GoArrowRight className="w-5 h-5 ml-2" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          </div>
        </div>

        {/* Right Side Image */}
        <motion.div
          key={index}
          className="w-full lg:w-1/2 flex justify-end"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1.5, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          <img
            src={content[index].image}
            alt="SLIDER IMG"
            className="w-[75%] max-w-lg rounded-lg z-20"
          />
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden absolute inset-0 px-6 pt-8 flex flex-col items-center text-center">
        <p className="text-base sm:text-lg text-white mb-2">
          {content[index].text}
        </p>
        <div className="relative h-[16rem] pt-10 pb-24 w-full">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 50, position: "absolute", top: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="absolute top-0 left-0 right-0 text-4xl font-semibold text-white leading-tight text-center"
          >
            {content[index].heading.split("\n")[0]} <br />
            {content[index].heading.split("\n")[1]}{" "}
            <span style={{ color: content[index].highlight }}>
              {content[index].heading.split("\n")[2]}
            </span>
          </motion.h1>
        </div>

        {/* Buttons */}
        <div className="-mt-10 w-full flex flex-col items-center gap-4">
          <Link
            to="/contact"
            className="group transition-all duration-300 text-black border-2 border-[#22EEBF] px-6 py-3 rounded-full bg-[#22EEBF] hover:bg-white font-medium flex items-center justify-between w-full max-w-xs"
          >
            Connect With Us
            <span className="w-6 h-6 md:w-9 md:h-9 flex items-center justify-center bg-white group-hover:bg-[#22EEBF] rounded-full ml-2">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
          <HashLink
            to="/services#usefullinks"
            scroll={(el) => {
              const yOffset = -80;
              const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className="text-white font-light relative group flex items-center"
          >
            Useful Links
            <GoArrowRight className="w-5 h-5 ml-2" />
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </HashLink>
        </div>

        {/* Image at bottom */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1.5, y: 0 }}
          transition={{ duration: 2.5 }}
          className="mt-8"
        >
          <img
            src={content[index].image}
            alt="SLIDER IMG"
            className="w-60 sm:w-72 md:w-80 rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Herosection;
