'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AlumniPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d3b]">
      {/* Background Image with Overlay and Blur */}
      <div 
        className="absolute inset-0 bg-[url('/images/campus-building-2.jpeg')] bg-cover bg-center scale-105 filter blur-[2px]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0d3b]/95 via-[#0d0d3b]/85 to-transparent z-10" />

      {/* Main Glassmorphic Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 max-w-2xl w-full mx-4 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl text-center flex flex-col items-center"
      >
        {/* School Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-6 flex items-center justify-center p-2 bg-white/10 rounded-2xl border border-white/20 shadow-md max-w-[200px]"
        >
          <Image 
            src="/images/logo.png" 
            alt="School Logo" 
            width={160} 
            height={80} 
            className="h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
        >
          Our Alumni Network
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed"
        >
          Once a part of <span className="text-[#f0c040] font-semibold">MM Matric</span>, always a part of our family. Reconnect, share your milestones, and inspire the next generation of leaders.
        </motion.p>

        {/* Buttons Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link 
            href="/alumni/register" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-[#0d0d3b] text-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 select-none cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #c9a227, #f0c040)' }}
          >
            Join Our Network
          </Link>
          <Link 
            href="/alumni/verify" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white text-center border-2 border-white/20 hover:border-[#f0c040] hover:text-[#f0c040] bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-300 select-none cursor-pointer"
          >
            Update My Profile
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
