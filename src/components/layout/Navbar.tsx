"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Primary School (I–V)", href: "/academics#primary" },
      { label: "Middle School (VI–VIII)", href: "/academics#middle" },
      { label: "High School (IX–X)", href: "/academics#high" },
      { label: "Higher Secondary (XI–XII)", href: "/academics#higher" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-[#0d0d3b] border-b border-white/5 text-white/50 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1.5">
          <span>M.M.MATRICULATION HR.SEC SCHOOL, Patemanagaram</span>
          <div className="flex items-center gap-4">
            <a href="tel:04630255974" className="flex items-center gap-1.5 hover:text-[#f0c040] transition-colors">
              <Phone size={11} /> 04630-255974
            </a>
            <span className="text-white/20">|</span>
            <a href="mailto:mmschoolpatema@gmail.com" className="hover:text-[#f0c040] transition-colors">
              mmschoolpatema@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d3b]/96 backdrop-blur-xl shadow-2xl shadow-black/30"
            : "bg-[#0d0d3b]"
        }`}
      >
        {/* Gold accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-[#c9a227]/40 group-hover:ring-[#f0c040] transition-all duration-300 bg-white flex items-center justify-center p-0.5 flex-shrink-0">
                <Image src="/images/logo.png" alt="M.M.MATRICULATION HR.SEC SCHOOL Logo" fill className="object-contain" priority unoptimized />
              </div>
              <div className="hidden md:flex flex-col justify-center">
                <p className="text-[#f0c040] font-bold text-[13px] lg:text-sm leading-tight tracking-wide whitespace-nowrap">
                  M.M.MATRICULATION HR.SEC SCHOOL
                </p>
                <p className="text-[#c9a227]/60 text-[9px] lg:text-[10px] tracking-[0.2em] lg:tracking-[0.25em] uppercase mt-0.5 whitespace-nowrap">
                  Patemanagaram · Est. 1998
                </p>
              </div>
              <div className="md:hidden flex flex-col justify-center">
                <p className="text-[#f0c040] font-bold text-base leading-none tracking-wider">
                  M.M.MATRICULATION HR.SEC SCHOOL
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-2 py-2 rounded-md text-[13px] font-medium transition-all duration-200 whitespace-nowrap ${
                      pathname === link.href
                        ? "text-[#f0c040]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Active indicator */}
                  {pathname === link.href && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c9a227] rounded-full" />
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-[#1a1a5e]/95 backdrop-blur-xl border border-[#c9a227]/20 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-white/70 hover:text-[#f0c040] hover:bg-[#c9a227]/10 transition-all"
                          >
                            <span className="text-[#c9a227] text-xs">›</span>
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Apply CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admissions"
                className="px-4 xl:px-5 py-2 text-[12px] xl:text-[13px] font-semibold rounded-full text-[#0d0d3b] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c9a227]/30 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.15 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.15 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#0d0d3b]/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-5 space-y-1 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-[13px] font-medium transition-all ${
                        pathname === link.href
                          ? "text-[#f0c040] bg-[#c9a227]/10 border border-[#c9a227]/20"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}
                            className="block px-4 py-2 text-xs text-white/50 hover:text-[#f0c040] rounded-lg hover:bg-white/5 transition-all">
                            › {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="pt-3">
                  <Link href="/admissions"
                    className="block text-center py-3.5 font-semibold text-[#0d0d3b] rounded-xl text-sm"
                    style={{ background: "linear-gradient(135deg, #c9a227, #f0c040)" }}>
                    Apply for Admission
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
