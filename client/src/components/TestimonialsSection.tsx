/* TestimonialsSection — Dark Forest Atelier
   Social proof from real Instagram comments + community reactions
   Horizontal scroll strip with testimonial cards */

import { useEffect, useRef, useState } from "react";
import { Instagram, Heart, MessageCircle, Quote } from "lucide-react";

const testimonials = [

  {
    id: 5,
    username: "flaviaezgi",
    handle: "@flaviaezgi",
    text: "Te rog să mă bagi și pe mine în portbagaj 🤣 scapă-mă de cotidianul bucureștean",
    platform: "Instagram",
    post: "Transfăgărășan, Romania",
    avatar: "FE",
    color: "#2d2d1a",
  },
  {
    id: 6,
    username: "wanderer_in_wild",
    handle: "@wanderer_in_wild",
    text: "Unforgettable memories, unbeatable vibes 🙌",
    platform: "Instagram",
    post: "Tréguier, Bretagne",
    avatar: "WW",
    color: "#1a3d2d",
  },
  {
    id: 7,
    username: "heleni.travels",
    handle: "@heleni.travels",
    text: "Amazing 😍 Your storytelling always gives me goosebumps",
    platform: "Instagram",
    post: "Tréguier, Bretagne",
    avatar: "HT",
    color: "#3d1a1a",
  },
  {
    id: 8,
    username: "madalina.curelea",
    handle: "@madalina.curelea",
    text: "Pfiuu cum arată 😍❤️ Mereu te depășești cu fiecare postare",
    platform: "Instagram",
    post: "Tréguier, Bretagne",
    avatar: "MC",
    color: "#1a1a3d",
  },
];

const stats = [
  { value: "202", label: "Likes", icon: Heart, post: "Transfăgărășan" },
  { value: "26", label: "Comentarii", icon: MessageCircle, post: "Transfăgărășan" },
  { value: "64", label: "Likes", icon: Heart, post: "Tréguier" },
  { value: "20", label: "Comentarii", icon: MessageCircle, post: "Tréguier" },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0d1117] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{background: "radial-gradient(ellipse at 20% 80%, #d4748a, transparent 50%)"}}
      />

      <div className="container" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-divider mb-4">
            <span className="font-script text-[#d4748a] text-lg whitespace-nowrap">Capitolul III</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#f5ede0] mt-4">
            Ce spune comunitatea
          </h2>
          <p className="text-[#6b7c5e] text-sm mt-3 font-light">
            Reacții reale de pe Instagram · @amaliaontheroad
          </p>
        </div>



        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial-card p-5 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote size={16} className="text-[#4a90d9]/40 mb-3" />

              {/* Comment text */}
              <p className="text-[#f5ede0]/80 text-sm leading-relaxed mb-4 font-light">
                {t.text}
              </p>

              {/* User info */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#f5ede0] text-xs font-bold flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[#f5ede0]/70 text-xs font-medium">{t.handle}</div>
                  <div className="text-[#6b7c5e] text-[10px] flex items-center gap-1 mt-0.5">
                    <Instagram size={9} />
                    {t.post}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://www.instagram.com/amaliaontheroad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#4a90d9]/70 hover:text-[#4a90d9] transition-colors text-sm group"
          >
            <Instagram size={16} />
            <span>Vezi toate postările pe Instagram</span>
            <span className="w-0 group-hover:w-6 h-px bg-[#4a90d9] transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
