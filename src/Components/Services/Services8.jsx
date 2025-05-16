import React, { useState } from "react";
import servicesman1 from "../../assets/images/ser1.png";
import servicesman2 from "../../assets/images/ser2.png";
import servicesman3 from "../../assets/images/ser3.png";
import servicesman4 from "../../assets/images/ser4.png";
import servicesman5 from "../../assets/images/ser5.png";
import servicesman6 from "../../assets/images/ser6.png";
import servicesman7 from "../../assets/images/ser7.png";
import servicesman8 from "../../assets/images/ser8.png";

import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

function Services() {
  const [openDropdowns, setOpenDropdowns] = useState(null);

  const slidesData = [
    {
      title1: "Family Visa",
      title2: "Services",
      img: servicesman6,
      num: "01",
      description:
        "A UAE Family Visa allows expatriates residing in the UAE to sponsor their immediate family members, including spouses and children, ensuring they can legally reside in the country. The UAE government has set specific requirements to obtain a family visa.",
      dropdown:
        "Bringing your family to the UAE should be an exciting journey, not a complicated process. At DocZone, we simplify family visa applications, ensuring a smooth and hassle-free experience. Whether you're sponsoring your spouse, children, or parents, our team handles everything from document preparation and submission to approvals and visa stamping. We stay updated with UAE immigration laws to provide accurate guidance, avoiding unnecessary delays and rejections. Our services also include visa renewals, status changes, and assistance with medical and Emirates ID registration. With DocZone, you can focus on what matters most—being with your family—while we take care of the paperwork.",
      heading: "Family Visa Services",
      process: [
        {
          t1: "Eligibility Check  ",
          p1: " Verify sponsor’s salary and accommodation requirements.",
        },
        {
          t1: "Document Submission ",
          p1: " Provide passports, certificates, Emirates ID, labor contract, and tenancy agreement",
        },
        {
          t1: "Medical & Emirates ID  ",
          p1: " Family members complete medical tests and register for Emirates ID.",
        },
        {
          t1: "Visa Processing   ",
          p1: " Apply through GDRFA; processing takes 3-4 working days.",
        },
        {
          t1: "Final Approval",
          p1: " Residency visa is stamped on the passport.",
        },
      ],
    },
    {
      title1: "PRO",
      title2: "Services",
      img: servicesman1,
      num: "02",
      description:
        "Setting up a business in Dubai requires navigating a complex web of administrative and governmental processes. At DocZone, we specialize in providing seamless PRO services to assist you in obtaining necessary licenses, visas, and approvals. ",
      dropdown:
        "At DocZone, we make business setup in the UAE Mainland and Free Zones seamless. If you want to trade within the UAE market and secure government contracts, a Mainland company is the right choice, though some activities may require a local service agent. Free Zone companies, on the other hand, offer 100% foreign ownership, tax advantages, and faster setup but come with trade restrictions outside the Free Zone. Our experts handle company registration, document attestation, government approvals, and compliance, ensuring a hassle-free business setup in the UAE. With our in-depth knowledge of UAE regulations, we simplify the entire process, saving you time and effort. Let DocZone be your trusted partner in building a strong business foundation!",
      heading: "Pro Services",
      process: [
        {
          t1: "Consultation & Assessment",
          p1: "Understanding your business needs and guiding you through the best setup options",
        },
        {
          t1: "Document Preparation",
          p1: "Assisting in compiling and verifying necessary documents.",
        },
        {
          t1: "Government Approvals",
          p1: "Liaising with relevant authorities for processing.",
        },
        {
          t1: "Finalization & Handover",
          p1: "Completing documentation and obtaining approvals",
        },
        {
          t1: "Ongoing Support",
          p1: "Ensuring compliance and handling future renewals.",
        },
      ],
    },
    {
      title1: "Document",
      title2: "Attestation",
      img: servicesman2,
      num: "03",
      description:
        "UAE attestation validates documents for work, study, or business. It involves HRD/SDM, notary, or Chamber of Commerce attestation, followed by MEA, UAE Embassy, and MOFA steps. Our service offers tracking and support for a smooth process.",
      dropdown:
        "Choosing DocZone for document attestation gives you a seamless, efficient, and reliable service tailored to your needs. Our experts manage the entire process, from notarization and embassy legalization to MOFA approval, ensuring accuracy and compliance with UAE regulations. With our streamlined approach, we eliminate the hassle of delays, rejections, and repeated submissions, saving you valuable time and effort. Whether you need attestation for employment, education, business setup, or immigration, we provide a secure and transparent process. Our strong network and expertise ensure faster processing, so you can focus on your career, studies, or business without worrying about legal formalities. Trust DocZone for a smooth, stress-free attestation experience with dedicated support at every step.",
      heading: "Document Attestation",
      process: [
        {
          t1: "Initial Verification",
          p1: "HRD/SDM for education, notary for personal, Chamber of Commerce for commercial.",
        },
        {
          t1: "MEA Attestation",
          p1: " HRD/SDM for education, notary for personal, Chamber of Commerce for commercial.",
        },
        {
          t1: "UAE Embassy Attestation",
          p1: "Forward to UAE Embassy.",
        },
        {
          t1: "MOFA Attestation ",
          p1: "Finalize with UAE Ministry of Foreign Affairs.",
        },
        {
          t1: "Support",
          p1: "Online tracking and assistance available.",
        },
      ],
    },
    {
      title1: "Labor &",
      title2: "Emigration Service",
      img: servicesman3,
      num: "04",
      description:
        "Navigating the UAE’s labor and immigration landscape can be complex, but Doczone simplifies the process. We specialize in providing comprehensive support, from employment visa quotas and work permit issuance to contract amendments and Emirates ID registration. ",
      dropdown:
        "DocZone simplifies Labour and Emigration Services, ensuring a hassle-free process for individuals and businesses. We assist with work permits, visa approvals, labor contracts, and compliance with UAE labor laws, making employment procedures smooth and efficient. Our experts handle documentation, approvals, and submissions with precision, reducing delays and ensuring legal compliance. Whether you're an employer hiring foreign talent or an individual seeking overseas opportunities, we provide end-to-end support for emigration clearance, labor card processing, and ministry approvals. With DocZone, you can navigate complex regulations effortlessly, save time, and focus on your career or business growth while we take care of the paperwork.",
      heading: "Labour & Emigration ",
      process: [
        {
          t1: "Review and Sign Contracts",
          p1: "Verify offer letters and contracts for UAE labor law compliance. ",
        },
        {
          t1: "Work Permit Application ",
          p1: " Submit required documents for work permit approval.",
        },
        {
          t1: "Visa Processing ",
          p1: " Apply for entry permits and residence ",
        },
        {
          t1: "Emirates ID Registration ",
          p1: "Complete biometric registration upon arrival.",
        },
        {
          t1: "Ensure Compliance",
          p1: "Follow UAE labor laws to avoid penalties.",
        },
      ],
    },
    {
      title1: "License Renewal",
      title2: "& Amendment",
      img: servicesman4,
      num: "05",
      description:
        "As businesses grow, restructuring and modifications may require amendments to the trade license. Dubai’s licensing authorities allow various amendments, including changes in company name, directors, business activities, or registered address.",
      dropdown:
        "At DocZone, we streamline License Renewal & Amendment services, ensuring your business remains compliant and operational without delays. Our experts handle the entire renewal process, from document verification to submission, preventing penalties and interruptions. Need modifications? We assist with trade name changes, activity additions, ownership transfers, and more, ensuring your business stays aligned with evolving needs. With DocZone, you save time, avoid legal complications, and ensure a smooth, hassle-free experience. Stay ahead with our expert guidance and seamless government approvals—because your business deserves uninterrupted growth.",
      heading: "License Renewal Amendment",
      process: [
        {
          t1: "Submit an Amendment Application ",
          p1: "Fill out and submit the required application form.",
        },
        {
          t1: "Approval from Authorities   ",
          p1: " Obtain necessary approvals based on the type of amendment.",
        },
        {
          t1: "Payment Processing     ",
          p1: " Complete the required fee payment for the amendment.",
        },
        {
          t1: "License Update & Documentation",
          p1: " Ensure updates to official records and business documents.",
        },
      ],
    },
    {
      title1: "Health",
      title2: "Insurance Services",
      img: servicesman5,
      num: "06",
      description:
        "Health insurance is a mandatory requirement for all residents in the UAE, ensuring access to quality healthcare services. Whether you are an individual, a family, or a business looking to provide insurance for employees.",
      dropdown:
        "Securing the right health insurance is essential for individuals, families, and businesses in the UAE. At DocZone, we simplify the process by offering tailored insurance plans that comply with government regulations and provide extensive medical coverage. From policy selection to renewals and claims assistance, we handle everything efficiently, ensuring you get the best benefits without complications. Whether for personal security or corporate compliance, our expert team connects you with leading insurance providers for the most competitive rates and seamless support. Stay covered, stay worry-free—choose DocZone for your health insurance needs.",
      heading: "Health Insurance Services",
      process: [
        {
          t1: "Eligibility & Plan Selection",
          p1: "Choose a health insurance plan based on needs and budget.",
        },
        {
          t1: "Document Submission ",
          p1: "Provide passport, Emirates ID, and residency visa details.",
        },
        {
          t1: "Policy Issuance ",
          p1: " Get approved and receive the insurance policy.",
        },
        {
          t1: "Medical Access ",
          p1: " Use a health card or e-insurance for medical services.",
        },
        {
          t1: "Renewal & Support ",
          p1: " Renew policy on time and get claim assistance.",
        },
      ],
    },
  
    {
      title1: "Golden Visa",
      title2: "Services",
      img: servicesman7,
      num: "07",
      description:
        "The UAE Golden Visa is a long-term residency visa that allows expatriates, investors, entrepreneurs, skilled professionals, and outstanding students to live, work, and study in the UAE with exclusive benefits. This prestigious visa is granted for 5 or 10 years.",
      dropdown:
        "The UAE Golden Visa offers long-term residency for investors, entrepreneurs, skilled professionals, and outstanding students, providing stability and exclusive benefits. At DocZone, we streamline the entire process, ensuring a smooth and stress-free application. Our experts assist with eligibility assessment, document preparation, approvals, and renewals, making your journey seamless. Enjoy perks like 10-year residency, business ownership flexibility, and family sponsorship without hassle. Whether you're an investor, specialist, or a high-achieving individual, DocZone is your trusted partner in securing your future in the UAE. Let us handle the complexities while you focus on your success.",
      heading: "Golden Visa Services",
      process: [
        {
          t1: "Eligibility Check  ",
          p1: " HRD/SDM for education, notary for personal, Chamber of Commerce for commercial",
        },
        {
          t1: "Document Preparation",
          p1: " Gather passports, investment proof, certificates, and salary statements.",
        },
        {
          t1: "Application Submission",
          p1: "  Submit the Golden Visa request for review.",
        },
        {
          t1: "Medical & Emirates ID   ",
          p1: " Complete medical tests and register for Emirates ID.",
        },
        {
          t1: "Visa Approval",
          p1: "  Obtain a 5 or 10-year Golden Visa with exclusive UAE benefits",
        },
      ],
    },
    {
      title1: "VAT Registration",
      title2: "& Filing",
      img: servicesman8,
      num: "08",
      description:
        "Value Added Tax (VAT) is a mandatory requirement for businesses in the UAE that meet the revenue threshold set by the Federal Tax Authority (FTA). Companies with an annual turnover exceeding AED 375,000 must register for VAT.",
        dropdown:
        "Ensuring VAT compliance is a crucial aspect of running a business in the UAE, and at DocZone, we make it effortless for you. Our VAT registration and filing services are designed to help businesses meet legal requirements while avoiding errors and penalties. From determining your VAT eligibility to handling documentation and submission, our team ensures a seamless process. We assist with VAT returns, tax invoices, and bookkeeping, ensuring that your business stays fully compliant with UAE tax regulations.With our expertise, you can focus on growing your business while we handle the complexities of VAT registration, filing, and compliance. Whether you're a startup or an established enterprise, we tailor our services to your business needs, ensuring accurate tax reporting and timely filings.",
        heading: "VAT Registration & Filing",
      process: [
        {
          t1: "Eligibility Assessment  ",
          p1: "  Determine if your business meets the VAT registration criteria.",
        },
        {
          t1: "Document Submission",
          p1: " Provide essential details, including trade license, financial records and Emirates ID.",
        },
        {
          t1: "FTA Registration",
          p1: " Apply for VAT registration through the Federal Tax Authority (FTA) portal",
        },
        {
          t1: "VAT Certificate Issuance",
          p1: "Obtain the official VAT registration certificate upon approval.",
        },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
    <h1 className="text-[#07122D] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left font-semibold">
      Our Global<span className="text-[#22EEBF]"> Services</span>
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl font-normal text-justify">
      At Doczone Dubai, our commitment transcends the mere act of service
      delivery; it's an embodiment of our dedication to forging enduring
      relationships, cultivating trust, and guaranteeing that each encounter
      with our clients is marked by a sense of value and satisfaction.
    </p>
  
    <div className="my-12 sm:my-16 md:my-24 hidden md:block">
      {slidesData.map((service, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col lg:flex-row mb-12 lg:mb-24">
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#121212] ml-2 sm:ml-4">
                {service.title1}
              </h1>
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#22EEBF] mb-4 sm:mb-6 ml-2 sm:ml-4">
                {service.title2}
              </h1>
              <img src={service.img} alt="1" className="px-0 sm:px-6" />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-28">
              <div className="flex items-center">
                <span className="w-6 sm:w-10 border-t-2 border-gray-700 mr-2 sm:mr-3 mt-4 sm:mt-6"></span>
                <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl text-[#006D54] mb-1 ml-2 sm:ml-4">
                  {service.num}
                </h1>
              </div>
  
              <p className="font-normal text-base sm:text-lg md:text-xl text-[#000000] text-justify mt-2">
                {service.description}
              </p>
            </div>
          </div>
  
          <div className="relative ml-0 sm:ml-24 md:ml-36 lg:ml-52">
            <div className="absolute w-full bg-[linear-gradient(222deg,_rgba(29,44,97,0.80)_-72.39%,_#050F29_76.48%)] z-10 px-4 sm:px-6 py-6 bottom-32 rounded-t-2xl">
              <div className="bg-[#22EEBF] inline-block px-4 py-2 [clip-path:polygon(0_0,80%_0,100%_100%,0%_100%)] ml-4 sm:ml-6">
                <h1 className="font-medium text-lg sm:text-xl md:text-2xl text-[#121212]">
                  Our{" "}
                  <span className="text-[#FFFFFF] pr-10 sm:pr-16">
                    {service.heading}
                  </span>
                </h1>
              </div>
              <div className="px-4 sm:px-8 py-4 rounded-lg mt-6 sm:mt-8">
                {service.process.map((processItem, processIndex) => (
                  <div
                    key={processIndex}
                    className="flex flex-col sm:flex-row items-start gap-1 sm:gap-6 mb-2 sm:mb-3"
                  >
                    <span className="text-[#22EEBF] font-semibold text-sm sm:text-base min-w-full sm:min-w-[210px]">
                      {processItem.t1}
                    </span>
                    <span className="text-[#FFFFFF] font-normal">
                      : {processItem.p1}
                    </span>
                  </div>
                ))}
              </div>
  
              <button
                onClick={() => toggleDropdown(index)}
                className="absolute left-1/2 -translate-x-1/2 z-10 bottom-[-20px] bg-[#22EEBF] w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition"
              >
                <span className="text-white font-bold text-lg sm:text-xl">
                  {openDropdowns === index ? <FaArrowUp /> : <FaArrowDown />}
                </span>
              </button>
  
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 text-[#121212] bg-[#FFFFFF] p-4 py-6 w-full rounded-b-lg shadow-lg transition-all duration-300 ${
                  openDropdowns === index
                    ? "opacity-100 max-h-80 py-6 sm:py-8"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <p className="px-4 sm:px-7 text-justify">{service.dropdown}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
    {/* Mobile View: Only shown on small devices (below md) */}
<div className="block md:hidden my-12 px-4">
  {slidesData.map((service, index) => (
    <div key={index} className="mb-16">
      {/* Image and Titles */}
      <img src={service.img} alt="service" className="rounded-xl mb-6" />
      <h1 className="text-[#006D54] text-3xl font-bold">{service.num}</h1>
      <h2 className="text-[#121212] text-2xl font-semibold mt-2">
        {service.title1}
      </h2>
      <h2 className="text-[#22EEBF] text-2xl font-semibold mb-4">
        {service.title2}
      </h2>
      <p className="text-[#000000] text-justify text-base mb-6">
        {service.description}
      </p>

      {/* Process Box */}
      <div className="bg-gradient-to-br from-[#1D2C61CC] to-[#050F29] text-white rounded-t-2xl px-5 py-6">
        <div className="bg-[#22EEBF] inline-block px-4 py-2 [clip-path:polygon(0_0,80%_0,100%_100%,0%_100%)] mb-6">
          <h1 className="text-[#121212] font-semibold text-lg">
            Our <span className="text-white">{service.heading}</span>
          </h1>
        </div>

        {service.process.map((processItem, processIndex) => (
          <div
            key={processIndex}
            className="mb-3 flex flex-col"
          >
            <span className="text-[#22EEBF] font-semibold text-sm">
              {processItem.t1}
            </span>
            <span className="text-white text-sm">
              : {processItem.p1}
            </span>
          </div>
        ))}

        {/* Toggle Dropdown Arrow */}
        <button
          onClick={() => toggleDropdown(index)}
          className="mx-auto mt-6 bg-[#22EEBF] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition"
        >
          <span className="text-white text-xl">
            {openDropdowns === index ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </button>

        {/* Dropdown Section */}
        <div
          className={`mt-6 bg-white text-[#121212] text-sm px-4 py-6 rounded-b-lg transition-all duration-300 ${
            openDropdowns === index
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <p className="text-justify line-clamp-[14]">{service.dropdown}</p>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
  
  );
}

export default Services;
