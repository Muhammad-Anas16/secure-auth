"use client";

import { useState } from "react";
import {
  MdLockReset,
  MdVpnKey,
  MdVisibility,
  MdVisibilityOff,
  MdVerifiedUser,
  MdInfo,
  MdArrowForward,
  MdChevronLeft,
} from "react-icons/md";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-display
      bg-[radial-gradient(ellipse_at_top,_#0b3c5d_0%,_#081b2d_40%,_#040b14_100%)]"
    >
      {/* Top Left Glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[140px]" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-blue-900/40 rounded-full blur-[160px]" />

      <div className="w-full max-w-[420px] flex flex-col items-center space-y-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <MdLockReset className="text-white text-4xl" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/10 rotate-45" />
          </div>

          <div className="text-center">
            <h1 className="text-white text-3xl font-extrabold tracking-tight">
              Reset Password
            </h1>
            <p className="text-slate-400 text-sm mt-2 font-medium">
              Secure your account with a new identity
            </p>
          </div>
        </div>

        {/* Glass Card */}
        <div
          className="w-full rounded-xl p-6 flex flex-col gap-6
          bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
        >
          {/* New Password */}
          <div className="space-y-2">
            <label className="text-slate-300 text-xs font-bold uppercase tracking-widest px-1">
              New Password
            </label>

            <div className="relative">
              <MdVpnKey
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full h-14 pl-12 pr-12 rounded-lg
                  bg-[#061725]/70 border border-white/10
                  text-white placeholder:text-slate-600
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                {showPassword ? (
                  <MdVisibilityOff size={20} />
                ) : (
                  <MdVisibility size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Strength */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-semibold">
                Security Strength
              </span>
              <span className="text-cyan-400 font-bold">STRONG</span>
            </div>

            <div className="flex gap-2 h-1.5">
              <div className="flex-1 rounded-full bg-cyan-400" />
              <div className="flex-1 rounded-full bg-cyan-400" />
              <div className="flex-1 rounded-full bg-cyan-400" />
              <div className="flex-1 rounded-full bg-cyan-400/20" />
              <div className="flex-1 rounded-full bg-white/5" />
            </div>

            <p className="text-[11px] text-slate-500 italic flex items-center gap-1">
              <MdInfo size={12} className="text-cyan-400" />
              {" Pro-tip: Add a special character like '@' for max security."}
            </p>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-slate-300 text-xs font-bold uppercase tracking-widest px-1">
              Confirm Password
            </label>

            <div className="relative">
              <MdVerifiedUser
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={20}
              />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className="w-full h-14 pl-12 pr-12 rounded-lg
                  bg-[#061725]/70 border border-white/10
                  text-white placeholder:text-slate-600
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                {showConfirm ? (
                  <MdVisibilityOff size={20} />
                ) : (
                  <MdVisibility size={20} />
                )}
              </button>
            </div>
          </div>

          {/* CTA */}
          <button
            className="w-full h-14 rounded-lg font-bold text-white
            bg-cyan-500 hover:bg-cyan-400 transition
            flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            Update Password
            <MdArrowForward />
          </button>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-4">
          <a className="flex items-center gap-1 text-slate-400 hover:text-white text-sm font-semibold">
            <MdChevronLeft size={18} />
            Back to Login
          </a>

          <div className="flex items-center gap-2 pt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
              Encrypted Session
            </span>
          </div>
        </div>
      </div>

      {/* iOS Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full" />
    </div>
  );
}
