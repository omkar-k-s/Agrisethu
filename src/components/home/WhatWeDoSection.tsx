import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Tractor, Sprout, Users, Smartphone } from 'lucide-react';

export const WhatWeDoSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const cards = [
    {
      id: 'equipment-access',
      title: t.whatWeDo.card1Title,
      titleKn: t.whatWeDo.card1Kn,
      desc: t.whatWeDo.card1Desc,
      icon: <Tractor className="w-6 h-6 text-[#087A3D]" />,
      emoji: '🚜',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'agri-resources',
      title: t.whatWeDo.card2Title,
      titleKn: t.whatWeDo.card2Kn,
      desc: t.whatWeDo.card2Desc,
      icon: <Sprout className="w-6 h-6 text-[#087A3D]" />,
      emoji: '🌱',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'connecting-people',
      title: t.whatWeDo.card3Title,
      titleKn: t.whatWeDo.card3Kn,
      desc: t.whatWeDo.card3Desc,
      icon: <Users className="w-6 h-6 text-[#087A3D]" />,
      emoji: '🤝',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'digital-agriculture',
      title: t.whatWeDo.card4Title,
      titleKn: t.whatWeDo.card4Kn,
      desc: t.whatWeDo.card4Desc,
      icon: <Smartphone className="w-6 h-6 text-[#087A3D]" />,
      emoji: '📱',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-16 lg:py-22 bg-white border-b border-[#DCE8DF]/60" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.whatWeDo.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
            {t.whatWeDo.title}
          </h2>
          <p className="text-sm sm:text-base text-[#63736B] mt-2 font-medium">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c) => (
            <div
              key={c.id}
              className="group rounded-3xl overflow-hidden bg-white border border-[#DCE8DF] shadow-subtle hover:shadow-card hover:border-[#087A3D]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-50">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-[#064D2C] shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <span>{c.emoji}</span>
                    <span>{isKannada ? c.titleKn : c.title}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#EAF7EC] flex items-center justify-center">
                      {c.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#17352A] group-hover:text-[#087A3D] transition-colors">
                        {c.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#087A3D] font-kannada">
                        {c.titleKn}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed mt-2.5">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#DCE8DF]/70 flex items-center justify-between">
                  <Link
                    to="/what-we-do"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087A3D] group-hover:text-[#064D2C] transition-colors"
                  >
                    <span>{t.whatWeDo.card1Cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-[#63736B]">
                    {isKannada ? 'ಮಾಹಿತಿ ವಿವರ' : 'Concept Overview'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
