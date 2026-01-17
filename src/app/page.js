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
   {/* <div className="relative flex min-h-screen flex-col"> */}
   <div>
    <Navbar />
    {/* <main className="flex-1 mt-[-39]"> */}
    <main>
      <HeroSection />
      <LogosSection />
      <TechChips />
      <FeatureSection />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      </main>
      </div>
    </>
  );
}
