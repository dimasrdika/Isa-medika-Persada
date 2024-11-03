import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-5xl text-primary font-bold mb-2">
          About Us
        </h2>
        <p className="text-center text-xl text-gray-500 mb-8">
          Welcome to PT Isa Medika Persada, your trusted partner
          <br /> in the pharmaceutical and medical device industry.
        </p>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="flex justify-center">
            <Image
              src="/aboutus.svg"
              width={400}
              height={400}
              layout="cover"
              alt="Team Collaboration"
              className="rounded-xl shadow-lg object-cover h-full"
            />
          </div>

          <div className="md:pl-8">
            <p className="text-gray-500 mb-4">
              PT Isa Medika Persada (Isa-Med) is a sister company of PT.
              Ingredia Sukses Abadi, we are a distribution company for
              Pharmaceutical materials and medical devices, established in
              Jakarta, Indonesia in 2017.
            </p>
            <p className="text-gray-500 mb-4">
              With adequate experiences and a professional marketing team, this
              company has a vision to become a reliable partner in the
              Pharmaceutical and Medical Industry. We always dream to be the
              best distribution service and manufacturer of pharmaceutical
              materials and medical devices.
            </p>
            <p className="text-gray-500 mb-4">
              Isa-Med has a desire to make that dream come true. Here in
              Isa-Med, we believe that the best distribution and manufacturing
              start with affordable and innovative products that can meet the
              needs of both public and private healthcare providers in excellent
              health service.
            </p>
            <p className="text-gray-500 mb-4">
              As a reliable and trustworthy company, our team is driven to work
              under a good culture. At all times, we maintain our excellence to
              become an advanced principal and distributor to provide Indonesia
              with affordable and best quality products and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
