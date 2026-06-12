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
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0d3b 0%, #1a1a5e 60%, #252580 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f0c040, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #c9a227, transparent)" }} />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 text-[#f0c040] text-xs tracking-widest uppercase mb-6">
              <GraduationCap size={14} />
              Admissions Open 2025–26
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Begin Your{" "}
              <span style={{
                background: "linear-gradient(90deg, #c9a227, #f0c040)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Journey
              </span>{" "}
              With Us
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Give your child the education they deserve at MM Matric Higher Secondary School. Secure their future with quality academics, strong values, and a nurturing environment.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle size={16} className="text-[#c9a227] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                id="cta-apply-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#0d0d3b] text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#c9a227]/20 group"
                style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                id="cta-contact-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm border border-white/20 hover:border-[#c9a227]/60 hover:text-[#f0c040] transition-all duration-300"
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3
                className="text-[#f0c040] font-bold text-xl mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Admission Details
              </h3>

              {[
                { label: "Classes Available", value: "I to XII" },
                { label: "Medium of Instruction", value: "Tamil & English" },
                { label: "Board", value: "Tamil Nadu Matriculation" },
                { label: "Application Mode", value: "Walk-in / Online" },
                { label: "Academic Year", value: "June 2025 – March 2026" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                  <span className="text-white/50 text-sm">{label}</span>
                  <span className="text-white font-medium text-sm">{value}</span>
                </div>
              ))}

              <div className="mt-6 p-4 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/20">
                <p className="text-[#f0c040] text-xs font-semibold mb-1">📅 Admission Deadline</p>
                <p className="text-white/60 text-xs">Admissions close once seats are filled. Apply early to secure your spot.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
