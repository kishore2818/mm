"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-[#0d0d3b] text-center text-white mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg">We&apos;re here to answer any questions you may have about admissions, academics, or campus life.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a5e] mb-8">Contact Information</h2>
            
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
                  <p className="text-gray-500">Office: 04630-255974</p>
                  <p className="text-gray-500">WhatsApp: +91 82205 24045</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf8f0] border border-[#c9a227]/20 flex items-center justify-center text-[#c9a227] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a5e] text-lg mb-1">Email Addresses</h3>
                  <p className="text-gray-500">General Info: mmschoolpatema@gmail.com</p>
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
            <h3 className="text-2xl font-bold text-[#1a1a5e] mb-6">Send us a Message</h3>
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

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <h2 className="text-3xl font-bold text-[#1a1a5e] mb-8 text-center">
          Find Us Here
        </h2>
        <div className="w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183280.10357601158!2d77.81200623659603!3d8.687457514186626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f5366c2c9e39%3A0x7341de523f6cb6a4!2sM.M.%20Matriculation%20School!5e0!3m2!1sen!2sin!4v1781337850442!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
