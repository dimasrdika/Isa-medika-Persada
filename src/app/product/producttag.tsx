import React from "react";

interface ProductMenu {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
  responsiveClass: string;
}

const ProductTag: React.FC<ProductMenu> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-primary border-gray-800 transform scale-105"
    : "text-primary bg-secondary hover:border-primary";

  const containerStyles = isSelected
    ? "flex items-center justify-center"
    : "flex items-center justify-center";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer transition-transform duration-300 ${buttonStyles}`}
    >
      <span className={containerStyles}>{name}</span>
    </button>
  );
};

export default ProductTag;
