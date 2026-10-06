import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Smartphone, Sparkles, Heart } from 'lucide-react';

export const ForFarmersSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const benefits = [
    {
      id: 'simple',
      title: t.forFarmers.benefit1Title,
      titleKn: t.forFarmers.benefit1Kn,
      desc: t.forFarmers.benefit1Desc,
      emoji: '🌾',
    },
    {
      id: 'accessible',
      title: t.forFarmers.benefit2Title,
      titleKn: t.forFarmers.benefit2Kn,
      desc: t.forFarmers.benefit2Desc,
      emoji: '🗣️',
    },
    {
      id: 'connected',
      title: t.forFarmers.benefit3Title,
      titleKn: t.forFarmers.benefit3Kn,
      desc: t.forFarmers.benefit3Desc,
      emoji: '🤝',
    },
    {
      id: 'farmer-focused',
      title: t.forFarmers.benefit4Title,
      titleKn: t.forFarmers.benefit4Kn,
      desc: t.forFarmers.benefit4Desc,
      emoji: '🌱',
    },
  ];

  return (
    <section className="py-16 lg:py-22 bg-white border-b border-[#DCE8DF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Lead & Benefits Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
                {t.forFarmers.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
                {t.forFarmers.title}
              </h2>
              <p className="text-base sm:text-lg text-[#63736B] mt-2 font-medium leading-relaxed">
                {t.forFarmers.lead}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] hover:border-[#087A3D]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-lg mb-3">
                    {b.emoji}
                  </div>
                  <h3 className="text-sm font-bold text-[#17352A] flex items-center gap-1.5">
                    <span>{b.title}</span>
                  </h3>
                  <span className="text-xs font-semibold text-[#087A3D] font-kannada block mt-0.5 mb-1.5">
                    {b.titleKn}
                  </span>
                  <p className="text-xs text-[#63736B] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087A3D] text-white font-bold text-sm shadow-sm hover:bg-[#064D2C] transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                <span>{t.forFarmers.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Farmer Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#064D2C] to-[#087A3D] text-white shadow-card space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#E8B83F]">
                <Heart className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                  {isKannada ? 'ನಮ್ಮ ಪ್ರಾಮಾಣಿಕ ಸಂಕಲ್ಪ' : 'Farmer-First Vision'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white leading-snug">
                  {isKannada
                    ? 'ಕೃಷಿಕರ ಶ್ರಮಕ್ಕೆ ತಂತ್ರಜ್ಞಾನದ ಗೌರವಯುತ ಸಾಥ್'
                    : 'Honoring farmer labor with accessible technology'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-kannada">
                {isKannada
                  ? 'AgriSethu ರೈತರಿಗೆ ಯಾವುದೇ ಅನಗತ್ಯ ವೆಚ್ಚವಿಲ್ಲದೆ, ಯಂತ್ರಗಳು ಮತ್ತು ಪರಿಕರಗಳನ್ನು ಸುಲಭವಾಗಿ ಹುಡುಕಲು ನೆರವಾಗುವ ವಿಶ್ವಾಸಾರ್ಹ ಡಿಜಿಟಲ್ ಜಾಲವಾಗಿದೆ.'
                  : 'AgriSethu is conceived to make agricultural mechanization convenient, cost-effective, and community-driven without unnecessary debts.'}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/20 text-xs text-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{isKannada ? 'ಸಂಪೂರ್ಣ ಕನ್ನಡ ಭಾಷಾ ಇಂಟರ್‌ಫೇಸ್' : 'Complete Kannada language interface'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{isKannada ? 'ಗ್ರಾಮೀಣ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸೂಕ್ತವಾದ ವಿನ್ಯಾಸ' : 'Engineered for low-bandwidth village areas'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{isKannada ? 'ಫೋನ್ ಕರೆ ಮೂಲಕವೂ ನೇರ ಸಹಾಯವಾಣಿ' : 'Direct phone support helpline available'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
