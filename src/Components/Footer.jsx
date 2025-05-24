import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGlobe } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="pt-2 sm:pt-10 px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32 min-h-[70vh] w-full max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-4 text-center sm:text-left">
        <div className="px-4 w-full">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#22EEBF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Company
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-lg sm:text-xl font-300 text-[#FFFFFF99]">
            <li>
              <a
                href="/home"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
          <h1 className="text-[#22EEBF] text-xl sm:text-2xl font-500 tracking-[0.40px] mt-8">
            Address
          </h1>
          <p className="mt-4 mb-4 sm:mb-6 text-[#FFFFFF99] text-lg sm:text-xl font-500 tracking-[0.40px]">
          Doc Zone Documents Clearing Services LLC - Deira
          Close to Naif Post Office - Al Nakhal Rd - behind Phoenix Hotel - Deira - Dubai
          </p>
        </div>

        <div className="px-4 w-full">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#22EEBF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Services
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-lg sm:text-xl font-300 text-[#FFFFFF99]">
            <li>
              <a href="/services#01" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Pro Services
              </a>
            </li>
            <li>
              <a href="/technology" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Document Attestation
              </a>
            </li>
            <li>
              <a href="/digital-marketing" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Labour & Emigration Service
              </a>
            </li>
            <li>
              <a href="/social-branding" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                License Renewal & Amendment
              </a>
            </li>
            <li>
              <a href="/experience-design" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Health & Insurance Services
              </a>
            </li>
            <li>
              <a href="/experience-design" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Family Visa Services
              </a>
            </li>
            <li>
              <a href="/experience-design" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Golden Visa Services
              </a>
            </li>
            <li>
              <a href="/experience-design" className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                VAT Registration Filing
              </a>
            </li>
          </ul>
        </div>

        <div className="px-4 w-full max-w-md mx-auto sm:mx-0 text-center sm:text-left">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#22EEBF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Connect Us
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-lg sm:text-xl font-300 text-[#000000]">
            <li className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <p className="whitespace-nowrap bg-[#22EEBF] rounded-full p-1">
                <FaGlobe />
              </p>
              <a
                href="https://www.doczonedubai.com"
                className="text-[#FFFFFF] hover:underline"
              >
                www.doczonedubai.com
              </a>
            </li>
            <li className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <p className="whitespace-nowrap bg-[#22EEBF] rounded-full p-1">
                <IoIosMail />
              </p>
              <a
                href="mailto:info@doczonedubai.com"
                className="text-[#FFFFFF] hover:underline"
              >
                info@doczonedubai.com
              </a>
            </li>
            <li className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <p className="whitespace-nowrap bg-[#22EEBF] rounded-full p-1">
                <FaPhoneVolume />
              </p>
              <a
                href="tel:+97143302526"
                className="text-[#FFFFFF] hover:underline"
              >
                +97143302526
              </a>
            </li>
            <li className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <p className="whitespace-nowrap bg-[#22EEBF] rounded-full p-1">
                <FaPhoneVolume />
              </p>
              <a
                href="https://wa.me/+971545840594"
                className="text-[#FFFFFF] hover:underline"
              >
                +971545840594
              </a>
            </li>
            <li className="flex justify-center sm:justify-start space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/16Q6BYPKj8/?mibextid=wwXIfr "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-8 h-8 text-[#FFFFFF]" />
              </a>
              <a
                href="https://www.instagram.com/doczone.dubai?igsh=NHR6Z2V0bXczanBs "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-8 h-8 text-[#FFFFFF]" />
              </a>
              <a
                href="https://www.linkedin.com/company/99073852/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-8 h-8 text-[#FFFFFF]" />
              </a>
              <a
                href="https://www.linkedin.com/company/99073852/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube className="w-8 h-8 text-[#FFFFFF]" />
              </a>
            </li>
            <Link
              to="/contact"
              className="group relative transition-all duration-300 text-[#000000] border-[#22EEBF] hover:bg-[#ffffff] text-lg px-4 py-2 rounded-full bg-[#22EEBF] font-medium flex items-center justify-between w-[60%] mx-auto sm:mx-0 mt-10"
            >
              Connect Us
              <span className="w-9 h-9 flex items-center justify-center bg-[#FFFFFF] group-hover:bg-[#22EEBF]  rounded-full">
                <GoArrowUpRight className="text-black text-lg w-6 h-6" />
              </span>
            </Link>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#3A3A3A] mt-5 sm:mt-6 pt-4 sm:pt-6 mb-4 text-[#FFFFFF] text-center text-sm sm:text-lg font-200 leading-normal">
        <div className="flex flex-wrap justify-center items-center gap-2 px-4">
          <p>© 2025 &nbsp; DOCZONE &nbsp; All Rights Reserved &nbsp;|&nbsp;</p>
          <p className="flex items-center gap-2 flex-wrap justify-center">
            <a
              href="/privacy-policy"
              className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-use"
              className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
