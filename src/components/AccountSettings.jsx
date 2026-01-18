"use client";

import {
  FiArrowLeft,
  FiShield,
  FiKey,
  FiSmartphone,
  FiChevronRight,
  FiLogOut,
  FiEdit2,
} from "react-icons/fi";
import { useState } from "react";

const AccountSettings = () => {
  const [twoFA, setTwoFA] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0e1a] overflow-hidden text-white font-sans">
      {/* ===== Background Glows ===== */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-[120px]" />

      {/* ===== App Container ===== */}
      <div className="relative mx-auto min-h-screen max-w-[430px] px-4 pb-10">
        {/* ===== Header ===== */}
        <header className="sticky top-0 z-30 flex items-center justify-between py-4 backdrop-blur-md">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10">
            <FiArrowLeft size={18} />
          </button>
          <h1 className="text-sm font-semibold tracking-wide">
            Account Settings
          </h1>
          <div className="w-10" />
        </header>

        {/* ===== Profile Card ===== */}
        <section className="relative mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-2xl">
          <span className="absolute right-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
            Pro Tier
          </span>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div
                className="h-24 w-24 rounded-full border-2 border-cyan-400/50 bg-cover bg-center shadow-[0_0_25px_rgba(0,180,220,0.35)]"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256)",
                }}
              />
              <button className="absolute bottom-0 right-0 rounded-full border-2 border-[#0b0e1a] bg-cyan-500 p-1.5">
                <FiEdit2 size={12} />
              </button>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold">Alex Rivers</p>
              <p className="text-sm text-[#9ab4bc]">alex.rivers@authpro.io</p>
            </div>
          </div>
        </section>

        {/* ===== Security Core ===== */}
        <section className="mt-8">
          <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-widest text-white/50">
            Security Core
          </h2>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl divide-y divide-white/5">
            {/* 2FA */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <FiShield />
                </div>
                <div>
                  <p className="text-sm font-medium">Two-Factor Auth</p>
                  <p className="text-xs text-[#9ab4bc]">Highly recommended</p>
                </div>
              </div>

              <button
                onClick={() => setTwoFA(!twoFA)}
                className={`relative h-6 w-11 rounded-full transition ${
                  twoFA ? "bg-cyan-500" : "bg-white/10"
                }`}
              >
                <span
                  className={`absolute top-[2px] h-5 w-5 rounded-full bg-white transition ${
                    twoFA ? "left-5" : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Password Reset */}
            <div className="flex cursor-pointer items-center justify-between p-4 hover:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70">
                  <FiKey />
                </div>
                <div>
                  <p className="text-sm font-medium">Password Reset</p>
                  <p className="text-xs text-[#9ab4bc]">
                    Last changed 3 months ago
                  </p>
                </div>
              </div>
              <FiChevronRight className="text-white/30" />
            </div>

            {/* Active Sessions */}
            <div className="flex cursor-pointer items-center justify-between p-4 hover:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70">
                  <FiSmartphone />
                </div>
                <div>
                  <p className="text-sm font-medium">Active Sessions</p>
                  <p className="text-xs text-[#9ab4bc]">
                    2 devices currently logged in
                  </p>
                </div>
              </div>
              <FiChevronRight className="text-white/30" />
            </div>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <section className="mt-8 space-y-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-white/[0.03] py-4 font-bold text-red-400 hover:bg-red-500/10 cursor-pointer">
            <FiLogOut />
            Sign Out of AuthPro
          </button>

          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
            AuthPro v2.4.0-build.82
          </p>
        </section>
      </div>
    </div>
  );
};

export default AccountSettings;
