import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Network, CheckCircle, Zap } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const missionPillars = [
    {
      id: 'connect',
      title: t.mission.pillar1Title,
      desc: t.mission.pillar1Desc,
      icon: <Network className="w-6 h-6 text-[#087A3D]" />,
      emoji: '🤝',
    },
    {
      id: 'simplify',
      title: t.mission.pillar2Title,
      desc: t.mission.pillar2Desc,
      icon: <CheckCircle className="w-6 h-6 text-[#087A3D]" />,
      emoji: '💡',
    },
    {
      id: 'empower',
      title: t.mission.pillar3Title,
      desc: t.mission.pillar3Desc,
      icon: <Zap className="w-6 h-6 text-[#087A3D]" />,
      emoji: '🌱',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCE8DF]/60" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Vision Hero Banner with Sunrise Agriculture Imagery */}
        <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#DCE8DF] bg-[#064D2C] text-white">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
              alt="Golden sunrise over Karnataka agricultural fields"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#E8B83F] text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.vision.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {t.vision.title}
            </h2>

            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-bold font-kannada text-[#E8B83F] leading-snug">
              “{t.vision.statementKn}”
            </blockquote>

            <p className="text-sm sm:text-lg text-emerald-100 font-medium leading-relaxed max-w-2xl mx-auto">
              “{t.vision.statement}”
            </p>

            <p className="text-xs text-emerald-200/80 pt-1">
              {t.vision.subtext}
            </p>
          </div>
        </div>

        {/* Mission Pillars (3 Cards) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
              {t.mission.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17352A] mt-2">
              {t.mission.title}
            </h3>
            <p className="text-sm text-[#63736B] mt-1">
              {isKannada
                ? 'ರೈತರ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ರೂಪಿಸಲಾದ ೩ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು'
                : 'Three guiding pillars that steer our product decisions'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPillars.map((m) => (
              <div
                key={m.id}
                className="p-6 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-subtle hover:border-[#087A3D] hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-2xl mb-4">
                    {m.emoji}
                  </div>
                  <h4 className="text-lg font-bold text-[#17352A] mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DCE8DF]/70 text-[11px] font-semibold text-[#087A3D]">
                  {isKannada ? '✓ ರೈತಪರ ಧ್ಯೇಯ' : '✓ Core Commitment'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
