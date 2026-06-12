"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const leadership = [
  { name: "Dr. A. Ramasamy", role: "Founder & Chairman", exp: "40+ Years Exp", desc: "Visionary educator with a lifelong dedication to uplifting rural education." },
  { name: "Mrs. K. Saraswathi", role: "Principal", exp: "25+ Years Exp", desc: "Award-winning administrator focusing on holistic student development." },
];

const departments = [
  { name: "Department of Science", head: "Mr. V. Kumar", staff: 12 },
  { name: "Department of Mathematics", head: "Mrs. R. Latha", staff: 8 },
  { name: "Department of Languages", head: "Mr. S. Raj", staff: 10 },
  { name: "Department of Commerce", head: "Mrs. P. Meena", staff: 6 },
  { name: "Physical Education", head: "Mr. K. Pandian", staff: 4 },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-[#0d0d3b] text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Our Mentors</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Faculty & Leadership
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Meet our team of dedicated educators who bring passion, experience, and innovation to every classroom.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#c9a227]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-[#0d0d3b]">
            {[
              { icon: GraduationCap, stat: "80+", label: "Qualified Teachers" },
              { icon: BookOpen, stat: "15:1", label: "Student-Teacher Ratio" },
              { icon: Award, stat: "10+", label: "Ph.D. Holders" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center">
                  <Icon size={28} className="mb-3 opacity-80" />
                  <p className="text-4xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.stat}</p>
                  <p className="text-sm font-semibold uppercase tracking-wider">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a5e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>School Leadership</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Mr. Suresh Kumar", role: "Secretary", image: "/images/secretary.png", desc: "Overseeing administration and ensuring our institution meets the highest educational standards." },
              { name: "Dr. Smita Sharma", role: "Principal", image: "/images/principal.png", desc: "Award-winning administrator focusing on holistic student development and academic excellence." },
              { name: "Mr. R.K. Sharma", role: "Vice Principal", image: "/images/vice_principal.png", desc: "Dedicated to student welfare, discipline, and fostering a positive learning environment." }
            ].map((leader, i) => (
              <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#fdf8f0] p-8 rounded-2xl border border-[#c9a227]/20 text-center hover:shadow-xl transition-all flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 ring-2 ring-[#c9a227]/30">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a5e] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{leader.name}</h3>
                <p className="text-[#c9a227] font-semibold text-sm mb-4 uppercase tracking-wider">{leader.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a5e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Academic Departments</h2>
            <p className="text-gray-500">Structured for specialized learning and mentorship.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div key={dept.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-[#1a1a5e] text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{dept.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">HOD</span>
                    <span className="font-medium text-[#1a1a5e]">{dept.head}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-500">Faculty Count</span>
                    <span className="font-medium text-[#c9a227]">{dept.staff} Teachers</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
