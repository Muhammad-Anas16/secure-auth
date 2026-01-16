"use client";

import React from "react";
import { RiShieldUserLine } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-[#232f48] bg-[#111722] backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 select-none">
          <RiShieldUserLine size={30} className="text-[#135BEC] shrink-0" />
          <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
            SecureAuth
          </span>
        </Link>

        <Link
          href="/contact"
          className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-300"
        >
          Contact Sales
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
