"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  BookOpen, FlaskConical, Laptop, Bus, Music, HeartPulse, Building2, Droplets
} from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Campus & Playground",
    description: "Well-designed buildings, an excellent playground, and ample parking space for vehicles.",
    color: "#1a1a5e",
  },
  {
    icon: Droplets,
    title: "Purified Drinking Water",
    description: "Completely hygienic, purified drinking water facilities are provided for all students.",
    color: "#c9a227",
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Modern computer laboratory set up for quality education and managed by qualified teachers.",
    color: "#1a1a5e",
  },
  {
    icon: FlaskConical,
    title: "Science Labs",
    description: "Well-equipped and structured laboratories for Physics, Chemistry, and Biology.",
    color: "#c9a227",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Fully operational library housing approximately 5,000 reference books.",
    color: "#1a1a5e",
  },
  {
    icon: Bus,
    title: "School Transport",
    description: "Operates 6 to 7 vehicles driven by qualified drivers, serving students across 32 villages.",
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
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1a1a5e]">
            Our Facilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a227] to-[#f0c040] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Real facility photo showcase */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {[
            { src: "/images/facility-library.jpeg", label: "Library", desc: "MM Modern Library — 5,000+ books" },
            { src: "/images/facility-kg-classroom.jpeg", label: "KG Classrooms", desc: "Colourful, child-friendly learning spaces" },
            { src: "/images/facility-computer-lab.jpeg", label: "Computer Lab", desc: "Technology-enabled learning" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative rounded-2xl overflow-hidden h-52 group shadow-md"
            >
              <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d3b]/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <p className="text-[#f0c040] font-bold text-sm">{item.label}</p>
                <p className="text-white/70 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            const isGold = facility.color === "#c9a227";
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group p-4 sm:p-6 rounded-2xl border transition-all duration-300 cursor-default
                  hover:-translate-y-2 hover:shadow-xl ${i >= 6 ? "hidden lg:block" : ""}
                  ${isGold
                    ? "bg-gradient-to-br from-[#c9a227]/10 to-[#f0c040]/5 border-[#c9a227]/20 hover:border-[#c9a227]/50 hover:shadow-[#c9a227]/10"
                    : "bg-gradient-to-br from-[#1a1a5e]/5 to-[#252580]/5 border-[#1a1a5e]/10 hover:border-[#1a1a5e]/30 hover:shadow-[#1a1a5e]/10"
                  }`}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: isGold ? "rgba(201,162,39,0.15)" : "rgba(26,26,94,0.1)" }}
                >
                  <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-current" style={{ color: facility.color }} />
                </div>
                <h3 className="font-playfair font-bold text-[#1a1a5e] text-sm sm:text-base mb-1.5 sm:mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
