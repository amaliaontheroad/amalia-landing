/* Home — Dark Forest Atelier
   Landing page for Amalia Elena | @amaliaontheroad
   Visual Branding & Content for Romanian cabins and guesthouses
   Inspired by ugcspritz.com structure + Dark Forest Atelier aesthetic

   Sections:
   1. Navigation (sticky)
   2. Hero (full-bleed cinematic)
   3. BrandTicker (scrolling collaborations strip)
   4. About (brand story)
   5. WhyWork (de ce eu? — 4 reasons + stats)
   6. ServicesOverview (4 service category cards)
   7. Transylvania Edition (cinematic interstitial)
   8. Reels Portfolio (3 featured Instagram reels)
   9. PhotoGallery (masonry grid with real Instagram posts)
   10. Packages (3 service cards with pricing)
   11. Testimonials (social proof)
   12. Contact (form + info)
   13. Footer
*/

import { useAuth } from "@/_core/hooks/useAuth";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandTicker from "@/components/BrandTicker";
import AboutSection from "@/components/AboutSection";
import WhyWorkSection from "@/components/WhyWorkSection";
import BehindTheScenes from "@/components/BehindTheScenes";
import ReelsSection from "@/components/ReelsSection";
import PhotoGallery from "@/components/PhotoGallery";
import PackagesSection from "@/components/PackagesSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />
      <HeroSection />
      <BrandTicker />
      <AboutSection />
      <WhyWorkSection />
      <BehindTheScenes />
      <ReelsSection />
      <PhotoGallery />
      <PackagesSection />
      <PartnersSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
