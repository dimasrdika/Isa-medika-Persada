"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Endotracheal Tube",
    img: "./products/medical-device/endotracheal.jpg",
  },
  {
    title: "Foley Ballon Catheter",
    img: "/products/medical-device/foley-ballon.jpg",
  },
  {
    title: "Infant Feeding Tube",
    img: "/products/medical-device/infant-feeding.jpg",
  },
  { title: "Ryles Tube", img: "/products/medical-device/ryles-tube.jpg" },
  {
    title: "Stomach Tube",
    img: "/products/medical-device/stomach-tube.jpg",
  },
  {
    title: "Yankaur Saction",
    img: "/products/medical-device/yankur-saction.jpg",
  },
  {
    title: "Nasal Oxygen Canula",
    img: "/products/medical-device/nasal-oxygen-canula.jpg",
  },
  {
    title: "Suction Catherer",
    img: "/products/medical-device/suction-catherer.jpg",
  },
  {
    title: "Latex Surgical Gloves",
    img: "/products/medical-device/latex-surgical-gloves.jpg",
  },
  {
    title: "Latex Examination Gloves",
    img: "/products/medical-device/latex-examination-gloves.jpg",
  },
  {
    title: "Kasa Hidrophile",
    img: "/products/medical-device/kasa-hidrophile.png",
  },
  {
    title: "Kasa Hidrophile X-Ray",
    img: "/products/medical-device/kasa-hidrophile-xray.png",
  },
];

const Device = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="my-20 pt-16">
        <h1 className="text-4xl mb-4 font-bold text-primary text-center">
          Medical Device
        </h1>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="flex justify-center w-full h-64">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-full w-auto object-contain rounded-lg shadow-md mb-4"
                  />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-primary text-center">
                  {product.title}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
        <div className="my-16 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Key Points
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-4 mt-4">
            <li>
              <span className="font-semibold text-primary text-lg">
                NSAIDS:
              </span>{" "}
              <span className="text-gray-700">
                Meloxicam, Lomoxicam, Piroxicam, Pregabalin
              </span>
            </li>
            <li>
              <span className="font-semibold text-primary text-lg">
                RESPIRATORY:
              </span>{" "}
              <span className="text-gray-700">
                Bromhexin HCL, Ambroxol HCL, Salmeterol Xinafoate
              </span>
            </li>
            <li>
              <span className="font-semibold text-primary text-lg">
                ANTI-ALLERGIC:
              </span>{" "}
              <span className="text-gray-700">Fexofenadine, Cetrizine</span>
            </li>
            <li>
              <span className="font-semibold text-primary text-lg">
                ANTI-DIABETIC:
              </span>{" "}
              <span className="text-gray-700">
                Glimepridine, Canagliflozin, Linagliptin
              </span>
            </li>
            <li>
              <span className="font-semibold text-primary text-lg">
                ANTI-ULCER:
              </span>{" "}
              <span className="text-gray-700">Sucralfate</span>
            </li>
            <li>
              <span className="font-semibold text-primary text-lg">
                NUTRITIONAL SUPPLEMENT:
              </span>{" "}
              <span className="text-gray-700">
                Vitamin B12, C, D, Calcium carbonate
              </span>
            </li>
            <li>
              <span className="font-semibold text-primary text-lg">
                Pharmaceutical & Cosmetic Packaging:
              </span>{" "}
              <span className="text-gray-700">
                Pharmaceutical Bottles, Amber Glass, Oral Droppers, Ampoules &
                Vials, PVC and Foil Packaging
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Device;
