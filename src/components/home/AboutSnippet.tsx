"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

export default function AboutSnippet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-[#fdf8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">
              About Our School
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1a1a5e] leading-tight mb-6">
              A Legacy of{" "}
              <span className="text-[#c9a227]">Academic Excellence</span>{" "}
              and Character
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              M.M. Matriculation Higher Secondary School was established and is run by the M.M. Public Charitable Trust. It functions with the noble vision of guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our curriculum is designed to challenge students intellectually while nurturing creativity, leadership, and civic responsibility — true to our motto:{" "}
              <span className="font-semibold text-[#1a1a5e]">Learn · Lead · Serve</span>.
            </p>

            {/* Quick Values */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {[
                { label: "Academic", value: "Excellence" },
                { label: "Holistic", value: "Development" },
                { label: "Strong", value: "Values" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 bg-white rounded-xl border border-[#c9a227]/20 shadow-sm">
                  <p className="text-[#1a1a5e] font-bold text-xs sm:text-sm">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1a1a5e] font-semibold text-sm hover:text-[#c9a227] transition-colors group"
            >
              Learn more about us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — Principal Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative mt-8 lg:mt-0"
          >
            <div className="bg-gradient-to-br from-[#1a1a5e] to-[#0d0d3b] rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden mb-6">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ background: "linear-gradient(135deg, #c9a227, transparent)" }} />

              <Quote size={32} className="text-[#c9a227] mb-4 opacity-80" />

              <p className="text-white/80 leading-relaxed text-sm italic mb-6">
                &quot;Education is not just about filling a bucket, but lighting a fire. At M.M.MATRICULATION HR.SEC SCHOOL, we inspire our students to dream big, work hard, and serve society with integrity and compassion. Every child who walks through our doors is our responsibility and our pride.&quot;
              </p>

              {/* Principal */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#c9a227] to-[#f0c040] flex items-center justify-center text-[#0d0d3b] font-bold text-lg flex-shrink-0">
                  P
                </div>
                <div>
                  <p className="font-semibold text-[#f0c040]">The Principal</p>
                  <p className="text-white/50 text-xs">M.M.MATRICULATION HR.SEC SCHOOL</p>
                  <p className="text-white/40 text-xs">Patemanagaram</p>
                </div>
              </div>
            </div>

            {/* Badge — inline on mobile, absolute on desktop */}
            <div className="flex lg:absolute lg:-bottom-4 lg:-left-4 justify-start">
              <div className="bg-[#c9a227] text-[#0d0d3b] rounded-xl p-4 shadow-lg inline-block">
                <p className="metric-number text-2xl">28</p>
                <p className="text-xs font-semibold tracking-wide">Years of Trust</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
