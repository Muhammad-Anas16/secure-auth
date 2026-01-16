"use client";

import { FiEdit } from "react-icons/fi";

export default function ProfileCard() {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    memberSince: "September 2023",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpv-co8eAGKT0afiXM0eoaxPuPScfySrCrQ69RuJKoWgERb2fyceu3BwsPtADCRthxSMNWvzldQH1WEd7pmmbLRME8rtVNGgCPAL34mHeKoEBhnZ1FCqtq4NYOXCjIhVN0x2AsyEFEm6oklOF9Ix058CQZ8XhpicURGcOx526UbGI1LHqGrZefYOKPcE2kf1vvsS_8tXuAGcYOCSIzh6mMOnP_Erf4RDsr75jh2eh2OQCDbntolnru1x66TJFghiYRGoBjouO3UsvJ",
  };

  const handleEditAvatar = () => {
    console.log("Edit avatar clicked");
  };

  return (
    // <div className="max-w-full mx-auto rounded-xl border border-gray-200 dark:border-[#232f48] bg-surface-light dark:bg-surface-dark overflow-hidden">
    //   <div className="p-4 sm:p-6">
    //     <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
    //       {/* Avatar */}
    //       <div className="relative shrink-0">
    //         <div
    //           className="h-24 w-24 rounded-full bg-cover bg-center ring-4 ring-gray-50 dark:ring-[#232f48] text-white shadow-md"
    //           style={{ backgroundImage: `url(${user.avatarUrl})` }}
    //           aria-label={`Profile picture of ${user.name}`}
    //         />

    //         <button
    //           type="button"
    //           onClick={handleEditAvatar}
    //           title="Change avatar"
    //           className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 text-white shadow-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-primary"
    //         >
    //           <FiEdit size={15} />
    //         </button>
    //       </div>

    //       {/* User Info */}
    //       <div className="flex flex-1 flex-col items-center sm:items-start text-center sm:text-left gap-1">
    //         <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
    //           <h3 className="text-xl sm:text-2xl font-bold text-white  tracking-tight">
    //             {user.name}
    //           </h3>
    //         </div>

    //         <p className="text-sm sm:text-base text-slate-500 dark:text-[#92a4c9]">
    //           {user.email}
    //         </p>

    //         <p className="mt-1 flex items-center gap-1 text-sm text-slate-400 dark:text-slate-500">
    //           <FiCalendar className="h-4 w-4" />
    //           <span>Member since {user.memberSince}</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="rounded-xl border border-[#1e293b] bg-gradient-to-b from-[#0f172a] to-[#020617] p-4 sm:p-6 flex items-center gap-4">
      <div className="relative">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-[#020617]" />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-white">{user.name}</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold">
            {user.plan}
          </span>
        </div>
        <p className="text-sm text-slate-400">{user.email}</p>
        <p className="text-xs text-slate-500 mt-0.5">
          Member since {user.memberSince}
        </p>
      </div>

      <button className="text-slate-400 hover:text-white transition">
        <FiEdit />
      </button>
    </div>
  );
}
