import React, { useEffect } from "react";
import showcase from "../assets/img/showcase.png";
import { AiOutlineSearch } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Showcase = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto mt-8 rounded-2xl overflow-hidden shadow-lg">
      {/* Background image */}
      <div className="relative">
        <img
          src={showcase}
          alt="Showcase car"
          className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl"
          data-aos="zoom-in"
        />

        {/* Navigation buttons */}
        <div
          className="absolute bottom-4 right-6 flex items-center gap-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100">
            ‹
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100">
            ›
          </button>
        </div>
      </div>

      {/* Search input — rasm tagida joylashgan */}
      <div
        className="bg-white shadow-lg rounded-full flex items-center px-5 py-3 w-[85%] sm:w-[450px] mx-auto -mt-6 relative z-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <input
          type="text"
          placeholder="Find the car of your dreams"
          className="flex-1 outline-none text-gray-600 text-sm sm:text-base"
        />
        <button className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700">
          <AiOutlineSearch size={18} />
        </button>
      </div>
    </section>
  );
};

export default Showcase;
