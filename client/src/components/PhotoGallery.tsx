/**
 * PhotoGallery — Instagram photo grid with real post images
 * Inspired by ugcspritz.com's portfolio grid
 *
 * Design: Dark Forest Atelier
 * - Asymmetric masonry-style grid
 * - Hover overlay with caption excerpt and link
 * - Real images from @amaliaontheroad Instagram posts
 */

import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin, Heart } from "lucide-react";

const photos = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DQWi734Dcbo/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/post1_moxy_belgrade_room_0793457c.jpeg",
    title: "Moxy Belgrade",
    location: "Belgrad, Serbia",
    caption: "If Belgrade had a heartbeat, you'd feel it at Moxy Belgrade — where 70s retro vibes meet modern urban energy.",
    likes: "284",
    size: "tall", // tall card
    account: "@hotelslibrary",
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DNaB1xRAPHT/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/post2_castle_daniel_exterior_96c14131.jpeg",
    title: "Castle Hotel Daniel",
    location: "Transylvania, România",
    caption: "Have you ever slept in a 350-year-old Transylvanian castle? History surrounds you — from grand halls lit by candlelight to rooms with carved wooden beams.",
    likes: "367",
    size: "wide", // wide card
    account: "@curavistamag",
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DMdTOApNEm2/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/post3_berds_hotel_lobby_a182ea9d.jpeg",
    title: "Berds M Gallery Hotel",
    location: "Chișinău, Moldova",
    caption: "An urban sanctuary of elegance, where art, gastronomy, and refinement blend harmoniously with authentic Moldovan hospitality.",
    likes: "312",
    size: "normal",
    account: "@curavistamag",
  },
  // Filler cards using Unsplash for variety
  {
    id: 4,
    url: "https://www.instagram.com/amaliaontheroad/",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Carpații în ceață",
    location: "România",
    caption: "Dimineți în care ceața coboară peste pădure și lumina aurie filtrează prin brazi — asta înseamnă Transylvania pentru mine.",
    likes: "201",
    size: "normal",
    account: "@amaliaontheroad",
  },
  {
    id: 5,
    url: "https://www.instagram.com/p/DKM3EoCMeYz/",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/tiny_house_bucovina_f5ff916b.jpg",
    title: "Tiny House Experience",
    location: "Bucovina, România",
    caption: "Wake up surrounded by mountains, tradition and fresh air. Locuri mici, povești mari — fiecare Tiny House ascunde o lume întreagă.",
    likes: "456",
    size: "tall",
    account: "@amaliaontheroad",
  },
];

export default function PhotoGallery() {
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
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0f0d 0%, #0d1117 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header — left-aligned like ugcspritz */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="font-script text-[#d4748a] text-xl block mb-2">Galerie</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#f5ede0]">
                Din teren, cu suflet
              </h2>
            </div>
            <a
              href="https://www.instagram.com/amaliaontheroad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a90d9] hover:text-[#6aaee8] text-sm tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group"
            >
              <span>Tot portofoliul</span>
              <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="mt-4 h-px bg-gradient-to-r from-[#4a90d9]/30 to-transparent" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <a
              key={photo.id}
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } ${photo.size === "tall" ? "row-span-2" : ""} ${photo.size === "wide" ? "col-span-2" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHovered(photo.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${photo.image})` }}
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                hovered === photo.id ? "opacity-100" : "opacity-60"
              }`} style={{ background: "linear-gradient(to top, rgba(8,12,10,0.95) 0%, rgba(8,12,10,0.3) 50%, transparent 100%)" }} />

              {/* Top badge */}
              <div className={`absolute top-3 right-3 transition-all duration-300 ${hovered === photo.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                <div className="bg-black/60 backdrop-blur-sm border border-[#4a90d9]/20 px-2 py-1 rounded-sm flex items-center gap-1">
                  <ExternalLink size={10} className="text-[#4a90d9]" />
                  <span className="text-[#f5ede0] text-[9px] tracking-[0.2em] uppercase">Instagram</span>
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={10} className="text-[#4a90d9]" />
                  <span className="text-[#4a90d9] text-[10px] tracking-[0.15em] uppercase">{photo.location}</span>
                </div>
                <h3 className="font-display text-[#f5ede0] text-base leading-tight mb-1">{photo.title}</h3>

                {/* Caption on hover */}
                <p className={`text-[#8a9a7e] text-xs leading-relaxed transition-all duration-300 overflow-hidden ${
                  hovered === photo.id ? "max-h-16 opacity-100 mt-1.5" : "max-h-0 opacity-0"
                }`}>
                  {photo.caption}
                </p>

                <div className={`flex items-center justify-between mt-2 transition-all duration-300 ${hovered === photo.id ? "opacity-100" : "opacity-0"}`}>
                  <div className="flex items-center gap-1 text-[#8a9a7e] text-[10px]">
                    <Heart size={9} className="text-[#d4748a]" />
                    <span>{photo.likes}</span>
                  </div>
                  <span className="text-[#6b7c5e] text-[9px] tracking-wide">{photo.account}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
