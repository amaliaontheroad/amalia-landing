/* Navigation — Dark Forest Atelier
   Transparent → solid on scroll, amber hover underlines */

import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-[#c8842a]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start"
        >
          <span className="font-script text-[#c8842a] text-xl leading-none">Amalia Elena</span>
          <span className="text-[#6b7c5e] text-[10px] tracking-[0.25em] uppercase font-light mt-0.5">
            Visual Branding & Content
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Povestea mea", id: "about" },
            { label: "Pachete", id: "packages" },
            { label: "Recenzii", id: "testimonials" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#f5ede0]/70 hover:text-[#c8842a] text-sm tracking-wide transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8842a] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="https://www.instagram.com/amaliaontheroad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5ede0]/50 hover:text-[#c8842a] transition-colors duration-300"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#f5ede0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#f5ede0] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#f5ede0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0d1117]/98 border-t border-[#c8842a]/10 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Povestea mea", id: "about" },
            { label: "Pachete", id: "packages" },
            { label: "Recenzii", id: "testimonials" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#f5ede0]/80 hover:text-[#c8842a] text-base tracking-wide transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
