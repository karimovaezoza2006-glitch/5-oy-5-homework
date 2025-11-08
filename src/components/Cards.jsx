import React from "react";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import card5 from "../assets/img/card5.png";
import card6 from "../assets/img/card6.png";

import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";
import icon3 from "../assets/img/icon3.svg";
import icon4 from "../assets/img/icon4.svg";

const cars = [
  { name: "Ford Fiesta", type: "Economy Car", img: card1 },
  { name: "Nissan Versa", type: "Compact Car", img: card2 },
  { name: "Toyota Corolla", type: "Mid-size Car", img: card3 },
  { name: "Nissan Rogue", type: "Mid-size SUV", img: card4 },
  { name: "Chevy Traverse", type: "Full-size SUV", img: card5 },
  { name: "Nissan Altima", type: "Full-size Car", img: card6 },
];

const Cards = () => {
  return (
    <div className="py-12 px-6 max-w-[1400px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-3">
        Choose the car of your dreams
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We provide our customers with the most incredible driving emotions. <br />
        That is why there are only world-class cars in our fleet.
      </p>

      <div className="flex justify-center gap-3 mb-8">
        <button className="px-5 py-2 bg-green-600 text-white rounded-full">Compact</button>
        <button className="px-5 py-2 border border-gray-300 rounded-full hover:bg-green-100">
          Sports cars
        </button>
        <button className="px-5 py-2 border border-gray-300 rounded-full hover:bg-green-100">
          Vans
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] shadow-md rounded-2xl p-5 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{car.type}</p>

            <div className="flex justify-center">
              <img src={car.img} alt={car.name} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <img src={icon1} alt="seats" className="w-5 h-5" />
                <span>5 Seats</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon2} alt="auto" className="w-5 h-5" />
                <span>Automatic</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon3} alt="age" className="w-5 h-5" />
                <span>21+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon4} alt="fuel" className="w-5 h-5" />
                <span>1-lit / 2.5 km</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          View all cars
        </button>
      </div>
    </div>
  );
};

export default Cards;
