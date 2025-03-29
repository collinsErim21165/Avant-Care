import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagramSquare, FaTimes } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../images/avant_care.png";
import { TfiMenu } from "react-icons/tfi";
import "../App.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownTimerRef = React.useRef(null);
  const location = useLocation();

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Us", href: "/About-us" },
    {
      id: 3,
      name: "Our Services",
      href: "/Services",
      dropdown: [
        { id: 31, name: "X-Ray", href: "/X-ray" },
        { id: 32, name: "Urgent Care", href: "/Urgent-Care" },
        { id: 33, name: "Occupational Medicine", href: "/Occupational-medcine" },
        { id: 34, name: "Weight Loss", href: "/Weight-loss" },
        { id: 35, name: "Labs", href: "/Labs" },
        { id: 36, name: "Physicals", href: "/Physical" },
      ],
    },
    { id: 4, name: "Make a Payment", href: "/Payment" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setNav(!nav);
    if (!nav) {
      window.scrollTo(0, 0); // Scroll to the top when the menu opens
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownVisible(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 1000); // Delay of 3 seconds
  };

  return (
    <div className="relative z-50">
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#37489E] py-2 px-4 transition-all duration-300 ${
          scrolled || nav ? "opacity-0 h-0" : "opacity-100  md:h-[50px] pb-9 md:pb-3 h-[120px]  flex"
        }`}
      >
        <div className="md:flex-row flex gap-1 md:gap-4 flex-col justify-between items-center w-full">
          <div className="flex md:gap-6 gap-4">
            <div className="flex items-center">
              <p className="text-white">Phone:</p>
              <p className="text-white ml-1">08162399362</p>
            </div>
            <p className="text-white">info@avantcare.net</p>
          </div>
          <div className="flex flex-row items-center justify-center md:gap-5 gap-4">
            <FaFacebookSquare size={30} className="text-white cursor-pointer hover:text-[rgb(255,186,90)] hover:bg-white hover:rounded-md" />
            <FaLinkedin size={30} className="text-white cursor-pointer hover:text-[rgb(255,186,90)] hover:bg-white hover:rounded-md" />
            <FaInstagramSquare size={30} className="text-white cursor-pointer hover:text-[rgb(255,186,90)] hover:bg-white hover:rounded-md" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`fixed w-full px-5 py-2 flex items-center justify-between shadow-md overflow-visible z-50  transition-transform duration-300 ${
          scrolled || nav ? "bg-white top-0" : "bg-[rgb(247,247,247)] md:top-[50px] top-[90px] "
        }`}
      >
        <img className="h-[110px] w-36 rounded-sm" src={Logo} alt="Logo" />
        <div>
          <ul className="flex flex-row items-center justify-center flex-wrap gap-3">
            {links.map((link) => (
              <li
                key={link.id}
                className="relative group"
                onMouseEnter={link.dropdown ? handleDropdownEnter : undefined}
                onMouseLeave={link.dropdown ? handleDropdownLeave : undefined}
              >
                <Link
                  className={`hover-link hidden md:flex flex-row items-center gap-2 ${
                    location.pathname === link.href ? "active-link" : ""
                  }`}
                  to={link.href}
                >
                  {link.name} {link.dropdown && <IoIosArrowDown />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && dropdownVisible && (
                  <ul className="absolute bg-[#37489E] grid grid-cols-1 gap-1 shadow-lg top-full left-0 p-3 w-[200px] rounded-md mt-2">
                    {link.dropdown.map((subLink) => (
                      <li key={subLink.id} className="py-2 px-4 w-44 bg-white text-[rgb(146,146,146)] hover:text-white hover:bg-[rgb(255,186,90)] rounded-md hover:shadow-xl">
                        <Link to={subLink.href} className=" flex text-sm  font-bold justify-start text-inherit items-center h-full w-full">
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button className="hidden md:flex w-44 h-12 text-white bg-[#37489E] justify-center items-center rounded-md hover:bg-[rgb(255,186,90)] hover:text-white">
                <Link to="/Contact-Us" className="h-full w-full flex justify-center items-center">
                  Contact Us
                </Link>
              </button>
            </li>
            <div className="md:hidden flex z-10" onClick={handleMenuToggle}>
              {!nav ? <TfiMenu className="text-black" size={40} /> : <FaTimes className="text-black" size={40} />}
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "flex" : "hidden"
        } z-50 fixed top-[120px] left-0 w-full h-full pb-40 bg-black flex-col justify-start items-center pt-8 overflow-y-scroll`}
      >
        {links.map((link) => (
          <li key={link.id} className="w-full text-center">
            <Link
              to={link.href}
              onClick={() => setNav(false)}
              className={`block text-white py-2 text-xl ${
                location.pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
            {link.dropdown && (
              <ul className="flex flex-col items-center mt-2">
                {link.dropdown.map((subLink) => (
                  <li key={subLink.id} className="w-full text-center">
                    <Link
                      to={subLink.href}
                      onClick={() => setNav(false)}
                      className="block text-gray-300 text-sm py-2 border-b border-gray-700"
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="w-full text-center">
          <button
            className="w-3/4 mt-6 bg-white text-black rounded-md py-4"
            onClick={() => setNav(false)}
          >
            <Link to="/Contact-Us" className="h-full w-full flex justify-center items-center">
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;