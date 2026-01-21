"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/validation/authSchema";
import SocialButton from "@/components/main/SocialButton";
import { FacebookLogin, GitHubLogin, GoogleLogin, signUpUser } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Register = () => {
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
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    const { email, password, username } = data;

    setFormLoading(true);
    const result = await signUpUser(email, password, username);

    if (result.success) {
      toast.success(result.message || "Account created successfully!");
      router.push("/login");
      setFormLoading(false);
    } else {
      toast.success(result.message || "Account creation failed.");
      setFormLoading(false);
    }
    setShowPassword(false);
    reset();
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

  const handleSocialLogin = (provider) => {
    setSocialLoading(provider);

    setTimeout(() => {
      console.log(`Signup with ${provider}`);
      setSocialLoading(null);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#101829] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-[#161e2c] p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h1>

        {/* Social */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 w-full">
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
          <SocialButton
            icon={<FaFacebook />}
            label="Facebook"
            loading={socialLoading === "facebook"}
            onClick={() => handleFacebookLogin()}
          />
          {/* <SocialButton
            icon={<FaLinkedin />}
            label="LinkedIn"
            loading={socialLoading === "linkedin"}
            onClick={() => handleSocialLogin("linkedin")}
          /> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username")}
            placeholder="Username"
            className="w-full h-12 px-4 rounded bg-[#192233] text-white"
          />
          <p className="text-red-500 text-xs">{errors.username?.message}</p>

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full h-12 px-4 rounded bg-[#192233] text-white"
          />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>

          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-12 px-4 pr-10 rounded bg-[#192233] text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 text-xs">{errors.password?.message}</p>

          <button
            type="submit"
            disabled={formLoading}
            className={`w-full h-12 rounded-md text-white font-semibold
              ${formLoading ? "bg-blue-800" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {formLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
