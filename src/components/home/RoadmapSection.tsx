import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Milestone, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const steps = [
    {
      id: 'step1',
      stage: t.roadmap.step1Title,
      stageKn: t.roadmap.step1Kn,
      desc: t.roadmap.step1Desc,
      status: 'active',
      badge: isKannada ? 'ಪ್ರಸ್ತುತ ಹಂತ' : 'Current Stage',
    },
    {
      id: 'step2',
      stage: t.roadmap.step2Title,
      stageKn: t.roadmap.step2Kn,
      desc: t.roadmap.step2Desc,
      status: 'next',
      badge: isKannada ? 'ಮುಂದಿನ ಯೋಜನೆ' : 'Next Milestone',
    },
    {
      id: 'step3',
      stage: t.roadmap.step3Title,
      stageKn: t.roadmap.step3Kn,
      desc: t.roadmap.step3Desc,
      status: 'future',
      badge: isKannada ? 'ಭವಿಷ್ಯದ ಗುರಿ' : 'Future Expansion',
    },
    {
      id: 'step4',
      stage: t.roadmap.step4Title,
      stageKn: t.roadmap.step4Kn,
      desc: t.roadmap.step4Desc,
      status: 'vision',
      badge: isKannada ? 'ದೂರದೃಷ್ಟಿ' : 'Long-Term Vision',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCE8DF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.roadmap.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
            {t.roadmap.title}
          </h2>
          <p className="text-sm sm:text-base text-[#63736B] mt-2 font-medium">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* 4-Stage Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                s.status === 'active'
                  ? 'bg-[#F6FBF6] border-[#087A3D] shadow-card ring-1 ring-[#087A3D]'
                  : 'bg-white border-[#DCE8DF] shadow-subtle'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      s.status === 'active'
                        ? 'bg-[#087A3D] text-white'
                        : 'bg-[#EAF7EC] text-[#064D2C]'
                    }`}
                  >
                    {s.badge}
                  </span>
                  <span className="text-xs font-black text-[#63736B]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#17352A]">
                  {s.stage}
                </h3>
                <span className="text-xs font-semibold text-[#087A3D] font-kannada block mt-0.5 mb-2">
                  {s.stageKn}
                </span>

                <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DCE8DF]/70 text-[10px] text-[#63736B]">
                {s.status === 'active' && (
                  <span className="flex items-center gap-1 text-[#087A3D] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isKannada ? 'ಪ್ರಗತಿಯಲ್ಲಿದೆ' : 'Work in Progress'}
                  </span>
                )}
                {s.status !== 'active' && (
                  <span>{isKannada ? 'ಯೋಜನಾ ಹಂತ' : 'Planned Roadblock'}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
