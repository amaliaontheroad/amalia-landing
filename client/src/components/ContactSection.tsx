/* ContactSection — Dark Forest Atelier
   Contact form with ambient background image
   Fields: name, location, package selection, message */

import { useEffect, useRef, useState } from "react";
import { Send, Instagram, Mail, MapPin, CheckCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/service_photography-knou6jeT4Q6mfZz6S3nV3t.webp";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    package: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Aerial view of A-frame cabin in autumn forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d1117]/88" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Info */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="section-divider mb-4">
              <span className="font-script text-[#d4748a] text-lg whitespace-nowrap">Capitolul IV</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#f5ede0] mt-4 mb-6">
              Hai să construim
              <br />
              <em className="text-[#4a90d9] not-italic">povestea ta vizuală</em>
            </h2>
            <p className="text-[#f5ede0]/70 text-base leading-relaxed font-light mb-8">
              Fie că ai o cabană A-frame în Carpați, o pensiune cu suflet în Transylvania sau un Tiny House care merită să fie descoperit — sunt aici să transform locul tău într-o destinație pe care oamenii o visează.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <a
                href="https://www.instagram.com/amaliaontheroad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#4a90d9]/10 border border-[#4a90d9]/20 flex items-center justify-center group-hover:bg-[#4a90d9]/20 transition-colors">
                  <Instagram size={16} className="text-[#4a90d9]" />
                </div>
                <div>
                  <div className="text-[#f5ede0]/80 text-sm">Instagram</div>
                  <div className="text-[#4a90d9] text-sm group-hover:text-[#6aaee8] transition-colors">@amaliaontheroad</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#4a90d9]/10 border border-[#4a90d9]/20 flex items-center justify-center">
                  <Mail size={16} className="text-[#4a90d9]" />
                </div>
                <div>
                  <div className="text-[#f5ede0]/80 text-sm">Email</div>
                  <div className="text-[#f5ede0]/60 text-sm">contact@amaliaontheroad.ro</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#4a90d9]/10 border border-[#4a90d9]/20 flex items-center justify-center">
                  <MapPin size={16} className="text-[#4a90d9]" />
                </div>
                <div>
                  <div className="text-[#f5ede0]/80 text-sm">Locație</div>
                  <div className="text-[#f5ede0]/60 text-sm">România · Disponibilă la nivel național</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#4a90d9]/40 pl-5">
              <p className="font-script text-[#d4748a] text-lg leading-relaxed">
                "Nu vând fotografii. Vând rezervări directe."
              </p>
              <p className="text-[#6b7c5e] text-xs mt-2 tracking-wide">— Amalia Elena</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {submitted ? (
              <div className="bg-[#111c2a]/80 border border-[#4a90d9]/20 rounded-sm p-10 text-center backdrop-blur-sm">
                <CheckCircle size={48} className="text-[#4a90d9] mx-auto mb-4" />
                <h3 className="font-display text-2xl text-[#f5ede0] mb-3">Mesaj trimis!</h3>
                <p className="text-[#f5ede0]/70 text-sm leading-relaxed font-light">
                  Mulțumesc pentru interes! Îți voi răspunde în maxim 24 de ore.
                  <br />
                  Până atunci, te invit să explorezi portofoliul meu pe Instagram.
                </p>
                <a
                  href="https://www.instagram.com/amaliaontheroad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-[#4a90d9] hover:text-[#6aaee8] transition-colors text-sm"
                >
                  <Instagram size={16} />
                  @amaliaontheroad
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111c2a]/60 border border-[#4a90d9]/15 rounded-sm p-6 md:p-8 backdrop-blur-sm space-y-5"
              >
                <h3 className="font-display text-xl text-[#f5ede0] mb-2">Rezervă o sesiune de branding</h3>
                <p className="text-[#6b7c5e] text-sm mb-5">Completează formularul și te voi contacta în 24 de ore.</p>

                {/* Name */}
                <div>
                  <label className="text-[#f5ede0]/60 text-xs tracking-[0.15em] uppercase block mb-2">
                    Numele tău *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="ex: Ion Popescu"
                    className="w-full bg-[#0d1117]/60 border border-[#4a90d9]/15 rounded-sm px-4 py-3 text-[#f5ede0] text-sm placeholder-[#6b7c5e] focus:outline-none focus:border-[#4a90d9]/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[#f5ede0]/60 text-xs tracking-[0.15em] uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@exemplu.ro"
                    className="w-full bg-[#0d1117]/60 border border-[#4a90d9]/15 rounded-sm px-4 py-3 text-[#f5ede0] text-sm placeholder-[#6b7c5e] focus:outline-none focus:border-[#4a90d9]/50 transition-colors"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-[#f5ede0]/60 text-xs tracking-[0.15em] uppercase block mb-2">
                    Locația ta (cabană / pensiune / Tiny House)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="ex: Cabana Nordland, Apuseni"
                    className="w-full bg-[#0d1117]/60 border border-[#4a90d9]/15 rounded-sm px-4 py-3 text-[#f5ede0] text-sm placeholder-[#6b7c5e] focus:outline-none focus:border-[#4a90d9]/50 transition-colors"
                  />
                </div>

                {/* Package selection */}
                <div>
                  <label className="text-[#f5ede0]/60 text-xs tracking-[0.15em] uppercase block mb-2">
                    Pachetul de interes
                  </label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className="w-full bg-[#0d1117]/60 border border-[#4a90d9]/15 rounded-sm px-4 py-3 text-[#f5ede0] text-sm focus:outline-none focus:border-[#4a90d9]/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#0d1117] text-[#6b7c5e]">Alege un pachet...</option>
                    <option value="refresh" className="bg-[#0d1117]">The Refresh — 200€ + transport</option>
                    <option value="storyteller" className="bg-[#0d1117]">The Storyteller — 400€ + cazare (RECOMANDAT)</option>
                    <option value="strategist" className="bg-[#0d1117]">The Strategist — 600€ + cazare</option>
                    <option value="custom" className="bg-[#0d1117]">Pachet personalizat</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[#f5ede0]/60 text-xs tracking-[0.15em] uppercase block mb-2">
                    Spune-mi despre locația ta
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descrie-mi locația ta, ce vrei să obții și orice detalii relevante..."
                    className="w-full bg-[#0d1117]/60 border border-[#4a90d9]/15 rounded-sm px-4 py-3 text-[#f5ede0] text-sm placeholder-[#6b7c5e] focus:outline-none focus:border-[#4a90d9]/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-amber w-full flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Trimite mesajul
                    </>
                  )}
                </button>

                <p className="text-[#6b7c5e] text-xs text-center">
                  Sau scrie-mi direct pe Instagram{" "}
                  <a
                    href="https://www.instagram.com/amaliaontheroad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a90d9] hover:text-[#6aaee8] transition-colors"
                  >
                    @amaliaontheroad
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
