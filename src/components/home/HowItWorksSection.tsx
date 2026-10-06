import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, Link2, Smartphone, Sprout, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const steps = [
    {
      num: t.howItWorks.step1Num,
      title: t.howItWorks.step1Title,
      desc: isKannada ? t.howItWorks.step1DescKn : t.howItWorks.step1Desc,
      icon: <Search className="w-5 h-5 text-[#087A3D]" />,
    },
    {
      num: t.howItWorks.step2Num,
      title: t.howItWorks.step2Title,
      desc: isKannada ? t.howItWorks.step2DescKn : t.howItWorks.step2Desc,
      icon: <Link2 className="w-5 h-5 text-[#087A3D]" />,
    },
    {
      num: t.howItWorks.step3Num,
      title: t.howItWorks.step3Title,
      desc: isKannada ? t.howItWorks.step3DescKn : t.howItWorks.step3Desc,
      icon: <Smartphone className="w-5 h-5 text-[#087A3D]" />,
    },
    {
      num: t.howItWorks.step4Num,
      title: t.howItWorks.step4Title,
      desc: isKannada ? t.howItWorks.step4DescKn : t.howItWorks.step4Desc,
      icon: <Sprout className="w-5 h-5 text-[#087A3D]" />,
    },
  ];

  return (
    <section className="py-16 lg:py-22 bg-[#F6FBF6] border-b border-[#DCE8DF]/60" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-white px-3.5 py-1 rounded-full border border-[#DCE8DF]">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-[#63736B] mt-2 font-medium">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-6 rounded-3xl bg-white border border-[#DCE8DF] shadow-subtle hover:border-[#087A3D] hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-[#087A3D] font-kannada">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF7EC] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#17352A] mb-2 group-hover:text-[#087A3D] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connected Arrow Indicator for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#DCE8DF] text-[#087A3D] flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
