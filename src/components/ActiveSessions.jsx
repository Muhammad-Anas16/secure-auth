import {
  FiAlertTriangle,
  FiLogOut,
  FiShield,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const ActiveSessions = () => {
  const currentSession = {
    device: "Chrome on macOS",
    location: "San Francisco, US",
    ip: "192.168.1.1",
    status: "Active now",
  };

  const otherSessions = [
    {
      id: 1,
      device: "Safari on iPhone 13",
      location: "Lagos, Nigeria",
      ip: "102.12.33.1",
      lastActive: "15 mins ago",
      icon: <FiSmartphone />,
    },
    {
      id: 2,
      device: "Firefox on Windows 11",
      location: "New York, US",
      ip: "24.15.112.9",
      lastActive: "2 days ago",
      icon: <FiMonitor />,
    },
    {
      id: 3,
      device: "Chrome on iPad",
      location: "San Francisco, US",
      ip: "192.168.1.1",
      lastActive: "1 week ago",
      icon: <FiMonitor />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] p-4 sm:p-6 border border-[#1e293b]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white">Active Sessions</h3>
          <p className="text-sm text-slate-400">
            View and manage devices where you are currently signed in.
          </p>
        </div>
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 rounded-md bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition cursor-pointer"
        >
          <CgProfile />
          Go to Profile
        </Link>
      </div>

      {/* Current Device */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white mb-2">
          Current Device
        </h4>
        <div className="rounded-lg border border-[#1e293b] bg-[#020617] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-blue-600/20 flex items-center justify-center text-blue-400">
              <FiMonitor />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {currentSession.device}
                <span className="ml-2 text-xs rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-400">
                  Current Session
                </span>
              </p>
              <p className="text-xs text-slate-400">
                {currentSession.location} • {currentSession.ip}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-green-400">
            ● Active now
          </span>
        </div>
      </div>

      {/* Other Sessions */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white mb-2">
          Other Active Sessions
        </h4>
        <div className="space-y-2">
          {otherSessions.map((session) => (
            <div
              key={session.id}
              className="rounded-lg border border-[#1e293b] bg-[#020617] p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-slate-800 flex items-center justify-center text-slate-400">
                  {session.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {session.device}
                  </p>
                  <p className="text-xs text-slate-400">
                    {session.location} • {session.ip} • Last active:{" "}
                    {session.lastActive}
                  </p>
                </div>
              </div>
              <button className="text-xs text-red-400 hover:text-red-300 transition">
                Sign out
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-4 text-xs text-slate-500">
        Your sessions are end-to-end encrypted. Location data is approximate
        based on IP address.
      </p>
    </div>
  );
};

export default ActiveSessions;
