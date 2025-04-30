import React from "react";
import GoogleReviewImage from "../../assets/images/googlereviews.png";
import reviewImg from "../../assets/images/reviewimg.png";
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <div className="lg:min-h-[65dvh] h-[50dvh] relative">
      <img src={GoogleReviewImage} alt="img" className="absolute h-[45dvh] lg:h-[60dvh]  w-full object-cover" />
      <div className="text-[#FFFFFF] absolute left-1/2 transform -translate-x-1/2 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 sm:py-14 md:py-16 lg:py-24 w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">Reviews</h1>
        <p className="text-lg sm:text-xl font-medium mt-2">Google Speaks, We Shine!</p>
        <div className="flex flex-wrap items-center mt-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ml-1 text-[#FFCD0F]" />
            ))}
          <p className="ml-4 font-medium text-2xl sm:text-3xl md:text-4xl">4.9</p>
        </div>
        <div className="bg-[#FFFFFF] mt-6 rounded-2xl p-4 sm:p-6 text-[#000000]">
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <img src={reviewImg} alt="" className="w-16 sm:w-auto" />
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
  );
}

export default Reviews;
