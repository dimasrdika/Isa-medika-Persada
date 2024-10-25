"use client";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa"; // Import the icon
import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import VisionMission from "./_components/VisionMission";
import BusinessOperationsSection from "./_components/BusinessOperation";
import Location from "./_components/Location";
import Footer from "./_components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

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

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setShowScroll(currentScroll > 200); // Show button after scrolling 200px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
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
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <VisionMission />
      <BusinessOperationsSection />
      <Location />
      <Footer />
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-8 bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center" // Change right-4 to right-8
          style={{ width: "60px", height: "60px" }}
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
