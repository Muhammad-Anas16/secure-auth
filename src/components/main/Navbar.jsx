"use client";

import { useState } from "react";
import { RiShieldUserLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOutUser } from "@/lib/auth-client";

const Navbar = () => {
  const [formLoading, setFormLoading] = useState(false);
  const router = useRouter();

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
    <header className="h-16 border-b border-slate-200 dark:border-[#232f48] bg-[#020617] backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 select-none">
          <RiShieldUserLine size={30} className="text-[#135BEC] shrink-0" />
          <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
            SecureAuth
          </span>
        </Link>

        {/* <Link
          href="/contact"
          className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-300 cursor-pointer"
        >
          {formLoading ? "Signing Out..." : "sign Out"}
        </Link> */}

        <button
          onClick={handleSignOut}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 cursor-pointer"
        >
          {formLoading ? "Signing Out..." : "sign Out"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
