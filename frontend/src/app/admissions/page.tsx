"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Phone, MapPin } from "lucide-react";

export default function AdmissionsPage() {
  const steps = [
    { title: "Enquiry", desc: "Visit our campus or fill out the online enquiry form to express your interest." },
    { title: "Application", desc: "Purchase the application form from the school office and submit it with required documents." },
    { title: "Interaction", desc: "An informal interaction with the principal and teachers to understand the child's readiness." },
    { title: "Enrollment", desc: "Upon selection, pay the admission fees to secure the seat and collect the welcome kit." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#0d0d3b] text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Admissions 2026–27</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Begin Your Journey
          </h1>
          <p className="text-white/60 text-lg">We welcome students from all backgrounds who show a desire to learn, lead, and serve.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - Left */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a5e] mb-8">Admission Process</h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#c9a227]/10 text-[#c9a227] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a5e] mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Documents */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a5e] mb-6">Required Documents</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {["Original Birth Certificate", "Transfer Certificate (if applicable)", "Recent Passport Photos (4)", "Aadhar Card Copy", "Previous Year Marksheet", "Community Certificate"].map((doc) => (
                  <li key={doc} className="flex items-center gap-3 text-gray-600 text-sm p-4 bg-[#fdf8f0] rounded-xl border border-[#c9a227]/10">
                    <CheckCircle2 size={18} className="text-[#c9a227]" /> {doc}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar - Right */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-gradient-to-b from-[#1a1a5e] to-[#0d0d3b] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c9a227] rounded-full opacity-20 blur-2xl" />
              <h3 className="text-xl font-bold text-[#f0c040] mb-4">Ready to Apply?</h3>
              <p className="text-white/70 text-sm mb-6">Admissions are currently open for Classes I to IX and XI for the academic year 2026-27.</p>
              <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#c9a227] to-[#f0c040] text-[#0d0d3b] font-semibold rounded-xl mb-3 hover:scale-105 transition-transform">
                <Download size={18} /> Download Form
              </a>
              <p className="text-center text-xs text-white/40">* Submit filled form at school office</p>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a1a5e] mb-6">Admission Enquiry</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#c9a227] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1a1a5e]">Call Us</p>
                    <p className="text-sm text-gray-500">+91 XXXXX XXXXX</p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
                  <MapPin size={18} className="text-[#c9a227] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1a1a5e]">Visit Office</p>
                    <p className="text-sm text-gray-500 leading-relaxed">MM Matric Hr. Sec. School,<br/>Patemanagaram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
