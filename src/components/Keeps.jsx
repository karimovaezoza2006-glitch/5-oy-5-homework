import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import keep1 from "../assets/img/keep1.png"; 
import icon1 from "../assets/img/keep2.png"; 
import icon2 from "../assets/img/keep3.svg"; 
import icon3 from "../assets/img/keep4.svg"; 

const CarSafetySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="container max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-md p-8 md:px-16 lg:px-20">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-900">
            Car rental keeps you safe
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The safety of our employees and renters is our number one priority.
            In addition to being confident your vehicle is cleaned and sanitized
            every time you rent, you can also feel confident that we will take
            every opportunity to enhance the health and safety measures
            currently practiced in our operations.
          </p>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <div
              className="flex flex-col items-start bg-gray-50 rounded-lg p-4 shadow-sm"
              data-aos="zoom-in"
            >
              <img src={icon1} alt="icon" className="w-8 h-8 mb-2" />
              <p className="font-semibold text-sm text-gray-800">
                Every car is thoroughly sanitized and cleaned
              </p>
            </div>

            <div
              className="flex flex-col items-start bg-gray-50 rounded-lg p-4 shadow-sm"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img src={icon2} alt="icon" className="w-8 h-8 mb-2" />
              <p className="font-semibold text-sm text-gray-800">
                All of our employees wear masks
              </p>
            </div>

            <div
              className="flex flex-col items-start bg-gray-50 rounded-lg p-4 shadow-sm"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img src={icon3} alt="icon" className="w-8 h-8 mb-2" />
              <p className="font-semibold text-sm text-gray-800">
                We stay up to date with all protocol from the CDC
              </p>
            </div>
          </div>
        </div>

      
        <div
          className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
          data-aos="fade-left"
        >
          <div className="relative">
            <div className="absolute -z-10 bg-green-500 rounded-full w-64 h-64 sm:w-72 sm:h-72 top-4 left-4"></div>
            <img
              src={keep1}
              alt="safety"
              className="w-64 sm:w-72 lg:w-80 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSafetySection;
