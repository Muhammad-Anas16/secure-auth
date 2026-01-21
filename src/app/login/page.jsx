"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validation/authSchema";
import SocialButton from "@/components/main/SocialButton";
import { FacebookLogin, GitHubLogin, GoogleLogin, signInUser } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null); // google | github | etc

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // email login
  const onSubmit = async (data) => {
    const { email, password } = data;
    setFormLoading(true);

    try {
      const result = await signInUser(email, password);

      if (result.success) {
        toast.success(result.message || "Logged in successfully!");
      } else {
        toast.success(result.message || "Login failed.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setFormLoading(false);
    }

    reset();
    setShowPassword(false);
  };

  const handleGoogleLogin = async () => {
    setSocialLoading("google");
    const result = await GoogleLogin();
    if (result.success) {
      toast.success("Logged in successfully!");
      router.push("/");
      setSocialLoading(null);
    } else {
      toast.error(result.message || "Login failed.");
      setSocialLoading(null);
    }
  };

  const handleGitHubLogin = async () => {
    setSocialLoading("github");
    const result = await GitHubLogin();
    if (result.success) {
      toast.success("Logged in successfully!");
      router.push("/");
      setSocialLoading(null);
    } else {
      toast.error(result.message || "Login failed.");
      setSocialLoading(null);
    }
  };

      const handleFacebookLogin = async () => {
      setSocialLoading("facebook");
      const result = await FacebookLogin();
      if (result.success) {
        toast.success("Logged in successfully!");
        router.push("/");
        setSocialLoading(null);
      } else {
        toast.error(result.message || "Login failed.");
        setSocialLoading(null);
      }
    };

  // social login
  const handleSocialLogin = (provider) => {
    setSocialLoading(provider);

    setTimeout(() => {
      console.log(`Login with ${provider}`);
      setSocialLoading(null);
    }, 1200);
  };

  return (
    <main
      className="
        relative min-h-screen flex items-center justify-center px-4
        font-display overflow-hidden
        bg-[#101829]
        bg-[radial-gradient(ellipse_at_top,_#0b3c5d_0%,_#081b2d_40%,_#040b14_100%)]
      "
    >
      {/* Top Left Glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[140px]" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-blue-900/40 rounded-full blur-[160px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-[#161e2c]/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        {/* Social Login */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full">
          <SocialButton
            icon={<FaGoogle />}
            label="Google"
            loading={socialLoading === "google"}
            onClick={() => handleGoogleLogin()}
          />
          <SocialButton
            icon={<FaGithub />}
            label="GitHub"
            loading={socialLoading === "github"}
            onClick={() => handleGitHubLogin()}
          />
          {/* <SocialButton
            icon={<FaFacebook />}
            label="Facebook"
            loading={socialLoading === "facebook"}
            onClick={() => handleFacebookLogin()}
          /> */}
          {/* <SocialButton
            icon={<FaLinkedin />}
            label="LinkedIn"
            loading={socialLoading === "linkedin"}
            onClick={() => handleSocialLogin("linkedin")}
          /> */}
        </div>

        <div className="text-center text-slate-400 text-xs mb-6">
          or login with email
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="
                  w-full h-12 pl-11 pr-4 rounded-lg
                  bg-[#192233] text-white placeholder-slate-500
                  outline-none border border-white/10
                  focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50
                "
              />
            </div>
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="
                  w-full h-12 pl-11 pr-12 rounded-lg
                  bg-[#192233] text-white placeholder-slate-500
                  outline-none border border-white/10
                  focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-red-500 text-xs mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-cyan-400 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formLoading}
            className={`
              w-full h-12 rounded-lg font-semibold text-white transition
              ${
                formLoading
                  ? "bg-cyan-800 cursor-not-allowed"
                  : "bg-cyan-600 hover:bg-cyan-700 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              }
            `}
          >
            {formLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-cyan-400 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
