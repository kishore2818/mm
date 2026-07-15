"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";



// Faculty organized from LKG to 12th Standard
const facultyList = [
  // LKG – UKG
  {
    name: "Mrs. Kavitha Rao",
    subject: "English & Rhymes",
    classRange: "LKG – UKG",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ms. Priya Sharma",
    subject: "EVS & Activity",
    classRange: "LKG – UKG",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mrs. Lalitha Devi",
    subject: "Tamil & Drawing",
    classRange: "LKG – UKG",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },

  // Class 1 – 2
  {
    name: "Mrs. Anitha Iyer",
    subject: "Mathematics",
    classRange: "Class 1 – 2",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Mr. Suresh Babu",
    subject: "English",
    classRange: "Class 1 – 2",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ms. Deepa Nair",
    subject: "EVS & General Science",
    classRange: "Class 1 – 2",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  // Class 3 – 5
  {
    name: "Mrs. Meenakshi S.",
    subject: "Mathematics",
    classRange: "Class 3 – 5",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Mr. Arun Prakash",
    subject: "English & Social",
    classRange: "Class 3 – 5",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Mrs. Selvi Kumar",
    subject: "Tamil & Art",
    classRange: "Class 3 – 5",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },

  // Class 6 – 8
  {
    name: "Mr. Ramesh Kumar",
    subject: "Science",
    classRange: "Class 6 – 8",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Mrs. Neha Verma",
    subject: "Social Science",
    classRange: "Class 6 – 8",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Mr. Vijay Mohan",
    subject: "Mathematics",
    classRange: "Class 6 – 8",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },

  // Class 9 – 10
  {
    name: "Mrs. Saranya P.",
    subject: "Biology",
    classRange: "Class 9 – 10",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
  {
    name: "Mr. Karthik Raj",
    subject: "Physics & Chemistry",
    classRange: "Class 9 – 10",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Mrs. Revathi S.",
    subject: "Mathematics",
    classRange: "Class 9 – 10",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },

  // Class 11 – 12
  {
    name: "Mr. Arjun Patel",
    subject: "Physics",
    classRange: "Class 11 – 12",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Ms. Sneha Joshi",
    subject: "Chemistry",
    classRange: "Class 11 – 12",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Mr. Vikram Singh",
    subject: "Computer Science",
    classRange: "Class 11 – 12",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
];

// Group faculty by classRange to render section headings
const classGroups = [
  { label: "Class 11 – 12", color: "#0d0d3b" },
  { label: "Class 9 – 10", color: "#252580" },
  { label: "Class 6 – 8", color: "#1a1a5e" },
  { label: "Class 3 – 5", color: "#b8860b" },
  { label: "Class 1 – 2", color: "#c9a227" },
  { label: "LKG – UKG", color: "#e8c56a" },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-12 sm:py-24 bg-[#0d0d3b] text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/campus-building-2.jpeg" alt="MM School Campus" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d3b]/60 to-[#0d0d3b]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[#c9a227] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-4">Our Mentors</p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-6">
            Faculty &amp; Leadership
          </h1>
          <p className="text-white/60 text-sm sm:text-lg max-w-2xl mx-auto">
            Meet our team of dedicated educators who bring passion, experience, and innovation to every classroom.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 sm:py-12 bg-[#c9a227]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-8 text-center text-[#0d0d3b]">
            {[
              { icon: GraduationCap, stat: "50", label: "Dedicated Teachers" },
              { icon: BookOpen, stat: "28", label: "Support & Non-Teaching Staff" },
              { icon: Award, stat: "4", label: "Founding Teachers" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 mb-1.5 sm:mb-3 opacity-80" />
                  <p className="metric-number text-2xl sm:text-4xl text-[#0d0d3b] mb-0.5 sm:mb-1">{item.stat}</p>
                  <p className="text-[9px] sm:text-sm font-semibold uppercase tracking-wider sm:tracking-wider leading-tight">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Staff Group Photo */}
      <section className="py-8 sm:py-14 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3">Our Team</p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a5e] mb-4 sm:mb-8">The People Behind Our Success</h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/staff-group.jpeg"
              alt="MM Matric School Staff Group Photo"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d0d3b]/80 to-transparent p-6">
              <p className="text-white font-semibold text-sm">Our dedicated faculty &amp; staff — the backbone of MM Matric Higher Secondary School, Patemanagaram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">School Leadership</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {[
              { name: "Mr. Suresh Kumar", role: "Secretary", image: "/images/secretary.png", desc: "Overseeing administration and ensuring our institution meets the highest educational standards." },
              { name: "Dr. Smita Sharma", role: "Principal", image: "/images/principal.png", desc: "Award-winning administrator focusing on holistic student development and academic excellence." },
              { name: "Mr. R.K. Sharma", role: "Vice Principal", image: "/images/vice_principal.png", desc: "Dedicated to student welfare, discipline, and fostering a positive learning environment." },
            ].map((leader, i) => (
              <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`bg-[#fdf8f0] p-4 sm:p-8 rounded-2xl border border-[#c9a227]/20 text-center hover:shadow-xl transition-all flex flex-col items-center ${i === 2 ? 'col-span-2 sm:col-span-1 max-w-[65%] sm:max-w-none mx-auto w-full' : ''}`}>
                <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg mb-3 sm:mb-6 ring-2 ring-[#c9a227]/30">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-[#1a1a5e] mb-1 leading-tight">{leader.name}</h3>
                <p className="text-[#c9a227] font-semibold text-[9px] sm:text-sm mb-2 sm:mb-4 uppercase tracking-wider">{leader.role}</p>
                <p className="text-gray-600 text-[9px] sm:text-sm leading-snug sm:leading-relaxed">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Faculty Grid ─── */}
      <section className="py-10 sm:py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <p className="text-[#c9a227] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3">Meet The Team</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1a1a5e] mb-2 sm:mb-4">
              Our Faculty
            </h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          {classGroups.map((group) => {
            const members = facultyList.filter((f) => f.classRange === group.label);
            return (
              <div key={group.label} className="mb-8 sm:mb-16">
                {/* Section label */}
                <div className="flex items-center gap-2 sm:gap-4 mb-5 sm:mb-10">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span
                    className="px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-semibold tracking-wider uppercase text-white shadow-md"
                    style={{ backgroundColor: group.color }}
                  >
                    {group.label}
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* 3-column grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {members.map((faculty, i) => (
                    <motion.div
                      key={faculty.name}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Circle Photo */}
                      <div className="relative mb-2 sm:mb-5 w-16 h-16 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto">
                        {/* Gold ring on hover */}
                        <div
                          className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-105"
                          style={{
                            background: `conic-gradient(${group.color} 0deg, transparent 300deg)`,
                            padding: "3px",
                            borderRadius: "50%",
                          }}
                        />
                        <div
                          className="absolute inset-[3px] rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-md sm:shadow-xl group-hover:shadow-2xl transition-all duration-300"
                        >
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3
                        className="text-[9px] sm:text-base md:text-lg font-bold text-[#1a1a5e] mb-0.5 sm:mb-1 group-hover:text-[#c9a227] transition-colors duration-200 leading-tight"

                      >
                        {faculty.name}
                      </h3>

                      {/* Subject */}
                      <p className="text-[8px] sm:text-sm text-gray-500 font-medium mb-0.5 sm:mb-1 leading-tight">{faculty.subject}</p>

                      {/* Class badge */}
                      <span
                        className="inline-block mt-0.5 sm:mt-1 px-1.5 sm:px-3 py-0.5 rounded-full text-[7px] sm:text-xs font-semibold tracking-wider text-white"
                        style={{ backgroundColor: group.color }}
                      >
                        {faculty.classRange}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
