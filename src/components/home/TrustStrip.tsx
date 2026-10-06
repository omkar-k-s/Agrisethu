import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HERO_IMPACT_CARDS } from '../../data/heroImpact';
import { UserCheck, Sprout, MapPin, Handshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { isKannada } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'farmer':
        return <UserCheck className="w-5 h-5 text-[#087A3D]" />;
      case 'resources':
        return <Sprout className="w-5 h-5 text-[#087A3D]" />;
      case 'karnataka':
        return <MapPin className="w-5 h-5 text-[#087A3D]" />;
      case 'community':
        return <Handshake className="w-5 h-5 text-[#087A3D]" />;
      default:
        return <Sprout className="w-5 h-5 text-[#087A3D]" />;
    }
  };

  return (
    <section className="relative bg-white py-6 sm:py-8 lg:py-9 border-b border-[#E4EEE7] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. FAINT ARCHITECTURAL WATERMARKS (Vidhana Soudha on Left, Gopuram on Right) */}
      {/* ========================================================================= */}
      {/* Vidhana Soudha Line Sketch on Left */}
      <div className="absolute left-0 bottom-0 top-0 w-44 sm:w-60 lg:w-72 opacity-85 lg:opacity-90 mix-blend-multiply pointer-events-none select-none flex items-center">
        <img
          src="/images/vidhana_soudha_sketch.jpg"
          alt="Vidhana Soudha architectural sketch"
          aria-hidden="true"
          className="w-full h-auto max-h-full object-contain object-left filter contrast-125"
        />
      </div>

      {/* Karnataka Temple Gopuram Line Sketch on Right */}
      <div className="absolute right-0 bottom-0 top-0 w-44 sm:w-60 lg:w-72 opacity-85 lg:opacity-90 mix-blend-multiply pointer-events-none select-none flex items-center justify-end">
        <img
          src="/images/temple_gopuram_sketch.jpg"
          alt="Karnataka Temple Gopuram architectural sketch"
          aria-hidden="true"
          className="w-full h-auto max-h-full object-contain object-right filter contrast-125"
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. FOUR OFFICIAL INFORMATIONAL PILLAR CARDS                                */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HERO_IMPACT_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white/95 backdrop-blur-xs rounded-2xl border border-[#DCE8DF] p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,90,60,0.03)] hover:shadow-[0_8px_24px_rgba(0,90,60,0.08)] hover:-translate-y-0.5 transition-all flex items-center gap-3.5 group"
            >
              {/* Icon Badge */}
              <div className="w-11 h-11 rounded-xl bg-[#EAF7EC] flex items-center justify-center flex-shrink-0 group-hover:bg-[#005A3C] transition-colors duration-300">
                <span className="group-hover:text-white transition-colors">
                  {getIcon(card.iconName)}
                </span>
              </div>

              {/* Bilingual Informational Content */}
              <div className="min-w-0 flex-1">
                <h4 className="font-extrabold text-sm sm:text-[15px] text-[#17352A] tracking-tight leading-tight group-hover:text-[#005A3C] transition-colors">
                  {card.titleEn}
                </h4>

                <span className="font-kannada font-bold text-xs sm:text-[13px] text-[#087A3D] block mt-0.5 leading-tight truncate">
                  {card.titleKn}
                </span>

                <p className="text-[11px] text-[#63736B] font-medium block truncate mt-0.5">
                  {isKannada ? card.subtitleKn : card.subtitleEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
