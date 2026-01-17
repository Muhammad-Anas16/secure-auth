"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0e0e1a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] bg-indigo-500/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-300">
            VERSION 2.0 NOW LIVE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Secure Auth for{" "}
          <span className="text-cyan-400">Modern</span> Web Apps
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-10 px-2">
          Implement OAuth, JWT, and RBAC in minutes with our developer-first
          platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <button className="h-14 px-8 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-base sm:text-lg shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-3 w-full sm:w-auto">
            Start Free
            <FaArrowRight className="text-lg" />
          </button>

          <button className="h-14 px-8 rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl text-white font-bold text-base sm:text-lg w-full sm:w-auto">
            Book Demo
          </button>
        </div>

        {/* Card Preview */}
        <div className="relative flex justify-center">
          {/* Main Card */}
          <div className="relative w-[280px] sm:w-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-black/40 rotate-2">
            {/* Window dots */}
            <div className="flex gap-2 mb-6">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>

            {/* Fields */}
            <div className="space-y-4">
              <div className="h-4 w-1/3 rounded bg-white/10" />
              <div className="h-10 rounded border border-white/10 bg-white/5" />
              <div className="h-4 w-1/4 rounded bg-white/10" />
              <div className="h-10 rounded border border-white/10 bg-white/5" />
              <div className="h-12 rounded-xl bg-cyan-500/90 mt-4" />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 rounded-xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl px-3 sm:px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <HiShieldCheck className="text-cyan-400 text-base sm:text-lg" />
              <span className="text-[10px] sm:text-xs font-bold text-white">
                MFA Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
