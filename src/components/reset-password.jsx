"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  MdLockReset,
  MdVpnKey,
  MdVisibility,
  MdVisibilityOff,
  MdVerifiedUser,
  MdArrowForward,
  MdChevronLeft,
} from "react-icons/md";
import Link from "next/link";

/* =======================
   Validation Schema
======================= */
const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(/[0-9]/, "At least one number")
    .matches(/[@$!%*?&#]/, "At least one special character"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setMessage("Invalid reset link. Please request a new password reset.");
    }
  }, [searchParams]);

  const onSubmit = async (data) => {
    if (!token) return;

    try {
      setLoading(true);

      const { password, token: tokenFromData } = data;

      if (token !== tokenFromData) {
        setMessage(
          "Invalid or expired token. Please request a new password reset.",
        );
        return;
      }

      const result = await resetPasswordFunction(password, tokenFromData);
      if (!result.success) {
        setMessage(result.message || "Failed to reset password.");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        setMessage("Password updated successfully!");
      }

    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-display
      bg-[radial-gradient(ellipse_at_top,_#0b3c5d_0%,_#081b2d_40%,_#040b14_100%)]"
    >
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-blue-900/40 rounded-full blur-[160px]" />

      <div className="w-full max-w-[420px] flex flex-col items-center space-y-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <MdLockReset className="text-white text-4xl" />
          </div>

          <div className="text-center">
            <h1 className="text-white text-3xl font-extrabold">
              Reset Password
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Secure your account with a new identity
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-xl p-6 flex flex-col gap-6
          bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
        >
          {/* Password */}
          <div className="space-y-2">
            <label className="text-slate-300 text-xs font-bold uppercase">
              New Password
            </label>

            <div className="relative">
              <MdVpnKey className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full h-14 pl-12 pr-12 rounded-lg bg-[#061725]/70
                border border-white/10 text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm */}
          <div className="space-y-2">
            <label className="text-slate-300 text-xs font-bold uppercase">
              Confirm Password
            </label>

            <div className="relative">
              <MdVerifiedUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type={showConfirm ? "text" : "password"}
                {...register("confirmPassword")}
                className="w-full h-14 pl-12 pr-12 rounded-lg bg-[#061725]/70
                border border-white/10 text-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showConfirm ? <MdVisibilityOff /> : <MdVisibility />}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-400 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {message && (
            <p className="text-center text-sm text-cyan-400">{message}</p>
          )}

          <button
            type="submit"
            disabled={!isValid || loading}
            className="w-full h-14 rounded-lg font-bold text-white
            bg-cyan-500 hover:bg-cyan-400 transition
            flex items-center justify-center gap-2
            disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
            <MdArrowForward />
          </button>
        </form>

        {/* Footer */}
        <Link
          href="/login"
          className="flex items-center gap-1 text-slate-400 hover:text-white text-sm font-semibold"
        >
          <MdChevronLeft size={18} />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
