"use client";

import React from "react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython } from "react-icons/si";

const tech = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
];

const TechChips = () => {
  return (
    <section className="w-full py-8 px-4 bg-[#050508]">
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-4"
        >
          {tech.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 px-15 h-10 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition"
              >
                <Icon size={16} className="text-slate-400" />
                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechChips;
