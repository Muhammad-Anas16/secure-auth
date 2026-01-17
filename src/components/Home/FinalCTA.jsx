"use client";
import React from "react";

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#06080f] to-[#070b14] px-4 py-24">
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-[#0b2536] to-[#07131f] px-6 py-12 text-center shadow-[0_0_60px_rgba(34,211,238,0.15)] md:px-12">
        {/* Glow overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-cyan-400/5 blur-2xl" />

        <h2 className="relative z-10 text-2xl md:text-3xl font-extrabold text-white mb-2">
          Ready to ship?
        </h2>

        <p className="relative z-10 text-sm md:text-base text-slate-400 mb-8">
          Join the thousands of developers building secure apps with AuthPro.
        </p>

        <button className="relative z-10 w-full max-w-xl mx-auto h-14 rounded-full bg-white text-black text-sm md:text-base font-extrabold transition hover:scale-[1.02] active:scale-95">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
