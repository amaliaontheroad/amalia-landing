/* TransylvaniaSection — Dark Forest Atelier
   Full-bleed cinematic interstitial section
   "The Transylvania Edition" brand moment */

import { useEffect, useRef, useState } from "react";

const AERIAL_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/service_photography-knou6jeT4Q6mfZz6S3nV3t.webp";

export default function TransylvaniaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={AERIAL_URL}
          alt="Aerial view of A-frame cabin in Transylvanian autumn forest"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0d1117]/65" />
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse at center, transparent 20%, rgba(13,17,23,0.8) 100%)"}} />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-script text-[#d4748a] text-xl md:text-2xl mb-4">
          The Transylvania Edition
        </p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#f5ede0] leading-tight max-w-3xl mx-auto">
          Fiecare locație are
          <br />
          <em className="text-[#4a90d9] not-italic">o poveste care merită spusă.</em>
        </h2>
        <p className="text-[#f5ede0]/60 text-base md:text-lg mt-6 max-w-xl mx-auto font-light">
          Nu fotografiez locuri. Fotografiez emoții, atmosfere și momentele care fac oamenii să spună: <em>"Vreau să fiu acolo."</em>
        </p>
      </div>
    </section>
  );
}
