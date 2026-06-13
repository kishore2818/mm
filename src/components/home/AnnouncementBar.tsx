"use client";

import { Bell } from "lucide-react";

const notices = [
  "📢 Admissions Open for 2025–26 Academic Year — Apply Now",
  "🏆 Our students secured State Rank in Board Examinations 2024",
  "📅 Annual Sports Day on July 15, 2025 — Parents are invited",
  "🎓 Parent-Teacher Meeting scheduled for June 28, 2025",
  "📚 New Science Lab inaugurated by District Collector",
  "🌟 Registration open for Summer Coaching Classes — Limited Seats",
];

export default function AnnouncementBar() {
  const doubled = [...notices, ...notices]; // duplicate for seamless loop

  return (
    <div className="bg-[#1a1a5e] border-b border-[#c9a227]/30 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-[#c9a227] text-[#0d0d3b] px-4 py-2.5 font-bold text-xs tracking-widest uppercase z-10">
          <Bell size={13} className="animate-pulse" />
          <span>Notice</span>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden flex-1 group">
          <div className="ticker-track flex whitespace-nowrap group-hover:[animation-play-state:paused] transition-all duration-300">
            {doubled.map((notice, i) => (
              <span
                key={i}
                className="inline-block text-[#f0c040]/80 text-xs sm:text-sm px-8 py-2.5 cursor-default hover:text-[#f0c040] transition-colors"
              >
                {notice}
                <span className="text-[#c9a227]/40 mx-6">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
