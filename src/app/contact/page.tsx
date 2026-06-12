"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-[#0d0d3b] text-center text-white mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <p className="text-white/60 text-lg">We&apos;re here to answer any questions you may have about admissions, academics, or campus life.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a5e] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf8f0] border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a5e] text-lg mb-1">Campus Address</h3>
                  <p className="text-gray-500 leading-relaxed">MM Matric Higher Secondary School,<br/>Patemanagaram,<br/>Tamil Nadu, India - 600XXX</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf8f0] border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a5e] text-lg mb-1">Phone Numbers</h3>
                  <p className="text-gray-500">Office: +91 XXXXX XXXXX</p>
                  <p className="text-gray-500">Admissions: +91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf8f0] border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a5e] text-lg mb-1">Email Addresses</h3>
                  <p className="text-gray-500">General Info: info@mmmatric.edu.in</p>
                  <p className="text-gray-500">Admissions: admissions@mmmatric.edu.in</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf8f0] border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a5e] text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-500">Monday - Friday: 8:30 AM to 4:30 PM</p>
                  <p className="text-gray-500">Saturday: 9:00 AM to 1:00 PM</p>
                  <p className="text-gray-400 text-sm mt-1">Closed on Sundays and Public Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
            <h3 className="text-2xl font-bold text-[#1a1a5e] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Send us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all text-gray-700">
                  <option>General Enquiry</option>
                  <option>Admissions</option>
                  <option>Feedback</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#1a1a5e] to-[#252580] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#1a1a5e]/20 transition-all active:scale-[0.98]">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
