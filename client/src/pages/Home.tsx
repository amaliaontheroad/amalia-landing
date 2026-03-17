/* Home — Dark Forest Atelier
   Landing page for Amalia Elena | @amaliaontheroad
   Visual Branding & Content for Romanian cabins and guesthouses
   
   Sections:
   1. Navigation (sticky)
   2. Hero (full-bleed cinematic)
   3. About (brand story)
   4. Transylvania Edition (cinematic interstitial)
   5. Packages (3 service cards)
   6. Testimonials (social proof)
   7. Contact (form + info)
   8. Footer
*/

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransylvaniaSection from "@/components/TransylvaniaSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TransylvaniaSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
