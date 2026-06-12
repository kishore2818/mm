"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function GalleryPage() {
  const images = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    category: i % 3 === 0 ? "Sports" : i % 2 === 0 ? "Academic" : "Events",
  }));

  return (
    <div className="min-h-screen pb-20">
      <section className="relative py-24 bg-[#0d0d3b] text-center text-white mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Campus Life</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo Gallery
          </h1>
          <p className="text-white/60 text-lg">Glimpses of events, achievements, and everyday life at MM Matric.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Placeholder grid for actual images later */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div key={img.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer">
              {/* This is a placeholder since we don't have actual gallery images yet */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <p className="text-gray-400 font-medium">Image {i + 1}</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0d0d3b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <span className="px-4 py-1.5 bg-[#c9a227] text-[#0d0d3b] text-xs font-bold rounded-full uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Tour Section */}
        <div className="mt-24 bg-gradient-to-br from-[#1a1a5e] to-[#0d0d3b] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#c9a227 1px, transparent 1px), linear-gradient(90deg, #c9a227 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Take a Virtual Campus Tour</h2>
            <p className="text-white/60 mb-10">Explore our smart classrooms, science labs, library, and sprawling sports complex from the comfort of your home.</p>
            <button className="w-20 h-20 bg-[#c9a227] text-[#0d0d3b] rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform shadow-[0_0_40px_rgba(201,162,39,0.4)]">
              <Play size={32} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
