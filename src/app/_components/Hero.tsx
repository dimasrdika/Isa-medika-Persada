import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-40">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <div className="text-sm font-medium text-gray-600 mb-4">
            Quality Pharmaceutical Solutions
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Elevating Healthcare Standards with PT Isa Medika Persada
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            As a trusted distributor of pharmaceutical materials and medical
            devices, we are dedicated to enhancing the quality of healthcare in
            Indonesia through our innovative solutions and reliable services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300">
              Discover Our Services
            </button>
            <button className="text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-300 hover:bg-primary hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        {/* Gambar Full Width */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 w-full">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden w-full">
              <Image
                src="/hero-1.jpg"
                alt="Pharmaceutical Products"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden w-full">
              <Image
                src="/hero-2.jpg"
                alt="Healthcare Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
