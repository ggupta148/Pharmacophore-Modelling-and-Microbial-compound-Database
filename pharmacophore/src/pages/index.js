import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import AboutUs from "@/components/About";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import DataList from "@/components/CompoundSearch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col `}
    >
      <Navbar />
      <HeroSection />
      <Stats />
      <AboutUs />
      <DataList />
      <Footer />
    </main>
  );
}
