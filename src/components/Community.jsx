import { useEffect } from "react";
import avatar from "../assets/img/Ava.svg";
import avatar1 from "../assets/img/Ava (1).svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CommunitySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 flex justify-center">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] rounded-2xl overflow-hidden shadow-sm">
        {/* Left side */}
        <div
          className="bg-white flex flex-col justify-center p-12 gap-4"
          data-aos="fade-right"
        >
          <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s"
              alt="Google"
              className="w-6 h-6"
            />
            From Google
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Hear what the community is saying
          </h2>
          <p className="text-gray-500 text-base">
            More interesting reviews on Instagram
          </p>
          <button className="border border-pink-400 text-pink-500 hover:bg-pink-500 hover:text-white transition font-medium px-8 py-2.5 rounded-full w-fit mt-4">
            Instagram
          </button>
        </div>

        {/* Right side (green section) */}
        <div
          className="bg-[#2b7a63] p-10 flex flex-col justify-center gap-8 relative"
          data-aos="fade-left"
        >
          <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 flex-1 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Savannah Nguyen</h3>
                    <p className="text-gray-500 text-sm">savannahnguyen@gmail.com</p>
                  </div>
                  <img src={avatar}
                    alt="Google"
                    
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu at morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien.
                </p>
              </div>
              <p className="text-sm text-gray-700 font-medium mt-4">
                Star rating: <span className="text-green-600">★★★★★</span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 flex-1 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Ronald Richards</h3>
                    <p className="text-gray-500 text-sm">ronaldrichards@gmail.com</p>
                  </div>
                  <img
                    src={avatar1}
                    alt="Google"
        
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Placerat pulvinar in amet sem id dignissim est pellentesque mi quisque. Porttitor blandit auctor odio a bibendum molestie.
                </p>
              </div>
              <p className="text-sm text-gray-700 font-medium mt-4">
                Star rating: <span className="text-green-600">★★★★★</span>
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
              <span className="text-[#2b7a63]">‹</span>
            </button>
            <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
              <span className="text-[#2b7a63]">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
