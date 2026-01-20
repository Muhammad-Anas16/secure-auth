"use client";
import React from "react";
import Navbar from "@/components/main/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import LogosSection from "@/components/Home/LogosSection";
import TechChips from "@/components/Home/TechChips";
import FeatureSection from "@/components/Home/FeatureSection";
import Footer from "@/components/Home/Footer";


export default function Home() {
  return (
   <>
    <Navbar />
    <main>
      <HeroSection />
      <LogosSection />
      <TechChips />
      <FeatureSection />
      <Footer />
      </main>
    </>
  );
}
