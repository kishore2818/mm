"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const allEvents = [
    {
      id: 1, month: "June", events: [
        { date: "15", title: "School Reopening", type: "Academic", desc: "Welcome back for the new academic year 2025-26. Assembly at 8:30 AM.", time: "8:30 AM", loc: "Main Ground" },
        { date: "28", title: "PTA Meeting", type: "Meeting", desc: "First parent-teacher interaction for the academic year.", time: "10:00 AM", loc: "Auditorium" }
      ]
    },
    {
      id: 2, month: "July", events: [
        { date: "15", title: "Annual Sports Day", type: "Sports", desc: "Track and field events, march past, and cultural performances.", time: "9:00 AM", loc: "Sports Complex" },
        { date: "25", title: "Science Exhibition", type: "Academic", desc: "Inter-school science project competition for classes VIII to XII.", time: "11:00 AM", loc: "Science Block" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      <section className="relative py-24 bg-[#0d0d3b] text-center text-white mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">Stay Updated</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            News & Events
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="space-y-16">
          {allEvents.map((monthGrp, idx) => (
            <motion.div key={monthGrp.month} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-[#1a1a5e]">{monthGrp.month} 2025</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c9a227]/40 to-transparent" />
              </div>

              <div className="grid gap-6">
                {monthGrp.events.map((event) => (
                  <div key={event.title} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 group hover:shadow-lg transition-shadow">
                    
                    {/* Date Block */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-2xl font-bold">{event.date}</span>
                      <span className="text-xs text-[#c9a227] uppercase tracking-wider">{monthGrp.month.slice(0,3)}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#1a1a5e] group-hover:text-[#c9a227] transition-colors">
                          {event.title}
                        </h3>
                        <span className="text-[10px] font-bold px-3 py-1 bg-gray-100 text-gray-500 rounded-full uppercase tracking-wider hidden sm:block">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{event.desc}</p>
                      
                      <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium">
                        <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#c9a227]" /> {event.time}</div>
                        <div className="flex items-center gap-1.5"><MapPin size={14} className="text-[#c9a227]" /> {event.loc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar Download */}
        <div className="mt-20 p-8 border-2 border-dashed border-[#c9a227]/30 rounded-3xl text-center bg-white">
          <CalendarIcon size={40} className="mx-auto text-[#c9a227] mb-4" />
          <h3 className="text-xl font-bold text-[#1a1a5e] mb-2">Full Academic Calendar</h3>
          <p className="text-gray-500 text-sm mb-6">Download the complete academic planner for 2025-26 including holidays and exam schedules.</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a5e] text-white rounded-full text-sm font-semibold hover:bg-[#0d0d3b] transition-colors">
            Download PDF <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
