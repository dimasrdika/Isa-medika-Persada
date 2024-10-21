import React from "react";

interface Product {
  name: string;
  href: string;
  imageSrc: string;
  tags: string[];
}

interface ProductCardProps {
  menu: Product[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ menu }) => (
  <div className="flex flex-wrap justify-center">
    {menu.map((menuItem, index) => (
      <div key={index} className="m-2 w-64 h-96">
        {" "}
        {/* Change m-4 to m-2 */}
        <div className="bg-white cursor-pointer rounded-3xl shadow-xl mb-1">
          {" "}
          {/* Change mb-2 to mb-1 */}
          <img
            src={menuItem.imageSrc}
            className="rounded-t-3xl w-full h-40 items-center object-cover"
            alt={`${menuItem.name} Image`}
          />
          <div className="p-6">
            <a
              href={menuItem.href}
              className="group-hover:text-primary ease-in-out duration-300 transition-all font-medium text-sm line-clamp-2"
            >
              {menuItem.name}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductCard;
