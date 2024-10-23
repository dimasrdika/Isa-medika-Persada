import React from "react";
import Image from "next/image";

const BusinessOperationsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          NATIONAL BUSINESS OPERATION
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our comprehensive network of operations across Indonesia, managed
          through strategic district locations and local stations.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full aspect-[2/1] mb-8">
        <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/business-operation.png" // Replace with your actual image path
            alt="Indonesia Business Operations Map"
            layout="fill"
            objectFit="contain"
            className="p-4"
            priority
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-red-500"></span>
          <span className="text-gray-700">District Manager</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-black"></span>
          <span className="text-gray-700">Station</span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Coverage</h3>
          <p className="text-gray-600">
            Operating across multiple regions in Indonesia
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Management</h3>
          <p className="text-gray-600">
            Strategically placed district managers
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Network</h3>
          <p className="text-gray-600">
            Extensive station network for local operations
          </p>
        </div>
      </div>
      <div className="sm:max-w-5xl pt-8 my-12 rounded-xl shadow-lg mx-4 sm:mx-8 md:mx-auto">
        <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
          <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-primary font-extrabold">
            Our Medical Device Customer
          </h1>
        </div>
        <div className="sm:py-6 px-8 flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            {[
              "tugu",
              "cianjur",
              "harjolukito",
              "indah",
              "mitra",
              "rscm",
              "amanah",
              "ukrida",
              "leuwiliang",
            ].map((customer) => (
              <div
                key={customer}
                className="flex justify-center items-center inset-0 transform hover:scale-75 transition duration-300 contrast-100 hover:contrast-100 "
              >
                <Image
                  className="focus:outline-none w-32"
                  src={`/customer/${customer}.png`}
                  width={400}
                  height={400}
                  alt={customer}
                  role="img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOperationsSection;
