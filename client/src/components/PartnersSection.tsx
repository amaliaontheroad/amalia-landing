import React from 'react';

export default function PartnersSection() {
  const partners = [
    {
      name: 'HotelsLibrary',
      description: 'Luxury Hotels & Resorts',
      followers: '1M+',
      url: 'https://www.instagram.com/hotelslibrary/',
      logo: '🏨',
      type: 'Premium Hotels Network'
    },
    {
      name: 'Innovtour',
      description: 'Travel & Tourism Solutions',
      followers: '200+',
      url: 'https://innovtour.ro/',
      logo: '✈️',
      type: 'Travel Partner'
    }
  ];

  return (
    <section id="partners" className="py-16 bg-[#0d1117] px-4 md:px-8 border-t border-[#4a90d9]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4a90d9] font-dancing-script text-lg mb-2">Parteneri de Încredere</p>
          <h3 className="text-3xl font-playfair text-white">
            Colaborări cu branduri premium
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-[#4a90d9]/20 hover:border-[#4a90d9]/50 bg-[#0d1117]/50 hover:bg-[#1a2332] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="text-xl font-playfair text-white group-hover:text-[#4a90d9] transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">{partner.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#4a90d9] font-bold">{partner.followers}</p>
                  <p className="text-xs text-gray-500">proiecte</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{partner.description}</p>
              <div className="mt-4 flex items-center text-[#4a90d9] text-sm group-hover:translate-x-1 transition-transform">
                Vizitează →
              </div>
            </a>
          ))}
        </div>

        {/* Portfolio Link */}
        <div className="mt-12 p-6 rounded-lg border border-[#4a90d9]/20 bg-gradient-to-r from-[#4a90d9]/10 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-playfair text-white mb-2">Portofoliu Foto Complet</h4>
              <p className="text-gray-400">Descoperă toate proiectele mele și stilul visual</p>
            </div>
            <a
              href="https://office22a0.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#4a90d9] hover:bg-[#2a6bb5] text-white rounded-lg transition-colors whitespace-nowrap"
            >
              Vezi Portofoliu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
