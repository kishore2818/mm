"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Heart, Award, ArrowRight, Quote, CheckCircle, GraduationCap, Trophy, Medal } from "lucide-react";

const timeline = [
  { year: "1998", title: "Foundation", desc: "M.M.MATRICULATION HR.SEC SCHOOL established on June 1, 1998, with approximately 38 KG students." },
  { year: "2008", title: "High School Upgradation", desc: "Recognition obtained from Government of Tamil Nadu for Class 10, upgrading to High School." },
  { year: "2010", title: "Higher Secondary Upgradation", desc: "Recognition obtained from Government of Tamil Nadu for Class 12, upgrading to Higher Secondary School." },
  { year: "2017", title: "International Skating Glory", desc: "Student Suman won first prize and secured a gold medal in the International Skating Championship in Bhutan." },
  { year: "2020", title: "District First Rank (Class 10)", desc: "Student Harini Priyanka scored 494/500, securing first rank at the Thoothukudi district level." },
  { year: "2022", title: "Block-Level Talent Expo", desc: "Inaugurated by District Educational Officer Mr. T.S. Prabhakumar, highly praising student talents." },
  { year: "2025", title: "State-Level Silambam", desc: "Student Srivarsha won second place in state-level Under-19 Silambam competition." },
  { year: "2026", title: "New District First Rank (Class 10)", desc: "Student Raveen scored 497/500, securing first rank at the Thoothukudi district level." },
];

const trustees = [
  { name: "MR. M. MOHAMED ALI", role: "Trustee" },
  { name: "HAJI. S. ABDUL KHADER", role: "Trustee" },
  { name: "HAJI. S. M. B. SHAHUL HAMEED", role: "Trustee" },
  { name: "MR. INDRAKUMAR", role: "Trustee" },
];

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue the highest standards in academics, sports, arts, and character." },
  { icon: Eye, title: "Vision", desc: "Guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives." },
  { icon: Heart, title: "Values", desc: "Rooted in integrity, compassion, and respect for every individual." },
  { icon: Award, title: "Achievement", desc: "Celebrating every student's unique talents and celebrating collective success." },
];

export default function AboutClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-12 sm:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #060622, #0d0d3b, #1a1a5e)" }}>
        <div className="absolute inset-0">
          <Image src="/images/campus-building-1.jpeg" alt="M.M.MATRICULATION HR.SEC SCHOOL Building" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060622]/80 to-[#1a1a5e]/90" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a227] text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-4 shadow-black drop-shadow-md">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-6xl font-bold text-white mb-3 sm:mb-6 drop-shadow-xl">
            About Our <span style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>School</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Three decades of shaping young minds, building character, and creating leaders who Learn, Lead, and Serve.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-sm border border-[#c9a227]/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-[#c9a227]" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-bold text-[#1a1a5e] mb-1 sm:mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{v.desc}</p>
                </motion.div>
              );
            })}
            {/* Principal Message card spans full row */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="col-span-2 lg:col-span-4 bg-gradient-to-br from-[#1a1a5e] to-[#0d0d3b] rounded-2xl p-4 sm:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-full opacity-10"
                style={{ background: "radial-gradient(circle, #c9a227, transparent)" }} />
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center relative z-10">
                <div>
                  <Quote size={28} className="text-[#c9a227] mb-3 sm:mb-5 opacity-70 sm:w-10 sm:h-10" />
                  <p className="text-white/80 text-sm sm:text-lg leading-relaxed italic mb-4 sm:mb-6">
                    &quot;Education at M.M.MATRICULATION HR.SEC SCHOOL is not confined to textbooks. We build young men and women who are curious, compassionate, and courageous — ready to make a difference in the world.&quot;
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#c9a227] to-[#f0c040] flex items-center justify-center text-[#0d0d3b] font-bold text-base sm:text-xl">
                      P
                    </div>
                    <div>
                      <p className="text-[#f0c040] font-bold text-xs sm:text-base">The Principal</p>
                      <p className="text-white/50 text-[11px] sm:text-sm">M.M.MATRICULATION HR.SEC SCHOOL</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-4">
                  {["District rank holders every year", "100% board pass rate consistently", "Strong alumni network across India", "Holistic development programs"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 sm:gap-3 text-white/70 text-xs sm:text-sm">
                      <CheckCircle size={14} className="text-[#c9a227] flex-shrink-0 sm:w-4 sm:h-4" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* M.M. Public Charitable Trust & Board of Trustees */}
      <section className="py-10 sm:py-20 bg-white border-t border-[#c9a227]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#1a1a5e]/5 text-[#1a1a5e] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-4 border border-[#1a1a5e]/10">
              Management &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">
              M.M. Public Charitable Trust
            </h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-600 text-xs sm:text-lg leading-relaxed font-medium">
              M.M. Matriculation Higher Secondary School was established and is run by the M.M. Public Charitable Trust. It functions with the noble vision of guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {trustees.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#fdf8f0] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-[#c9a227]/25 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center text-[#c9a227] font-bold text-sm sm:text-xl mb-2 sm:mb-4 shadow-md ring-2 ring-[#c9a227]/30">
                  {t.name.replace(/^(MR\.|HAJI\.)\s*/i, '').charAt(0)}
                </div>
                <div>
                  <h3 className="text-xs sm:text-lg font-bold text-[#1a1a5e] mb-0.5 sm:mb-1 leading-snug">{t.name}</h3>
                  <p className="text-[#c9a227] font-bold text-[10px] sm:text-xs uppercase tracking-wider">{t.role}</p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#c9a227]/15 w-full text-center">
                  <span className="text-[9px] sm:text-[11px] text-gray-500 font-medium">M.M. Public Charitable Trust</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Milestones</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]">Our Journey</h2>
            <div className="w-14 h-1 bg-[#c9a227] mx-auto rounded-full mt-4" />
          </div>

          {/* ── Mobile: single-column stack ── Desktop: alternating left/right ── */}
          <div className="relative">
            {/* Vertical line — hidden on mobile, shown on sm+ */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a227] via-[#f0c040] to-transparent" />

            <div className="flex flex-col gap-5 sm:gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center
                    sm:gap-8
                    ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}
                  `}
                >
                  {/* Card — full width on mobile, half on desktop */}
                  <div className={`
                    w-full
                    sm:flex-1
                    ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}
                  `}>
                    <div className="bg-[#fdf8f0] rounded-2xl p-4 sm:p-5 border border-[#c9a227]/20 w-full sm:inline-block sm:max-w-[280px]">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c9a227]/15 text-[#0d0d3b] text-xs font-bold mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-[#1a1a5e] font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot — hidden on mobile */}
                  <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#c9a227] border-4 border-white shadow-md z-10 flex-shrink-0" />

                  {/* Empty half on desktop */}
                  <div className="hidden sm:block sm:flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni & Achievers */}
      <section className="py-20 bg-[#fdf8f0] border-t border-[#c9a227]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Pride of M.M.MATRICULATION HR.SEC SCHOOL</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]">Notable Alumni & Achievers</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mt-4" />
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 sm:gap-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 hide-scrollbar">
            {/* Medical Professionals */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1a1a5e]/5 flex items-center justify-center mb-6 text-[#1a1a5e]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a5e] mb-4">Medical Professionals</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our graduates have successfully pursued careers in medicine:
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span><strong>Ramsarma & Karthika</strong> — Completed MBBS, currently serving as government doctors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span><strong>Pavithra & Poorna Kavitha</strong> — Practicing dental medicine as dentists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span><strong>Lakshmi</strong> — Completed Allopathic medicine, active practicing doctor.</span>
                </li>
              </ul>
            </div>

            {/* Defence Personnel */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center mb-6 text-[#c9a227]">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a5e] mb-4">Defence Personnel</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Students who chose the path of serving the nation:
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span><strong>Gowtham</strong> — Serving as a Commando in the Border Security Force (BSF).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span><strong>Venkatesh</strong> — Serving as a Commando in the Border Security Force (BSF).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span><strong>Rajesh Kanna</strong> — Serving as a Commando in the Border Security Force (BSF).</span>
                </li>
              </ul>
            </div>

            {/* Global & Engineering Careers */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1a1a5e]/5 flex items-center justify-center mb-6 text-[#1a1a5e]">
                <Medal size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a5e] mb-4">Engineering & Global Careers</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our legacy stretches across international borders and high-tech industries:
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span>Many alumni are employed in high-ranking engineering and tech positions across India and Arab countries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] font-bold">•</span>
                  <span>Strong network of alumni mentoring current students in higher education choices.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Decorated Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]">Awards & Recognitions</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mt-4" />
          </div>

          {/* Recent Award Posters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-[#1a1a5e]/5 aspect-[4/5] md:aspect-square flex flex-col">
              <div className="relative w-full h-full flex-1 min-h-0">
                <Image src="/images/award-kamaraj-college.jpeg" alt="Speech & Drawing Competition Award" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 mt-auto">
                <h3 className="font-bold text-lg text-[#1a1a5e] mb-2">State Level Speech & Drawing</h3>
                <p className="text-gray-600 text-sm">Vaseela Farhath (2nd Prize Speech), Akshaya & Afia (Drawing) at Kamaraj College.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-[#1a1a5e]/5 aspect-[4/5] md:aspect-square flex flex-col">
              <div className="relative w-full h-full flex-1 min-h-0">
                <Image src="/images/award-kamaraj-ceremony.jpg" alt="Kamaraj College Inter-School Competition Ceremony" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover p-4 rounded-t-2xl" />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 mt-auto">
                <h3 className="font-bold text-lg text-[#1a1a5e] mb-2">Kamaraj College Award Ceremony</h3>
                <p className="text-gray-600 text-sm">Vaseela Farhath and Afia receiving their certificates and awards on stage at Kamaraj College.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-[#1a1a5e]/5 aspect-[4/5] md:aspect-square flex flex-col">
              <div className="relative w-full h-full flex-1 min-h-0">
                <Image src="/images/award-silambam.jpeg" alt="State Level Silambam Award" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
              </div>
              <div className="p-6 bg-white border-t border-gray-100 mt-auto">
                <h3 className="font-bold text-lg text-[#1a1a5e] mb-2">State Level Silambam Championship</h3>
                <p className="text-gray-600 text-sm">Student S.N. Kosal secured First Place under 14 category for Staff Fencing.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {[
              { year: "2008 & 2009", title: "Best Yoga Training Award", organization: "Swami Vivekananda Kendra" },
              { year: "2010", title: "Outstanding Nurturing in Essay Writing", organization: "LIC" },
              { year: "2012", title: "Mahaveer Yoga Award", organization: "Honoured for excellence in Yoga" },
              { year: "2013", title: "District-level Best Yoga Training", organization: "Yoga Training Board" },
              { year: "2016", title: "State First Prize & Best School Award", organization: "Computer Education Talent Exam (Bharathidasan University, Trichy)" },
              { year: "2024", title: "Ideal School Award", organization: "Ideal Talent Hunt Board" },
              { year: "2025", title: "Mentoring Best Students in Essay Writing", organization: "Kamaraj College, Thoothukudi" },
              { year: "2025", title: "Best School Award", organization: "Write Wiz Handwriting Program" },
              { year: "2025", title: "Best Achiever Award & Record", organization: "Rifle Shooting Camp & Thamirabarani Book of World Records Award" },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#fdf8f0]/40 border border-[#c9a227]/10 flex flex-col justify-between group hover:border-[#c9a227]/40 hover:bg-[#fdf8f0] transition-all"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/15 text-[#0d0d3b] text-xs font-bold mb-3">{award.year}</span>
                  <h4 className="font-bold text-[#1a1a5e] mb-1 group-hover:text-[#c9a227] transition-colors">{award.title}</h4>
                </div>
                <p className="text-gray-500 text-xs mt-2 border-t border-[#c9a227]/10 pt-2">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 bg-[#fdf8f0] border-t border-[#c9a227]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Student Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]">Clubs &amp; Societies</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mt-4" />
            <p className="text-gray-500 text-base max-w-2xl mx-auto mt-5 leading-relaxed">
              Beyond academics, M.M.MATRICULATION HR.SEC SCHOOL fosters holistic growth through active student clubs. Each club nurtures a unique set of skills — from language and culture to career readiness — right here on our campus in Patemanagaram.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 sm:gap-8 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 hide-scrollbar">
            {/* M.M. Career Guidance Club */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0 }}
              className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden border border-[#c9a227]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center justify-center py-10 bg-gradient-to-br from-[#e8f8f0] to-[#d0f0e0] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #00b060 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative w-36 h-36">
                  <Image
                    src="/images/club-career-guidance.jpeg"
                    alt="M.M. Career Guidance Club"
                    fill
                    sizes="144px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1a1a5e]/8 text-[#1a1a5e] text-[10px] font-bold tracking-widest uppercase mb-3">Career &amp; Guidance</span>
                <h3 className="text-xl font-bold text-[#1a1a5e] mb-3">M.M. Career Guidance Club</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  The Career Guidance Club empowers students to explore future career paths with confidence. Through workshops, expert talks, career fairs, and one-on-one mentoring sessions held at our Patemanagaram campus, students gain clarity on higher education options, competitive exams, and professional fields — from medicine and engineering to entrepreneurship and public service.
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                  {["Career Workshops", "Expert Talks", "Higher Education Guidance", "Aptitude Training"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#fdf8f0] border border-[#c9a227]/25 text-[#0d0d3b] text-[10px] font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* M.M. Tamil Thendral Club */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden border border-[#c9a227]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center justify-center py-10 bg-gradient-to-br from-[#fff4e0] to-[#ffe5b0] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #c9a227 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative w-36 h-36">
                  <Image
                    src="/images/club-tamil-thendral.jpeg"
                    alt="M.M. Tamil Thendral Club"
                    fill
                    sizes="144px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/10 text-[#0d0d3b] text-[10px] font-bold tracking-widest uppercase mb-3">Language &amp; Culture</span>
                <h3 className="text-xl font-bold text-[#1a1a5e] mb-3">M.M. Tamil Thendral Club</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  The Tamil Thendral Club celebrates the richness of Tamil language, literature, and culture. Active on our school campus in Patemanagaram, the club organises Tamil essay competitions, poetry recitals, elocution contests, folk performances, and classical arts events. It keeps the proud heritage of Tamil Nadu alive in the hearts of our students and strengthens their mother tongue proficiency.
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                  {["Tamil Essay Competitions", "Poetry Recitals", "Classical Arts", "Folk Performances"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#fdf8f0] border border-[#c9a227]/25 text-[#0d0d3b] text-[10px] font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* M.M. Words Worth Club */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-3xl overflow-hidden border border-[#c9a227]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center justify-center py-10 bg-gradient-to-br from-[#edffd0] to-[#d4f7a0] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #4caf50 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative w-36 h-36">
                  <Image
                    src="/images/club-wordsworth.jpeg"
                    alt="M.M. Words Worth Club"
                    fill
                    sizes="144px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1a1a5e]/8 text-[#1a1a5e] text-[10px] font-bold tracking-widest uppercase mb-3">English &amp; Literary</span>
                <h3 className="text-xl font-bold text-[#1a1a5e] mb-3">M.M. Words Worth Club</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  The Words Worth Club is dedicated to developing English language skills, literary appreciation, and expressive communication. Based at our Patemanagaram campus, the club hosts spelling bees, creative writing challenges, debate sessions, book reviews, and English drama performances. It has consistently produced award-winning essayists and public speakers who represent our school at district and state-level competitions.
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                  {["Spelling Bees", "Creative Writing", "Debate Sessions", "English Drama"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#fdf8f0] border border-[#c9a227]/25 text-[#0d0d3b] text-[10px] font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Club location note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#1a1a5e]/5 to-[#c9a227]/5 border border-[#c9a227]/15 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          >
            <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d0d3b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="font-bold text-[#1a1a5e] text-sm">All clubs operate within our campus at Patemanagaram, Thoothukudi District, Tamil Nadu.</p>
              <p className="text-gray-500 text-sm mt-1">Club activities are conducted during school hours and on designated activity days throughout the academic year.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a5e] to-[#0d0d3b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
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
