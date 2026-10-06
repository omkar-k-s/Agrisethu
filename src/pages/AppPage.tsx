import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { KarnatakaAppSection } from '../components/home/KarnatakaAppSection';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export const AppPage: React.FC = () => {
  const { t, isKannada } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      {/* Page Title & Mission Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full inline-block mb-3">
          {t.app.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17352A] tracking-tight">
          {t.app.title}
        </h1>
        <p className="text-base sm:text-xl text-[#064D2C] font-bold font-kannada mt-2">
          {t.app.headingKn}
        </p>
        <p className="text-sm sm:text-base text-[#63736B] leading-relaxed max-w-2xl mx-auto mt-2">
          {t.app.description}
        </p>
      </div>

      {/* Main Two-Card Karnataka & AgriSethu Mobile App Section */}
      <div className="-mt-4 sm:-mt-6">
        <KarnatakaAppSection />
      </div>

      {/* Additional Features Context & Early Pilot Access CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-12">
        {/* 4 Value Pillars for Farmers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h4 className="text-sm font-bold text-[#17352A]">
              {t.app.feature1}
            </h4>
            <p className="text-xs text-[#63736B] leading-relaxed">
              {isKannada
                ? 'ಗ್ರಾಮೀಣ ರೈತರಿಗೆ ಅನುಕೂಲವಾಗುವಂತೆ ಸರಳ ಕನ್ನಡ ಮತ್ತು ದೊಡ್ಡ ಅಕ್ಷರಗಳ ವಿನ್ಯಾಸ.'
                : 'Native Kannada language interface crafted specifically for rural usability.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h4 className="text-sm font-bold text-[#17352A]">
              {t.app.feature2}
            </h4>
            <p className="text-xs text-[#63736B] leading-relaxed">
              {isKannada
                ? 'ಹತ್ತಿರದ ಟ್ರ್ಯಾಕ್ಟರ್, ಕಟಾವು ಯಂತ್ರ ಮತ್ತು ಉಪಕರಣಗಳ ಸುಲಭ ಶೋಧ.'
                : 'Instant nearby discovery of verified tractors, harvesters, and tools.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h4 className="text-sm font-bold text-[#17352A]">
              {t.app.feature3}
            </h4>
            <p className="text-xs text-[#63736B] leading-relaxed">
              {isKannada
                ? 'ವಿಶ್ವಾಸಾರ್ಹ ಎಫ್‌ಪಿಒ ಮತ್ತು ವಿತರಕರಿಂದ ಗುಣಮಟ್ಟದ ಬೀಜ, ಗೊಬ್ಬರ ಮಾಹಿತಿ.'
                : 'Direct connection to certified FPO agri inputs and bio-fertilizers.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h4 className="text-sm font-bold text-[#17352A]">
              {t.app.feature4}
            </h4>
            <p className="text-xs text-[#63736B] leading-relaxed">
              {isKannada
                ? 'ಕಡಿಮೆ ಇಂಟರ್ನೆಟ್ ಇರುವ ಪ್ರದೇಶಗಳಲ್ಲೂ ಪಾರದರ್ಶಕ ಮಾಹಿತಿ ಲಭ್ಯತೆ.'
                : 'Resilient low-bandwidth design with SMS and direct call support.'}
            </p>
          </div>
        </div>

        {/* Pilot Testing & Contact Pre-Registration Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF6] border border-[#E8B83F]/40 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#80613D] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#E8B83F]" />
              <span>{isKannada ? 'ಆರಂಭಿಕ ಪ್ರವೇಶ & ಪೈಲಟ್ ಪರೀಕ್ಷೆ' : 'Early Access & Pilot Testing'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#17352A]">
              {isKannada
                ? 'ನಿಮ್ಮ ತಾಲೂಕಿನಲ್ಲಿ ಅಗ್ರಿಸೇತು ಮೊಬೈಲ್ ಆ್ಯಪ್ ಪೈಲಟ್ ಆರಂಭಿಸಲು ಇಚ್ಛಿಸುವಿರಾ?'
                : 'Interested in pilot testing AgriSethu in your taluk or village?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#63736B]">
              {t.app.pilotTesting}
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#087A3D] text-white font-bold text-sm shadow-md hover:bg-[#064D2C] hover:shadow-lg transition-all"
          >
            <span>{isKannada ? 'ಸಂಪರ್ಕಿಸಿ & ಹೆಸರು ನೋಂದಾಯಿಸಿ' : 'Join Pilot Access'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
