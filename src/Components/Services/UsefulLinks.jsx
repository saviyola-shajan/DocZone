import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const services = [
  { name: "International Visa and Passport Services", link: "https://www.blsindiavisa-uae.com/appointmentbls/appointment.php " },
  { name: "Dubai Health Services", link: "https://dubaihealth.ae/medical-fitness-centers" },
  { name: "Dubai Insurance Services", link: "https://www.iloe.ae/" },
  { name: "Customer Happiness Centers", link: "/services/customer-happiness" },
  { name: "Unified Number Inquiry Service", link: "https://gdrfad.gov.ae/en/unified-number-inquiry-service" },
  // { name: "Fines Inquiry and Payment", link: "https://gdrfad.gov.ae/en/fines-inquiry-service" },
  { name: "Zajel: Track your shipment", link: "https://zajel.com/" },
  { name: "EHS Medical Fitness Centers", link: "https://www.ehs.gov.ae/en/services/services-directory/examination-of-medical-fitness-for-residency-visa" },
  { name: "MOHRE Inquiry Services", link: "https://inquiry.mohre.gov.ae/" },
];


function UsefulLimks() {
  return (
    <div id="usefullinks" className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24 items-center justify-center">
      <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#018264]">
        Useful Links
      </h1>
      <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
        For Quick access
      </h1>
      <p className="font-normal text-base sm:text-lg md:text-xl text-[#000000] mt-6 sm:mt-8 text-left  mx-auto px-2">
        At Doczone Dubai, our commitment transcends the mere act of service
        delivery; it's an embodiment of our dedication to forging enduring
        relationships, cultivating trust, and guaranteeing that each encounter
        with our clients is marked by a sense of value and satisfaction.
      </p>
      <div className="max-w-7xl mr-10 mx-auto py-10 space-y-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-center justify-between px-6 py-4 rounded-lg ${
            index % 2 === 0 ? "bg-[#22EEBF] text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            {service.name}
          </h3>
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm sm:text-base transition ${
              index % 2 === 0
                ? "bg-white text-black "
                : "bg-white text-black"
            }`}
          >
            Visit Site <LuSquareArrowOutUpRight />
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default UsefulLimks;
