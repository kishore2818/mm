"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Heart, Award, ArrowRight, Quote, CheckCircle } from "lucide-react";

const timeline = [
  { year: "1990", title: "Foundation", desc: "MM Matric School was founded with a vision to provide quality education to the local community." },
  { year: "1998", title: "Higher Secondary Added", desc: "Expanded to include XI & XII standards, offering Science and Commerce streams." },
  { year: "2005", title: "State Award", desc: "Received the State Best School Award for academic excellence and infrastructure." },
  { year: "2012", title: "Digital Classrooms", desc: "Introduced smart boards and digital learning tools across all classrooms." },
  { year: "2020", title: "Online Learning", desc: "Seamlessly transitioned to online learning during the pandemic with zero disruption." },
  { year: "2024", title: "New Science Block", desc: "Inaugurated a state-of-the-art science block with advanced laboratory facilities." },
];

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue the highest standards in academics, sports, arts, and character." },
  { icon: Eye, title: "Vision", desc: "Preparing students not just for exams, but for life's challenges and opportunities." },
  { icon: Heart, title: "Values", desc: "Rooted in integrity, compassion, and respect for every individual." },
  { icon: Award, title: "Achievement", desc: "Celebrating every student's unique talents and celebrating collective success." },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #060622, #0d0d3b, #1a1a5e)" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Our <span style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>School</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-2xl mx-auto">
            Three decades of shaping young minds, building character, and creating leaders who Learn, Lead, and Serve.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[#c9a227]/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-[#c9a227]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a5e] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
            {/* Principal Message card spans full row on lg */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="lg:col-span-3 bg-gradient-to-br from-[#1a1a5e] to-[#0d0d3b] rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-full opacity-10"
                style={{ background: "radial-gradient(circle, #c9a227, transparent)" }} />
              <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <div>
                  <Quote size={40} className="text-[#c9a227] mb-5 opacity-70" />
                  <p className="text-white/80 text-lg leading-relaxed italic mb-6">
                    &quot;Education at MM Matric is not confined to textbooks. We build young men and women who are curious, compassionate, and courageous — ready to make a difference in the world.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a227] to-[#f0c040] flex items-center justify-center text-[#0d0d3b] font-bold text-xl">
                      P
                    </div>
                    <div>
                      <p className="text-[#f0c040] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>The Principal</p>
                      <p className="text-white/50 text-sm">MM Matric Higher Secondary School</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {["State rank holders every year", "100% board pass rate consistently", "Strong alumni network across India", "Holistic development programs"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                      <CheckCircle size={16} className="text-[#c9a227] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Milestones</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a227] via-[#f0c040] to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12 }}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-[#fdf8f0] rounded-2xl p-5 border border-[#c9a227]/15 inline-block max-w-xs">
                      <p className="text-[#c9a227] font-bold text-sm mb-1">{item.year}</p>
                      <h3 className="text-[#1a1a5e] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a227] border-4 border-white shadow-lg" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a5e] to-[#0d0d3b]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Join Our Family?
          </h2>
          <p className="text-white/60 mb-8">Start your child&apos;s journey toward excellence today.</p>
          <Link href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0d0d3b] text-sm group transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}>
            Apply for Admission <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
