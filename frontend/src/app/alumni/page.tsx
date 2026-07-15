"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Users, MapPin, Briefcase, Mail, Phone, Send, Heart, Star, BookOpen, Building } from "lucide-react";

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-[#0d0d3b] selection:bg-[#c9a227] selection:text-[#0d0d3b]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d0d3b]/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d3b] via-transparent to-[#0d0d3b] z-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#c9a227] to-[#8a6d1a] rounded-full flex items-center justify-center p-1 shadow-[0_0_30px_rgba(201,162,39,0.3)]">
                <div className="w-full h-full bg-[#0d0d3b] rounded-full flex items-center justify-center">
                  <GraduationCap size={40} className="text-[#c9a227]" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#f0c040]">Alumni</span> Family
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto font-light"
            >
              Reconnect with your roots, inspire the next generation, and be a part of the legacy that shaped your journey at M.M. Matriculation Higher Secondary School.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Left Column: Info & Benefits */}
            <div className="w-full lg:w-5/12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Why Join the Alumni Network?</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: Users,
                      title: "Global Networking",
                      desc: "Connect with fellow M.M. graduates excelling in various fields across India and around the world."
                    },
                    {
                      icon: Heart,
                      title: "Mentorship Opportunities",
                      desc: "Give back to your alma mater by guiding current students and helping shape their future careers."
                    },
                    {
                      icon: Building,
                      title: "Exclusive Events",
                      desc: "Get invitations to annual alumni meets, cultural events, and special celebrations at the school."
                    },
                    {
                      icon: Star,
                      title: "Preserve Your Legacy",
                      desc: "Share your success stories and professional milestones to inspire our current student community."
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a227]/20 group-hover:border-[#c9a227]/50 transition-all duration-300">
                        <benefit.icon className="text-[#c9a227]" size={26} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c9a227] transition-colors">{benefit.title}</h3>
                        <p className="text-white/60 leading-relaxed font-light">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#c9a227] to-[#8a6d1a] text-[#0d0d3b] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <GraduationCap size={120} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Already Registered?</h3>
                  <p className="mb-6 font-medium relative z-10">
                    Keep your profile updated so we can send you the latest news and event invitations!
                  </p>
                  <button className="px-6 py-3 bg-[#0d0d3b] text-white rounded-xl font-semibold hover:bg-black transition-colors relative z-10">
                    Update Profile
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="w-full lg:w-7/12">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-white mb-3">Alumni Registration</h2>
                  <p className="text-white/60">Fill out the form below to officially join the M.M. Alumni Directory.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Full Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Users size={18} className="text-[#c9a227]" />
                        </div>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                          placeholder="e.g. John Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Passing Year (Batch) *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <BookOpen size={18} className="text-[#c9a227]" />
                        </div>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                          placeholder="e.g. 2018"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Email Address *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail size={18} className="text-[#c9a227]" />
                        </div>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone size={18} className="text-[#c9a227]" />
                        </div>
                        <input 
                          type="tel" 
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Current Profession / Job Title</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Briefcase size={18} className="text-[#c9a227]" />
                        </div>
                        <input 
                          type="text" 
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                          placeholder="e.g. Software Engineer"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Current Location (City, State)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin size={18} className="text-[#c9a227]" />
                        </div>
                        <input 
                          type="text" 
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all"
                          placeholder="e.g. Chennai, Tamil Nadu"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Message / Best Memory (Optional)</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all resize-none"
                      placeholder="Share a brief message or your favorite memory from school..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#c9a227] text-[#0d0d3b] rounded-xl font-bold text-lg hover:bg-[#f0c040] hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] transition-all flex items-center justify-center gap-2 group"
                  >
                    Submit Registration
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-white/40 text-sm mt-4">
                    Your information will be kept confidential and used only for alumni communications.
                  </p>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
