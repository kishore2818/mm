import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Phone, Mail, ExternalLink, PlayCircle, Camera,
  GraduationCap, BookOpen, Award
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
  { label: "Events & News", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const academics = [
  { label: "Primary School (I–V)", href: "/academics#primary" },
  { label: "Middle School (VI–VIII)", href: "/academics#middle" },
  { label: "High School (IX–X)", href: "/academics#high" },
  { label: "Higher Secondary (XI–XII)", href: "/academics#higher" },
  { label: "Science Stream", href: "/academics#science" },
  { label: "Commerce Stream", href: "/academics#commerce" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d3b] text-white/80">
      {/* Top Stats Banner */}
      <div className="bg-gradient-to-r from-[#c9a227] via-[#f0c040] to-[#c9a227]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8 text-[#0d0d3b]">
          {[
            { icon: GraduationCap, label: "2000+ Alumni" },
            { icon: BookOpen, label: "Experienced Faculty" },
            { icon: Award, label: "State Award Winners" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 font-semibold text-sm">
              <Icon size={18} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo.png"
                  alt="MM Matric School Logo"
                  fill
                  className="object-contain"
                  sizes="56px"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-[#f0c040] font-bold text-sm leading-snug"
                   style={{ fontFamily: "'Playfair Display', serif" }}>
                  MM Matric Higher Secondary School
                </p>
                <p className="text-[#c9a227]/60 text-xs">Pattanamangalam</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Shaping future leaders with the values of <span className="text-[#c9a227]">Learning, Leadership</span>, and <span className="text-[#c9a227]">Service</span> since our founding.
            </p>
            <div className="italic text-[#f0c040]/80 text-sm border-l-2 border-[#c9a227] pl-3">
              "Learn · Lead · Serve"
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: ExternalLink, href: "#", label: "Facebook" },
                { icon: PlayCircle, href: "#", label: "YouTube" },
                { icon: Camera, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a227]/20 hover:text-[#f0c040] flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f0c040] font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#f0c040] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-[#c9a227]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-[#f0c040] font-semibold text-sm uppercase tracking-widest mb-4">
              Academics
            </h4>
            <ul className="space-y-2">
              {academics.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#f0c040] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-[#c9a227]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f0c040] font-semibold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                <span>MM Matric Higher Secondary School, Pattanamangalam, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} className="text-[#c9a227] flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-[#f0c040] transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={16} className="text-[#c9a227] flex-shrink-0" />
                <a href="mailto:info@mmmatric.edu.in" className="hover:text-[#f0c040] transition-colors">
                  info@mmmatric.edu.in
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-white/5 rounded-lg border border-[#c9a227]/20">
              <p className="text-xs text-[#c9a227] font-medium mb-1">Admissions Open 2025–26</p>
              <p className="text-xs text-white/50">Apply before the deadline. Limited seats available.</p>
              <Link
                href="/admissions"
                className="inline-block mt-2 text-xs text-[#f0c040] hover:underline"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MM Matric Higher Secondary School, Pattanamangalam. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted with ❤️ for education
          </p>
        </div>
      </div>
    </footer>
  );
}
