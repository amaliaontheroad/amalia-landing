/* AboutSection — Dark Forest Atelier
   Brand story section with portrait and narrative text
   Asymmetric layout: portrait left, story text right */

import { useEffect, useRef, useState } from "react";
import { Instagram, MapPin } from "lucide-react";

const PORTRAIT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/amalia_portrait-VJRrf8gMXbdtMJDq7Nfe4L.webp";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d1117] relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{background: "radial-gradient(ellipse at top right, #4a90d9, transparent 60%)"}}
      />

      <div className="container" ref={ref}>
        {/* Section label */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-divider">
            <span className="font-script text-[#d4748a] text-lg whitespace-nowrap">Capitolul I</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#f5ede0] mt-4 text-center">
            Povestea din spatele obiectivului
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Portrait */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Decorative border frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#4a90d9]/20 rounded-sm" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#4a90d9]/10 rounded-sm" />
              <img
                src={PORTRAIT_URL}
                alt="Amalia Elena — Travel Content Creator"
                className="w-full aspect-[3/4] object-cover object-top rounded-sm relative z-10"
              />
              {/* Overlay tag */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#0d1117]/80 backdrop-blur-sm border border-[#4a90d9]/20 px-4 py-2 rounded-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#4a90d9]" />
                  <span className="text-[#f5ede0]/80 text-xs tracking-wide">Transylvania, România</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story text */}
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <p className="font-script text-[#d4748a] text-xl mb-4">Bună, sunt Amalia</p>
            <p className="text-[#f5ede0]/80 text-base md:text-lg leading-relaxed font-light mb-6">
              Dacă te uiți pe profilul meu, vei vedea că sunt într-o căutare continuă de „magic but architectural". Pentru mine, o locație nu este doar o sumă de coordonate GPS, ci o stare de spirit. Sunt atrasă de locurile care au un secret de spus — cabane A-frame care dispar în ceață, pensiuni ascunse unde timpul stă în loc și acele Tiny Houses care respiră autenticitate prin fiecare fibră a lemnului.
            </p>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-6">
              Vin dintr-un mix de lumi: sunt <strong className="text-[#f5ede0] font-normal">Graphic Designer cu ochi format pentru simetrie</strong> și <strong className="text-[#f5ede0] font-normal">Content Creator cu inima în drum</strong> spre următoarea destinație.
            </p>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-8">
              Nu sunt „încă un influencer care caută o cazare". Expertiza mea s-a clădit în parteneriate precum <strong className="text-[#4a90d9] font-normal">Hotelslibrary</strong> și proiecte ca <strong className="text-[#4a90d9] font-normal">Innovtour</strong>, unde am învățat că ospitalitatea de lux înseamnă atenție la detaliul cel mai mic. Călătoriile mele prin 9 țări străine și fiecare colț de Românie m-au învățat un lucru: oamenii nu rezervă o cameră, ei rezervă o poveste în care vor să trăiască.
            </p>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-8">
              <em className="text-[#4a90d9]">Misiunea mea este să extrag acea poveste din locația ta.</em>
            </p>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Video Reels Narrative",
                "Fotografie Lifestyle",
                "Graphic Design",
                "Social Media Strategy",
                "Branding Kit",
                "Google Maps Optimization",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#4a90d9] flex-shrink-0" />
                  <span className="text-[#f5ede0]/60 text-sm">{skill}</span>
                </div>
              ))}
            </div>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/amaliaontheroad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#4a90d9] hover:text-[#6aaee8] transition-colors group"
            >
              <Instagram size={18} />
              <span className="text-sm tracking-wide">@amaliaontheroad</span>
              <span className="text-[#6b7c5e] text-xs">· 5.2K urmăritori</span>
              <span className="w-0 group-hover:w-8 h-px bg-[#4a90d9] transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
