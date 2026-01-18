"use client";
import React from "react";
import Navbar from "@/components/main/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import LogosSection from "@/components/Home/LogosSection";
import TechChips from "@/components/Home/TechChips";
import FeatureSection from "@/components/Home/FeatureSection";
import HowItWorks from "@/components/Home/HowItWorks";
import FinalCTA from "@/components/Home/FinalCTA";
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
      <HowItWorks />
      <FinalCTA />
      <Footer />
      </main>
    </>
  );
}
