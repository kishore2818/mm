"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, BookOpen, Trophy, Users, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060622 0%, #0d0d3b 40%, #1a1a5e 70%, #1e1e70 100%)" }}>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }} />
        <motion.div animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, #f0c040, transparent 70%)" }} />
        <motion.div animate={{ x: [0, 20, 0], y: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #c9a227, transparent)" }} />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute h-px w-[200%] -rotate-12"
              style={{ top: `${15 + i * 20}%`, left: "-50%", background: "linear-gradient(90deg, transparent, #c9a227, transparent)" }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32">
        {/* Live badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 backdrop-blur-sm text-[#f0c040] text-xs font-medium tracking-widest uppercase mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0c040] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0c040]" />
          </span>
          Admissions Open 2025–26
        </motion.div>

        {/* Main heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            MM Matric
            <span className="block mt-1" style={{
              background: "linear-gradient(135deg, #c9a227 0%, #f0c040 40%, #ffd700 60%, #c9a227 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", animation: "shimmer 3s linear infinite",
            }}>Higher Secondary</span>
            <span className="block text-white/90 mt-1">School</span>
          </h1>
        </motion.div>

        {/* Location tag */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a227]/60" />
          <span className="text-[#c9a227]/70 text-xs tracking-[0.35em] uppercase">Pattanamangalam, Tamil Nadu</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a227]/60" />
        </motion.div>

        {/* Motto */}
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.65 }}
          className="flex items-center justify-center gap-5 mb-10">
          {["LEARN", "LEAD", "SERVE"].map((word, i) => (
            <div key={word} className="flex items-center gap-5">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f0c040] tracking-widest"
                style={{ fontFamily: "'Playfair Display', serif" }}>{word}</span>
              {i < 2 && <span className="text-[#c9a227]/40 text-2xl">·</span>}
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
          className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Nurturing brilliant minds and building tomorrow&apos;s leaders with academic excellence, holistic development, and deep moral values since 1990.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/admissions" id="hero-apply-btn"
            className="group relative px-8 py-4 rounded-full font-semibold text-[#0d0d3b] text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c9a227]/25"
            style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}>
            <span className="relative z-10">Apply for Admission</span>
          </Link>
          <Link href="/about" id="hero-about-btn"
            className="px-8 py-4 rounded-full font-semibold text-white/80 text-sm border border-white/15 hover:border-[#c9a227]/50 hover:text-white hover:bg-white/5 transition-all duration-300">
            Explore Our School →
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { icon: Users, stat: "1200+", label: "Students" },
            { icon: BookOpen, stat: "80+", label: "Faculty" },
            { icon: Trophy, stat: "State", label: "Toppers" },
            { icon: Star, stat: "35+", label: "Years" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Icon size={16} className="text-[#c9a227]" />
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{stat}</span>
              <span className="text-white/40 text-xs">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#c9a227]" />
        </motion.div>
        <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
