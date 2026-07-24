"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderSnippet() {
  return (
    <section className="py-12 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] -translate-y-1/2 translate-x-1/4"
        style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] translate-y-1/2 -translate-x-1/4"
        style={{ background: "radial-gradient(circle, #1a1a5e, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center mb-10 sm:mb-16">
          
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl mb-6 group">
              <div className="absolute inset-0 bg-[#1a1a5e]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image 
                src="/images/founder.jpeg" 
                alt="Founder" 
                fill 
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl z-20"></div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0d0d3b] mb-1">Haji K. Mohamed Meeran</h3>
              <p className="text-[#c9a227] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">Founder &amp; Chairman</p>
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
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#1a1a5e]/5 text-[#1a1a5e] text-xs font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 border border-[#1a1a5e]/10">
              Our Visionary
            </span>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d3b] mb-4 sm:mb-8 leading-tight">
              A Legacy of <span className="text-[#c9a227]">Excellence</span> &amp; Dedication
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-6 sm:mb-10 text-xs sm:text-base leading-relaxed">
              <p className="mb-4">
                Established on June 1, 1998, M.M. Matriculation Higher Secondary School is run by the M.M. Public Charitable Trust. It functions with the noble vision of guiding rural male and female students toward educational growth, as well as significant progress in both society and their personal lives.
              </p>
              <p>
                The school was founded by Haji K. Mohamed Meeran, Former Managing Director of Rorito Pens International Pvt Ltd, Chennai, and a native of Patemanagaram, with the future well-being and welfare of the children of Patemanagaram and its surrounding areas in mind. Having started with approximately 38 KG students, four teachers, and a principal, the school now runs successfully with 50 dedicated teachers and 28 non-teaching staff members, shaping thousands of successful lives over nearly three decades.
              </p>
            </div>
            
            {/* Quote */}
            <div className="relative p-5 sm:p-8 rounded-2xl bg-[#fdf8f0] border-l-4 border-[#c9a227] shadow-sm">
              <span className="absolute top-2 left-3 text-4xl sm:text-5xl text-[#c9a227]/20 font-serif leading-none">&quot;</span>
              <p className="text-sm sm:text-xl italic text-[#1a1a5e] font-medium leading-relaxed relative z-10 pl-4 sm:pl-6">
                True education empowers the mind, ennobles the heart, and elevates the spirit of a community.
              </p>
            </div>
          </motion.div>
          
        </div>

        {/* Dedicated Founder Quote Poster Card ("நானே பொறுப்பு...") */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 sm:mt-12 max-w-sm sm:max-w-md lg:max-w-md mx-auto bg-[#fdf8f0] p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border-2 border-[#c9a227]/40 shadow-xl hover:shadow-2xl hover:shadow-[#c9a227]/20 hover:border-[#c9a227] transition-all duration-500 text-center group"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a227]/15 text-[#c9a227] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 border border-[#c9a227]/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-pulse" />
            Founder&apos;s Philosophy
          </div>
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-inner border border-gray-100">
            <Image
              src="/images/founder-quote-nanae-poruppu.jpg"
              alt="நானே பொறுப்பு - Founder Trustee Message"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain p-2 group-hover:scale-102 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
