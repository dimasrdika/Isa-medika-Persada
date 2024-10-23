import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-primary py-4 mt-auto border-t-2 border-primary">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <p>&copy; {new Date().getFullYear()} Isa Medika Persada.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
