import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-40">
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
              Read More
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

      <div className="sm:max-w-5xl pt-8 my-12 rounded-xl shadow-lg mx-4 sm:mx-8 md:mx-auto">
        <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
          <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-primary font-extrabold">
            Our Pharmaceutical Partners
          </h1>
        </div>
        <div className="sm:py-6 px-8 flex flex-wrap justify-center items-center">
          {["amarox", "actavis", "triman", "eisai", "agroveta", "nova"].map(
            (customer) => (
              <div
                key={customer}
                className="w-1/3 sm:w-1/6 flex justify-center pb-8 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl"
              >
                <Image
                  className="focus:outline-none w-32 sm:w-32"
                  src={`/customer/${customer}.png`}
                  width={300}
                  height={300}
                  alt={customer}
                  role="img"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
