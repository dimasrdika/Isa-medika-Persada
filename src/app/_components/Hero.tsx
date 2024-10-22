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
          <button className="text-gray-700 px-4 py-2 rounded-full font-medium border border-gray-300 hover:bg-primary hover:text-white transition duration-300">
            Contact Us
          </button>
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
