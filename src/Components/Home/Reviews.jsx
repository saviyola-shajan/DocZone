import React from "react";
import GoogleReviewImage from "../../assets/images/googlereviews.png";
import reviewImg from "../../assets/images/reviewimg.png";
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <div className="min-h-screen relative">
      <img src={GoogleReviewImage} alt="" className="absolute h-full w-full" />
      <div className="text-[#FFFFFF] absolute left-1/2 p-24">
        <h1 className="text-5xl font-medium">Reviews</h1>
        <p className="text-xl font-medium mt-2">Google Speaks, We Shine!</p>
        <div className="flex mt-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="w-8 h-8 ml-1 text-[#FFCD0F]" />
            ))}
          <p className="ml-4 font-medium text-4xl">4.9</p>
        </div>
        <div className="bg-[#FFFFFF] mt-6 rounded-2xl p-6 text-[#000000]">
          <div className="flex items-center gap-3">
            <img src={reviewImg} alt="" />
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Muhammed Rijas</p>
              <p className="text-sm">CEO-Tech ads</p>
            </div>
          </div>
          <p className="mt-4 text-base font-normal text-justify">
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
