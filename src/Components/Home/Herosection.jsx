import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import HomeImg from "../../assets/images/homeimg.png";
import Home1 from "../../assets/images/home1.png";
import Home2 from "../../assets/images/home2.png";
import Home3 from "../../assets/images/home3.png";
import Home4 from "../../assets/images/home4.png";
import Header from "../Header";

const content = [
  {
    text: "Your Documents,",
    heading: "Cleared with Trust and Precision",
    highlight: "#22EEBF",
    image: Home1,
  },
  {
    text: "Your Documents,",
    heading: " Cleared with Expertise and Integrity",
    highlight: "#FFA500",
    image: Home2,
  },
  {
    text: "Your Documents,",
    heading: "Cleared with Accuracy and Assurance",
    highlight: "#FF5733",
    image: Home3,
  },
  {
    text: "Your Documents,",
    heading: "Cleared with Efficiency and Confidence",
    highlight: "#1E90FF",
    image: Home4,
  },
];

function Herosection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-cover bg-center relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <img
        src={HomeImg}
        alt="home img"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center px-24">
        <div className="w-1/2 mt-24">
          <p className="text-2xl font-light text-[#FFF] mb-2">
            {content[index].text}
          </p>
          <h1 className="text-7xl font-semibold text-[#FFFFFF]">
            {content[index].heading.split("\n")[0]} <br />
            {content[index].heading.split("\n")[1]}{" "}
            <span style={{ color: content[index].highlight }}>
              {content[index].heading.split("\n")[2]}
            </span>  
          </h1>
          <div className="pt-10 flex">
            <Link
              to="/contact"
              className="group relative transition-all duration-300 text-[#000000] text-lg px-6 py-3 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[50%]"
            >
              Connect With Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
            <a
              href="/services"
              className="text-[#FFFFFF] text-lg font-extralight ml-6 mt-4 flex relative group"
            >
              Useful Links
              <span>
                <GoArrowRight className="w-5 h-5 ml-2 mt-1" />
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div className="w-1/2 relative mt-20 ml-40">
          <div className="border-2 border-white w-96 h-96 absolute left-6 rounded-tr-[75px] rounded-md"></div>
          <img
            src={content[index].image}
            alt="SLIDER IMG"
            className="w-96 h-[420px] rounded-lg relative z-20 mt-6 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
