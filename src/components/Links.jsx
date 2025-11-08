import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import carLogo from "../assets/img/Logo.png"; // "Car rental" logotipi uchun

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-4 md:px-12 lg:px-20">
      <div
        className="container max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-10"
        data-aos="fade-up"
      >
        {/* Logo & Description */}
        <div className="flex-1 space-y-4">
          <img src={carLogo} alt="Car rental logo" className="w-32" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Car rental offers a wide range of cars available for rent in Newark
            EWR Airport NJ. We pride ourselves in our customer service, and
            hassle-free renting experience.
          </p>
        </div>

        {/* Main Links */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-3">Main</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                My Bookings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                Reservation
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                Compact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                Sports cars
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                Vans
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Locations */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-3">Our Locations</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>2118 Thornridge Cir. Syracuse</li>
            <li>4140 Parker Rd. Allentown</li>
            <li>4517 Washington Ave.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
