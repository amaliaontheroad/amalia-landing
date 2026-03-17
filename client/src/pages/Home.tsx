/* Home — Dark Forest Atelier
   Landing page for Amalia Elena | @amaliaontheroad
   Visual Branding & Content for Romanian cabins and guesthouses
   
   Sections:
   1. Navigation (sticky)
   2. Hero (full-bleed cinematic)
   3. About (brand story)
   4. Transylvania Edition (cinematic interstitial)
   5. Reels Portfolio (3 featured Instagram reels)
   6. Packages (3 service cards)
   7. Testimonials (social proof)
   8. Contact (form + info)
   9. Footer
*/

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransylvaniaSection from "@/components/TransylvaniaSection";
import ReelsSection from "@/components/ReelsSection";
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
      <ReelsSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
