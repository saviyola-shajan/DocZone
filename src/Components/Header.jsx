import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/vectors/logo.png";

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const getActiveNav = () => {
    const path = location.pathname.replace("/home", "");
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative mx-auto max-w-[1580px] top-0 left-0 w-full flex justify-between items-center py-4 px-24 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/" ? "bg-customBg shadow-lg" : "bg-transparent"
      }`}
    >
      <img src={logo} alt="logo" className="h-12" />
      <nav className="ml-80">
        <ul className="flex space-x-16 text-[#FFFFFF] bg-[linear-gradient(180deg,rgba(65,190,161,0.18)_0%,rgba(90,137,253,0.09)_0%)] first-line: text-lg font-light px-8 py-4 rounded-full">
          {["Home", "About", "Services", "Contact"].map((navItem) => (
            <li key={navItem}>
              <Link
                to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
                className={`group relative transition-colors duration-300 cursor-pointer ${
                  getActiveNav() === navItem ? "text-[#41BEA1]" : "text-white"
                } hover:text-[#41BEA1] focus:text-[#41BEA1]`}
              >
                {navItem}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#41BEA1] transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to=""
              className="group relative transition-all duration-300 px-4 py-2 rounded-full bg-[#22EEBF] text-[#000000] font-medium hover:bg-white hover:text-[#000000]"
            >
              Connect Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
