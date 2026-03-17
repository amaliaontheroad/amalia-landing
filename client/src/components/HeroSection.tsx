/* HeroSection — Dark Forest Atelier
   Full-bleed cinematic hero with staggered text reveal
   Background: Generated A-frame cabin in misty forest at dusk */

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/hero_aframe_cinematic-S9rubiqiinbaS8nxH2NLik.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="A-frame cabin in misty Transylvanian forest"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/40 to-[#0d1117]/90" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at center, transparent 30%, rgba(13,17,23,0.65) 100%)"}} />
      </div>

      {/* Decorative grain texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}
      />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        {/* Script label */}
        <div
          className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="font-script text-[#d4748a] text-2xl md:text-3xl">
            Amalia Elena
          </span>
          <span className="text-[#6b7c5e] text-xs tracking-[0.3em] uppercase block mt-1 mb-6">
            @amaliaontheroad · Travel UGC & Graphic Design
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl text-[#f5ede0] leading-tight max-w-4xl mx-auto transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Transformă locația ta
          <br />
          <em className="text-[#4a90d9] not-italic">într-o destinație dorită.</em>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 text-[#f5ede0]/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          UGC Narrativ, Graphic Design și Strategie vizuală pentru cabane,
          pensiuni și Tiny Houses care vor să atragă rezervări directe.
        </p>

        {/* CTA buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button onClick={scrollToPackages} className="btn-amber">
            Vezi pachetele
          </button>
          <button onClick={scrollToAbout} className="btn-ghost-amber">
            Povestea mea
          </button>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-700 delay-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {[
            { value: "5.2K+", label: "Urmăritori" },
            { value: "156", label: "Postări" },
            { value: "3", label: "Pachete" },
            { value: "100%", label: "Storytelling" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-[#4a90d9]">{stat.value}</div>
              <div className="text-[#6b7c5e] text-xs tracking-[0.2em] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#4a90d9]/60 hover:text-[#4a90d9] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
