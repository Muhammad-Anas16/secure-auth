"use client";

import { useEffect, useState } from "react";
import { RiShieldUserLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient, signOutUser } from "@/lib/auth-client";
import { toast } from "sonner";

const Navbar = () => {
  const router = useRouter();
  const [formLoading, setFormLoading] = useState(false);
  const [session, setSession] = useState(false);
  const [isItPending, setIsItPending] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, isPending } = await authClient.getSession();
      if (isPending) {
        setIsItPending(true);
      } else {
        setIsItPending(false);
      }

      if (data) {
        setSession(true);
      } else {
        setSession(false);
      }
    };
    fetchSession();
  }, [setSession, setIsItPending]);

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
    <nav className="fixed top-0 z-50 w-full glass-card bg-white/10 border-b border-white/5 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <RiShieldUserLine className="text-[#009cc7] text-2xl" />
        <h2 className="text-white text-lg font-black tracking-tighter">
          Secure Auth
        </h2>
      </div>
      {isItPending ? null : session ? (
        <button
          onClick={handleSignOut}
          className="bg-red-500/20 text-red-500 border border-red-500/30 px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer"
        >
          {formLoading ? "Signing Out..." : "Sign Out"}
        </button>
      ) : (
        <Link
          href="/auth/login"
          className="bg-[#009cc7]/20 text-[#009cc7] border border-[#009cc7]/30 px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer"
        >
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
