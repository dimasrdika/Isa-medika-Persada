"use client";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-putih fixed w-full z-10 mb-24">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#1E201E] focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <nav className="hidden md:flex md:justify-center md:flex-1 md:space-x-16">
          <a href="/" className="text-gray-800 hover:text-primary transition">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-primary transition"
          >
            About Us
          </a>
          <a href="#" className="text-gray-800 hover:text-primary transition">
            Vision and Mission
          </a>
          <a href="#" className="text-gray-800 hover:text-primary transition">
            Location
          </a>
        </nav>
        <nav
          className={classNames(
            "absolute bg-white shadow-md right-0 top-16 transition-transform transform md:hidden",
            {
              "translate-x-0": isOpen,
              "translate-x-full": !isOpen,
            }
          )}
          style={{ width: "50vw", height: "100vh" }}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li>
              <a
                href="/"
                className="block w-full text-center px-6 py-4 text-gray-800 hover:text-primary transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block w-full text-center px-6 py-4 text-gray-800 hover:text-primary transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full text-center px-6 py-4 text-gray-800 hover:text-primary transition"
              >
                Vision and Mission
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full text-center px-6 py-4 text-gray-800 hover:text-primary transition"
              >
                Location
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
