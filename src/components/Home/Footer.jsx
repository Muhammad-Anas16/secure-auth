"use client";

import React from "react";
import { FiShield, FiGlobe } from "react-icons/fi";
import { HiOutlineTerminal } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B0E17] to-[#06070C] border-t border-white/10 px-6 py-14">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FiShield className="text-cyan-400 text-lg" />
            <span className="text-white font-extrabold tracking-wide">
              AUTHPRO
            </span>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-20 text-sm">
            <div>
              <p className="text-white font-semibold mb-3">Platform</p>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white transition">Documentation</li>
                <li className="hover:text-white transition">Pricing</li>
                <li className="hover:text-white transition">Security</li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold mb-3">Company</p>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white transition">About</li>
                <li className="hover:text-white transition">Blog</li>
                <li className="hover:text-white transition">Twitter</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex items-center justify-between text-xs text-slate-500">
          <span>© 2024 AuthPro Inc.</span>

          <div className="flex items-center gap-4 text-slate-400">
            <FiGlobe className="text-sm hover:text-white transition" />
            <HiOutlineTerminal className="text-sm hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
