import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { settings } from "../Constants/Constant";

function ServiceSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16 md:py-20 h-auto lg:min-h-screen relative">
      <div className="absolute right-4 sm:right-8 md:right-24 lg:right-32 mt-36 flex space-x-4 z-20">
        <button
          ref={prevRef}
          className="bg-[#41BEA1] text-[#000000] p-2 sm:p-3 rounded-full"
        >
          <FaChevronLeft className="h-4 w-4 md:h-6 md:w-6 rounded-full" />
        </button>
        <button
          ref={nextRef}
          className="bg-[#41BEA1] text-[#000000] p-2 sm:p-3 rounded-full"
        >
          <FaChevronRight className="h-4 w-4 md:h-6 md:w-6 rounded-full" />
        </button>
      </div>

      <div>
        <div className="text-[#FFFFFF]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8">
            Choose Your Service
          </h1>
          <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-full sm:max-w-5xl text-justify">
            Choose from our wide range of professional document clearing and
            visa services tailored for individuals, startups, and businesses.
            From fast and secure visa processing to legal document attestation,
            business license approvals, and residency permit assistance — our
            expert team ensures smooth and reliable service. Select the right
            service to simplify your government-related processes with ease.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="w-full mt-10"
        >
          {settings.map((service, index) => (
            <SwiperSlide key={index} className="p-2 sm:p-4">
              <div className="relative rounded-3xl border border-[#41BEA1] shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="w-full object-cover rounded-lg h-48 sm:h-60 md:h-72 lg:h-80"
                />
                <div className="absolute inset-0 flex flex-col p-4 sm:p-6 md:p-10 z-10">
                  <div className="flex items-center">
                    <span className="w-8 sm:w-10 border-t-2 border-gray-700 mr-3"></span>
                    <p className="text-[#41BEA1] text-sm sm:text-base">
                      {service.num}
                    </p>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#FFFFFF] mt-3 sm:mt-4">
                    {service.title}
                    <br />
                    {service.title2}
                  </h3>
                  <p className="text-[#FFFFFF] text-xs sm:text-sm md:text-base font-light mt-3 sm:mt-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceSection;
