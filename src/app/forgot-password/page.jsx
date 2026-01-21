"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdArrowBackIos, MdAlternateEmail, MdSend } from "react-icons/md";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { requestPasswordResetFunction } from "@/lib/auth-client";

/* ------------------ Validation Schema ------------------ */
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

const handleForgotPassword = async (data) => {
  const { email } = data;

  if (!email) {
    toast.error("Please enter your email address.");
    return;
  }

  setIsLoading(true);
  console.log("Forgot Password Form Data:", email);

  try {
    const result = await requestPasswordResetFunction(email);

    if (result?.success) {
      toast.success("Password reset email sent! Check your inbox.");
    } else {
      toast.error(result?.message || "Failed to send password reset email.");
    }
  } catch (error) {
    console.error("Password reset request failed:", error);
    toast.error("An unexpected error occurred.");
  } finally {
    reset();
    setIsLoading(false);
  }
};


  return (
    <div
      className="
        min-h-screen w-full flex items-center justify-center p-6 font-display relative overflow-hidden
        bg-[radial-gradient(circle_at_15%_20%,rgba(200,0,255,0.18)_0%,transparent_40%),radial-gradient(circle_at_85%_80%,rgba(0,196,255,0.18)_0%,transparent_40%),linear-gradient(135deg,#2a0b3d_0%,#0b0f1f_55%,#071b2a_100%)]
      "
    >
      {/* Floating Glow Orbs */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-fuchsia-500/30 blur-[100px] rounded-full" />
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-cyan-400/30 blur-[100px] rounded-full" />

      {/* Main Container */}
      <div className="relative w-full max-w-[400px] flex flex-col items-center">
        {/* Auth Card */}
        <div
          className="
            w-full rounded-2xl p-8 relative z-10
            bg-[rgba(20,20,40,0.65)]
            backdrop-blur-2xl
            border border-white/10
            shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(200,0,255,0.12)]
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="text-white/60 hover:text-white transition">
              <MdArrowBackIos size={18} />
            </button>

            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
              AuthPro Security
            </span>

            <div className="w-5" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-white text-3xl font-bold mb-3">
              Forgot Password?
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              {
                " Enter your email and we'll send you a 3D-secure link to reset your access."
              }
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-white/80 text-xs font-semibold uppercase tracking-wider ml-1">
                Account Email
              </label>

              <div className="relative">
                <MdAlternateEmail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />

                <input
                  type="email"
                  placeholder="name@company.com"
                  {...register("email")}
                  className="
                    w-full py-4 pl-12 pr-4 rounded-xl
                    bg-white/5 border border-white/10
                    text-white placeholder:text-white/20
                    focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/50
                    transition
                  "
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-xs ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,196,255,0.45)] transition active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${isLoading ? "justify-center" : "justify-between"} ${isLoading ? "px-8" : "px-6"} ${isLoading ? "text-black" : "text-white"}`}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
              <MdSend size={18} />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              Remember your password?
              <a
                href="#"
                className="ml-1 text-cyan-400 font-semibold hover:underline underline-offset-4"
              >
                Log In
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Label */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
            Encrypted Session
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 left-10 w-24 h-24 border border-white/5 rounded-full rotate-12" />
        <div className="absolute bottom-40 right-20 w-40 h-40 border-2 border-cyan-400/5 rounded-3xl -rotate-12" />
      </div>
    </div>
  );
};

export default Page;
