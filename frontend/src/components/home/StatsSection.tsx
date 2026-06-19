"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, Users, Trophy } from "lucide-react";

const stats = [
  { value: 28, suffix: "", label: "Years of Educational Legacy", icon: Award },
  { value: 660, suffix: "+", label: "HSC Graduates / Alumni", icon: GraduationCap },
  { value: 50, suffix: "", label: "Dedicated Educators", icon: Users },
  { value: 100, suffix: "%", label: "Board Exam Pass Rate", icon: Trophy },
];

function CountUp({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Easing function: easeOutExpo for smooth deceleration
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      
      const currentCount = Math.floor(easeOutExpo(progressPercent) * target);
      setCount(currentCount);

      if (progressPercent < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target, start]);

  return <span>{count.toLocaleString()}</span>;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      ref={ref}
      className="text-2xl sm:text-3xl font-mono font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#1a1a5e] to-[#c9a227]"
    >
      <CountUp target={value} start={isInView} />
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Custom border positioning for mobile (2 cols) vs desktop (4 cols) bento layout
  const borderClasses = [
    "border-r border-b border-white/[0.08] lg:border-b-0", // Index 0
    "border-b border-white/[0.08] lg:border-b-0 lg:border-r", // Index 1
    "border-r border-white/[0.08]", // Index 2
    "border-none", // Index 3
  ];

  return (
    <section ref={ref} className="py-8 sm:py-10 relative overflow-hidden bg-gradient-to-b from-[#060622] via-[#0d0d3b] to-[#060622]">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-[#c9a227]/3 blur-[60px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-[#1a1a5e]/15 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md shadow-2xl overflow-hidden grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative flex flex-col items-center justify-center py-5 px-3 sm:py-6 sm:px-4 hover:bg-white/[0.03] transition-all duration-300 ${borderClasses[i]}`}
              >
                {/* Icon Container */}
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#f0c040] mb-2.5 group-hover:bg-[#c9a227]/10 group-hover:border-[#c9a227]/20 group-hover:scale-105 transition-all duration-300">
                  <Icon size={18} className="stroke-[1.75]" />
                </div>

                {/* Count and Suffix */}
                <div className="mb-1 text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Professional Label */}
                <p className="text-white/60 text-[10px] sm:text-[11px] font-semibold tracking-wider text-center group-hover:text-white transition-colors duration-300 max-w-[150px]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
