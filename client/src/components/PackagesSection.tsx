/* PackagesSection — Dark Forest Atelier
   Three service packages with editorial card design
   Featured card (Storyteller) has amber glow treatment */

import { useEffect, useRef, useState } from "react";
import { Check, Star, Zap, Camera, Layers } from "lucide-react";

const SERVICE_REEL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/service_reel_video-RsZXXPh43tEkmq7oajB94N.webp";
const SERVICE_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/service_photography-knou6jeT4Q6mfZz6S3nV3t.webp";
const SERVICE_BRAND = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/service_branding-msgMa9ruNSC3dsjwA6UYuq.webp";

const packages = [
  {
    id: "refresh",
    number: "01",
    icon: Zap,
    name: "THE REFRESH",
    subtitle: "Quick Impact",
    tagline: "Ideal pentru locațiile care au nevoie de conținut proaspăt pentru Social Media.",
    price: "200€",
    priceNote: "+ transport",
    time: "3-4 ore la locație",
    image: SERVICE_REEL,
    featured: false,
    items: [
      "1 × Video Reel Narrativ cu suprapuneri grafice, POV și sound design",
      "10 × Fotografii Lifestyle (cadre largi + detalii de styling)",
      "Optimizare Google Maps — selecție de poze editate pentru rate de click mai mare",
    ],
  },
  {
    id: "storyteller",
    number: "02",
    icon: Camera,
    name: "THE STORYTELLER",
    subtitle: "Full Experience",
    tagline: "Pachetul complet pentru o transformare vizuală care vinde experiența de zi și de noapte.",
    price: "400€",
    priceNote: "+ cazare inclusă",
    time: "1 noapte de cazare inclusă",
    image: SERVICE_PHOTO,
    featured: true,
    badge: "RECOMANDAT",
    items: [
      "2 × Video Reels Narrative (atmosferă generală + detalii de confort & ciubăr)",
      "20 × Fotografii Profesionale (interior, exterior, detalii design & lifestyle)",
      "Social Media Takeover — 5-8 Story-uri în timp real cu tag și interacțiune",
      "Branding Kit — 3 Template-uri de Story personalizate pentru anunțuri sau prețuri",
      "Usage Rights — drept de utilizare pentru reclame plătite Meta/Google Ads (6 luni)",
    ],
  },
  {
    id: "strategist",
    number: "03",
    icon: Layers,
    name: "THE STRATEGIST",
    subtitle: "Content + Ad Ready",
    tagline: "Creat special pentru locațiile noi care vor să lanseze campanii de PPC.",
    price: "600€",
    priceNote: "+ cazare inclusă",
    time: "1 noapte de cazare inclusă",
    image: SERVICE_BRAND,
    featured: false,
    items: [
      "Tot ce include pachetul Storyteller",
      "1 × Tur Virtual 360° integrat în profilul de Google Business",
      "Raw Footage Library — 50+ clipuri brute pentru echipa de marketing",
      "Audit de Social Media — recomandări de bio, highlights și strategie de postări",
    ],
  },
];

export default function PackagesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-[#0a0f0d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{background: "radial-gradient(ellipse at 50% 50%, #4a90d9, transparent 70%)"}}
      />

      <div className="container" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-divider mb-4">
            <span className="font-script text-[#d4748a] text-lg whitespace-nowrap">Capitolul II</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#f5ede0] mt-4">
            Ofertă Servicii
          </h2>
          <p className="text-[#6b7c5e] text-sm tracking-[0.2em] uppercase mt-3">
            Branding Vizual & Content · Creat de Amalia Elena
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`package-card ${pkg.featured ? "featured" : ""} transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Card image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111c2a] via-transparent to-transparent" />
                  
                  {/* Package number */}
                  <div className="absolute top-4 left-4 font-display text-5xl font-bold text-[#4a90d9]/20 leading-none select-none">
                    {pkg.number}
                  </div>

                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-[#4a90d9] text-[#0d1117] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      {pkg.badge}
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6">
                  {/* Icon + name */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-sm bg-[#4a90d9]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#4a90d9]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-[#f5ede0] leading-tight">{pkg.name}</h3>
                      <p className="text-[#4a90d9] text-xs tracking-[0.15em] uppercase mt-0.5">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#f5ede0]/60 text-sm leading-relaxed mb-5 font-light">
                    {pkg.tagline}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-2.5 mb-6">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check size={13} className="text-[#4a90d9] flex-shrink-0 mt-0.5" />
                        <span className="text-[#f5ede0]/70 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#4a90d9]/20 to-transparent mb-5" />

                  {/* Time */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[#6b7c5e] text-xs">Timp de execuție:</span>
                    <span className="text-[#f5ede0]/70 text-xs">{pkg.time}</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-display text-3xl text-[#4a90d9]">{pkg.price}</div>
                      <div className="text-[#6b7c5e] text-xs mt-0.5">{pkg.priceNote}</div>
                    </div>
                    <button
                      onClick={scrollToContact}
                      className={`text-xs tracking-[0.12em] uppercase font-bold px-5 py-2.5 rounded-sm transition-all duration-300 ${
                        pkg.featured
                          ? "btn-amber"
                          : "btn-ghost-amber"
                      }`}
                    >
                      Rezervă
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className={`text-center text-[#6b7c5e] text-sm mt-10 font-light transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          Toate pachetele includ drepturi de utilizare a conținutului pe platformele sociale.
          <br />
          <span className="text-[#4a90d9]/70">Prețurile sunt negociabile pentru colaborări pe termen lung.</span>
        </p>
      </div>
    </section>
  );
}
