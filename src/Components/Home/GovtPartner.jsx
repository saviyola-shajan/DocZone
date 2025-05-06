import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import govt1 from "../../assets/partnerimg/govt1.jpg";
import govt2 from "../../assets/partnerimg/govt2.jpg";
import govt3 from "../../assets/partnerimg/govt3.jpg";
import govt4 from "../../assets/partnerimg/govt4.jpg";
import govt5 from "../../assets/partnerimg/govt5.jpg";
import govt7 from "../../assets/partnerimg/govt7.png";
import govt8 from "../../assets/partnerimg/govt8.jpg";
import govt9 from "../../assets/partnerimg/govt9.jpg";
import govt10 from "../../assets/partnerimg/govt10.jpg";
import govt11 from "../../assets/partnerimg/govt11.jpg";
import govt12 from "../../assets/partnerimg/govt12.jpg";
import govt13 from "../../assets/partnerimg/govt13.jpg";
import govt14 from "../../assets/partnerimg/govt14.jpg";
import govt15 from "../../assets/partnerimg/govt15.jpg";
import govt16 from "../../assets/partnerimg/govt16.jpg";

const images = [
  govt1,
  govt2,
  govt3,
  govt4,
  govt5,
  govt7,
  govt8,
  govt9,
  govt10,
  govt11,
  govt12,
  govt13,
  govt14,
  govt15,
  govt16,
];

function GovtPartner() {
  return (
    <div className="h-auto px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-20 text-[#000000] bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
        Trusted by Government,<br/> <span className="font-medium">Preferred by Clients</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-12 md:mb-8">
        We partner with UAE government authorities to deliver accurate,
        timely services.
      </p>
      <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  spaceBetween={20}
  observeParents={true}
  observer={true}
  className="w-full"
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1536: {
      slidesPerView: 5,
    },
  }}
>

        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center bg-black/5 rounded-2xl">
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="max-w-full h-[40vh] object-contain px-6 sm:px-8 mix-blend-multiply "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GovtPartner;
