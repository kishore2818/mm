"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Play,
  Calendar,
  Image as ImageIcon,
  Trophy,
  Star,
  Users,
  Camera,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    bg: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&q=80",
    label: "Annual Day 2024",
  },
  {
    bg: "https://images.unsplash.com/photo-1579710758923-e9e43c55ff78?w=1600&q=80",
    label: "Sports Day Champions",
  },
  {
    bg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
    label: "Science Exhibition",
  },
  {
    bg: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1600&q=80",
    label: "Cultural Celebration",
  },
  {
    bg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
    label: "Graduation Ceremony",
  },
];

type Category =
  | "All"
  | "Annual Day"
  | "Sports Day"
  | "Cultural Events"
  | "Science Exhibition"
  | "Independence Day"
  | "Classroom Activities"
  | "Educational Tours";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  date: string;
  category: Category;
  height: "short" | "tall" | "medium";
}

const galleryItems: GalleryItem[] = [
  // Annual Day
  { id: 1, src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80", title: "Annual Day Cultural Performance", date: "Dec 15, 2024", category: "Annual Day", height: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80", title: "Prize Distribution Ceremony", date: "Dec 15, 2024", category: "Annual Day", height: "short" },
  { id: 3, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", title: "Drama Presentation", date: "Dec 15, 2024", category: "Annual Day", height: "medium" },
  // Sports Day
  { id: 4, src: "https://images.unsplash.com/photo-1579710758923-e9e43c55ff78?w=800&q=80", title: "Track & Field Events", date: "Jan 20, 2025", category: "Sports Day", height: "medium" },
  { id: 5, src: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=800&q=80", title: "March Past Parade", date: "Jan 20, 2025", category: "Sports Day", height: "tall" },
  { id: 6, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80", title: "Athletics Championship", date: "Jan 20, 2025", category: "Sports Day", height: "short" },
  // Cultural Events
  { id: 7, src: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&q=80", title: "Classical Dance Performance", date: "Nov 5, 2024", category: "Cultural Events", height: "short" },
  { id: 8, src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80", title: "Music & Arts Festival", date: "Nov 5, 2024", category: "Cultural Events", height: "tall" },
  { id: 9, src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80", title: "Traditional Folk Performance", date: "Nov 5, 2024", category: "Cultural Events", height: "medium" },
  // Science Exhibition
  { id: 10, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", title: "Science Fair 2024", date: "Feb 10, 2025", category: "Science Exhibition", height: "medium" },
  { id: 11, src: "https://images.unsplash.com/photo-1532094349884-543cdce73330?w=800&q=80", title: "Robotics Project Display", date: "Feb 10, 2025", category: "Science Exhibition", height: "short" },
  { id: 12, src: "https://images.unsplash.com/photo-1527515637462-cff94aca57a7?w=800&q=80", title: "Lab Experiment Showcase", date: "Feb 10, 2025", category: "Science Exhibition", height: "tall" },
  // Independence Day
  { id: 13, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", title: "Flag Hoisting Ceremony", date: "Aug 15, 2024", category: "Independence Day", height: "short" },
  { id: 14, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", title: "Independence Day March", date: "Aug 15, 2024", category: "Independence Day", height: "medium" },
  { id: 15, src: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=800&q=80", title: "Patriotic Cultural Show", date: "Aug 15, 2024", category: "Independence Day", height: "tall" },
  // Classroom Activities
  { id: 16, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", title: "Interactive Learning Session", date: "Mar 5, 2025", category: "Classroom Activities", height: "medium" },
  { id: 17, src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80", title: "Group Project Work", date: "Mar 5, 2025", category: "Classroom Activities", height: "short" },
  { id: 18, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", title: "Creative Art Class", date: "Mar 5, 2025", category: "Classroom Activities", height: "tall" },
  // Educational Tours
  { id: 19, src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80", title: "Heritage Site Visit", date: "Dec 2, 2024", category: "Educational Tours", height: "tall" },
  { id: 20, src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80", title: "Nature Study Camp", date: "Dec 2, 2024", category: "Educational Tours", height: "short" },
  { id: 21, src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80", title: "Industrial Visit", date: "Dec 2, 2024", category: "Educational Tours", height: "medium" },
  // Extra
  { id: 22, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", title: "Graduation Day 2024", date: "Apr 10, 2025", category: "Annual Day", height: "medium" },
  { id: 23, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", title: "Yoga & Wellness Day", date: "Jun 21, 2024", category: "Sports Day", height: "short" },
  { id: 24, src: "https://images.unsplash.com/photo-1565117125903-f05eb8abfdca?w=800&q=80", title: "Art Exhibition Opening", date: "Oct 12, 2024", category: "Cultural Events", height: "tall" },
];

const categories: Category[] = [
  "All", "Annual Day", "Sports Day", "Cultural Events",
  "Science Exhibition", "Independence Day", "Classroom Activities", "Educational Tours",
];

const featuredEvents = [
  {
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&q=80",
    title: "Annual Day 2024",
    desc: "A spectacular evening of performances, awards and celebrations marking another year of excellence.",
    date: "December 15, 2024",
    count: "150+ Photos",
  },
  {
    image: "https://images.unsplash.com/photo-1579710758923-e9e43c55ff78?w=900&q=80",
    title: "Sports Meet 2025",
    desc: "Champions emerge as students compete across athletics, team sports and track events.",
    date: "January 20, 2025",
    count: "200+ Photos",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
    title: "Science Fair 2024",
    desc: "Innovation on display as young scientists showcase projects across every discipline.",
    date: "February 10, 2025",
    count: "120+ Photos",
  },
];

const videoCards = [
  {
    thumb: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=700&q=80",
    title: "Annual Day Highlights 2024",
    duration: "8:42",
    views: "12.4K views",
  },
  {
    thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=80",
    title: "Sports Day Highlights 2025",
    duration: "6:15",
    views: "9.8K views",
  },
  {
    thumb: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80",
    title: "Virtual School Campus Tour",
    duration: "10:30",
    views: "22.1K views",
  },
];

const stats = [
  { icon: Camera, value: 5000, suffix: "+", label: "Photos Captured" },
  { icon: ImageIcon, value: 120, suffix: "+", label: "Events Covered" },
  { icon: Star, value: 35, suffix: " Yrs", label: "of Excellence" },
  { icon: Users, value: 100, suffix: "%", label: "Student Participation" },
];

// ─── HEIGHT MAP ───────────────────────────────────────────────────────────────
const heightMap = { short: "h-48", medium: "h-64", tall: "h-80" };

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  // Hero auto-slide
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Filtered gallery
  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  // Lightbox keyboard nav
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((i) => (i === null || i === 0 ? filtered.length - 1 : i - 1)), [filtered.length]);
  const nextImage = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length)), [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. HERO SLIDER ── */}
      <section className="relative h-[260px] sm:h-[380px] lg:h-[500px] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroIndex].bg}
              alt={heroSlides[heroIndex].label}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d3b]/70 via-[#0d0d3b]/50 to-[#0d0d3b]/80" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            key={`label-${heroIndex}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4"
          >
            {heroSlides[heroIndex].label}
          </motion.p>
          <h1
            className="text-4xl sm:text-6xl font-bold text-white mb-5"
           
          >
            Campus Life Gallery
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl">
            Capturing memories, achievements and moments at MM Matric Higher Secondary School
          </p>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`rounded-full transition-all duration-300 ${i === heroIndex ? "w-8 h-2 bg-[#c9a227]" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={() => setHeroIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-[#c9a227] text-white flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setHeroIndex((i) => (i + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-[#c9a227] text-white flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </section>

      {/* ── 2. CATEGORY FILTER TABS ── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#0d0d3b] text-[#c9a227] border-[#0d0d3b] shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#c9a227] hover:text-[#0d0d3b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MASONRY GALLERY GRID ── */}
      <section className="py-14 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-2">Memories</p>
            <h2 className="text-3xl font-bold text-[#0d0d3b]">
              {activeCategory === "All" ? "All Photos" : activeCategory}
            </h2>
            <p className="text-gray-500 text-sm mt-2">{filtered.length} photos</p>
          </div>

          <motion.div
            layout
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className={`break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden shadow-md cursor-pointer ${heightMap[img.height]}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d3b]/90 via-[#0d0d3b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <ZoomIn size={14} className="text-[#c9a227]" />
                        <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-wider">{img.category}</span>
                      </div>
                      <p className="text-white font-semibold text-sm leading-tight">{img.title}</p>
                      <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                        <Calendar size={10} /> {img.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 4. FEATURED EVENTS SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Highlights</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d3b] mb-4">
              Featured School Events
            </h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-[#c9a227] text-[#0d0d3b] text-xs font-bold px-3 py-1 rounded-full">
                    {ev.count}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#c9a227] text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Calendar size={12} /> {ev.date}
                  </p>
                  <h3 className="text-xl font-bold text-[#0d0d3b] mb-3">
                    {ev.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{ev.desc}</p>
                  <button
                    onClick={() => setActiveCategory(ev.title.includes("Science") ? "Science Exhibition" : ev.title.includes("Sports") ? "Sports Day" : "Annual Day")}
                    className="w-full py-2.5 rounded-xl bg-[#0d0d3b] text-[#c9a227] font-semibold text-sm hover:bg-[#1a1a5e] transition-colors duration-200"
                  >
                    View Gallery →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VIDEO SECTION ── */}
      <section className="py-20 bg-[#0d0d3b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-3">Watch & Relive</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Campus Life Videos
            </h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoCards.map((vid, i) => (
              <motion.div
                key={vid.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={vid.thumb}
                    alt={vid.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0d0d3b]/60 group-hover:bg-[#0d0d3b]/40 transition-all duration-300" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center shadow-[0_0_30px_rgba(201,162,39,0.5)] group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-[#0d0d3b] ml-1" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono">
                    {vid.duration}
                  </span>
                </div>
                <div className="bg-[#1a1a5e] p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{vid.title}</h3>
                  <p className="text-white/50 text-xs">{vid.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. STATS SECTION ── */}
      <section className="py-16 bg-gradient-to-r from-[#c9a227] via-[#f0c040] to-[#c9a227]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-[#0d0d3b]">
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#0d0d3b]/10 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-[#0d0d3b]" />
                </div>
                <p className="text-4xl font-bold mb-1">
                  <Counter target={value} suffix={suffix} />
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0d0d3b]/70">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-6 py-5">
                <p className="text-[#c9a227] text-xs uppercase tracking-widest mb-1">{filtered[lightboxIndex].category}</p>
                <p className="text-white font-bold text-lg">{filtered[lightboxIndex].title}</p>
                <p className="text-white/50 text-sm">{filtered[lightboxIndex].date}</p>
              </div>
              {/* Counter badge */}
              <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#c9a227] text-white flex items-center justify-center transition-all duration-200"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#c9a227] text-white flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#c9a227] text-white flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
