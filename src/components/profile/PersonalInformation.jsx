"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const PersonalInformation = () => {
  return (
    <div className="rounded-xl border border-[#1e293b] bg-[#020617] p-4 sm:p-6 space-y-4">
      <h4 className="text-sm font-semibold text-white">Personal Information</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-400">First Name</label>
          <input
            defaultValue="Alex"
            className="mt-1 w-full rounded-md bg-[#020617] border border-[#1e293b] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400">Last Name</label>
          <input
            defaultValue="Johnson"
            className="mt-1 w-full rounded-md bg-[#020617] border border-[#1e293b] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-slate-400">Email Address</label>
        <div className="relative mt-1">
          <input
            defaultValue="alex.johnson@example.com"
            className="w-full rounded-md bg-[#020617] border border-[#1e293b] px-3 py-2 pr-10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <FiCheckCircle className="absolute right-3 top-2.5 text-green-500" />
        </div>
      </div>

      <div>
        <label className="text-xs text-slate-400">Bio</label>
        <textarea
          placeholder="Tell us a little about yourself..."
          rows={3}
          className="mt-1 w-full rounded-md bg-[#020617] border border-[#1e293b] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
        />
      </div>

      <div className="flex justify-end">
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
