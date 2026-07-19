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
          <Image src="/images/campus-building-2.jpeg" alt="MM School Campus" fill priority sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d3b]/60 to-[#0d0d3b]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-4">Our Mentors</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-6">
            Faculty &amp; Leadership
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
              alt="MM Matric School Staff Group Photo"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d0d3b]/80 to-transparent p-6 z-10">
              <p className="text-white font-semibold text-sm">Our dedicated faculty &amp; staff — the backbone of MM Matric Higher Secondary School, Patemanagaram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">School Leadership</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {[
              { name: "Mr. Suresh Kumar", role: "Secretary", image: "/images/secretary.png", desc: "Overseeing administration and ensuring our institution meets the highest educational standards." },
              { name: "Dr. Smita Sharma", role: "Principal", image: "/images/principal.png", desc: "Award-winning administrator focusing on holistic student development and academic excellence." },
              { name: "Mr. R.K. Sharma", role: "Vice Principal", image: "/images/vice_principal.png", desc: "Dedicated to student welfare, discipline, and fostering a positive learning environment." },
            ].map((leader, i) => (
              <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`bg-[#fdf8f0] p-4 sm:p-8 rounded-2xl border border-[#c9a227]/20 text-center hover:shadow-xl transition-all flex flex-col items-center ${i === 2 ? 'col-span-2 sm:col-span-1 max-w-[65%] sm:max-w-none mx-auto w-full' : ''}`}>
                <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg mb-3 sm:mb-6 ring-2 ring-[#c9a227]/30">
                  <Image src={leader.image} alt={leader.name} fill sizes="(max-width: 768px) 80px, 128px" className="object-cover" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-[#1a1a5e] mb-1 leading-tight">{leader.name}</h3>
                <p className="text-[#c9a227] font-semibold text-[9px] sm:text-sm mb-2 sm:mb-4 uppercase tracking-wider">{leader.role}</p>
                <p className="text-gray-600 text-[9px] sm:text-sm leading-snug sm:leading-relaxed">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
