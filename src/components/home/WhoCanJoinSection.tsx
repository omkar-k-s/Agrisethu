import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Tractor, Sprout, Handshake } from 'lucide-react';

export const WhoCanJoinSection: React.FC = () => {
  const { t } = useLanguage();

  const groups = [
    {
      id: 'farmers',
      emoji: '👨🌾',
      icon: <Users className="w-6 h-6 text-[#087A3D]" />,
      title: t.whoCanJoin.card1Title,
      titleKn: t.whoCanJoin.card1Kn,
      desc: t.whoCanJoin.card1Desc,
    },
    {
      id: 'owners',
      emoji: '🚜',
      icon: <Tractor className="w-6 h-6 text-[#087A3D]" />,
      title: t.whoCanJoin.card2Title,
      titleKn: t.whoCanJoin.card2Kn,
      desc: t.whoCanJoin.card2Desc,
    },
    {
      id: 'suppliers',
      emoji: '🌱',
      icon: <Sprout className="w-6 h-6 text-[#087A3D]" />,
      title: t.whoCanJoin.card3Title,
      titleKn: t.whoCanJoin.card3Kn,
      desc: t.whoCanJoin.card3Desc,
    },
    {
      id: 'partners',
      emoji: '🤝',
      icon: <Handshake className="w-6 h-6 text-[#087A3D]" />,
      title: t.whoCanJoin.card4Title,
      titleKn: t.whoCanJoin.card4Kn,
      desc: t.whoCanJoin.card4Desc,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCE8DF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.whoCanJoin.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
            {t.whoCanJoin.title}
          </h2>
          <p className="text-sm sm:text-base text-[#63736B] mt-2 font-medium">
            {t.whoCanJoin.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div
              key={g.id}
              className="p-6 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-subtle hover:border-[#087A3D] hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-2xl mb-4">
                  {g.emoji}
                </div>
                <h3 className="text-lg font-bold text-[#17352A] mb-1 group-hover:text-[#087A3D] transition-colors">
                  {g.title}
                </h3>
                <span className="text-xs font-semibold text-[#087A3D] font-kannada block mb-2">
                  {g.titleKn}
                </span>
                <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#DCE8DF]/70">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087A3D] hover:underline"
                >
                  <span>{t.whoCanJoin.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
