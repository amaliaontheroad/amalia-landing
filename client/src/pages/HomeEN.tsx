/* English Landing Page — International Version
   All content in English with international pricing
   Pricing: €500, €700, €1000 for international markets */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyWorkSection from "@/components/WhyWorkSection";
import PackagesSectionEN from "@/components/PackagesSectionEN";
import ReelsSection from "@/components/ReelsSection";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0d1117]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5ede0] mb-6">
              The Story Behind the Lens
            </h2>
            <p className="text-[#f5ede0]/70 leading-relaxed mb-4">
              Hi, I am Amalia. If you scroll through my profile, you will see I am on a continuous search for magic but architectural. For me, a location is not just a sum of GPS coordinates, it is a state of mind.
            </p>
            <p className="text-[#f5ede0]/70 leading-relaxed">
              I come from a mix of worlds: I am a Graphic Designer with an eye trained for symmetry and a Content Creator with a heart on the road to the next destination.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/amalia_portrait-knou6jeT4Q6mfZz6S3nV3t.webp"
              alt="Amalia Elena"
              className="rounded-lg"
            />
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
