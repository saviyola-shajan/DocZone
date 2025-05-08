import React from "react";
import GoogleReviewImage from "../../assets/images/googlereviews.png";
import reviewImg from "../../assets/images/reviewimg.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function Reviews() {
  return (
    <div className="lg:min-h-[65dvh] h-[85dvh] relative">
      <img
        src={GoogleReviewImage}
        alt="img"
        className="absolute h-[80dvh] sm:h-[85dvh] md:h-[85dvh] lg:h-[90dvh] w-full object-cover"
      />
      
      {/* Flex wrapper to align content right on large screens */}
      <div className="absolute top-0 left-0 w-full h-full flex items-end lg:justify-end md:mt-8 lg:mt-28">
        <div className="text-[#FFFFFF] w-full lg:w-1/2 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28 py-10 sm:py-14 md:py-16 lg:py-24 max-w-6xl">
          <h1 className="text-2xl sm:text-2xl md:text-5xl font-semibold">Reviews</h1>
          <p className="text-lg sm:text-xl font-medium mt-2">Google Speaks, We Shine!</p>
          <div className="flex flex-wrap items-center mt-2 md:mt-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar
                  key={index}
                  className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-1 text-[#FFCD0F]"
                />
              ))}
            <p className="ml-4 font-medium text-xl sm:text-3xl md:text-4xl">4.9</p>
          </div>
          <div>
          <Link
            to="/contact"
            className="group relative transition-all text-center duration-300 text-[#000000] border border-[#22EEBF] hover:bg-[#ffffff]  text-lg px-4 py-2 mt-6 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[70%] sm:w-[50%] md:w-[40%] lg:w-[40%]"
          >
            More Reviews
            <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full group-hover:bg-[#22EEBF] ">
              <GoArrowUpRight className="text-black text-lg w-6 h-6" />
            </span>
          </Link>
        </div>
          <div className="bg-[#FFFFFF] mt-6 rounded-2xl p-4 sm:p-6 text-[#000000]">
            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              <img src={reviewImg} alt="" className="w-16 sm:w-20 md:w-24" />
              <div className="flex flex-col">
                <p className="text-lg sm:text-xl font-semibold">Muhammed Rijas</p>
                <p className="text-sm">CEO-Tech ads</p>
              </div>
            </div>
            <p className="mt-4 text-sm sm:text-base font-normal text-justify">
              Absolutely fantastic experience with DocZone Dubai! From the moment
              I reached out, their team was incredibly professional, responsive,
              and efficient. They handled all my document clearing and visa
              requirements with such ease and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
