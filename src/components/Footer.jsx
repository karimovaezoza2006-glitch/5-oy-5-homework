import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import instagram from "../assets/img/footer1.svg";
import twitter from "../assets/img/footer2.svg";
import facebook from "../assets/img/footer3.svg";
import whatsapp from "../assets/img/footer4.svg";
import arrowUp from "../assets/img/footer5.svg";

const FooterBottom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-12 lg:px-20"
      data-aos="fade-up"
    >
      <div className="container max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        {/* Left side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
          <p className="text-gray-800 text-sm">© 2022 Car rental</p>
          <a
            href="#"
            className="text-gray-900 text-sm font-medium hover:text-green-600 transition-all duration-300"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
          <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
          <p className="text-gray-700 text-sm">+1 855 420 0000</p>
          <p className="text-gray-700 text-sm">carrental@gmail.com</p>
        </div>

        {/* Hours of operation */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
          <h4 className="font-semibold text-gray-900 mb-1">Hours of operation</h4>
          <p className="text-gray-700 text-sm">8:00 - 21:00 Mon-Sat</p>
          <p className="text-gray-700 text-sm">9:00 - 15:00 Sundays</p>
        </div>

        {/* Social network */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
          <h4 className="font-semibold text-gray-900">Social network</h4>
          <div className="flex items-center gap-3">
            <a href="#">
              <img
                src={instagram}  className=" bg-black rounded-full p-1 hover:bg-green-600 transition-all duration-300"
              />
            </a>
            <a href="#">
              <img
                src={twitter} className=" bg-black rounded-full p-1 hover:bg-green-600 transition-all duration-300"
              />
            </a>
            <a href="#">
              <img
                src={facebook}  className=" bg-black rounded-full p-1 hover:bg-green-600 transition-all duration-300"
              />
            </a>
            <a href="#">
              <img src={whatsapp} className=" bg-black rounded-full p-1 hover:bg-green-600 transition-all duration-300"
              />
            </a>
          </div>
        </div>

  
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-full p-4 flex items-center justify-center"
          >
            <img src={arrowUp} alt="Scroll to top"  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
