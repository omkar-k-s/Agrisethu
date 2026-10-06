import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Heart, Compass, Cpu, Users } from 'lucide-react';

export const WhyAgriSethuSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const principles = [
    {
      id: 'p1',
      icon: <Heart className="w-6 h-6 text-[#087A3D]" />,
      title: t.whyChoose.p1Title,
      titleKn: t.whyChoose.p1Kn,
      desc: t.whyChoose.p1Desc,
    },
    {
      id: 'p2',
      icon: <Compass className="w-6 h-6 text-[#087A3D]" />,
      title: t.whyChoose.p2Title,
      titleKn: t.whyChoose.p2Kn,
      desc: t.whyChoose.p2Desc,
    },
    {
      id: 'p3',
      icon: <Cpu className="w-6 h-6 text-[#087A3D]" />,
      title: t.whyChoose.p3Title,
      titleKn: t.whyChoose.p3Kn,
      desc: t.whyChoose.p3Desc,
    },
    {
      id: 'p4',
      icon: <Users className="w-6 h-6 text-[#087A3D]" />,
      title: t.whyChoose.p4Title,
      titleKn: t.whyChoose.p4Kn,
      desc: t.whyChoose.p4Desc,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F6FBF6] border-b border-[#DCE8DF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-white px-3.5 py-1 rounded-full border border-[#DCE8DF]">
            {t.whyChoose.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
            {t.whyChoose.title}
          </h2>
          <p className="text-sm sm:text-base text-[#63736B] mt-1 font-medium font-kannada">
            {t.whyChoose.headingKn}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-3xl bg-white border border-[#DCE8DF] shadow-subtle hover:border-[#087A3D] hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF7EC] flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#17352A] mb-1">
                  {p.title}
                </h3>
                <span className="text-xs font-bold text-[#087A3D] font-kannada block mb-2">
                  {p.titleKn}
                </span>
                <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DCE8DF]/70 text-[11px] font-semibold text-[#064D2C]">
                {isKannada ? '✓ ರೈತಪರ ಬದ್ಧತೆ' : '✓ Farmer First Guarantee'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
