"use client";
import React from "react";

const steps = [
  {
    no: 1,
    title: "Install the SDK",
    desc: "npm install @authpro/sdk-react in your project folder.",
  },
  {
    no: 2,
    title: "Configure Providers",
    desc: "Select your social login methods in our visual dashboard.",
  },
  {
    no: 3,
    title: "Secure your App",
    desc: "Wrap your routes and start identifying users securely.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#06080f] via-[#070b14] to-[#06080f] py-24 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-20">
        How It Works
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.no} className="flex items-start gap-6">
              {/* Number Circle */}
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                {step.no}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
