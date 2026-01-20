"use client";

import React from "react";
import { FiUsers } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";

const features = [
  {
    icon: AiOutlineThunderbolt,
    title: "Automated Tasks",
    desc: "Let AI handle the repetitive work while you focus on what actually matters for your business.",
  },
  {
    icon: FiUsers,
    title: "Team Collaboration",
    desc: "Share updates and work together in real-time across all your devices and platforms.",
  },
  {
    icon: IoAnalyticsOutline,
    title: "Detailed Analytics",
    desc: "Get actionable insights into your performance with visual dashboards and daily reports.",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0B0E17] to-[#06070C] px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 text-center sm:text-left">
          Enterprise-Grade Security
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto sm:mx-0 mb-10 sm:mb-12 text-sm sm:text-base text-center sm:text-left">
          Everything you need to scale your identity infrastructure without the
          complexity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl
                bg-white/[0.04] border border-white/[0.08]
                hover:border-white/[0.15] transition"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <Icon className="text-cyan-400 text-lg sm:text-xl" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
