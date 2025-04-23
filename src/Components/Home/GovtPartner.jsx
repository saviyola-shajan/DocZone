import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import govt1 from "../../assets/partnerimg/govt1.jpg"
import govt2 from "../../assets/partnerimg/govt2.jpg"
import govt3 from "../../assets/partnerimg/govt3.jpg"
import govt4 from "../../assets/partnerimg/govt4.jpg"
import govt5 from "../../assets/partnerimg/govt5.jpg"
import govt7 from "../../assets/partnerimg/govt7.png"
import govt8 from "../../assets/partnerimg/govt8.jpg"
import govt9 from "../../assets/partnerimg/govt9.jpg"
import govt10 from "../../assets/partnerimg/govt10.jpg"
import govt11 from "../../assets/partnerimg/govt11.jpg"
import govt12 from "../../assets/partnerimg/govt12.jpg"
import govt13 from "../../assets/partnerimg/govt13.jpg"
import govt14 from "../../assets/partnerimg/govt14.jpg"
import govt15 from "../../assets/partnerimg/govt15.jpg"
import govt16 from "../../assets/partnerimg/govt16.jpg"

const images =[govt1,govt2,govt3,govt4,govt5,govt7,govt8,govt9,govt10,govt11,govt12,govt13,govt14,govt15,govt16]

function GovtPartner() {
  return (
    <>
    <div className="h-auto px-24 py-20 text-[#000000] bg-white">
      <h1 className="text-6xl font-semibold mb-4">Trusted by Government, Preferred by Clients</h1>
      <p className="text-2xl font-normal mb-16">
        We partner with UAE government authorities to deliver accurate,
        timely services.
      </p>
      <Swiper
      modules={[Autoplay]}
      autoplay
      loop={true}
      spaceBetween={20}
      slidesPerView={4}
      >
      {images.map((imgSrc, index) => (
         <SwiperSlide key={index}>
         <div className="flex justify-center items-center">
           <img src={imgSrc} alt={`Slide ${index + 1}`} className="max-w-full h-[40vh] object-contain px-12" />
         </div>
       </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </>
  );
}

export default GovtPartner;
