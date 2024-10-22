"use client";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { RiMenu4Line, RiCloseCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation"; // Ganti import jika perlu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Pastikan ini dipanggil di dalam komponen yang tepat

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path: string) => {
    setIsOpen(false); // Menutup menu saat navigasi
    router.push(path);
  };

  return (
    <header className="bg-secondary fixed w-full z-10">
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
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <RiCloseCircleLine size={25} />
            ) : (
              <RiMenu4Line size={25} />
            )}
          </button>
        </div>
        <ul className="hidden md:flex flex-grow justify-center items-center space-x-8">
          <li
            className="cursor-pointer hover:text-primary transition"
            onClick={() => navigateTo("/#home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-primary transition"
            onClick={() => navigateTo("/#about")}
          >
            About Us
          </li>
          <li
            className="cursor-pointer hover:text-primary transition"
            onClick={() => navigateTo("/product")}
          >
            Product
          </li>
          <li
            className="cursor-pointer hover:text-primary transition"
            onClick={() => navigateTo("/#vision")}
          >
            Vision and Mission
          </li>
          <li
            className="cursor-pointer hover:text-primary transition"
            onClick={() => navigateTo("/#location")}
          >
            Location
          </li>
        </ul>

        <ul
          className={classNames(
            "absolute bg-secondary shadow-md right-0 top-16 transition-transform transform md:hidden",
            {
              "translate-x-0": isOpen,
              "translate-x-full": !isOpen,
            }
          )}
          style={{ width: "60vw", height: "100vh" }}
        >
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center">
            <li
              className="p-4 cursor-pointer hover:text-primary transition"
              onClick={() => navigateTo("/")}
            >
              Home
            </li>
            <li
              className="p-4 cursor-pointer hover:text-primary transition"
              onClick={() => navigateTo("/#about-us")}
            >
              About Us
            </li>
            <li
              className="p-4 cursor-pointer hover:text-primary transition"
              onClick={() => navigateTo("/product")}
            >
              Product
            </li>
            <li
              className="p-4 cursor-pointer hover:text-primary transition"
              onClick={() => navigateTo("/#vision-mission")}
            >
              Vision and Mission
            </li>
            <li
              className="p-4 cursor-pointer hover:text-primary transition"
              onClick={() => navigateTo("/#location")}
            >
              Location
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
