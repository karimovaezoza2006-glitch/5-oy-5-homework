import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesData } from "../static/Api"; // 

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-4 " id="services">
      <div className="max-w-[1400px] mx-auto text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Unparalleled service</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you are looking for Newark Airport car rental, an insurance replacement vehicle or minivan to take on vacation — Car rental has it all.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#f5f5f5] rounded-2xl shadow-md p-8 flex items-start justify-between gap-6 hover:shadow-lg transition"
            data-aos={service.aos}
          >
            <div className="text-left">
              <h3 className="font-medium text-[32px] text-black w-75">{service.title}</h3>
              <p className="font-normal text-base leading-normal text-[#555] w-[70%] ">{service.text}</p>
            </div>
            <img
              src={service.icon}
              alt={service.title}
              className="block mx-auto my-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
