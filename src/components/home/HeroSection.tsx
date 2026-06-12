"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, BookOpen, Trophy, Users, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060622]">

      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Sample stock video of school/students */}
          <source src="https://videos.pexels.com/video-files/4144186/4144186-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>

        {/* Diagonal accent lines for styling */}
        <div className="absolute inset-0 opacity-20 overflow-hidden mix-blend-overlay">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute h-px w-[200%] -rotate-12"
              style={{ top: `${15 + i * 20}%`, left: "-50%", background: "linear-gradient(90deg, transparent, #c9a227, transparent)" }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-40 sm:py-48">
        {/* Live badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/15 backdrop-blur-md text-[#f0c040] text-sm font-medium tracking-widest uppercase mb-10">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0c040] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f0c040]" />
          </span>
          Admissions Open 2025–26
        </motion.div>

        {/* Main heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            MM Matric
            <span className="block mt-2" style={{
              background: "linear-gradient(135deg, #c9a227 0%, #f0c040 40%, #ffd700 60%, #c9a227 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", animation: "shimmer 3s linear infinite",
            }}>Higher Secondary</span>
            <span className="block text-white/95 mt-2">School</span>
          </h1>
        </motion.div>

        {/* Location tag */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a227]/80" />
          <span className="text-[#c9a227]/90 text-sm tracking-[0.35em] uppercase font-medium">Pattanamangalam, Tamil Nadu</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a227]/80" />
        </motion.div>

        {/* Motto */}
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.65 }}
          className="flex items-center justify-center gap-6 mb-14">
          {["LEARN", "LEAD", "SERVE"].map((word, i) => (
            <div key={word} className="flex items-center gap-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f0c040] tracking-widest drop-shadow-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}>{word}</span>
              {i < 2 && <span className="text-[#c9a227]/50 text-3xl">·</span>}
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
          className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-16 font-light drop-shadow-md">
          Nurturing brilliant minds and building tomorrow&apos;s leaders with academic excellence, holistic development, and deep moral values since 1990.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Link href="/admissions" id="hero-apply-btn"
            className="group relative px-10 py-5 rounded-full font-bold text-[#0d0d3b] text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#c9a227]/40"
            style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}>
            <span className="relative z-10 tracking-wide uppercase">Apply for Admission</span>
          </Link>
          <Link href="/about" id="hero-about-btn"
            className="px-10 py-5 rounded-full font-semibold text-white text-base border-2 border-white/30 hover:border-[#c9a227]/70 hover:text-[#f0c040] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm tracking-wide">
            Explore Our School →
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Users, stat: "1200+", label: "Students" },
            { icon: BookOpen, stat: "80+", label: "Faculty" },
            { icon: Trophy, stat: "State", label: "Toppers" },
            { icon: Star, stat: "35+", label: "Years" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl bg-black/30 border border-white/15 backdrop-blur-md shadow-xl hover:border-[#c9a227]/50 transition-colors duration-300">
              <Icon size={20} className="text-[#f0c040]" />
              <span className="text-white font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{stat}</span>
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 rounded-full bg-[#f0c040]" />
        </motion.div>
        <span className="text-white/50 text-[11px] font-bold tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
