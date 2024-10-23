"use client";
import Image from "next/image";
// _app.tsx
import "leaflet/dist/leaflet.css";

import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import { useState, useEffect } from "react";
import VisionMission from "./_components/VisionMission";
import BusinessOperationsSection from "./_components/BusinessOperation";
import Location from "./_components/Location";
import Footer from "./_components/Footer";
export default function Home() {
  const [loading, setLoading] = useState(true);

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
    </div>
  );
}
