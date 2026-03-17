/**
 * WhyWorkSection — "De ce să lucrezi cu mine?" 
 * Inspired by ugcspritz.com's "Why work with me?" section
 *
 * Design: Dark Forest Atelier
 * - Asymmetric 2-column layout (text left, stats right)
 * - Blue (#4a90d9) accents on key stats
 * - Numbered reasons with elegant serif typography
 */

import { useEffect, useRef, useState } from "react";
import { Camera, TrendingUp, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Camera,
    title: "Știu ce funcționează vizual",
    desc: "Pentru că 'frumosul' nu este suficient; e nevoie de strategie. Nu sunt aici pentru o simplă postare, ci pentru a extrage esența locației tale și a o traduce într-un limbaj vizual premium.",
  },
  {
    icon: TrendingUp,
    title: "Vin cu background de agenție",
    desc: "Expertiza mea s-a clădit în parteneriate precum Hotelslibrary și proiecte ca Innovtour. Fiecare cadru este creat cu mentalitate de strateg de marketing, nu de influencer.",
  },
  {
    icon: Users,
    title: "Comunitate autentică de 5.2K+",
    desc: "Urmăritorii mei sunt pasionați de travel autentic — exact publicul țintă pentru cabane, pensiuni și Tiny Houses din România și peste hotare.",
  },
  {
    icon: Zap,
    title: "Eu investesc, nu cer",
    desc: "Nu cer o noapte de cazare, eu investesc talentul meu în viitorul vizual al afacerii tale. Vin cu propriul setup de styling, asigurând că fiecare cadru este o invitație deschisă către oaspeții tăi.",
  },
];

const stats = [
  { value: "5.2K+", label: "Urmăritori Instagram" },
  { value: "50+", label: "Clienți fericiți" },
  { value: "10+", label: "Țări vizitate" },
  { value: "100%", label: "Clienți mulțumiți" },
];

export default function WhyWorkSection() {
  const [visible, setVisible] = useState(false);
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
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0d1117" }}>
      {/* Decorative left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4a90d9]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-script text-[#d4748a] text-xl block mb-2">De ce eu?</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#f5ede0] max-w-2xl leading-tight">
            Nu sunt „încă un influencer care cere cazare."
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: reasons list */}
          <div className="lg:col-span-3 space-y-8">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`flex gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-sm border border-[#4a90d9]/30 bg-[#4a90d9]/10 flex items-center justify-center">
                    <reason.icon size={18} className="text-[#4a90d9]" />
                  </div>
                  {i < reasons.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-gradient-to-b from-[#4a90d9]/20 to-transparent min-h-[2rem]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <h3 className="font-display text-[#f5ede0] text-lg mb-1.5">{reason.title}</h3>
                  <p className="text-[#8a9a7e] text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: stats grid */}
          <div className="lg:col-span-2">
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-[#4a90d9]/20 bg-[#4a90d9]/5 p-6 rounded-sm text-center hover:border-[#4a90d9]/40 hover:bg-[#4a90d9]/10 transition-all duration-300"
                >
                  <div className="font-display text-3xl text-[#4a90d9] mb-1">{stat.value}</div>
                  <div className="text-[#6b7c5e] text-xs tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className={`mt-8 border-l-2 border-[#d4748a]/50 pl-5 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="text-[#8a9a7e] text-sm italic leading-relaxed">
                "Sunt o <span className="text-[#f5ede0] not-italic font-medium">agenție boutique de content și design</span> — cu ochi de fotograf, minte de strateg și inimă de povestitor."
              </p>
              <span className="text-[#4a90d9] text-xs tracking-[0.2em] uppercase mt-2 block">— Amalia Elena</span>
            </div>

            {/* Free call CTA */}
            <div className={`mt-8 transition-all duration-700 delay-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#4a90d9] hover:bg-[#2a6bb5] text-white text-sm tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 rounded-sm"
              >
                Rezervă o sesiune gratuită
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
