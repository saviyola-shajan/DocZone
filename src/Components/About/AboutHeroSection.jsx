import React from "react";
import AboutImg from "../../assets/images/aboutimage.png";
function AboutHeroSection() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-24 pt-32 pb-16">
      <h1 className="text-7xl text-[#161616] font-semibold text-center justify-center items-center">
        About Us
      </h1>
      <div className="flex">
        <div className="w-1/2 py-6">
          <h4 className="text-[#161616] font-medium text-5xl mb-2">Doczone</h4>
          <h1 className="text-[#008364] font-semibold text-6xl ">
            Your Document Clearing Experts in Dubai
          </h1>
          <p className="text-[#171717] text-lg mt-3 text-justify">
            Welcome to Doczone Dubai, your premier partner for document clearing
            and visa services in the UAE. We are a dedicated team of
            professionals committed to providing fast, efficient, and reliable
            solutions for all your document and visa needs. Our mission is to
            simplify the complex administrative processes involved in securing
            visas, legal documents, and residency permits, allowing you to focus
            on what truly matters – your business and personal growth.
          </p>
          <p className="text-[#171717] text-lg mt-2 text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We have considerably researched the
            Dubai market’s commercial history, growth, and ever-changing nature
            of its policies. Furthermore, we have expertise in every
            legislation, regulation, and legality involved in forming a
            corporation. This expertise helps you run a successful business in
            Dubai and all over the UAE.
          </p>
        </div>
        <div className="w-1/2 items-center justify-center flex relative">
          <div className="border-2 border-[#008364] w-96 h-96 absolute right-6 rounded-tr-[75px] rounded-md mb-24 mr-20"></div>
          <img
            src={AboutImg}
            alt="SLIDER IMG"
            className="w-96 h-96 rounded-lg relative z-20 transition-all duration-500 ease-in-out mb-10"
          />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-6xl text-[#161616] mt-4">
          Our <span className="text-[#008364]"> Story</span>
        </h1>
        <p className="text-[#171717] font-normal mt-4 text-lg text-justify">
          Founded with a vision to revolutionize the document clearing industry,
          Doczone Dubai has grown to become a trusted name in Dubai. We
          understand the challenges faced by individuals and businesses in
          navigating the intricate paperwork and bureaucratic hurdles associated
          with document clearing and visa applications. Our was driven by
          the need for a service that not only meets these challenges head-on
          but also does so with a commitment to excellence, transparency, and
          customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default AboutHeroSection;
