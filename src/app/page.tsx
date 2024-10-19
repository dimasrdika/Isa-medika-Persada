import Image from "next/image";

import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import MainContentSection from "./_components/MainContent";

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      {/* <MainContentSection /> */}
    </div>
  );
}
