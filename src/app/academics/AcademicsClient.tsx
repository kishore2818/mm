"use client";

import { motion } from "framer-motion";
import { BookOpen, Beaker, Calculator, Globe, Monitor, PenTool } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stages = [
  {
    id: "primary",
    title: "Primary School",
    grades: "Classes I – V",
    desc: "Focus on foundational literacy, numeracy, and environmental awareness through interactive learning.",
  },
  {
    id: "middle",
    title: "Middle School",
    grades: "Classes VI – VIII",
    desc: "Introduction to specialized subjects, lab work, and project-based learning to foster critical thinking.",
  },
  {
    id: "high",
    title: "High School",
    grades: "Classes IX – X",
    desc: "Rigorous academic preparation for board exams with comprehensive syllabus coverage and mock tests.",
  },
  {
    id: "higher",
    title: "Higher Secondary",
    grades: "Classes XI – XII",
    desc: "Specialized streams (Science & Commerce) preparing students for professional courses and higher education.",
  },
];

const departments = [
  { icon: Calculator, name: "Mathematics", desc: "Building strong analytical and problem-solving skills." },
  { icon: Beaker, name: "Science", desc: "Physics, Chemistry, Botany, and Zoology with fully equipped labs." },
  { icon: Globe, name: "Languages", desc: "Tamil, English, and Hindi focusing on communication." },
  { icon: Monitor, name: "Computer Science", desc: "Programming, digital literacy, and modern tech skills." },
  { icon: BookOpen, name: "Social Sciences", desc: "History, Geography, and Civics for global awareness." },
  { icon: PenTool, name: "Commerce & Arts", desc: "Accountancy, Business Studies, and Economics." },
];

export default function AcademicsClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-12 sm:py-24 bg-[#0d0d3b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-4">Academic Excellence</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">
            Our Curriculum
          </h1>
          <p className="text-white/60 text-sm sm:text-lg max-w-2xl mx-auto">
            A comprehensive, student-centric curriculum designed to ignite curiosity and foster lifelong learning.
          </p>
        </div>
      </section>

      {/* Educational Stages */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">Educational Stages</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stages.map((stage, i) => (
              <motion.div key={stage.id} id={stage.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-[#fdf8f0] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-[#c9a227]/20 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
                <div>
                  <div className="text-[#c9a227] font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{stage.grades}</div>
                  <h3 className="text-sm sm:text-xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">{stage.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-10 sm:py-20 bg-[#fdf8f0]" id="departments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">Academic Departments</h2>
            <p className="text-gray-500 text-xs sm:text-base">Dedicated faculty across all major disciplines.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <motion.div key={dept.name}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center flex-shrink-0 text-[#c9a227]">
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a5e] text-xs sm:text-base mb-1">{dept.name}</h3>
                    <p className="text-gray-500 text-[11px] sm:text-sm leading-snug sm:leading-relaxed">{dept.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Collaborations & Enrichment */}
      <section className="py-10 sm:py-20 bg-white border-t border-gray-100" id="collaborations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#1a1a5e]/5 text-[#1a1a5e] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 border border-[#1a1a5e]/10">
              Value Addition Programs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">Academic Collaborations &amp; Special Programs</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-base">
              Empowering our students through certified university associations and specialized skill development curricula.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-8 max-w-5xl mx-auto">
            {/* Bharathidasan University */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fdf8f0] p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-[#c9a227]/25 flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-6 hover:shadow-xl transition-all"
            >
              <div className="w-full sm:w-36 h-20 sm:h-28 relative flex-shrink-0 bg-white p-2 sm:p-3 rounded-lg sm:rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center">
                <Image
                  src="/images/iecd-bharathidasan-logo.png"
                  alt="IECD Bharathidasan University Logo"
                  fill
                  className="object-contain p-1.5 sm:p-2"
                />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#1a1a5e]/10 text-[#1a1a5e] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-1 sm:mb-2">Std 1 to Std 9</span>
                <h3 className="text-xs sm:text-xl font-bold text-[#1a1a5e] mb-1 sm:mb-2">Computer Education (IECD)</h3>
                <p className="text-gray-600 text-[11px] sm:text-sm leading-snug sm:leading-relaxed mb-2 sm:mb-3">
                  We are having computer education associated with <strong>IECD – Bharathidasan University, Trichy</strong> for students from Class 1 to Class 9 (Std 1 to Std 9).
                </p>
                <div className="text-[10px] sm:text-xs text-[#c9a227] font-semibold flex items-center gap-1">
                  ✓ Certified Skill Curriculum
                </div>
              </div>
            </motion.div>

            {/* Writewiz Handwriting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#fdf8f0] p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-[#c9a227]/25 flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-6 hover:shadow-xl transition-all"
            >
              <div className="w-full sm:w-36 h-20 sm:h-28 relative flex-shrink-0 bg-white p-2 sm:p-3 rounded-lg sm:rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center">
                <Image
                  src="/images/writewiz-logo.png"
                  alt="Writewiz Handwriting Logo"
                  fill
                  className="object-contain p-1.5 sm:p-2"
                />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#c9a227]/15 text-[#0d0d3b] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-1 sm:mb-2">Std LKG to Std 9</span>
                <h3 className="text-xs sm:text-xl font-bold text-[#1a1a5e] mb-1 sm:mb-2">Writewiz Handwriting Program</h3>
                <p className="text-gray-600 text-[11px] sm:text-sm leading-snug sm:leading-relaxed mb-2 sm:mb-3">
                  We are following <strong>Writewiz Handwriting</strong> from Class LKG to Class 9 (Std LKG to Std 9) to transform and refine handwriting.
                </p>
                <div className="text-[10px] sm:text-xs text-[#c9a227] font-semibold flex items-center gap-1">
                  ✓ Penmanship Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Groups in Higher Secondary (XI & XII) */}
      <section className="py-10 sm:py-20 bg-[#0d0d3b] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#c9a227]/20 text-[#f0c040] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3">
            Academic Combinations
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Groups in Higher Secondary (XI &amp; XII)</h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mb-8 sm:mb-12" />

          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto text-left">
            {[
              { group: "Group 1", subjects: "Maths – Physics – Chemistry – Biology", tag: "Bio-Maths" },
              { group: "Group 2", subjects: "Maths – Physics – Chemistry – Computer Science", tag: "Computer Science" },
              { group: "Group 3", subjects: "Physics – Chemistry – Botany – Zoology", tag: "Pure Science" },
              { group: "Group 4", subjects: "Commerce – Accountancy – Economics – Computer Applications", tag: "Commerce & Tech" },
            ].map((item) => (
              <div key={item.group} className="bg-white/5 border border-white/10 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:border-[#c9a227]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 mb-2 sm:mb-3">
                    <span className="text-[#f0c040] text-xs sm:text-sm font-bold uppercase tracking-wider">{item.group}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#c9a227]/20 text-[#f0c040] text-[9px] sm:text-[10px] font-semibold">{item.tag}</span>
                  </div>
                  <h3 className="text-white font-bold text-xs sm:text-lg leading-snug">{item.subjects}</h3>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 text-[10px] sm:text-xs text-white/50">
                  TN State Board
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <Link href="/admissions" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#c9a227] to-[#f0c040] text-[#0d0d3b] text-xs sm:text-sm font-semibold rounded-full hover:scale-105 transition-transform">
              Apply for Class XI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
