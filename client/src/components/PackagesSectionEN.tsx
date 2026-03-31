/* PackagesSection EN — English version with international pricing
   Three service packages with editorial card design
   Pricing adjusted for international markets (Greece, Croatia, Montenegro, Bulgaria, Turkey, Germany, Italy, Austria) */

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
    tagline: "Perfect for locations that need fresh content for Social Media.",
    price: "€500",
    priceNote: "+ travel",
    time: "3-4 hours on location",
    image: SERVICE_REEL,
    featured: false,
    items: [
      "1 × Narrative Video Reel with graphic overlays, POV & sound design",
      "10 × Lifestyle Photos (wide shots + styling details)",
      "Google Maps Optimization — curated photos for higher click-through rates",
    ],
  },
  {
    id: "storyteller",
    number: "02",
    icon: Camera,
    name: "THE STORYTELLER",
    subtitle: "Full Experience",
    tagline: "The complete package for a visual transformation that sells day & night experience.",
    price: "€700",
    priceNote: "+ accommodation included",
    time: "1 night accommodation included",
    image: SERVICE_PHOTO,
    featured: true,
    badge: "RECOMMENDED",
    items: [
      "2 × Narrative Video Reels (overall atmosphere + comfort & design details)",
      "20 × Professional Photos (interior, exterior, design & lifestyle details)",
      "Social Media Takeover — 5-8 real-time Stories with tagging & engagement",
      "Branding Kit — 3 customized Story templates for announcements or pricing",
      "Usage Rights — permission to use content for Meta/Google Ads (6 months)",
    ],
  },
  {
    id: "strategist",
    number: "03",
    icon: Layers,
    name: "THE STRATEGIST",
    subtitle: "Content + Ad Ready",
    tagline: "Designed for new locations ready to launch PPC campaigns.",
    price: "€1000",
    priceNote: "+ accommodation included",
    time: "1 night accommodation included",
    image: SERVICE_BRAND,
    featured: false,
    items: [
      "Everything in the Storyteller package",
      "1 × 360° Virtual Tour integrated into Google Business profile",
      "Raw Footage Library — 50+ raw clips for your marketing team",
      "Social Media Audit — recommendations for bio, highlights & posting strategy",
    ],
  },
];

export default function PackagesSectionEN() {
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

  return (
    <section id="packages" className="py-20 md:py-32 bg-[#0d1117]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`font-display text-4xl md:text-5xl text-[#f5ede0] mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Service Packages
          </h2>
          <p className={`text-[#6b7c5e] text-sm tracking-[0.15em] uppercase transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Visual Branding & Content · Created by Amalia Elena
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`group relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Featured glow */}
                {pkg.featured && (
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-[#4a90d9]/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className={`relative bg-[#1a1f2e] border rounded-lg overflow-hidden transition-all duration-500 ${pkg.featured ? "border-[#4a90d9]/40" : "border-[#4a90d9]/10"} group-hover:border-[#4a90d9]/60`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1f2e]" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Badge */}
                    {pkg.badge && (
                      <div className="inline-block mb-4 px-3 py-1 bg-[#4a90d9]/10 border border-[#4a90d9]/30 rounded text-[#4a90d9] text-xs tracking-[0.1em] uppercase font-medium">
                        {pkg.badge}
                      </div>
                    )}

                    {/* Number & icon */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-display text-3xl text-[#4a90d9]/40">{pkg.number}</span>
                      <Icon className="text-[#4a90d9]/60" size={20} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl text-[#f5ede0] mb-1">{pkg.name}</h3>
                    <p className="text-[#6b7c5e] text-xs tracking-[0.1em] uppercase mb-3">{pkg.subtitle}</p>

                    {/* Tagline */}
                    <p className="text-[#f5ede0]/60 text-sm mb-6 leading-relaxed">{pkg.tagline}</p>

                    {/* Items */}
                    <ul className="space-y-2 mb-8">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-[#f5ede0]/70 text-sm">
                          <Check size={16} className="text-[#4a90d9] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & time */}
                    <div className="mb-6 pb-6 border-t border-[#4a90d9]/10">
                      <div className="text-[#4a90d9] font-display text-2xl mb-1">{pkg.price}</div>
                      <p className="text-[#6b7c5e] text-xs">{pkg.priceNote}</p>
                      <p className="text-[#6b7c5e] text-xs mt-2">{pkg.time}</p>
                    </div>

                    {/* CTA */}
                    <button className={`w-full py-3 px-4 rounded transition-all duration-300 font-medium text-sm tracking-wide ${pkg.featured ? "bg-[#4a90d9] text-[#0d1117] hover:bg-[#5a9fe8]" : "bg-transparent border border-[#4a90d9]/40 text-[#4a90d9] hover:border-[#4a90d9]/80 hover:bg-[#4a90d9]/5"}`}>
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className={`text-center text-[#6b7c5e] text-sm leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          All packages include usage rights for social media content.<br />
          Prices are negotiable for long-term collaborations.
        </p>
      </div>
    </section>
  );
}
