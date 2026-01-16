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
import { signInUser } from "@/lib/auth-client";
import { toast } from "sonner";

const Login = () => {
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

  // social login
  const handleSocialLogin = (provider) => {
    setSocialLoading(provider);

    setTimeout(() => {
      console.log(`Login with ${provider}`);
      setSocialLoading(null);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#101829] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-[#161e2c] p-6 rounded-2xl shadow-xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        {/* Social Login */}
        <div className="flex flex-wrap gap-3 mb-6">
          <SocialButton
            icon={<FaGoogle />}
            label="Google"
            loading={socialLoading === "google"}
            onClick={() => handleSocialLogin("google")}
          />
          <SocialButton
            icon={<FaGithub />}
            label="GitHub"
            loading={socialLoading === "github"}
            onClick={() => handleSocialLogin("github")}
          />
          <SocialButton
            icon={<FaFacebook />}
            label="Facebook"
            loading={socialLoading === "facebook"}
            onClick={() => handleSocialLogin("facebook")}
          />
          <SocialButton
            icon={<FaLinkedin />}
            label="LinkedIn"
            loading={socialLoading === "linkedin"}
            onClick={() => handleSocialLogin("linkedin")}
          />
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
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full h-12 pl-11 pr-4 rounded bg-[#192233] text-white outline-none"
              />
            </div>
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-12 pl-11 pr-12 rounded bg-[#192233] text-white outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-red-500 text-xs mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formLoading}
            className={`w-full h-12 rounded font-semibold text-white transition
              ${
                formLoading
                  ? "bg-blue-800 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {formLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-blue-500 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
