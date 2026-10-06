import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Users, Tractor, Sprout, Truck, Handshake } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const nodes = [
    {
      id: 'farmers',
      emoji: '👨🌾',
      title: t.ecosystem.nodeFarmers,
      desc: t.ecosystem.nodeFarmersDesc,
      icon: <Users className="w-5 h-5 text-[#087A3D]" />,
      pos: 'left',
    },
    {
      id: 'owners',
      emoji: '🚜',
      title: t.ecosystem.nodeOwners,
      desc: t.ecosystem.nodeOwnersDesc,
      icon: <Tractor className="w-5 h-5 text-[#087A3D]" />,
      pos: 'right',
    },
    {
      id: 'suppliers',
      emoji: '🌱',
      title: t.ecosystem.nodeSuppliers,
      desc: t.ecosystem.nodeSuppliersDesc,
      icon: <Sprout className="w-5 h-5 text-[#087A3D]" />,
      pos: 'right',
    },
    {
      id: 'logistics',
      emoji: '🚚',
      title: t.ecosystem.nodeLogistics,
      desc: t.ecosystem.nodeLogisticsDesc,
      icon: <Truck className="w-5 h-5 text-[#087A3D]" />,
      pos: 'left',
    },
    {
      id: 'partners',
      emoji: '🤝',
      title: t.ecosystem.nodePartners,
      desc: t.ecosystem.nodePartnersDesc,
      icon: <Handshake className="w-5 h-5 text-[#087A3D]" />,
      pos: 'bottom',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F6FBF6] via-white to-[#F6FBF6] border-b border-[#DCE8DF]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.ecosystem.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
            {t.ecosystem.title}
          </h2>
          <p className="text-sm sm:text-base text-[#63736B] mt-2 font-medium">
            {t.ecosystem.subtitle}
          </p>
        </div>

        {/* Central Ecosystem Diagram Container */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#DCE8DF] shadow-card relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stakeholder Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] hover:border-[#087A3D] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{nodes[0].emoji}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#17352A]">{nodes[0].title}</h3>
                    <p className="text-xs text-[#63736B] mt-0.5">{nodes[0].desc}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] hover:border-[#087A3D] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{nodes[3].emoji}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#17352A]">{nodes[3].title}</h3>
                    <p className="text-xs text-[#63736B] mt-0.5">{nodes[3].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Core: AgriSethu Bridge Emblem (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-[#087A3D] to-[#064D2C] text-white text-center shadow-lg relative my-2">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-[#E8B83F]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                {t.ecosystem.centerRole}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-white">
                {t.ecosystem.centerTitle}
              </h3>
              <p className="text-xs text-emerald-100 mt-2 font-kannada leading-relaxed">
                {isKannada
                  ? 'ಸಂಪನ್ಮೂಲ, ನಂಬಿಕೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನವನ್ನು ಜೋಡಿಸುವ ಸೇತುವೆ'
                  : 'Bridging trust, equipment sharing & opportunities across Karnataka'}
              </p>
              <div className="mt-4 px-3 py-1 rounded-full bg-white/10 text-[10px] font-semibold tracking-wide text-white border border-white/20">
                Informational • Bilingual • Community First
              </div>
            </div>

            {/* Right Stakeholder Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] hover:border-[#087A3D] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{nodes[1].emoji}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#17352A]">{nodes[1].title}</h3>
                    <p className="text-xs text-[#63736B] mt-0.5">{nodes[1].desc}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] hover:border-[#087A3D] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{nodes[2].emoji}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#17352A]">{nodes[2].title}</h3>
                    <p className="text-xs text-[#63736B] mt-0.5">{nodes[2].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Partner Stakeholder Tile */}
          <div className="mt-6 pt-6 border-t border-[#DCE8DF] max-w-md mx-auto">
            <div className="p-3.5 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] flex items-center justify-center gap-3 text-center">
              <span className="text-2xl">{nodes[4].emoji}</span>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#17352A]">{nodes[4].title}</h4>
                <p className="text-xs text-[#63736B]">{nodes[4].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
