"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Peel Off Lidding Alu Foil For POE",
    img: "./products/alu-foil-poe.png",
  },
  { title: "Amber Glass", img: "/products/amber-glass.jpg" },
  {
    title: "Pharmaceutical Bottle",
    img: "/products/pharmaceutical-bottle-1.png",
  },
  { title: "AL/PE Strip Foil", img: "/products/al-pe.png" },
  { title: "Blister Alu Foil", img: "/products/blister-alu-foil.png" },
  {
    title: "Dropper Bottle",
    img: ["/products/dropper-bottle.png", "/products/dropper-bottle-1.png"],
  },
  { title: "Vials", img: "/products/vials.png" },
  { title: "Ampoules Bottle", img: "/products/ampoules.png" },
  { title: "Rubber Stopper", img: "/products/rubber-stoppers.jpg" },
  { title: "Pet Bottle", img: "/products/pet-bottle.png" },
  { title: "Cold Forming Foil", img: "/products/cold-forming-foil.png" },
  { title: "Child Resistant Foil", img: "/products/child-resistant-foil.png" },
  { title: "Lamination Film", img: "/products/lamination-film.png" },
  { title: "Rigid PVC, PVC/PVDC & PVC/PE", img: "/products/rigid-pvc.png" },
  { title: "Effervescent Tube", img: "/products/effervescent-tube.jpg" },
  { title: "Dropping Pills Tube", img: "/products/dropping-pills.jpg" },
  { title: "Serum Bottle", img: "/products/serum-bottle.png" },
  { title: "Cubtainer", img: "/products/cubtainer.png" },
  { title: "Reagent Bottle", img: "/products/reagent-bottle.png" },
];

const Material = () => {
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
      <div className="pt-6">
        <h1 className="text-4xl mb-4 font-bold text-primary text-center">
          Pharmaceutical Raw Materials
        </h1>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex justify-center w-full h-64">
                  {Array.isArray(product.img) ? (
                    product.img.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${product.title} ${idx + 1}`}
                        className="h-full w-auto object-contain rounded-lg shadow-md mb-4"
                      />
                    ))
                  ) : (
                    <img
                      src={product.img}
                      alt={product.title}
                      className="h-full w-auto object-contain rounded-lg shadow-md mb-4"
                    />
                  )}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-primary text-center">
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

export default Material;
