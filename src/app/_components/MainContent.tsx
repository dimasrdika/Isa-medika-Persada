import React from "react";
import Image from "next/image";

const MainContentSection = () => {
  return (
    <>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold mb-2">About Us</h2>
          <p className="text-center text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, dolore.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/hero-2.jpg" // Ganti dengan URL gambarmu
                width={700} // Ubah ukuran jika perlu
                height={700} // Ubah ukuran jika perlu
                layout="intrinsic" // Mengubah layout agar lebih responsif
                alt="Team Collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Right: Text */}
            <div className="md:pl-6">
              {" "}
              {/* Menambahkan padding kiri untuk lebih mendekatkan */}
              <p className="text-gray-500 mb-4">
                As a Web Development Services, we are committed to building
                custom web solutions that drive business success.
              </p>
              <p className="text-gray-500 mb-4">
                At our web development agency, we specialize in crafting bespoke
                online solutions tailored to elevate businesses toward their
                digital objectives. Committed to continuous evolution, we remain
                abreast of cutting-edge web technologies and trends, ensuring a
                constant delivery of unparalleled excellence.
              </p>
              <p className="text-gray-500 mb-4">
                Our ethos is rooted in equipping clients with the essential
                tools for triumph in the digital realm. We firmly believe in
                furnishing every business with a digital presence that
                authentically embodies their brand essence and effectively
                resonates with their target demographic.
              </p>
              {/* Button */}
              <button className="mt-4 px-8 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContentSection;
