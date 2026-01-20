"use client";

import React from "react";
import { FiShield, FiGlobe } from "react-icons/fi";
import { HiOutlineTerminal } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B0E17] to-[#06070C] border-t border-white/10 px-6 py-14">
      {/* Divider */}
      <div className="mt-12 border-t border-white/10 pt-6 flex items-center justify-between text-xs text-slate-500">
        <span className="flex flex-col justify-center gap-1">
          <span>
            Created by{" "}
            <a
              href="https://m-anas-portfolio.vercel.app/"
              target="_blank"
              className="text-cyan-400"
            >
              Muhammad Anas
            </a>
          </span>
          © 2026 AUTHPRO.
        </span>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="https://m-anas-portfolio.vercel.app/" target="_blank">
            <FiGlobe className="text-sm hover:text-white transition" />
          </a>
          <a href="https://m-anas-portfolio.vercel.app/" target="_blank">
            <HiOutlineTerminal className="text-sm hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
