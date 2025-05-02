import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/vectors/logo.png";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:flex relative mx-auto max-w-[1580px] top-0 left-0 w-full justify-between items-center py-4 px-24 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== "/" ? "bg-customBg shadow-lg" : "bg-transparent"
        }`}
      >
        <a href="/">
          <img src={logo} alt="logo" className="h-12" />
        </a>
        <nav className="ml-80">
          <ul className="flex space-x-16 text-white text-lg font-light px-8 py-4 rounded-full bg-[linear-gradient(180deg,rgba(65,190,161,0.18)_0%,rgba(90,137,253,0.09)_0%)]">
            {navLinks.map((navItem) => (
              <li key={navItem}>
                <Link
                  to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
                  className={`group relative transition-colors duration-300 cursor-pointer ${
                    getActiveNav() === navItem ? "text-[#41BEA1]" : "text-white"
                  } hover:text-[#41BEA1]`}
                >
                  {navItem}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#41BEA1] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to=""
                className="group relative transition-all duration-300 px-4 py-2 rounded-full bg-[#22EEBF] text-black font-medium hover:bg-white"
              >
                Connect Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header
        className={`md:hidden fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== "/" ? "bg-customBg shadow-lg" : "bg-transparent"
        }`}
      >
        <a href="/">
          <img src={logo} alt="logo" className="h-10" />
        </a>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <RxCross2 className="text-white h-6 w-6" /> : <GiHamburgerMenu className="text-white h-6 w-6" />}
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-customBg text-white px-6 py-4 shadow-md transition-all duration-300 rounded-b-lg">
            <ul className="space-y-4">
              {navLinks.map((navItem) => (
                <li key={navItem}>
                  <Link
                    to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block transition-colors duration-300 ${
                      getActiveNav() === navItem ? "text-[#41BEA1]" : "text-white"
                    } hover:text-[#41BEA1]`}
                  >
                    {navItem}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to=""
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 mt-2 text-center rounded-full bg-[#22EEBF] text-black font-medium hover:bg-white"
                >
                  Connect Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
