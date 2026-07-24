"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function FacultyClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-12 sm:py-24 bg-[#0d0d3b] text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/campus-building-2.jpeg" alt="M.M.MATRICULATION HR.SEC SCHOOL Campus" fill priority sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d3b]/60 to-[#0d0d3b]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-4">Our Mentors</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-6">
            Faculty &amp; Board of Trustees
          </h1>
          <p className="text-white/60 text-sm sm:text-lg max-w-2xl mx-auto">
            Meet our team of dedicated educators who bring passion, experience, and innovation to every classroom.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 sm:py-12 bg-[#c9a227]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-8 text-center text-[#0d0d3b]">
            {[
              { icon: GraduationCap, stat: "50", label: "Dedicated Teachers" },
              { icon: BookOpen, stat: "28", label: "Support & Non-Teaching Staff" },
              { icon: Award, stat: "4", label: "Founding Teachers" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 mb-1.5 sm:mb-3 opacity-80" />
                  <p className="metric-number text-2xl sm:text-4xl text-[#0d0d3b] mb-0.5 sm:mb-1">{item.stat}</p>
                  <p className="text-[9px] sm:text-sm font-semibold uppercase tracking-wider sm:tracking-wider leading-tight">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Staff Group Photo */}
      <section className="py-8 sm:py-14 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3">Our Team</p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a5e] mb-4 sm:mb-8">The People Behind Our Success</h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/staff-group.jpeg"
              alt="M.M.MATRICULATION HR.SEC SCHOOL Staff Group Photo"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d0d3b]/80 to-transparent p-6 z-10">
              <p className="text-white font-semibold text-sm">Our dedicated faculty &amp; staff — the backbone of M.M.MATRICULATION HR.SEC SCHOOL, Patemanagaram</p>
            </div>
          </div>
        </div>
      </section>

      {/* M.M. Public Charitable Trust & Board of Trustees */}
      <section className="py-12 sm:py-20 bg-[#fdf8f0] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a5e]/5 text-[#1a1a5e] text-xs font-bold tracking-widest uppercase mb-3 border border-[#1a1a5e]/10">
              Management &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1a1a5e] mb-3">
              Board of Trustees
            </h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mb-5" />
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
              M.M. Matriculation Higher Secondary School was established and is run by the M.M. Public Charitable Trust. It functions with the noble vision of guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {[
              { name: "MR. M. MOHAMED ALI", role: "Trustee" },
              { name: "HAJI. S. ABDUL KHADER", role: "Trustee" },
              { name: "HAJI. S. M. B. SHAHUL HAMEED", role: "Trustee" },
              { name: "MR. INDRAKUMAR", role: "Trustee" },
            ].map((trustee, i) => (
              <motion.div
                key={trustee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 sm:p-8 rounded-2xl border border-[#c9a227]/25 text-center hover:shadow-xl transition-all flex flex-col items-center justify-between"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center text-[#c9a227] font-bold text-lg sm:text-2xl mb-3 sm:mb-5 ring-2 sm:ring-4 ring-[#c9a227]/30 shadow-md">
                  {trustee.name.replace(/^(MR\.|HAJI\.)\s*/i, '').charAt(0)}
                </div>
                <div>
                  <h3 className="text-xs sm:text-lg font-bold text-[#1a1a5e] mb-1 leading-tight sm:leading-snug">{trustee.name}</h3>
                  <p className="text-[#c9a227] font-bold text-[10px] sm:text-xs uppercase tracking-wider">{trustee.role}</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#c9a227]/15 w-full text-center">
                  <span className="text-[9px] sm:text-xs text-gray-500 font-medium">M.M. Public Charitable Trust</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
