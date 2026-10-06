import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Sparkles, Network, CheckCircle, Zap, Heart, Compass, Cpu, Users, ArrowRight } from 'lucide-react';

export const Vision: React.FC = () => {
  const { t, isKannada } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.vision.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17352A] tracking-tight">
            {t.vision.title}
          </h1>
          <p className="text-base sm:text-lg text-[#63736B] font-medium font-kannada">
            {isKannada
              ? 'ಕರ್ನಾಟಕದ ಸಮಗ್ರ ಕೃಷಿ ಪ್ರಗತಿಗಾಗಿ ನಮ್ಮ ಮುನ್ನೋಟ ಮತ್ತು ಧ್ಯೇಯ'
              : 'Our guiding vision and foundational mission for Karnataka agriculture'}
          </p>
        </div>

        {/* Vision Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#DCE8DF] bg-[#064D2C] text-white">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
              alt="Karnataka agricultural landscape at sunrise"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
              {isKannada ? 'ನಮ್ಮ ಮುಖ್ಯ ದೃಷ್ಟಿಕೋನ' : 'The Core Statement'}
            </span>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold font-kannada text-[#E8B83F] leading-snug">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17352A] mt-2">
              {t.mission.title}
            </h2>
            <p className="text-sm text-[#63736B] mt-1">
              {isKannada
                ? 'ರೈತರ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ರೂಪಿಸಲಾದ ೩ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳು'
                : 'Three foundational objectives steering our agricultural platform'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPillars.map((m) => (
              <div
                key={m.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-subtle hover:border-[#087A3D] hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-2xl mb-4">
                    {m.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-[#17352A] mb-2">
                    {m.title}
                  </h3>
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

        {/* 4 Foundational Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17352A]">
              {t.whyChoose.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#63736B] mt-1">
              {isKannada ? 'ನಮ್ಮನ್ನು ಮುನ್ನಡೆಸುವ ಮಾರ್ಗದರ್ಶಿ ತತ್ವಗಳು' : 'The ethical compass for everything we build'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#FFFDF6] border border-[#DCE8DF]">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3 text-[#087A3D]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#17352A]">{t.whyChoose.p1Title}</h3>
              <span className="text-xs font-semibold text-[#087A3D] font-kannada block mt-0.5 mb-2">{t.whyChoose.p1Kn}</span>
              <p className="text-xs text-[#63736B] leading-relaxed">{t.whyChoose.p1Desc}</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFFDF6] border border-[#DCE8DF]">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3 text-[#087A3D]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#17352A]">{t.whyChoose.p2Title}</h3>
              <span className="text-xs font-semibold text-[#087A3D] font-kannada block mt-0.5 mb-2">{t.whyChoose.p2Kn}</span>
              <p className="text-xs text-[#63736B] leading-relaxed">{t.whyChoose.p2Desc}</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFFDF6] border border-[#DCE8DF]">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3 text-[#087A3D]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#17352A]">{t.whyChoose.p3Title}</h3>
              <span className="text-xs font-semibold text-[#087A3D] font-kannada block mt-0.5 mb-2">{t.whyChoose.p3Kn}</span>
              <p className="text-xs text-[#63736B] leading-relaxed">{t.whyChoose.p3Desc}</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFFDF6] border border-[#DCE8DF]">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3 text-[#087A3D]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#17352A]">{t.whyChoose.p4Title}</h3>
              <span className="text-xs font-semibold text-[#087A3D] font-kannada block mt-0.5 mb-2">{t.whyChoose.p4Kn}</span>
              <p className="text-xs text-[#63736B] leading-relaxed">{t.whyChoose.p4Desc}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#087A3D] text-white font-bold text-sm hover:bg-[#064D2C] shadow-md transition-all"
          >
            <span>{isKannada ? 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ' : 'Connect with the AgriSethu Team'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
