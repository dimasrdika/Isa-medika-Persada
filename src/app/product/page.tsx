"use client";

import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"; // Make sure to import the icon
import Header from "../_components/Header";
import Device from "./device";
import Material from "./material";
import Footer from "../_components/Footer";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primary border-t-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-28 mb-8">
        <div className="bg-primary text-white p-4 mx-auto rounded-xl w-max text-center">
          <h1 className="text-4xl font-bold mb-0">Our Products</h1>
        </div>
      </div>

      <Material />
      <Device />
      <Footer />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-8 bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          style={{ width: "60px", height: "60px" }}
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Product;
