/* English Landing Page — International Version
   All content in English with international pricing
   Pricing: €500, €700, €1000 for international markets */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyWorkSection from "@/components/WhyWorkSection";
import PackagesSectionEN from "@/components/PackagesSectionEN";
import ReelsSection from "@/components/ReelsSection";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, useRef, useState } from "react";
import { Instagram, MapPin } from "lucide-react";

const PORTRAIT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/amaliapozasemnatura_85613d8a.webp";

export default function HomeEN() {
  return (
    <main className="bg-[#0d1117] text-[#f5ede0]">
      <Navigation />
      <HeroSectionEN />
      <AboutSectionEN />
      <WhyWorkSection />
      <PackagesSectionEN />
      <ReelsSection />
      <PhotoGallery />
      <TestimonialsSection />
      <ContactSectionEN />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function HeroSectionEN() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/hero_aframe_cinematic-S9rubiqiinbaS8nxH2NLik.webp"
          alt="A-frame cabin in misty Transylvanian forest"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/40 to-[#0d1117]/90" />
      </div>

      <div className="relative z-10 container text-center px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#f5ede0] leading-tight max-w-4xl mx-auto mb-6">
          Transform your location into
          <br />
          <em className="text-[#4a90d9] not-italic">a desired destination.</em>
        </h1>

        <p className="mt-6 text-[#f5ede0]/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Narrative UGC, Graphic Design & Visual Strategy for cabins, guesthouses & Tiny Houses that attract direct bookings.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="btn-amber">
            VIEW PACKAGES
          </button>
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="btn-ghost-amber">
            MY STORY
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutSectionEN() {
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
            <span className="font-script text-[#d4748a] text-lg whitespace-nowrap">Chapter I</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#f5ede0] mt-4 text-center">
            The Story Behind the Lens
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
                  <span className="text-[#f5ede0]/80 text-xs tracking-wide">Transylvania, Romania</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story text */}
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <p className="font-script text-[#d4748a] text-xl mb-4">Hi, I am Amalia</p>
            <p className="text-[#f5ede0]/80 text-base md:text-lg leading-relaxed font-light mb-6">
              If you scroll through my profile, you will see I am on a continuous search for "magic but architectural". For me, a location is not just a sum of GPS coordinates, it is a state of mind. I am drawn to places that have a secret to tell — A-frame cabins that disappear into the mist, hidden guesthouses where time stands still, and those Tiny Houses that breathe authenticity through every fiber of wood.
            </p>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-6">
              I come from a mix of worlds: I am a <strong className="text-[#f5ede0] font-normal">Graphic Designer with an eye trained for symmetry</strong> and a <strong className="text-[#f5ede0] font-normal">Content Creator with a heart on the road</strong> to the next destination.
            </p>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-8">
              I am not "just another influencer looking for a free stay". My expertise has been built through partnerships like <strong className="text-[#4a90d9] font-normal">Hotelslibrary</strong> and projects like <strong className="text-[#4a90d9] font-normal">Innovtour</strong>, where I learned that luxury hospitality means attention to the smallest detail. My travels through 9 foreign countries and every corner of Romania taught me one thing: people do not book a room, they book a story they want to live in.
            </p>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-8">
              <em className="text-[#4a90d9]">My mission is to extract that story from your location.</em>
            </p>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Narrative Video Reels",
                "Lifestyle Photography",
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
              <span className="text-[#6b7c5e] text-xs">· 5.2K followers</span>
              <span className="w-0 group-hover:w-8 h-px bg-[#4a90d9] transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSectionEN() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#1a1f2e]">
      <div className="container text-center">
        <h2 className="font-display text-4xl md:text-5xl text-[#f5ede0] mb-4">
          Let us Build
        </h2>
        <p className="text-[#4a90d9] text-xl font-display mb-6">
          Your Visual Story
        </p>
        <p className="text-[#f5ede0]/70 max-w-2xl mx-auto leading-relaxed mb-8">
          My mission is to transform your space from a simple location into a destination your guests dream about.
        </p>
        <p className="text-[#f5ede0]/50 italic mb-8">
          "People do not book a room, they book a story they want to live in."
        </p>
        <a
          href="https://wa.me/40771234567?text=Hi%20Amalia%2C%20I%27m%20interested%20in%20your%20services"
          className="inline-block btn-amber"
        >
          Message me on WhatsApp
        </a>
      </div>
    </section>
  );
}
