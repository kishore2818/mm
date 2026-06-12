"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 35, suffix: "+", label: "Years of Excellence" },
  { value: 1200, suffix: "+", label: "Students Enrolled" },
  { value: 80, suffix: "+", label: "Qualified Faculty" },
  { value: 98, suffix: "%", label: "Board Pass Rate" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="text-4xl sm:text-5xl font-bold text-[#f0c040]"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountUp target={value} />{suffix}
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </motion.span>
  );
}

function CountUp({ target }: { target: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {target}
    </motion.span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-[#0d0d3b] via-[#1a1a5e] to-[#0d0d3b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-0.5 bg-[#c9a227] mx-auto mb-2 group-hover:w-16 transition-all duration-300" />
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
