"use client";
import React, { useState, useEffect } from "react";
import Header from "../_components/Header";
import ProductTag from "./producttag";
import ProductCard from "./card";

const Product: React.FC = () => {
  const initialProductCount = 8;
  const [tag, setTag] = useState("");
  const [visibleProductCount, setVisibleProductCount] =
    useState(initialProductCount);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false); // State baru untuk loading tambahan

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const products = [
    {
      name: "Earthen Bottle",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
      tags: ["Bottles", "Travel", "New"],
    },
    {
      name: "Nomad Tumbler",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Focus Paper Refill",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
    {
      name: "Machined Mechanical Pencil",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      tags: ["Travel", "New"],
    },
  ];

  const filteredProducts =
    tag === ""
      ? products.slice(0, visibleProductCount)
      : products
          .filter((item) => item.tags.includes(tag))
          .slice(0, visibleProductCount);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
    setVisibleProductCount(initialProductCount);
  };

  const handleSeeMoreClick = async () => {
    setLoadingMore(true); // Aktifkan loading saat melihat lebih banyak
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi loading
    setVisibleProductCount((prevCount) => prevCount + initialProductCount);
    setLoadingMore(false); // Matikan loading setelah selesai
  };

  return (
    <div>
      <Header />
      <div className="pt-24"></div>
      <div className="mx-auto px-4 md:px-12 py-4">
        <div className="animate__animated animate__fadeInDown">
          <h2 className="text-primary text-center md:text-4xl mb-4 text-2xl font-bold">
            Product Isa Medika Persada
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-2 my-2">
            {["All", "Pharmaceutical Raw Materials", "Medical Devices"].map(
              (tagOption) => (
                <ProductTag
                  key={tagOption}
                  name={tagOption}
                  onClick={handleTagChange}
                  isSelected={tag === tagOption}
                  responsiveClass="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2"
                />
              )
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mb-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} menu={[product]} />
            ))}
          </div>

          {loadingMore ? (
            <div className="flex items-center justify-center my-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-primary border-t-primary"></div>
            </div>
          ) : (
            filteredProducts.length < products.length && (
              <div className="flex justify-center mt-4 mb-5">
                <button
                  className="p-3 bg-primary hover:bg-green-800 transition-all duration-300 ease-in-out text-secondary rounded-full"
                  onClick={handleSeeMoreClick}
                >
                  See More
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
