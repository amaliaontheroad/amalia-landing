/**
 * ReelsSection — Portfolio of featured Instagram Reels
 *
 * Design: Dark Forest Atelier
 * - Deep navy/forest backgrounds with blue (#4a90d9) accents
 * - Cinematic card layout with hover play overlay
 * - Each card links directly to the Instagram reel
 * - Asymmetric staggered grid for visual interest
 */

import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink, Heart, MessageCircle } from "lucide-react";

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DNaA_tngDp2/",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/reel1_castle_daniel_258745b7.jpeg",
    // Use the real Castle Hotel Daniel image
    bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/Haveyoueversleptina350-year-oldTransylvaniancastleAt@castlehoteldanieltransylvania,hi_301850f5.jpg",
    title: "Castle Hotel Daniel",
    location: "Transylvania, România",
    caption: "Once upon a time… in the heart of Transylvania… A 350-year-old castle where history lives in every stone and fairytales whisper through candlelit halls.",
    likes: "367",
    comments: "45",
    tags: ["#transylvania", "#castle", "#uniquestays"],
    account: "@curavistamag",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DQWjc-eDQjV/",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/reel2_moxy_belgrade_b74f4fe6.jpeg",
    bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/IfBelgradehadaheartbeat,you'dfeelitat@moxy.belgradeHousedinabold1970sbuilding,th_0599d5fa.jpg",
    title: "Moxy Belgrade",
    location: "Belgrad, Serbia",
    caption: "Welcome to Moxy Belgrade — where good vibes meet city lights! Bold design, cozy corners, and that playful energy that makes you never want to leave.",
    likes: "284",
    comments: "18",
    tags: ["#moxybelgrade", "#boutiquehotel", "#belgradevibes"],
    account: "@hotelslibrary",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DMdTit0N9Te/",
    thumbnail: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/reel3_berds_chisinau_959e1d04.jpeg",
    bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    title: "Berds Restaurant",
    location: "Chișinău, Moldova",
    caption: "Gastronomic Dinner at Berds — A Symphony of Reimagined Moldovan Flavors. A refined culinary experience where each dish tells a reinterpreted story.",
    likes: "312",
    comments: "18",
    tags: ["#chisinau", "#gastronomic", "#luxurytravel"],
    account: "@curavistamag",
  },
];

export default function ReelsSection() {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0f0d 0%, #0d1117 50%, #0a0f0d 100%)" }}>
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
      }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-script text-[#d4748a] text-xl block mb-3">Portofoliu</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#f5ede0] mb-4">
            Reels din teren
          </h2>
          <div className="section-divider max-w-xs mx-auto my-6">
            <span className="text-[#6b7c5e] text-xs tracking-[0.25em] uppercase px-4">Work samples</span>
          </div>
          <p className="text-[#8a9a7e] text-base max-w-xl mx-auto leading-relaxed">
            Fiecare reel este o poveste completă — de la concept la editare finală, cu sound design și grafică suprapusă.
          </p>
        </div>

        {/* Reels grid — asymmetric 3-column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {reels.map((reel, index) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block rounded-sm overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${index === 1 ? "md:mt-8" : ""}`}
              style={{
                transitionDelay: `${index * 120}ms`,
                aspectRatio: "9/16",
                maxHeight: "520px",
              }}
              onMouseEnter={() => setHoveredId(reel.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${reel.bgImage})` }}
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Blue shimmer border on hover */}
              <div
                className="absolute inset-0 border border-[#4a90d9]/0 group-hover:border-[#4a90d9]/40 transition-all duration-300 rounded-sm"
                style={{ boxShadow: hoveredId === reel.id ? "inset 0 0 30px rgba(74,144,217,0.08)" : "none" }}
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-black/20 transition-all duration-300 ${
                  hoveredId === reel.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}>
                  <Play size={22} className="text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Top badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="bg-black/60 backdrop-blur-sm border border-[#4a90d9]/20 px-2.5 py-1 rounded-sm flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4a90d9] animate-pulse" />
                  <span className="text-[#f5ede0] text-[10px] tracking-[0.2em] uppercase font-medium">Reel</span>
                </div>
              </div>

              {/* External link icon */}
              <div className={`absolute top-4 right-4 transition-all duration-300 ${hoveredId === reel.id ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-black/60 backdrop-blur-sm border border-white/10 p-1.5 rounded-sm">
                  <ExternalLink size={12} className="text-[#4a90d9]" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* Location */}
                <p className="text-[#4a90d9] text-[10px] tracking-[0.2em] uppercase mb-1.5 font-medium">{reel.location}</p>

                {/* Title */}
                <h3 className="font-display text-[#f5ede0] text-xl mb-2 leading-tight">{reel.title}</h3>

                {/* Caption — shown on hover */}
                <p className={`text-[#8a9a7e] text-xs leading-relaxed mb-3 transition-all duration-300 overflow-hidden ${
                  hoveredId === reel.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  {reel.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {reel.tags.map(tag => (
                    <span key={tag} className="text-[#4a90d9]/70 text-[10px] tracking-wide">{tag}</span>
                  ))}
                </div>

                {/* Stats row */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[#8a9a7e] text-xs">
                      <Heart size={11} className="text-[#d4748a]" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#8a9a7e] text-xs">
                      <MessageCircle size={11} className="text-[#4a90d9]" />
                      <span>{reel.comments}</span>
                    </div>
                  </div>
                  <span className="text-[#6b7c5e] text-[10px] tracking-wide">{reel.account}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA to Instagram */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="https://www.instagram.com/amaliaontheroad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#4a90d9] hover:text-[#6aaee8] transition-colors group text-sm tracking-[0.15em] uppercase"
          >
            <span className="w-0 group-hover:w-8 h-px bg-[#4a90d9] transition-all duration-300" />
            Vezi toate reels-urile pe Instagram
            <span className="w-0 group-hover:w-8 h-px bg-[#4a90d9] transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
