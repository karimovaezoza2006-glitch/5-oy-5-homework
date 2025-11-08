import React, { useEffect } from "react";
import { Logos } from "../static/Api";
import AOS from "aos";
import "aos/dist/aos.css";

const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <section className="w-full bg-white py-12">
      {/* container — max-w-[1400px] bilan o‘rnatilgan */}
      <div className="container mx-auto px-6 max-w-[1400px]">
        <h3 className="text-lg md:text-xl font-medium mb-8 text-gray-700">
          More than 50 brands of cars
        </h3>

        <div className="flex items-center justify-center">
          <div className="w-full">
            <div
              className="flex flex-wrap items-center justify-between gap-6 md:gap-10"
              role="list"
            >
              {Logos.map((logo, idx) => (
                <div
                  key={logo.id}
                  className="flex-1 min-w-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 lg:h-12 object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
