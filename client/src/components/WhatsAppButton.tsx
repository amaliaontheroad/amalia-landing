/**
 * WhatsAppButton — Floating action button for direct WhatsApp communication
 * 
 * Design: Dark Forest Atelier
 * - Fixed position bottom-right corner
 * - Animated pulse effect
 * - Tooltip on hover with message preview
 * - Opens WhatsApp Web or mobile app with pre-filled message
 */

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  
  // Replace with your actual WhatsApp number (format: country code + number, no spaces)
  // Example: 40723456789 for Romania
  const whatsappNumber = "40742784482"; // Amalia Elena's WhatsApp number
  const message = "Bună! Sunt interesat de serviciile tale de branding vizual și content. Poți să-mi spui mai multe despre pachete?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Contact on WhatsApp"
      >
        {/* Animated background pulse */}
        <div className="absolute inset-0 rounded-full bg-[#25d366]/20 animate-pulse group-hover:bg-[#25d366]/30 transition-colors" />
        
        {/* Main button */}
        <div className={`relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer ${
          hovered ? "scale-110 shadow-2xl" : "scale-100"
        }`}>
          <MessageCircle size={24} className="text-white" />
        </div>

        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-3 transition-all duration-300 pointer-events-none ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}>
          <div className="bg-[#0d1117] border border-[#4a90d9]/30 rounded-sm px-4 py-2.5 shadow-lg whitespace-nowrap">
            <p className="text-[#f5ede0] text-xs font-medium">Scrie-mi pe WhatsApp</p>
            <p className="text-[#8a9a7e] text-[10px] mt-1">Răspund în 24 de ore</p>
            {/* Tooltip arrow */}
            <div className="absolute top-full right-4 w-2 h-2 bg-[#0d1117] border-r border-b border-[#4a90d9]/30 transform rotate-45" />
          </div>
        </div>
      </a>

      {/* Mobile-optimized styles */}
      <style>{`
        @media (max-width: 640px) {
          .whatsapp-button {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
