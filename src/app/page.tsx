import Image from "next/image";

import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      <AboutUs />
    </div>
  );
}
