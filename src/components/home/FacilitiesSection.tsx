"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, FlaskConical, Laptop, Trophy, Bus, Utensils,
  Music, HeartPulse
} from "lucide-react";

const facilities = [
  {
    icon: BookOpen,
    title: "Library",
    description: "10,000+ books, digital resources, and a quiet study environment for every learner.",
    color: "#1a1a5e",
  },
  {
    icon: FlaskConical,
    title: "Science Labs",
    description: "Fully equipped Physics, Chemistry, and Biology labs for hands-on experiments.",
    color: "#c9a227",
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Modern computers with high-speed internet and programming tools for tech education.",
    color: "#1a1a5e",
  },
  {
    icon: Trophy,
    title: "Sports Complex",
    description: "Cricket ground, basketball court, badminton, chess, and kabaddi facilities.",
    color: "#c9a227",
  },
  {
    icon: Bus,
    title: "School Transport",
    description: "Safe and punctual GPS-tracked buses covering all nearby areas and villages.",
    color: "#1a1a5e",
  },
  {
    icon: Utensils,
    title: "Canteen",
    description: "Hygienic, nutritious meals prepared fresh daily under supervision.",
    color: "#c9a227",
  },
  {
    icon: Music,
    title: "Arts & Culture",
    description: "Music, dance, drama, and fine arts programs to foster creativity.",
    color: "#1a1a5e",
  },
  {
    icon: HeartPulse,
    title: "Medical Room",
    description: "On-site nurse and first-aid facility for student health and safety.",
    color: "#c9a227",
  },
];

export default function FacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">
            World-Class Infrastructure
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Facilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a227] to-[#f0c040] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            const isGold = facility.color === "#c9a227";
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 cursor-default
                  hover:-translate-y-2 hover:shadow-xl ${i >= 4 ? "hidden sm:block" : ""}
                  ${isGold
                    ? "bg-gradient-to-br from-[#c9a227]/10 to-[#f0c040]/5 border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-[#c9a227]/10"
                    : "bg-gradient-to-br from-[#1a1a5e]/5 to-[#252580]/5 border-[#1a1a5e]/10 hover:border-[#1a1a5e]/30 hover:shadow-[#1a1a5e]/10"
                  }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: isGold ? "rgba(201,162,39,0.15)" : "rgba(26,26,94,0.1)" }}
                >
                  <Icon size={22} style={{ color: facility.color }} />
                </div>
                <h3
                  className="font-bold text-[#1a1a5e] text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {facility.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
