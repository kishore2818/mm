"use client";

import { motion } from "framer-motion";
import { BookOpen, Beaker, Calculator, Globe, Monitor, PenTool } from "lucide-react";
import Link from "next/link";

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
  { icon: Beaker, name: "Science", desc: "Physics, Chemistry, and Biology with fully equipped labs." },
  { icon: Globe, name: "Languages", desc: "Tamil, English, and Hindi focusing on communication." },
  { icon: Monitor, name: "Computer Science", desc: "Programming, digital literacy, and modern tech skills." },
  { icon: BookOpen, name: "Social Sciences", desc: "History, Geography, and Civics for global awareness." },
  { icon: PenTool, name: "Commerce & Arts", desc: "Accountancy, Business Studies, and Economics." },
];

export default function AcademicsClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#0d0d3b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Academic Excellence</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Curriculum
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive, student-centric curriculum designed to ignite curiosity and foster lifelong learning.
          </p>
        </div>
      </section>

      {/* Educational Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a5e] mb-4">Educational Stages</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, i) => (
              <motion.div key={stage.id} id={stage.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#fdf8f0] p-8 rounded-2xl border border-[#c9a227]/20 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="text-[#c9a227] font-semibold text-sm mb-2">{stage.grades}</div>
                <h3 className="text-xl font-bold text-[#1a1a5e] mb-4">{stage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-[#fdf8f0]" id="departments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a5e] mb-4">Academic Departments</h2>
            <p className="text-gray-500">Dedicated faculty across all major disciplines.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <motion.div key={dept.name}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center flex-shrink-0 text-[#c9a227]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a5e] mb-1">{dept.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{dept.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Streams for XI & XII */}
      <section className="py-20 bg-[#0d0d3b] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Higher Secondary Streams (XI & XII)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-left">
              <h3 className="text-[#f0c040] text-xl font-bold mb-4">Science Stream</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" /> Physics, Chemistry, Biology, Maths</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" /> Physics, Chemistry, Comp Sci, Maths</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" /> Physics, Chemistry, Biology, Zoology</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-left">
              <h3 className="text-[#f0c040] text-xl font-bold mb-4">Commerce Stream</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" /> Accountancy, Commerce, Economics, Comp Sci</li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#c9a227] to-[#f0c040] text-[#0d0d3b] font-semibold rounded-full hover:scale-105 transition-transform">
              Apply for Class XI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
