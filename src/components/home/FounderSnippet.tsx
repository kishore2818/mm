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
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl mb-6 group">
              <div className="absolute inset-0 bg-[#1a1a5e]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image 
                src="/images/founder.jpeg" 
                alt="Founder" 
                fill 
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl z-20"></div>
            </div>

            {/* Extra founder photos row */}
            <div className="flex gap-3 mb-6">
              {[
                { src: "/images/founder-speaking.jpeg", alt: "Founder speaking at an event" },
                { src: "/images/founder-celebrity.jpeg", alt: "Founder with renowned personality" },
              ].map((photo) => (
                <div key={photo.alt} className="relative w-24 h-24 rounded-xl overflow-hidden shadow-md ring-2 ring-[#c9a227]/20 hover:ring-[#c9a227]/60 transition-all group">
                  <Image src={photo.src} alt={photo.alt} fill sizes="96px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#0d0d3b] mb-1">Haji K. Mohamed Meeran</h3>
              <p className="text-[#c9a227] font-bold text-sm tracking-[0.2em] uppercase mb-4">Founder &amp; Chairman</p>
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
                Established on June 1, 1998, with approximately 38 KG students, MM Matric Higher Secondary School in Patemanagaram is the realization of our founder's vision to bring high-quality education to his home soil.
              </p>
              <p>
                The school was founded by Haji K. Mohamed Meeran, Former Managing Director of Rorito Pens International Pvt Ltd, Chennai, and a native of Patemanagaram, with the future well-being and welfare of the children of Patemanagaram and its surrounding areas in mind. Having started with just four teachers and a principal, the school now runs successfully with 50 dedicated teachers and 28 non-teaching staff members, shaping thousands of successful lives over nearly three decades.
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
