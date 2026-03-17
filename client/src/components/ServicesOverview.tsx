/**
 * ServicesOverview — Service category cards
 * Inspired by ugcspritz.com's 4 service category layout
 *
 * Design: Dark Forest Atelier
 * - Horizontal scrollable cards on mobile, 2x2 grid on desktop
 * - Each card has a large number, title, short desc, and CTA
 * - Blue accent on hover with subtle border animation
 */

import { useEffect, useRef, useState } from "react";
import { Video, Camera, Palette, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Video,
    title: "UGC Video Reels",
    subtitle: "Narrativ & Cinematic",
    desc: "Reels narrative cu sound design, suprapuneri grafice și POV autentic. Conținut care oprește scroll-ul și convinge la rezervare.",
    tags: ["TikTok", "Instagram Reels", "Meta Ads"],
    link: "#pachete",
  },
  {
    number: "02",
    icon: Camera,
    title: "Fotografie Lifestyle",
    subtitle: "Travel & Hospitality",
    desc: "Fotografii profesionale de interior, exterior și detalii de styling. Mix de cadre largi și macro pentru o poveste vizuală completă.",
    tags: ["Interior", "Exterior", "Google Maps"],
    link: "#pachete",
  },
  {
    number: "03",
    icon: Palette,
    title: "Graphic Design & Branding",
    subtitle: "Template-uri & Kit-uri",
    desc: "Template-uri de Story personalizate, kit-uri de branding vizual și materiale grafice adaptate identității locației tale.",
    tags: ["Story Templates", "Branding Kit", "Visual Identity"],
    link: "#pachete",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Social Media Strategy",
    subtitle: "Audit & Optimizare",
    desc: "Audit de Social Media, recomandări de bio și highlights, strategie de postări și optimizare Google Maps pentru mai multe rezervări directe.",
    tags: ["Audit", "Google Maps", "Content Strategy"],
    link: "#pachete",
  },
];

export default function ServicesOverview() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#080c0a" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #4a90d9 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-script text-[#d4748a] text-xl block mb-2">Ce pot face pentru tine?</span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl text-[#f5ede0] max-w-xl leading-tight">
              Servicii de branding vizual
            </h2>
            <a
              href="#pachete"
              className="text-[#4a90d9] hover:text-[#6aaee8] text-sm tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group"
            >
              <span>Vezi pachetele</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-4 h-px bg-gradient-to-r from-[#4a90d9]/30 to-transparent" />
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, i) => (
            <a
              key={i}
              href={service.link}
              className={`group relative p-7 border rounded-sm transition-all duration-500 cursor-pointer block ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hovered === i
                ? "border-[#4a90d9]/50 bg-[#4a90d9]/8"
                : "border-[#1a2a1a] bg-[#0d1117]/80 hover:border-[#4a90d9]/30"
              }`}
              style={{
                transitionDelay: `${i * 100 + 200}ms`,
                background: hovered === i ? "rgba(74,144,217,0.06)" : "rgba(13,17,23,0.8)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Large number */}
              <div className="absolute top-5 right-6 font-display text-6xl text-[#4a90d9]/8 leading-none select-none">
                {service.number}
              </div>

              {/* Icon */}
              <div className={`w-10 h-10 rounded-sm border flex items-center justify-center mb-5 transition-all duration-300 ${
                hovered === i ? "border-[#4a90d9]/50 bg-[#4a90d9]/15" : "border-[#2a3a2a] bg-[#1a2a1a]"
              }`}>
                <service.icon size={18} className={`transition-colors duration-300 ${hovered === i ? "text-[#4a90d9]" : "text-[#6b7c5e]"}`} />
              </div>

              {/* Title */}
              <div className="mb-1">
                <span className="text-[#4a90d9]/70 text-[10px] tracking-[0.2em] uppercase">{service.subtitle}</span>
              </div>
              <h3 className="font-display text-[#f5ede0] text-xl mb-3">{service.title}</h3>
              <p className="text-[#8a9a7e] text-sm leading-relaxed mb-5">{service.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border border-[#2a3a2a] text-[#6b7c5e] rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA arrow */}
              <div className={`flex items-center gap-2 text-[#4a90d9] text-xs tracking-[0.15em] uppercase transition-all duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}>
                <span>Detalii pachet</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
