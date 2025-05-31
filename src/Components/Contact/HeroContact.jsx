import React from "react";
const contactimg = "https://wpcms.doczonedubai.com/wp-content/uploads/2025/05/contactimg.png";

function HeroContact() {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-[#FFFFFF] mt-20"
      style={{ backgroundImage: `url(${contactimg})` }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
        Contact Us
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-2xl font-light mb-4 sm:mb-6 md:mb-8">
      Get in touch with DocZone - your reliable partner in Dubai for document clearing and visa services. We're here to assist you every step of the way.
      </p>
    </div>
  );
}

export default HeroContact;
