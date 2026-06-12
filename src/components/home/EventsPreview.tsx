"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, MapPin, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    date: { day: "15", month: "Jul" },
    title: "Annual Sports Day 2025",
    description: "A day of athletic excellence, team spirit, and sportsmanship. All students and parents are warmly invited.",
    location: "School Grounds",
    time: "9:00 AM – 4:00 PM",
    tag: "Sports",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    date: { day: "28", month: "Jun" },
    title: "Parent-Teacher Meeting",
    description: "Quarterly parent-teacher interaction to discuss student progress, behavior, and upcoming semester plans.",
    location: "School Hall",
    time: "10:00 AM – 1:00 PM",
    tag: "Academic",
    tagColor: "bg-[#c9a227]/10 text-[#c9a227]",
  },
  {
    id: 3,
    date: { day: "10", month: "Aug" },
    title: "Independence Day Celebration",
    description: "Flag hoisting, cultural performances, and patriotic programs to celebrate our nation's independence.",
    location: "School Grounds",
    time: "8:00 AM – 11:00 AM",
    tag: "Cultural",
    tagColor: "bg-green-100 text-green-700",
  },
];

export default function EventsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-[#fdf8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-2">
              What&apos;s Happening
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a1a5e]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a5e] hover:text-[#c9a227] transition-colors group flex-shrink-0"
          >
            View all events
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#1a1a5e] to-[#c9a227]" />

              <div className="p-6">
                {/* Date + Tag Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a1a5e] to-[#252580] flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-xl font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {event.date.day}
                      </span>
                      <span className="text-xs text-[#c9a227] font-medium">{event.date.month}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.tagColor}`}>
                    {event.tag}
                  </span>
                </div>

                <h3
                  className="font-bold text-[#1a1a5e] text-base mb-2 group-hover:text-[#c9a227] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {event.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{event.description}</p>

                {/* Meta */}
                <div className="space-y-1.5 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#c9a227]" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#c9a227]" />
                    {event.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/events"
            id="events-calendar-btn"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a5e] text-[#1a1a5e] rounded-full text-sm font-semibold hover:bg-[#1a1a5e] hover:text-white transition-all duration-300"
          >
            <Calendar size={16} />
            View Full Academic Calendar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
