import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-40">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <div className="text-sm font-medium text-gray-600 mb-4">
            Employee training and consultant
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Empowering Excellence through Training and Consulting
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Our expert training and consulting solutions pave the way for your
            organization's success by driving continuous improvement, innovation
            and exceptional performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-[#557C56] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
              Start The Transformation
            </button>
            <button className="text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-100 transition duration-300">
              Contact us
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 p-4 rounded-lg items-center ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-gray-700">Individuals</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-gray-700">Scaling Companies</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-700">Enterprise</span>
            </div>
          </div>
        </div>
        {/* Gambar Full Width */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 w-full">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden w-full">
              <Image
                src="/hero-1.jpg"
                alt="Woman presenting"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden w-full">
              <Image
                src="/hero-2.jpg"
                alt="Team meeting"
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
