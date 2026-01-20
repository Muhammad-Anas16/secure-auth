"use client";

import { signOutUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiMenu,
  FiShield,
  FiMail,
  FiUserCheck,
  FiLogOut,
  FiKey,
} from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { RiShieldKeyholeLine, RiDeviceLine } from "react-icons/ri";
import { toast } from "sonner";

export default function DashboardPage() {
  const router = useRouter();
  const [formLoading, setFormLoading] = useState(false);

  const handleSignOut = async () => {
    setFormLoading(true);
    try {
      const result = await signOutUser();

      if (result.success) {
        toast.success(result.message || "Signed out successfully");
        router.push("/auth/login");
      } else {
        toast.error(result.message || "Sign-out failed");
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white px-5 pb-12">
      {/* ================= Header ================= */}
      <header className="flex items-end justify-end py-6">
        <button
          onClick={handleSignOut}
          className="px-5 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm font-semibold bg-emerald-500/10 cursor-pointer hover:bg-emerald-500/20 transition"
        >
          {formLoading ? "Signing Out..." : "Sign Out"}
        </button>
      </header>

      {/* ================= Avatar ================= */}
      <section className="flex flex-col items-center mt-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl" />
          <div className="relative size-32 rounded-full bg-[#a7c7c3] flex items-center justify-center shadow-2xl">
            <FiUserCheck className="text-6xl text-white" />
          </div>
          <div className="absolute bottom-1 right-1 size-9 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-[#0b0f14]">
            <HiCheckBadge className="text-lg text-white" />
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold">Welcome back, Alex Rivera</h2>

        <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Secure Session Active
        </p>
      </section>

      {/* ================= Account Overview ================= */}
      <section className="mt-12">
        <h3 className="text-xs tracking-widest text-gray-500 mb-4">
          ACCOUNT OVERVIEW
        </h3>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between rounded-2xl bg-[#121820] px-5 py-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <FiMail className="text-emerald-400 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Primary Email</p>
                <p className="font-semibold">alex.rivera@example.com</p>
              </div>
            </div>
            <FiUserCheck className="text-emerald-500 text-xl" />
          </div>

          {/* Provider */}
          <div className="flex items-center justify-between rounded-2xl bg-[#121820] px-5 py-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center">
                <FiShield className="text-white text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Auth Provider</p>
                <p className="font-semibold">GitHub OAuth 2.0</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full">
              CONNECTED
            </span>
          </div>
        </div>
      </section>

      {/* ================= Privacy ================= */}
      <section className="mt-12">
        <h3 className="text-xs tracking-widest text-gray-500 mb-4">
          PRIVACY & ACCESS
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-2xl bg-[#121820] p-5 text-left shadow-lg">
            <RiShieldKeyholeLine className="text-emerald-400 text-2xl mb-3" />
            <p className="font-semibold">Manage 2FA</p>
          </button>

          <button className="rounded-2xl bg-[#121820] p-5 text-left shadow-lg">
            <RiDeviceLine className="text-emerald-400 text-2xl mb-3" />
            <p className="font-semibold">Active Devices</p>
          </button>
        </div>
      </section>

      {/* ================= Activity ================= */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs tracking-widest text-gray-500">
            RECENT ACTIVITY
          </h3>
          <span className="text-sm text-emerald-400 font-semibold">
            View All
          </span>
        </div>

        <div className="rounded-2xl bg-[#121820] shadow-lg divide-y divide-white/5">
          <div className="flex gap-4 px-5 py-4">
            <FiLogOut className="text-gray-400 text-xl" />
            <div>
              <p className="font-semibold">Successful Login</p>
              <p className="text-sm text-gray-500">
                Today, 9:42 AM • San Francisco, CA
              </p>
            </div>
          </div>

          <div className="flex gap-4 px-5 py-4">
            <FiKey className="text-gray-400 text-xl" />
            <div>
              <p className="font-semibold">API Key Generated</p>
              <p className="text-sm text-gray-500">Yesterday, 4:15 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="mt-16 text-center text-xs text-gray-500 space-y-4">
        <p>
          Database: MongoDB Atlas (us-east-1)
          <br />
          Authenticated via Auth.js 5.0
        </p>

        <div className="flex justify-center gap-6">
          <a className="hover:text-white" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white" href="#">
            Terms of Service
          </a>
        </div>
      </footer>
    </main>
  );
}
