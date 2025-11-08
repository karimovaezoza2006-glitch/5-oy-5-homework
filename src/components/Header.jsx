import React, { useEffect } from "react";
import logo from "../assets/img/logo.png";
import { FiLogIn, FiChevronDown, FiPhone, FiGlobe } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header
      className="w-full fixed inset-x-0 top-0 z-50 bg-white shadow-sm py-3 px-5 sm:px-10 flex items-center justify-between transition-all duration-300 max-w-[1400px] mx-auto"
      data-aos="fade-down"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Car rental"
          className="object-contain w-28 sm:w-32"
        />
      </div>

      {/* Navigation menu */}
      <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm">
        <a href="#" className="hover:text-green-600 font-medium">
          Categories
        </a>

        {/* About Us dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-green-600 font-medium">
            About Us <FiChevronDown size={14} />
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-44">
            <ul className="text-sm text-gray-600">
              <li className="px-4 py-2 hover:bg-green-50 cursor-pointer">
                Our Mission
              </li>
              <li className="px-4 py-2 hover:bg-green-50 cursor-pointer">
                Team
              </li>
              <li className="px-4 py-2 hover:bg-green-50 cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
        </div>

        {/* Help Center dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-green-600 font-medium">
            Help Center <FiChevronDown size={14} />
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48">
            <ul className="text-sm text-gray-600">
              <li className="px-4 py-2 hover:bg-green-50 cursor-pointer">
                FAQ
              </li>
              <li className="px-4 py-2 hover:bg-green-50 cursor-pointer">
                Support
              </li>
              <li className="px-4 py-2 hover:bg-green-50 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Phone */}
        <div className="hidden sm:flex items-center text-gray-800 font-medium">
          <FiPhone className="mr-2 text-green-600" />
          +1 855 420 0000
        </div>

        {/* Round icon */}
        <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <FiGlobe />
        </button>

        {/* Login button */}
        <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition">
          Login <FiLogIn />
        </button>
      </div>
    </header>
  );
};

export default Header;
