import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export const KarnatakaSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  const zones = [
    {
      title: isKannada ? 'ದಕ್ಷಿಣ ಬಯಲುಸೀಮೆ' : 'Southern Dry Zone',
      districts: isKannada ? 'ಮಂಡ್ಯ, ಮೈಸೂರು (ಭತ್ತ, ಕಬ್ಬು, ರಾಗಿ)' : 'Mandya, Mysuru (Paddy, Cane, Ragi)',
      desc: isKannada ? 'ನಾಲಾ ನೀರಾವರಿ ಮತ್ತು ಸಾಂದ್ರ ಕೃಷಿ ಪದ್ಧತಿ' : 'Canal irrigated fertile cropping belts',
    },
    {
      title: isKannada ? 'ಮಧ್ಯ ಪರಿವರ್ತನಾ ವಲಯ' : 'Central Transition Zone',
      districts: isKannada ? 'ಹಾಸನ, ತುಮಕೂರು (ದ್ವಿದಳ ಧಾನ್ಯ, ಎಣ್ಣೆಕಾಳು)' : 'Hassan, Tumakuru (Pulses, Oilseeds)',
      desc: isKannada ? 'ಮಳೆ ಆಶ್ರಿತ ಹಾಗೂ ಮಿಶ್ರ ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳು' : 'Rainfed and mixed horticulture farming',
    },
    {
      title: isKannada ? 'ಕರಾವಳಿ & ಮಲೆನಾಡು' : 'Coastal & Malnad Zone',
      districts: isKannada ? 'ಉಡುಪಿ, ದಕ್ಷಿಣ ಕನ್ನಡ, ಶಿವಮೊಗ್ಗ' : 'Udupi, Dakshina Kannada, Shivamogga',
      desc: isKannada ? 'ಅಡಿಕೆ, ತೆಂಗು, ಕಾಳುಮೆಣಸು ಮತ್ತು ತೋಟ ಬೆಳೆಗಳು' : 'Plantation, arecanut, and spice cultivation',
    },
    {
      title: isKannada ? 'ಉತ್ತರ ಬಯಲುಸೀಮೆ' : 'Northern Dry Zone',
      districts: isKannada ? 'ಬೆಳಗಾವಿ, ಧಾರವಾಡ, ಹಾವೇರಿ' : 'Belagavi, Dharwad, Haveri',
      desc: isKannada ? 'ಜೋಳ, ಹತ್ತಿ, ಗೋಧಿ ಮತ್ತು ಸೋಯಾಬೀನ್' : 'Extensive dryland cash & cereal crops',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF6] border-b border-[#DCE8DF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Regional Vision (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#80613D] bg-amber-100/70 px-3.5 py-1 rounded-full">
                {t.karnataka.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
                {t.karnataka.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-[#064D2C] mt-2 font-kannada">
                {t.karnataka.statementKn}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#63736B] leading-relaxed">
              {t.karnataka.statement}
            </p>

            {/* Honest Scope Disclosure */}
            <div className="p-4 rounded-2xl bg-white border border-[#DCE8DF] flex items-start gap-3 shadow-xs">
              <Sparkles className="w-5 h-5 text-[#087A3D] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#17352A] font-medium leading-relaxed">
                {t.karnataka.honestNotice}
              </p>
            </div>
          </div>

          {/* Right Column: Karnataka Agro-Climatic Zones (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE8DF] shadow-subtle space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE8DF]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#087A3D]" />
                  <h3 className="text-sm font-bold text-[#17352A]">
                    {isKannada ? 'ಕರ್ನಾಟಕದ ಕೃಷಿ-ಹವಾಮಾನ ವಲಯಗಳ ಅಗತ್ಯಗಳು' : 'Karnataka Agro-Climatic Zones Overview'}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-[#087A3D] bg-[#EAF7EC] px-2 py-0.5 rounded-full">
                  {isKannada ? '೪ ವಲಯಗಳು' : '4 Major Belts'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {zones.map((z) => (
                  <div
                    key={z.title}
                    className="p-4 rounded-2xl bg-[#F6FBF6] border border-[#DCE8DF] hover:border-[#087A3D]/40 transition-colors"
                  >
                    <h4 className="text-sm font-bold text-[#17352A]">
                      {z.title}
                    </h4>
                    <span className="text-xs font-semibold text-[#087A3D] block mt-0.5">
                      {z.districts}
                    </span>
                    <p className="text-[11px] text-[#63736B] mt-1.5 leading-relaxed">
                      {z.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-[#63736B] text-center">
                {isKannada
                  ? 'ಪ್ರತಿಯೊಂದು ವಲಯದ ಮಣ್ಣು ಮತ್ತು ಹಂಗಾಮಿನ ಆಧಾರದ ಮೇಲೆ ಸೇವೆಗಳನ್ನು ರೂಪಿಸಲಾಗುತ್ತಿದೆ.'
                  : 'Platform features are being tailored to the unique soil, crop, and monsoon cycles of each zone.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
