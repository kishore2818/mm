"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from "lucide-react";

export default function EventsClient() {
  const allEvents = [
    {
      id: 1, month: "June", events: [
        { date: "15", title: "School Reopening", type: "Academic", desc: "Welcome back for the new academic year 2026-27. Assembly at 8:30 AM.", time: "8:30 AM", loc: "Main Ground" },
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
      <section className="relative py-8 sm:py-24 bg-[#0d0d3b] text-center text-white mb-8 sm:mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-4">Stay Updated</p>
          <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-6">
            News &amp; Events
          </h1>
          <p className="text-white/60 text-xs sm:text-lg max-w-xl mx-auto">Discover upcoming academic, sports, and cultural happenings at our school campus.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="space-y-8 sm:space-y-16">
          {allEvents.map((monthGrp, idx) => (
            <motion.div key={monthGrp.month} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                <h2 className="text-lg sm:text-2xl font-bold text-[#1a1a5e]">{monthGrp.month} 2026</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c9a227]/40 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-6">
                {monthGrp.events.map((event) => (
                  <div key={event.title} className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-3 sm:gap-8 group hover:shadow-lg transition-all justify-between">
                    
                    {/* Mobile top header vs desktop left date box */}
                    <div className="flex items-center sm:flex-col justify-between sm:justify-center w-full sm:w-20 h-auto sm:h-20 rounded-lg sm:rounded-2xl bg-gradient-to-r sm:bg-gradient-to-br from-[#1a1a5e] to-[#252580] p-2 sm:p-0 text-white flex-shrink-0">
                      <div className="flex items-baseline gap-1.5 sm:flex-col sm:items-center">
                        <span className="text-base sm:text-2xl font-bold leading-none">{event.date}</span>
                        <span className="text-[10px] sm:text-xs text-[#c9a227] uppercase tracking-wider font-semibold">{monthGrp.month.slice(0,3)}</span>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-white/10 text-[#f0c040] rounded-full uppercase tracking-wider sm:hidden">
                        {event.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1 sm:mb-2">
                        <h3 className="text-xs sm:text-xl font-bold text-[#1a1a5e] group-hover:text-[#c9a227] transition-colors leading-snug truncate sm:whitespace-normal">
                          {event.title}
                        </h3>
                        <span className="text-[10px] font-bold px-3 py-1 bg-gray-100 text-gray-500 rounded-full uppercase tracking-wider hidden sm:block">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-[11px] sm:text-sm mb-3 line-clamp-2 sm:line-clamp-none">{event.desc}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-4 text-[10px] sm:text-xs text-gray-400 font-medium">
                        <div className="flex items-center gap-1.5"><Clock size={12} className="text-[#c9a227] flex-shrink-0" /> {event.time}</div>
                        <div className="flex items-center gap-1.5"><MapPin size={12} className="text-[#c9a227] flex-shrink-0" /> {event.loc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar Download */}
        <div className="mt-10 sm:mt-20 p-5 sm:p-8 border-2 border-dashed border-[#c9a227]/30 rounded-2xl sm:rounded-3xl text-center bg-white">
          <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-[#c9a227] mb-2 sm:mb-4" />
          <h3 className="text-base sm:text-xl font-bold text-[#1a1a5e] mb-1 sm:mb-2">Full Academic Calendar</h3>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-md mx-auto">Download the complete academic planner for 2026-27 including holidays and exam schedules.</p>
          <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1a1a5e] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-[#0d0d3b] transition-colors">
            Download PDF <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
