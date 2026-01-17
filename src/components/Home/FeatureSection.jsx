"use client";

import React from "react";
import {
  FiShare2,
  FiKey,
  FiUsers,
  FiLock,
} from "react-icons/fi";

const features = [
  {
    icon: FiShare2,
    title: "OAuth 2.0",
    desc: "Connect Google, GitHub, and Apple with one line of code.",
  },
  {
    icon: FiKey,
    title: "JWT Auth",
    desc: "Secure stateless tokens with automatic rotation and blacklisting.",
  },
  {
    icon: FiUsers,
    title: "RBAC",
    desc: "Granular permissions and organizational hierarchy out of the box.",
  },
  {
    icon: FiLock,
    title: "MFA",
    desc: "SMS, TOTP, and biometric authentication for ultimate security.",
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
          Everything you need to scale your identity infrastructure without the complexity.
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
