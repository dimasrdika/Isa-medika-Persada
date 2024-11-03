"use client";
import React from "react";
import Slider from "react-slick";
import Header from "../_components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { title: "Alu foil Poe", img: "./products/alu-foil-poe.png" },
  { title: "Amber Glass", img: "/products/amber-glass.jpg" },
  {
    title: "Pharmaceutical Bottle",
    img: "/products/pharmaceutical-bottle-1.png",
  },
  {
    title: "Pharmaceutical Bottle",
    img: "/products/pharmaceutical-bottle-2.png",
  },
];

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />
      <div className="pt-24">
        <h1 className="text-center text-4xl font-bold mb-8 text-primary">
          Our Products
        </h1>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex justify-center w-full h-64">
                  {" "}
                  {/* Set a fixed height */}
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-full w-auto object-contain rounded-lg shadow-md mb-4" // Object-contain to maintain aspect ratio
                  />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-center">
                  {product.title}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Product;
