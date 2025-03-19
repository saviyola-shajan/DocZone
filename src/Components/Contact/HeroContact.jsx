import React from "react";
import contactimg from "../../assets/images/contactimg.png";
function HeroContact() {
  return (
    <div
    className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-[#FFFFFF] mt-20"
    style={{ backgroundImage: `url(${contactimg})` }}
  >
    <h1 className="text-7xl font-bold mb-8">Contact Us</h1>
    <p className="text-lg max-w-2xl font-light mb-4">
      A document clearing and visa services company simplifies complex
      administrative processes for individuals and businesses.
    </p>
  </div>
  
  );
}

export default HeroContact;
