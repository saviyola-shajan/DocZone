import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const values = [
  {
    number: "01",
    title: "Customer Satisfaction",
    description:
      "The measure of our success lies in the satisfaction of our clients. We are dedicated to not just meeting, but consistently exceeding expectations, fostering strong, long-term relationships built on trust.",
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "We value open and clear communication, making it our priority to keep our clients informed and involved at every stage of their document clearing or visa application journey.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "We are committed to upholding the highest standards in our services. Each document and visa application undergoes meticulous attention, ensuring precision and care in every step of the process.",
  },
  {
    number: "04",
    title: "Uncompromising Quality",
    description:
      "Our uncompromising stance on quality is a promise to our clients that they can trust Doczone Dubai to deliver services that are reliable, precise, and of the utmost standard.",
  },
];
function AboutPillars() {
  return (
    <div className="min-h-screen text-[#FFFFFF] bg-[#050F29] p-24 bg-[linear-gradient(222deg,rgba(29,44,97,0.80) -72.39%,#050F29 76.48%)]">
      <h1 className="text-[#41BEA1] font-semibold text-5xl">Our Commitment:</h1>
      <h1 className=" font-semibold text-5xl">The Pillars of Doczone Dubai</h1>
      <p className="mt-10 font-normal text-lg text-justify">
        At Doczone Dubai, our commitment transcends the mere act of service
        delivery; it's an embodiment of our dedication to forging enduring
        relationships, cultivating trust, and guaranteeing that each encounter
        with our clients is marked by a sense of value and satisfaction. We are
        steadfast in our mission to not only meet but exceed expectations,
        providing an unparalleled level of service that is both professional and
        personal.
      </p>
      <p className="font-normal text-lg text-justify">
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our commitment is multifaceted,
        encompassing a deep-seated respect for our clients' time, an unwavering
        focus on delivering results with integrity, and a relentless pursuit of
        innovation to streamline our processes. We understand that the world of
        document clearing and visa services can be complex and daunting, which
        is why we are committed to demystifying these processes, offering clear
        guidance, and ensuring that our clients are well-informed and supported
        throughout their journey with us.
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 py-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-3xl py-8 px-12 shadow-lg border border-[#008364]"
            >
              <div className="text-8xl font-medium text-[#006D54] flex gap-10">
                {value.number}
                <h3 className="text-3xl font-semibold text-[#000000] mt-2 text-right">
                  {value.title}
                </h3>
              </div>
              <p className="text-[#000000] font-normal text-lg mt-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="items-center justify-center flex">
        <Link
          to="/contact"
          className="group relative transition-all duration-300 text-[#000000] text-lg px-6 py-3 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[25%]"
        >
          Connect With Us
          <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] rounded-full">
            <GoArrowUpRight className="text-black text-lg w-6 h-6" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AboutPillars;
