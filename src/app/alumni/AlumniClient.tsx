"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, UserPlus, UserCheck, Search, Filter, MapPin, 
  Briefcase, GraduationCap, ArrowRight, Building, Globe, CheckCircle, X
} from "lucide-react";

interface Alumni {
  alumniId: string;
  fullName: string;
  passoutYear: string;
  currentCity: string;
  qualification: string;
  company: string;
  jobRole: string;
  profilePhoto: string;
  college: string;
}

export default function AlumniClient() {
  const [alumniList, setAlumniList] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);

  useEffect(() => {
    async function fetchAlumni() {
      try {
        const res = await fetch("/api/alumni/public");
        const data = await res.json();
        if (res.ok && data.alumni) {
          setAlumniList(data.alumni);
        }
      } catch (err) {
        console.error("Failed to load alumni list:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAlumni();
  }, []);

  // Filter logic
  const filteredAlumni = alumniList.filter((item) => {
    const matchesSearch = 
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.jobRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.currentCity.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesYear = selectedYear === "All" || item.passoutYear === selectedYear;

    return matchesSearch && matchesYear;
  });

  // Extract unique passout years for the filter dropdown
  const uniqueYears = Array.from(
    new Set(alumniList.map((item) => item.passoutYear))
  ).sort((a, b) => b.localeCompare(a));

  const isSearching = searchQuery.trim() !== "" || selectedYear !== "All";

  return (
    <div className="min-h-screen bg-gray-50/50">
      
      {/* ── 1. DYNAMIC HERO SECTION ── */}
      <section className="relative py-28 overflow-hidden bg-[#0d0d3b] text-white">
        <div className="absolute inset-0">
          <Image 
            src="/images/campus-building-2.jpeg" 
            alt="School Campus Background" 
            fill 
            priority 
            sizes="100vw" 
            className="object-cover opacity-20 filter blur-[1px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0d3b] via-[#0d0d3b]/90 to-transparent" />
        </div>
        
        {/* Floating animated gold circles for brand aesthetics */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#c9a227]/10 filter blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-80 h-80 rounded-full bg-[#f0c040]/5 filter blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#c9a227]/15 border border-[#c9a227]/30 text-[#f0c040] text-xs font-semibold uppercase tracking-wider mb-6">
              <Users size={12} /> M.M.MATRICULATION HR.SEC SCHOOL Alumni Network
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-6xl font-bold leading-tight mb-6"
          >
            Reconnect. Empower. <br/>
            <span className="gold-shimmer font-playfair">Inspire the Future.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Once a student of M.M.MATRICULATION HR.SEC SCHOOL, always a valued part of our legacy. Reconnect with peers, share your global milestones, and guide current students.
          </motion.p>
        </div>
      </section>

      {/* ── 2. QUICK ACTIONS SECTION ── */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Action 1: Register */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-[#c9a227]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] mb-6 group-hover:scale-110 transition-transform">
                <UserPlus size={28} />
              </div>
              <h2 className="text-2xl font-bold text-[#0d0d3b] mb-3">Join the Directory</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Register your profile to stand proud in our directory. Share your current college, company, or qualification and stay connected with M.M.MATRICULATION HR.SEC SCHOOL events.
              </p>
            </div>
            <Link 
              href="/alumni/register" 
              className="inline-flex items-center gap-2 font-bold text-sm text-[#0d0d3b] hover:text-[#c9a227] transition-colors"
            >
              Sign Up Now <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Action 2: Update Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-[#c9a227]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#1a1a5e]/5 flex items-center justify-center text-[#1a1a5e] mb-6 group-hover:scale-110 transition-transform">
                <UserCheck size={28} />
              </div>
              <h2 className="text-2xl font-bold text-[#0d0d3b] mb-3">Update My Profile</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Already registered? Update your current job, location, and achievements. Keep your network updated with your career trajectory.
              </p>
            </div>
            <Link 
              href="/alumni/verify" 
              className="inline-flex items-center gap-2 font-bold text-sm text-[#0d0d3b] hover:text-[#c9a227] transition-colors"
            >
              Edit Details <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 3. STATISTICS ROW ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { metric: "1,500+", label: "Graduated Alumni" },
            { metric: "28+", label: "Batches Reunited" },
            { metric: "12+", label: "Countries Represented" },
            { metric: "50+", label: "Mentorship Guides" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <p className="text-3xl font-extrabold text-[#0d0d3b] mb-1">{stat.metric}</p>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. SEARCHABLE DIRECTORY SECTION ── */}
      <section className="py-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Directory</p>
          <h2 className="text-3xl font-bold text-[#0d0d3b]">M.M.MATRICULATION HR.SEC SCHOOL Alumni Directory</h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-md flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 max-w-4xl mx-auto">
          {/* Search box */}
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, company, job role, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all text-sm text-gray-700"
            />
          </div>
          
          {/* Year select filter */}
          <div className="relative w-full sm:w-52">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all text-sm text-gray-600 appearance-none cursor-pointer font-medium"
            >
              <option value="All">All Batches</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>Class of {year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results grid */}
        {loading ? (
          /* Loading states skeleton */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 h-48">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0" />
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-5/6 mt-4" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : !isSearching ? (
          /* Initial State - No searches yet */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white border border-gray-100 rounded-3xl max-w-xl mx-auto p-8 shadow-sm"
          >
            <Search size={48} className="mx-auto text-gray-300 mb-4 animate-pulse" />
            <h3 className="text-lg font-bold text-[#0d0d3b] mb-2 font-playfair">Find Alumni Profiles</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              Enter a name, batch year, company, or qualification above to search and filter our verified alumni.
            </p>
          </motion.div>
        ) : filteredAlumni.length > 0 ? (
          <motion.div 
            layout 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredAlumni.map((alumni) => (
                <motion.div
                  layout
                  key={alumni.alumniId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:border-[#c9a227]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedAlumni(alumni)}
                >
                  <div className="flex gap-4">
                    {/* Photo / Initials avatar */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center text-white border-2 border-white shadow-md ring-2 ring-[#c9a227]/30">
                      {alumni.profilePhoto ? (
                        <Image 
                          src={alumni.profilePhoto} 
                          alt={alumni.fullName} 
                          fill 
                          sizes="64px" 
                          className="object-cover object-top" 
                        />
                      ) : (
                        <span className="text-xl font-bold font-playfair uppercase">
                          {alumni.fullName.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#0d0d3b] text-base truncate flex items-center gap-1">
                        {alumni.fullName}
                        <CheckCircle size={14} className="text-[#c9a227] flex-shrink-0" />
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold mb-3">Class of {alumni.passoutYear}</p>
                      
                      {/* Qualification info */}
                      {alumni.qualification && (
                        <p className="text-xs text-gray-500 leading-normal flex items-start gap-1.5 mb-2">
                          <GraduationCap size={13} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="truncate">{alumni.qualification}</span>
                        </p>
                      )}

                      {/* Job Role / Company */}
                      {alumni.jobRole && (
                        <p className="text-xs text-gray-600 font-medium leading-normal flex items-start gap-1.5 mb-2">
                          <Briefcase size={13} className="text-[#c9a227] flex-shrink-0 mt-0.5" />
                          <span className="truncate">
                            {alumni.jobRole} {alumni.company ? `@ ${alumni.company}` : ""}
                          </span>
                        </p>
                      )}

                      {/* City location */}
                      {alumni.currentCity && (
                        <p className="text-xs text-gray-400 flex items-start gap-1.5">
                          <MapPin size={13} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="truncate">{alumni.currentCity}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty state */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white border border-dashed rounded-3xl max-w-xl mx-auto p-8"
          >
            <Users size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-[#0d0d3b] mb-2 font-playfair">No Profiles Found</h3>
            <p className="text-gray-500 text-sm mb-6">We couldn&apos;t find any verified alumni matching &quot;{searchQuery}&quot;.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedYear("All"); }}
              className="px-5 py-2 bg-[#0d0d3b] text-white rounded-xl text-sm font-semibold hover:bg-[#1a1a5e] transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </section>

      {/* ── 5. ALUMNI DETAIL POPUP MODAL ── */}
      <AnimatePresence>
        {selectedAlumni && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-6"
            onClick={() => setSelectedAlumni(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold Top Header Accent */}
              <div className="h-2 bg-gradient-to-r from-[#c9a227] via-[#f0c040] to-[#c9a227]" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedAlumni(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 flex items-center justify-center transition-all cursor-pointer z-10 animate-fade-in"
              >
                <X size={16} />
              </button>

              <div className="p-8 flex flex-col items-center text-center">
                {/* Large Centered Avatar */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex items-center justify-center text-white border-4 border-white shadow-lg ring-4 ring-[#c9a227]/30 mb-6 flex-shrink-0">
                  {selectedAlumni.profilePhoto ? (
                    <Image 
                      src={selectedAlumni.profilePhoto} 
                      alt={selectedAlumni.fullName} 
                      fill 
                      sizes="96px" 
                      className="object-cover object-top" 
                    />
                  ) : (
                    <span className="text-3xl font-bold font-playfair uppercase">
                      {selectedAlumni.fullName.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Name & Batch */}
                <h3 className="text-2xl font-extrabold text-[#0d0d3b] mb-1 flex items-center gap-1.5 justify-center">
                  {selectedAlumni.fullName}
                  <CheckCircle size={18} className="text-[#c9a227] flex-shrink-0" />
                </h3>
                <p className="text-sm text-gray-400 font-bold tracking-wide uppercase mb-6">Class of {selectedAlumni.passoutYear}</p>

                <div className="w-full h-px bg-gray-100 mb-6" />

                {/* Details Grid */}
                <div className="w-full text-left space-y-4">
                  {/* Qualification */}
                  {selectedAlumni.qualification && (
                    <div className="flex gap-3.5 items-start">
                      <div className="w-9 h-9 rounded-xl bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Qualification</p>
                        <p className="text-sm font-bold text-[#0d0d3b] mt-0.5">{selectedAlumni.qualification}</p>
                      </div>
                    </div>
                  )}

                  {/* College / University */}
                  {selectedAlumni.college && (
                    <div className="flex gap-3.5 items-start">
                      <div className="w-9 h-9 rounded-xl bg-[#1a1a5e]/5 flex items-center justify-center text-[#1a1a5e] flex-shrink-0">
                        <Building size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">College / University</p>
                        <p className="text-sm font-semibold text-gray-600 mt-0.5">{selectedAlumni.college}</p>
                      </div>
                    </div>
                  )}

                  {/* Profession / Role */}
                  {selectedAlumni.jobRole && (
                    <div className="flex gap-3.5 items-start">
                      <div className="w-9 h-9 rounded-xl bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Profession & Role</p>
                        <p className="text-sm font-bold text-[#0d0d3b] mt-0.5">
                          {selectedAlumni.jobRole} {selectedAlumni.company ? `at ${selectedAlumni.company}` : ""}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {selectedAlumni.currentCity && (
                    <div className="flex gap-3.5 items-start">
                      <div className="w-9 h-9 rounded-xl bg-[#1a1a5e]/5 flex items-center justify-center text-[#1a1a5e] flex-shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Current City</p>
                        <p className="text-sm font-semibold text-gray-600 mt-0.5">{selectedAlumni.currentCity}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-gray-100 my-6" />

                {/* Footer close button */}
                <button
                  onClick={() => setSelectedAlumni(null)}
                  className="w-full py-3 bg-[#0d0d3b] text-white font-semibold rounded-xl hover:bg-[#1a1a5e] transition-colors cursor-pointer text-sm shadow-md"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
