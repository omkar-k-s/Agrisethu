import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, HeartHandshake, Eye, DollarSign, Network, Leaf } from 'lucide-react';

export const About: React.FC = () => {
  const { t, isKannada } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.about.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17352A] tracking-tight">
            {t.about.title}
          </h1>
          <p className="text-base sm:text-lg font-semibold text-[#064D2C] font-kannada">
            {t.about.lead}
          </p>
        </div>

        {/* Narrative & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-card border border-[#DCE8DF]">
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"
              alt="Farmers in Karnataka agricultural field"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064D2C]/90 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                {isKannada ? 'ರೈತ ಕೇಂದ್ರಿತ ತಂತ್ರಜ್ಞಾನ' : 'Rooted in Rural Karnataka'}
              </span>
              <p className="text-base font-bold mt-1">
                {isKannada
                  ? 'ಕೃಷಿ ತಂತ್ರಜ್ಞಾನವು ಪ್ರತಿಯೊಬ್ಬ ಸಣ್ಣ ಹಿಡುವಳಿದಾರರಿಗೂ ಲಭ್ಯವಾಗಬೇಕು.'
                  : 'Agricultural technology must serve every smallholder farmer, not just large estates.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl font-bold text-[#17352A]">
              {isKannada ? 'ಕೃಷಿಸೇತು ಹುಟ್ಟಿದ ಉದ್ದೇಶ' : 'Why AgriSethu Was Born'}
            </h2>
            <p className="text-sm sm:text-base text-[#63736B] leading-relaxed">
              In Karnataka, over 70% of farmers cultivate small or marginal plots. Accessing modern equipment—tractors, rotavators, harvesters—is essential for timely operations and minimizing crop loss, but purchasing such machinery is financially out of reach for most individual families.
            </p>
            <p className="text-sm sm:text-base text-[#63736B] leading-relaxed font-kannada">
              {isKannada
                ? 'AgriSethu ಕೇವಲ ಒಂದು ಆಪ್ ಅಲ್ಲ; ಇದು ರೈತರ ನಡುವೆ ಯಂತ್ರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಮತ್ತು ಕೃಷಿ ವೆಚ್ಚವನ್ನು ಗಣನೀಯವಾಗಿ ತಗ್ಗಿಸುವ ಸಾಮಾಜಿಕ-ಆರ್ಥಿಕ ಸೇತುವೆಯಾಗಿದೆ.'
                : 'AgriSethu was conceptualized to solve this bottleneck: building an accessible digital bridge where agricultural resources, idle machinery, and verified inputs can be shared cooperatively.'}
            </p>

            <div className="p-4 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] flex items-center gap-3">
              <HeartHandshake className="w-8 h-8 text-[#087A3D] flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#064D2C] uppercase tracking-wider">
                  {isKannada ? 'ನಮ್ಮ ಪ್ರಾಮಾಣಿಕ ಬದ್ಧತೆ' : 'Our Integrity Pledge'}
                </h4>
                <p className="text-xs text-[#63736B] mt-0.5">
                  {isKannada
                    ? 'ರೈತರಿಂದ ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ. ನೈಜ ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಸ್ಥಳೀಯ ಭಾಷಾ ನೆರವು.'
                    : 'Transparent communication, zero hidden costs, and respectful Kannada accessibility at every touchpoint.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose & Approach in Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#087A3D]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#17352A]">
              {t.about.purposeTitle}
            </h3>
            <p className="text-sm text-[#63736B] leading-relaxed">
              {t.about.purposeDesc}
            </p>
            <p className="text-xs text-[#63736B] leading-relaxed">
              We focus on minimizing the friction smallholder farmers face when seeking quality inputs, implements, and local support.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#087A3D]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#17352A]">
              {t.about.approachTitle}
            </h3>
            <p className="text-sm text-[#63736B] leading-relaxed">
              {t.about.approachDesc}
            </p>
            <p className="text-xs text-[#63736B] leading-relaxed">
              By combining digital convenience with on-ground agricultural empathy, we ensure that technological advancement benefits real farming households.
            </p>
          </div>
        </div>

        {/* CTA to App */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#064D2C] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              {isKannada ? 'AgriSethu ಮೊಬೈಲ್ ಆ್ಯಪ್ ಪರಿಶೀಲಿಸಿ' : 'Discover the AgriSethu Mobile App'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 max-w-xl">
              {isKannada
                ? 'ರೈತರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗುತ್ತಿರುವ ಸರಳ ಡಿಜಿಟಲ್ ವೇದಿಕೆಯ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೋಡಿ.'
                : 'Explore the conceptual screens and features designed for farmers across Karnataka.'}
            </p>
          </div>
          <Link
            to="/app"
            className="px-6 py-3 rounded-xl bg-[#087A3D] text-white font-bold text-sm hover:bg-[#39A852] transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <span>{t.hero.btnApp}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
