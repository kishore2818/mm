"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderSnippet() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] -translate-y-1/2 translate-x-1/4"
        style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] translate-y-1/2 -translate-x-1/4"
        style={{ background: "radial-gradient(circle, #1a1a5e, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center">
          
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl mb-8 group">
              <div className="absolute inset-0 bg-[#1a1a5e]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image 
                src="/images/founder.png" 
                alt="Founder" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl z-20"></div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#0d0d3b] mb-1">Mr. Ananth Sharma</h3>
              <p className="text-[#c9a227] font-bold text-sm tracking-[0.2em] uppercase mb-4">Founder & Chairman</p>
              <div className="w-12 h-1 bg-[#0d0d3b] mx-auto rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1a1a5e]/5 text-[#1a1a5e] text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-[#1a1a5e]/10">
              Our Visionary
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d3b] mb-8 leading-tight">
              A Legacy of <span className="text-[#c9a227]">Excellence</span> & Dedication
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
              <p className="mb-6">
                Established in 1990, MM Matric Higher Secondary School in Patemanagaram is the realization of our founder's lifelong dream to bring world-class education to the heart of Tamil Nadu.
              </p>
              <p>
                Believing firmly that education is the most powerful tool to change the world, he laid the foundation of this institution with a focus on holistic development—nurturing not just academic brilliance, but strong moral character. Over the past three decades, his unwavering commitment has transformed the lives of thousands of students, guiding them to become leaders, innovators, and responsible citizens.
              </p>
            </div>
            
            {/* Quote */}
            <div className="relative p-8 rounded-2xl bg-[#fdf8f0] border-l-4 border-[#c9a227] shadow-sm">
              <span className="absolute top-4 left-4 text-5xl text-[#c9a227]/20 font-serif leading-none">"</span>
              <p className="text-xl italic text-[#1a1a5e] font-medium leading-relaxed relative z-10 pl-6">
                True education empowers the mind, ennobles the heart, and elevates the spirit of a community.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
