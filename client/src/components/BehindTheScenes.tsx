import React from 'react';

export default function BehindTheScenes() {
  return (
    <section id="behind-the-scenes" className="py-20 bg-[#0d1117] px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">
            Povestea din spatele obiectivului
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Din teren, cu suflet — fiecare cadru povestește o poveste adevărată
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-[#4a90d9]/20">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444989792/QxD6nrJP7Yqr5cMzapJd8e/amaliapozasemnatura_85613d8a.webp"
                alt="Amalia Elena - Behind the scenes"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#4a90d9]/30 rounded-lg"></div>
          </div>

          {/* Right: Story Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Sunt Graphic Designer cu ochi format pentru simetrie și Content Creator cu inima în drum spre următoarea destinație. Fiecare fotografie pe care o iau nu este doar o imagine — este o invitație pentru oaspeții tăi să trăiască o poveste.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              De la liniștea unui A-frame ascuns în Carpați, la autenticitatea unei pensiuni cu suflet din Transilvania sau minimalismul unui Tiny House — misiunea mea este să îți transform spațiul dintr-o simplă locație, într-o destinație pe care oaspeții o visează înainte de a o vizita.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Oamenii nu rezervă o cameră, ei rezervă o poveste în care vor să trăiască. Și eu sunt aici să extrag acea poveste din locația ta.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-[#4a90d9] hover:bg-[#2a6bb5] text-white rounded-lg transition-colors"
              >
                Hai să punem locația ta în poveste
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
