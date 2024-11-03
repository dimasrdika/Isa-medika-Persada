import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-40" id="home">
      <div className="flex flex-col items-center">
        <div className="text-sm font-medium text-gray-600 mb-2 text-center">
          Quality Pharmaceutical Solutions
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          Elevating Healthcare Standards with PT Isa Medika Persada
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We enhance healthcare quality in Indonesia through innovative
          pharmaceutical solutions and reliable services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition duration-300">
            <a href="#about"> Read More</a>
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition duration-300">
            <a href="#location">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
