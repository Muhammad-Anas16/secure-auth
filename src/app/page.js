"use client";

import PersonalInformation from "@/components/profile/PersonalInformation";
import ProfileCard from "@/components/profile/ProfileCard";
import Link from "next/link";
import { MdOutlineDevices } from "react-icons/md";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white">
              Profile
            </h2>
            <p className="text-sm text-slate-400">
              Manage your profile details and personal information
            </p>
          </div>
          <Link
            href={"/sessions"}
            className="inline-flex items-center gap-2 rounded-md bg-green-500/20 px-3 py-2 text-sm font-semibold text-green-400 hover:bg-green-500/20 transition cursor-pointer"
          >
            <MdOutlineDevices />
            Go to Profile
          </Link>
        </div>


        <ProfileCard />
        <PersonalInformation />
      </div>
    </div>
  );
}
