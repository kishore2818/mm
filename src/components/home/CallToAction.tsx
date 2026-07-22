"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "State Board & Matriculation curriculum",
  "Experienced and dedicated faculty",
  "Scholarship opportunities available",
  "Transport facility from nearby areas",
];

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#fcfbf9] to-[#f4ead2] border-t border-[#e8d9b5]/40"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #c9a227, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, #f0c040, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#0d0d3b 1px, transparent 1px), linear-gradient(90deg, #0d0d3b 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0d0d3b]/10 bg-[#0d0d3b]/5 text-[#0d0d3b] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <GraduationCap size={14} className="text-[#c9a227]" />
              Admissions Open 2026–27
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d3b] leading-tight mb-4">
              Begin Your{" "}
              <span className="bg-gradient-to-r from-[#1a1a5e] to-[#c9a227] bg-clip-text text-transparent">
                Journey
              </span>{" "}
              With Us
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Give your child the education they deserve at M.M.MATRICULATION HR.SEC SCHOOL. Secure their future with quality academics, strong values, and a nurturing environment.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <CheckCircle size={16} className="text-[#c9a227] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                id="cta-apply-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1a1a5e]/20 group bg-gradient-to-r from-[#1a1a5e] to-[#0d0d3b]"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                id="cta-contact-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#0d0d3b] text-sm border border-[#0d0d3b]/20 hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right — Admission Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white border border-[#e8d9b5]/60 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="font-playfair text-[#0d0d3b] font-bold text-xl mb-6">
                Admission Details
              </h3>

              {[
                { label: "Classes Available", value: "I to XII" },
                { label: "Medium of Instruction", value: "Tamil & English" },
                { label: "Board", value: "Tamil Nadu Matriculation" },
                { label: "Application Mode", value: "Walk-in / Online" },
                { label: "Academic Year", value: "June 2026 – March 2027" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="text-[#0d0d3b] font-semibold text-sm">{value}</span>
                </div>
              ))}

              <div className="mt-6 p-4 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/25">
                <p className="text-[#8a6800] text-xs font-bold mb-1">📅 Admission Deadline</p>
                <p className="text-gray-600 text-xs font-medium">Admissions close once seats are filled. Apply early to secure your spot.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
