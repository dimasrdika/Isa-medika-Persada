"use client";

import Header from "../_components/Header";
import Device from "./device";
import Material from "./material";

const Product = () => {
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
