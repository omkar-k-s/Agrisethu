import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Search, Link2, Smartphone, Sprout, ArrowRight, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t, isKannada } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedSteps = [
    {
      num: '01',
      title: 'Discover / ಶೋಧನೆ',
      heading: isKannada ? 'ಅಗತ್ಯ ಸಂಪನ್ಮೂಲಗಳ ಶೋಧ' : 'Discover Local Agricultural Resources',
      desc: isKannada
        ? 'ರೈತರು ತಮ್ಮ ಹಳ್ಳಿ ಅಥವಾ ತಾಲೂಕಿನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳು, ರೋಟಾವೇಟರ್‌ಗಳು, ಬಿತ್ತನೆ ಯಂತ್ರಗಳು ಮತ್ತು ಪ್ರಮಾಣೀಕೃತ ಬೀಜ-ಗೊಬ್ಬರಗಳ ವಿವರಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳುತ್ತಾರೆ.'
        : 'Farmers explore agricultural equipment, implements, and certified inputs available in their taluk and neighboring villages.',
      icon: <Search className="w-6 h-6 text-[#087A3D]" />,
      points: isKannada
        ? ['ಹತ್ತಿರದ ಯಂತ್ರಗಳ ಪಟ್ಟಿ', 'ಲಭ್ಯವಿರುವ ಉಪಕರಣಗಳ ತಾಂತ್ರಿಕ ವಿವರ', 'ಋತುಮಾನದ ಬೆಳೆ ಪರಿಕರಗಳು']
        : ['Browse nearby tractors & implements', 'Detailed machinery specifications', 'Seasonal input recommendations'],
    },
    {
      num: '02',
      title: 'Connect / ಸಂಪರ್ಕ',
      heading: isKannada ? 'ವಿಶ್ವಾಸಾರ್ಹ ಮಾಲೀಕರೊಂದಿಗೆ ಸಂಪರ್ಕ' : 'Connect with Verified Providers',
      desc: isKannada
        ? 'ಸ್ಥಳೀಯ ಯಂತ್ರೋಪಕರಣ ಮಾಲೀಕರು ಮತ್ತು ಕೃಷಿ ಉತ್ಪಾದಕ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ (FPO) ನೇರ ಹಾಗೂ ಪಾರದರ್ಶಕ ಸಂವಹನ ಸಾಧಿಸಲಾಗುತ್ತದೆ.'
        : 'Establish transparent communication with local equipment owners and vetted agricultural suppliers without middleman exploitation.',
      icon: <Link2 className="w-6 h-6 text-[#087A3D]" />,
      points: isKannada
        ? ['ಮಧ್ಯವರ್ತಿಗಳ ಹಾವಳಿಯಿಲ್ಲದ ಸಂವಹನ', 'ಪರಿಶೀಲಿತ ಯಂತ್ರ ಮಾಲೀಕರು', 'ದರ ಮತ್ತು ಸಮಯದ ಪಾರದರ್ಶಕತೆ']
        : ['Direct contact with machine owners', 'Vetted and verified equipment', 'Clear expectations on timings and terms'],
    },
    {
      num: '03',
      title: 'Access / ಪ್ರವೇಶ',
      heading: isKannada ? 'ಆ್ಯಪ್ ಮೂಲಕ ಸುಲಭ ಪ್ರವೇಶ' : 'Access via the AgriSethu Mobile App',
      desc: isKannada
        ? 'AgriSethu ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಅಥವಾ ನಮ್ಮ ನೇರ ಫೋನ್ ಸಹಾಯವಾಣಿ ಮೂಲಕ ರೈತರು ತಮಗೆ ಬೇಕಾದ ಸಮಯದಲ್ಲಿ ಯಂತ್ರ ಅಥವಾ ಪರಿಕರಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳುತ್ತಾರೆ.'
        : 'Through the upcoming AgriSethu mobile application or direct phone support, farmers schedule equipment operations and receive inputs.',
      icon: <Smartphone className="w-6 h-6 text-[#087A3D]" />,
      points: isKannada
        ? ['ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮೂಲಕ ಸುಲಭ ಬಳಕೆ', 'ನುರಿತ ಚಾಲಕರೊಂದಿಗೆ ಯಂತ್ರ ಲಭ್ಯತೆ', 'ಫೋನ್ ಕರೆ ಮೂಲಕವೂ ನೆರವು']
        : ['Intuitive mobile app interface in Kannada', 'Skilled machine operators provided', 'Direct helpline phone assistance'],
    },
    {
      num: '04',
      title: 'Grow / ಸಮೃದ್ಧಿ',
      heading: isKannada ? 'ಕಡಿಮೆ ವೆಚ್ಚ, ಹೆಚ್ಚಿನ ಇಳುವರಿ' : 'Grow with Timely Operations & Savings',
      desc: isKannada
        ? 'ಸಕಾಲಿಕ ಬಿತ್ತನೆ ಮತ್ತು ಕಟಾವು ಕೆಲಸಗಳು ಸುಗಮವಾಗಿ ನಡೆದು, ಯಂತ್ರ ಖರೀದಿಯ ಸಾಲದ ಭಾರವಿಲ್ಲದೆ ಕೃಷಿ ಸಮೃದ್ಧಿ ಸಾಧಿಸಲು ನೆರವಾಗುತ್ತದೆ.'
        : 'Timely farm preparation and mechanized harvesting lead to reduced harvest losses, lower cultivation expenses, and sustainable growth.',
      icon: <Sprout className="w-6 h-6 text-[#087A3D]" />,
      points: isKannada
        ? ['ಸಕಾಲಿಕ ಕೃಷಿ ಕೆಲಸಗಳು', 'ಸಾಲದ ಭಾರವಿಲ್ಲದ ಯಾಂತ್ರೀಕರಣ', 'ಸುಸ್ಥಿರ ಕೃಷಿ ಆದಾಯ']
        : ['Monsoon-aligned field operations', 'Zero heavy machinery debt', 'Long-term farming viability'],
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.howItWorks.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17352A] tracking-tight">
            {t.howItWorks.title}
          </h1>
          <p className="text-base sm:text-lg text-[#63736B] font-medium font-kannada">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Detailed Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {detailedSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 sm:p-8 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-subtle hover:border-[#087A3D]/40 transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-3xl sm:text-4xl font-black text-[#087A3D] font-kannada">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D]">
                  {step.title}
                </span>
                <h3 className="text-xl font-bold text-[#17352A]">
                  {step.heading}
                </h3>
                <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {step.points.map((pt) => (
                    <span
                      key={pt}
                      className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-1 rounded-full border border-[#DCE8DF] text-[#17352A]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087A3D]" />
                      <span>{pt}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#064D2C] to-[#087A3D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              {isKannada ? 'ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮೂಲಕ ಸೇವೆಗಳ ಪ್ರವೇಶ' : 'Services Delivered via the Mobile App'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              {isKannada
                ? 'AgriSethu ಆ್ಯಪ್ ಮೂಲಕ ರೈತರು ಈ ಎಲ್ಲಾ ಹಂತಗಳನ್ನು ತಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲೇ ಸುಲಭವಾಗಿ ನಿರ್ವಹಿಸಬಹುದು.'
                : 'The AgriSethu mobile application brings all these four steps into an intuitive, bilingual smartphone experience.'}
            </p>
          </div>
          <Link
            to="/app"
            className="px-6 py-3.5 rounded-xl bg-white text-[#064D2C] font-bold text-sm hover:bg-[#F6FBF6] transition-colors flex items-center gap-2 flex-shrink-0 shadow-md"
          >
            <span>{t.hero.btnApp}</span>
            <ArrowRight className="w-4 h-4 text-[#087A3D]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
