/**
 * BrandTicker — Scrolling ticker with collaborated brands/locations
 * Inspired by ugcspritz.com's brand logos strip
 *
 * Design: Dark Forest Atelier
 * - Continuous horizontal scroll animation
 * - Dark background with subtle border top/bottom
 * - Text-based brand names in muted style
 */

import { useEffect, useRef } from "react";

const brands = [
  "Castle Hotel Daniel",
  "Moxy Belgrade",
  "Berds M Gallery Hotel",
  "Hotels Library",
  "Cura Vista Mag",
  "Transylvania Edition",
  "@amaliaontheroad",
  "Travel UGC Romania",
  "Cabane A-Frame",
  "Tiny Houses",
];

export default function BrandTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        background: "#080c0a",
        borderColor: "rgba(74,144,217,0.12)",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #080c0a, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #080c0a, transparent)" }} />

      {/* Ticker track */}
      <div
        ref={tickerRef}
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "ticker-scroll 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8">
            <span className="text-[#4a6b8a] text-xs tracking-[0.3em] uppercase font-medium">{brand}</span>
            <span className="text-[#4a90d9]/30 text-lg">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
