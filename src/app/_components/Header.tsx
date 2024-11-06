"use client";
import { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import { RiMenu4Line, RiCloseCircleLine } from "react-icons/ri";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash navigation after page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    };

    // Listen for route changes
    window.addEventListener("hashchange", handleHashNavigation);
    handleHashNavigation(); // Handle initial load

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = async (target: string) => {
    setIsOpen(false); // Close menu immediately

    if (target.startsWith("#")) {
      if (pathname !== "/") {
        // If we're not on home page, navigate to home with hash
        await router.replace("/" + target);
      } else {
        // If we're on home page, just scroll to element
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For non-hash navigation (like /product)
      await router.push(target);
    }
  };

  return (
    <header className="bg-secondary fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div onClick={() => handleNavigation("/")} className="cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />
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

        <nav className="hidden md:flex flex-grow justify-center items-center">
          <ul className="flex space-x-8">
            <li
              className="cursor-pointer hover:text-primary transition"
              onClick={() => handleNavigation("/#home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-primary transition"
              onClick={() => handleNavigation("#about")}
            >
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-primary transition"
              onClick={() => handleNavigation("#vision")}
            >
              Vision and Mission
            </li>
            <li
              className="cursor-pointer hover:text-primary transition"
              onClick={() => handleNavigation("/product")}
            >
              Product
            </li>

            <li
              className="cursor-pointer hover:text-primary transition"
              onClick={() => handleNavigation("#location")}
            >
              Location
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div
          className={classNames(
            "fixed inset-y-0 right-0 z-20 w-64 bg-secondary shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
            {
              "translate-x-0": isOpen,
              "translate-x-full": !isOpen,
            }
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="cursor-pointer"
                onClick={() => handleNavigation("/")}
              />
            </div>
            <nav className="flex-1">
              <ul className="flex flex-col space-y-4 p-4">
                <li
                  className="p-2 cursor-pointer hover:text-primary transition"
                  onClick={() => handleNavigation("/#home")}
                >
                  Home
                </li>
                <li
                  className="p-2 cursor-pointer hover:text-primary transition"
                  onClick={() => handleNavigation("#about")}
                >
                  About Us
                </li>
                <li
                  className="p-2 cursor-pointer hover:text-primary transition"
                  onClick={() => handleNavigation("#vision")}
                >
                  Vision and Mission
                </li>
                <li
                  className="p-2 cursor-pointer hover:text-primary transition"
                  onClick={() => handleNavigation("/product")}
                >
                  Product
                </li>

                <li
                  className="p-2 cursor-pointer hover:text-primary transition"
                  onClick={() => handleNavigation("#location")}
                >
                  Location
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
