/* Footer — Dark Forest Atelier
   Minimal dark footer with brand signature */

import { Instagram } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080d0b] border-t border-[#c8842a]/10 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="font-script text-[#c8842a] text-2xl block mb-2">Amalia Elena</span>
            <p className="text-[#6b7c5e] text-xs tracking-[0.2em] uppercase mb-4">
              Visual Branding & Content
            </p>
            <p className="text-[#f5ede0]/40 text-sm font-light leading-relaxed">
              Travel UGC & Graphic Design pentru cabane,
              pensiuni și Tiny Houses din România.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#f5ede0]/50 text-xs tracking-[0.2em] uppercase mb-4">Navigare</h4>
            <div className="space-y-2">
              {[
                { label: "Povestea mea", id: "about" },
                { label: "Pachete", id: "packages" },
                { label: "Recenzii", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block text-[#f5ede0]/50 hover:text-[#c8842a] text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#f5ede0]/50 text-xs tracking-[0.2em] uppercase mb-4">Social Media</h4>
            <a
              href="https://www.instagram.com/amaliaontheroad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#f5ede0]/50 hover:text-[#c8842a] transition-colors group"
            >
              <Instagram size={18} />
              <div>
                <div className="text-sm">@amaliaontheroad</div>
                <div className="text-xs text-[#6b7c5e]">5.2K+ urmăritori</div>
              </div>
            </a>
            <div className="mt-6">
              <p className="text-[#6b7c5e] text-xs leading-relaxed">
                Partener: <span className="text-[#f5ede0]/40">@hotelslibrary</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c8842a]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#6b7c5e] text-xs">
            © 2026 Amalia Elena · @amaliaontheroad · Toate drepturile rezervate
          </p>
          <p className="text-[#6b7c5e] text-xs font-script">
            Made with ❤️ for Romania's hidden gems
          </p>
        </div>
      </div>
    </footer>
  );
}
