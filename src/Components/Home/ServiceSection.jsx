import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Home1 from "../../assets/images/services1.png";
import Home2 from "../../assets/images/services2.png";
import Home3 from "../../assets/images/services3.png";
import Home4 from "../../assets/images/services4.png";
import Home5 from "../../assets/images/services5.png";
import Home6 from "../../assets/images/services6.png";

const settings = [
  {
    num: "01",
    image: Home1,
    title: "PRO",
    title2: "SERVICES",
    description:
      " Setting up a business in Dubai requires navigating a complex web of administrative and governmental processes.",
  },
  {
    num: "02",
    image: Home2,
    title: "DOCUMENT",
    title2: "ATTESTATION",
    description:
      "UAE attestation validates documents for work, study, or business. It involves HRD/SDM, notary, or Chamber of Commerce attestation,",
  },
  {
    num: "03",
    image: Home3,
    title: "LABOUR & ",
    title2: "EMIGRATION SERVICE",
    description:
      "Navigating the UAE’s labor and immigration landscape can be complex, but Doczone simplifies the process.",
  },
  {
    num: "04",
    image: Home4,
    title: "LISCENCE RENEWAL &",
    title2: " AMENDMENT",
    description:
      "Health insurance is a mandatory requirement for all residents in the UAE, ensuring access to quality healthcare services.",
  },
  {
    num: "05",
    image: Home5,
    title: "HEALTH INSURANCE ",
    title2: "SERVICES",
    description:
      "Health insurance is a mandatory requirement for all residents in the UAE, ensuring access to quality healthcare services.",
  },
  {
    num: "06",
    image: Home6,
    title: "FAMILY VISA ",
    title2: "SERVICES",
    description:
      "A UAE Family Visa allows expatriates residing in the UAE to sponsor their immediate family members, including spouses and children,",
  },
  {
    num: "07",
    image: Home2,
    title: "GOLDEN VISA",
    title2: "SERVICES",
    description:
      "The UAE Golden Visa is a long-term residency visa that allows expatriates, investors, entrepreneurs, skilled professionals,",
  },
  {
    num: "08",
    image: Home4,
    title: "VAT REGISTRATION",
    title2: "SERVICES",
    description:
      "Value Added Tax (VAT) is a mandatory requirement for businesses in the UAE that meet the revenue threshold set by the Federal Tax Authority.",
  },
];

function ServiceSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="px-24 py-20 min-h-screen relative">
      <div className="absolute right-32 mt-32 flex space-x-4 z-20">
        <button
          ref={prevRef}
          className="bg-[#41BEA1] text-[#000000] p-4 rounded-full"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          ref={nextRef}
          className="bg-[#41BEA1] text-[#000000] p-4 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div>
        <div className="text-[#FFFFFF]">
          <h1 className="text-6xl font-medium mb-8">Choose Your Service</h1>
          <p className="font-light text-xl mb-6 max-w-2xl text-justify">
            A document clearing and visa services company simplifies complex
            administrative processes for individuals and businesses. From
            securing visas to handling legal documents, and residency permits.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          lopp={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {settings.map((service, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="relative rounded-3xl border border-[#41BEA1] shadow-lg  overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col p-10 z-10">
                  <div className="flex items-center">
                    <span className="w-10 border-t-2 border-gray-700 mr-3"></span>
                    <p className="text-[#41BEA1] text-lg">{service.num}</p>
                  </div>
                  <h3 className="text-2xl font-medium text-[#FFFFFF] mt-4">
                    {service.title}
                    <br />
                    {service.title2}
                  </h3>
                  <p className="text-[#FFFFFF] text-base font-light mt-4">
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
