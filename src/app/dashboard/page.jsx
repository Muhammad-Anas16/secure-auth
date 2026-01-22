"use client";

import { authClient, signOutUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShield, FiMail, FiUserCheck, FiLogOut } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { RiDeviceLine } from "react-icons/ri";
import { toast } from "sonner";

export default function DashboardPage() {
  const router = useRouter();
  const [formLoading, setFormLoading] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      if (data) {
        setSession(data);
      } else {
        setSession(null);
      }
    };
    fetchSession();
  }, [setSession]);

  console.log("Session data", session?.session?.createdAt);

  const handleSignOut = async () => {
    setFormLoading(true);
    try {
      const result = await signOutUser();

      if (result.success) {
        toast.success(result.message || "Signed out successfully");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
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
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt="User Avatar"
                className="absolute inset-0 w-full h-full object-cover rounded-full border-2"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <FiUserCheck className="text-6xl text-white" />
            )}
          </div>
          <div className="absolute bottom-1 right-1 size-9 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-[#0b0f14] cursor-pointer">
            <HiCheckBadge className="text-lg text-white" />
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold capitalize">
          Welcome back, {session ? session?.user?.name : "User"}
        </h2>

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
                <p className="font-semibold">
                  {session ? session?.user?.email : "user.email@example.com"}
                </p>
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
                <p className="font-semibold">OAuth 2.0</p>
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

        <div className="grid grid-cols-1 gap-4">
          <button className="rounded-2xl bg-[#121820] p-5 text-left shadow-lg cursor-pointer ">
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
        </div>

        <div className="rounded-2xl bg-[#121820] shadow-lg divide-y divide-white/5">
          <div className="flex gap-4 px-5 py-4">
            <FiLogOut className="text-gray-400 text-xl" />
            <div>
              <p className="font-semibold">Successful Login</p>
              <p className="text-sm text-gray-500">
                {/* Today, 9:42 AM • San Francisco, CA */}
                {(() => {
                  const d = new Date(session?.session?.createdAt);
                  const now = new Date();

                  const isToday =
                    d.getDate() === now.getDate() &&
                    d.getMonth() === now.getMonth() &&
                    d.getFullYear() === now.getFullYear();

                  const yesterday = new Date(now);
                  yesterday.setDate(now.getDate() - 1);

                  const isYesterday =
                    d.getDate() === yesterday.getDate() &&
                    d.getMonth() === yesterday.getMonth() &&
                    d.getFullYear() === yesterday.getFullYear();

                  const time = d.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  });

                  if (isToday) return `Today, ${time}`;
                  if (isYesterday) return `Yesterday, ${time}`;
                  return time;
                })()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
