"use client";

import { motion } from "framer-motion";
import { Quote, Award, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Academic Excellence", desc: "Rigorous curriculum with personalized mentoring to bring out each student's full potential." },
  { icon: Heart, title: "Character Building", desc: "Instilling values of integrity, empathy, and social responsibility in every student." },
  { icon: Award, title: "Holistic Growth", desc: "Sports, arts, and co-curriculars to nurture well-rounded, confident individuals." },
  { icon: Shield, title: "Safe Environment", desc: "A secure, inclusive campus where every child thrives and feels truly at home." },
];

export default function PrincipalsMessage() {
  return (
    <section id="principals-message" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] -translate-y-1/2 translate-x-1/4"
        style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] translate-y-1/2 -translate-x-1/4"
        style={{ background: "radial-gradient(circle, #1a1a5e, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            A Word From Our Leader
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#0d0d3b]">
            Principal&apos;s Message
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #c9a227, #f0c040)" }} />
        </motion.div>

        {/* Main content: Quote + Image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-24">

          {/* Quote block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <Quote size={64} className="text-[#c9a227]/20 mb-4 -ml-2" />
            <blockquote className="font-playfair text-2xl sm:text-3xl font-medium text-[#0d0d3b] leading-relaxed mb-8">
              Education is not merely the filling of a pail, but the lighting of a fire. At M.M.MATRICULATION HR.SEC SCHOOL, we ignite that spark in every child who walks through our doors.
            </blockquote>
            <p className="text-[#555] text-base leading-loose mb-8">
              M.M. Matriculation Higher Secondary School was established and is run by the M.M. Public Charitable Trust. It functions with the noble vision of guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives.
            </p>
            <p className="text-[#555] text-base leading-loose mb-10">
              We believe that every student carries within them an extraordinary potential. Our dedicated faculty, world-class facilities, and nurturing environment are designed to bring out the very best in each child — academically, morally, and creatively.
            </p>

            {/* Principal signature */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-xl"
                style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}>
                P
              </div>
              <div>
                <p className="font-bold text-[#0d0d3b] text-lg">The Principal</p>
                <p className="text-[#c9a227] text-sm font-medium tracking-wide">M.M.MATRICULATION HR.SEC SCHOOL</p>
              </div>
            </div>
          </motion.div>

          {/* Vision card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative card behind */}
            <div className="absolute inset-4 rounded-3xl rotate-3 opacity-20"
              style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }} />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(160deg, #060622 0%, #1a1a5e 100%)" }}>
              <div className="p-10">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  Our Vision & Mission
                </h3>
                <div className="w-12 h-0.5 mb-8" style={{ background: "linear-gradient(90deg, #c9a227, transparent)" }} />
                <div className="space-y-6">
                  {[
                    { label: "Vision", text: "Guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives." },
                    { label: "Mission", text: "To provide holistic education that empowers students academically and morally to excel in a dynamic world." },
                    { label: "Philosophy", text: "Every child is unique. We tailor our approach to celebrate individuality while nurturing a strong sense of community." },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-start">
                      <span className="w-28 text-center flex-shrink-0 px-2 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase h-fit sm:mt-0.5 shadow-sm"
                        style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)", color: "#0d0d3b" }}>
                        {item.label}
                      </span>
                      <p className="text-white/75 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-10 py-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0c040] animate-pulse" />
                <span className="text-white/50 text-xs tracking-widest uppercase">Established 1998 · Patemanagaram</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <h3 className="font-playfair text-center text-3xl font-bold text-[#0d0d3b] mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-4 sm:p-6 rounded-2xl bg-[#fdf8f0] border border-[#e8d9b5]/60 hover:border-[#c9a227]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}>
                  <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#0d0d3b]" />
                </div>
                <h4 className="font-playfair font-bold text-[#0d0d3b] text-sm sm:text-base mb-1.5 sm:mb-2">{title}</h4>
                <p className="text-[#666] text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
