"use client";

import React, { useEffect, useState } from "react";
import Header from "../_components/Header";
import Device from "./device";
import Material from "./material";

const Product = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      <h1 className="text-center pt-24 text-4xl font-bold mb-8 text-primary">
        Our Products
      </h1>
      <Material />
      <Device />
    </>
  );
};

export default Product;
