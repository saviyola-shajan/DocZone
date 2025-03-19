import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
function FAQ() {
  const Questions = [
    {
      num: "01",
      question: "What types of visas do you assist with?",
      answer:
        "At DocZone, we assist with various visa types, including Employment Visa, Family Visa, Golden Visa, Business Visa, Investor Visa, and Visit Visa. Our experts ensure a smooth and hassle-free process.",
    },
    {
      num: "02",
      question: "How long does it take to process a visa?",
      answer: (
        <>
          Visa processing time varies based on the type of visa and the
          requirements of UAE immigration authorities.
          <br />
          <strong>Employment & Family Visas:</strong> 5-10 working days
          <br />
          <strong>Golden Visa:</strong> 2-4 weeks
          <br />
          <strong>Visit Visa:</strong> 2-5 working days
          <br />
          We also offer expedited services for urgent cases.
        </>
      ),
    },
    {
      num: "03",
      question: "What documents are required for a visa application?",
      answer: (
        <>
          <strong>Employment & Family Visas:</strong> Passport copy,
          photographs, proof of relationship, medical report, etc.
          <br />
          <strong>Golden Visa:</strong> Passport copy, photographs, proof of
          financial stability, and other documents as required by UAE
          authorities.
          <br />
          <strong>Visit Visa:</strong> Passport copy, photographs, flight
          bookings, hotel reservations, and other required documents.
          <br />
          Our courses are priced to be affordable and accessible for everyone.
        </>
      ),
    },
    {
      num: "04",
      question: "Can you expedite my visa application?",
      answer:
        "Yes, we offer priority visa processing for urgent applications. Fast-tracking is subject to UAE immigration approval, and additional charges may apply.",
    },
    {
      num: "05",
      question: "What if my visa application is rejected?",
      answer:
        "If your visa is rejected, we will analyze the reason and assist in reapplying with corrections or appealing the decision. Our team ensures that all documentation meets UAE immigration standards to minimize rejection risks.",
    },
    {
      num: "06",
      question: "How long does document attestation take?",
      answer:
        "Document attestation usually takes 3-7 working days, depending on the type of document and the issuing authority. Urgent processing options are available upon request.",
    },
    {
      num: "07",
      question: "What are the charges for document clearing?",
      answer:
        "Our charges depend on the document type, country of issuance, and attestation requirements. We offer affordable pricing with transparent breakdowns. Contact us for a free quote.",
    },
  ];

  const [OpenStates, setOpenStates] = useState(
    Array(Questions.length).fill(false)
  );

  const toggleLeftDropdown = (index) => {
    const newStates = Array(Questions.length).fill(false);
    newStates[index] = !OpenStates[index];
    setOpenStates(newStates);
  };
  return (
    <div className="min-h-screen px-24 py-20 text-[#FFFFFF]">
      <h1 className="text-6xl font-medium">
        Frequently
        <br />
        <span className="opacity-75">asked Question</span>
      </h1>
      <div className="hidden sm:hidden md:block pb-16 mt-12">
        {Questions.map((item, index) => (
          <div
            key={index}
            className="bg-[#595B731A] p-4 rounded-lg mt-4 ml-4 shadow-md"
          >
            <button
              onClick={() => toggleLeftDropdown(index)}
              className="flex justify-between items-center w-full text-left gap-12"
            >
              <p className="flex-shrink-0 text-[#41BEA1]">{item.num}</p>
              <h3 className="text-lg font-semibold text-left flex-1">
                {item.question}
              </h3>
              <span
                className={`text-xl transform transition-transform ${
                  OpenStates[index] ? "rotate-180" : ""
                }`}
              >
                <span className="inline-flex justify-center items-center bg-[#41BEA1] p-2 rounded-full">
                  <FaChevronDown className="w-4 h-4 text-[#000000]" />
                </span>
              </span>
            </button>
            {OpenStates[index] && (
              <p className="mt-2 text-base text-[#FFFFFFCC] transition-all duration-300 ease-in-out">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
