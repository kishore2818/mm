"use client";

import { Bell } from "lucide-react";

const notices = [
  "📢 Admissions Open for 2026–27 Academic Year — Apply Now",
  "🏆 Raveen secured 1st rank in Thoothukudi district in Class 10 public exams with 497/500 marks!",
  "📅 Admissions open for Class XI streams (Science & Commerce)",
  "🥇 Koshal won 1st place in state-level Under-14 Silambam competition!",
  "🎓 Congratulations to our alumni practicing Medicine (MBBS) & Defence (BSF) careers!",
  "🌟 Established on June 1, 1998 — Celebrating 28 years of academic legacy",
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
