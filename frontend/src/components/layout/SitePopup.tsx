"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function SitePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup shortly after the site loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  // To prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-xl w-full z-10 border-4 border-[#c9a227]"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20 shadow-lg"
            >
              <X size={20} />
            </button>
            
            <div className="relative w-full aspect-[4/5] sm:aspect-square bg-[#0d0d3b]">
              <Image 
                src="/images/popup-notice.jpeg" 
                alt="Important Notice" 
                fill 
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
