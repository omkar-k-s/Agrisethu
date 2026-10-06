import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Tractor, Sprout, Users, Smartphone, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const { t, isKannada } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      id: 'equipment',
      title: t.whatWeDo.card1Title,
      titleKn: t.whatWeDo.card1Kn,
      desc: t.whatWeDo.card1Desc,
      icon: <Tractor className="w-8 h-8 text-[#087A3D]" />,
      emoji: '🚜',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80',
      points: isKannada
        ? [
            'ದುಬಾರಿ ಯಂತ್ರಗಳನ್ನು ಖರೀದಿಸದೆ ಅಗತ್ಯವಿದ್ದಾಗ ಬಾಡಿಗೆಗೆ ಪಡೆಯುವ ಅವಕಾಶ',
            'ಟ್ರ್ಯಾಕ್ಟರ್, ರೋಟಾವೇಟರ್, ಪವರ್ ಟಿಲ್ಲರ್ ಮತ್ತು ಕಂಬೈನ್ ಹಾರ್ವೆಸ್ಟರ್‌ಗಳ ಶೋಧನೆ',
            'ಗ್ರಾಮೀಣ ಯಂತ್ರ ಮಾಲೀಕರೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ ಮತ್ತು ಪರಸ್ಪರ ಸಹಯೋಗ',
            'ಕಾಲೋಚಿತ ಕೃಷಿ ಕೆಲಸಗಳಿಗೆ ಸಕಾಲಿಕ ಯಾಂತ್ರೀಕರಣದ ಬೆಂಬಲ'
          ]
        : [
            'Enabling on-demand access to tractors, rotavators, and harvesters',
            'Eliminating unnecessary capital debt for smallholder farmers',
            'Connecting farmers directly with verified local machine owners',
            'Ensuring timely field preparation before monsoon rains'
          ],
    },
    {
      id: 'resources',
      title: t.whatWeDo.card2Title,
      titleKn: t.whatWeDo.card2Kn,
      desc: t.whatWeDo.card2Desc,
      icon: <Sprout className="w-8 h-8 text-[#087A3D]" />,
      emoji: '🌱',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1000&q=80',
      points: isKannada
        ? [
            'ಪ್ರಮಾಣೀಕೃತ ಬಿತ್ತನೆ ಬೀಜಗಳು (ರಾಗಿ ಜಿಪಿಯು-೨೮, ಭತ್ತದ ತಳಿಗಳು)',
            'ಗುಣಮಟ್ಟದ ಸಾವಯವ ಗೊಬ್ಬರ ಮತ್ತು ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ವರ್ಧಕಗಳು',
            'ನೈಸರ್ಗಿಕ ಕೀಟನಾಶಕಗಳು, ಕಹಿಬೇವಿನ ಸಾರ ಮತ್ತು ಜೈವಿಕ ಪರಿಹಾರಗಳು',
            'ರೈತ ಉತ್ಪಾದಕ ಸಂಸ್ಥೆಗಳಿಂದ (FPO) ನೈಜ ಪರಿಕರಗಳ ಮಾಹಿತಿ'
          ]
        : [
            'Promoting certified, high-yield seeds tailored for Karnataka soils',
            'Information on genuine organic compost & bio-fertilizers',
            'Bio-pesticides and natural crop protection resources',
            'Direct discovery of inputs from vetted Farmer Producer Organizations'
          ],
    },
    {
      id: 'people',
      title: t.whatWeDo.card3Title,
      titleKn: t.whatWeDo.card3Kn,
      desc: t.whatWeDo.card3Desc,
      icon: <Users className="w-8 h-8 text-[#087A3D]" />,
      emoji: '🤝',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80',
      points: isKannada
        ? [
            'ರೈತರು, ಯಂತ್ರ ಮಾಲೀಕರು ಮತ್ತು ಪೂರೈಕೆದಾರರ ನಡುವೆ ವಿಶ್ವಾಸಾರ್ಹ ಸೇತು',
            'ಗ್ರಾಮೀಣ ಕೃಷಿ ಸಮುದಾಯದ ನಡುವೆ ಪರಸ್ಪರ ಸಹಕಾರ ಮತ್ತು ಗೌರವ',
            'ಕೃಷಿ ತಜ್ಞರು ಮತ್ತು ಸಂಘಟನೆಗಳೊಂದಿಗೆ ಮಾಹಿತಿ ವಿನಿಮಯ',
            'ಮಧ್ಯವರ್ತಿಗಳ ಹಾವಳಿಯಿಲ್ಲದ ನೇರ ಸಂವಹನ ವ್ಯವಸ್ಥೆ'
          ]
        : [
            'Building a community of mutual trust between farmers and providers',
            'Encouraging local resource sharing and equipment pooling',
            'Collaborating with agricultural universities and field experts',
            'Fostering transparent rural partnerships across taluks'
          ],
    },
    {
      id: 'digital',
      title: t.whatWeDo.card4Title,
      titleKn: t.whatWeDo.card4Kn,
      desc: t.whatWeDo.card4Desc,
      icon: <Smartphone className="w-8 h-8 text-[#087A3D]" />,
      emoji: '📱',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=80',
      points: isKannada
        ? [
            'ಕನ್ನಡದಲ್ಲೇ ಸರಳವಾಗಿ ಬಳಸಬಹುದಾದ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ವಿನ್ಯಾಸ',
            'ಗ್ರಾಮೀಣ ಕಡಿಮೆ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವಿರುವ ಜಾಗಗಳಲ್ಲೂ ಸುಲಭ ಬಳಕೆ',
            'ಹವಾಮಾನ ಮತ್ತು ಋತುಮಾನದ ಕೃಷಿ ಮುನ್ಸೂಚನೆ ಮಾಹಿತಿ',
            'ಫೋನ್ ಕರೆ ಮತ್ತು ಎಸ್‌ಎಂಎಸ್ ಮೂಲಕವೂ ರೈತರಿಗೆ ಸಹಾಯ'
          ]
        : [
            'Bilingual Kannada-first interface built for easy field use',
            'Engineered for lightweight performance in rural networks',
            'Accessible weather, cropping calendar, and seasonal alerts',
            'Multichannel support including direct phone consultation'
          ],
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
            {t.whatWeDo.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17352A] tracking-tight">
            {t.whatWeDo.title}
          </h1>
          <p className="text-base sm:text-lg text-[#63736B] font-medium font-kannada">
            {t.whatWeDo.subtitle}
          </p>
        </div>

        {/* Informational Pillars */}
        <div className="space-y-12">
          {pillars.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-10 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl">{item.emoji}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#17352A]">
                  {item.title}
                </h2>
                <span className="text-sm font-semibold text-[#087A3D] font-kannada block">
                  {item.titleKn}
                </span>

                <p className="text-sm sm:text-base text-[#63736B] leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-2 pt-2">
                  {item.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17352A]">
                      <div className="w-4 h-4 rounded-full bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    to="/app"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087A3D] text-white font-bold text-xs sm:text-sm hover:bg-[#064D2C] transition-colors"
                  >
                    <span>{isKannada ? 'ಆ್ಯಪ್‌ನಲ್ಲಿ ತಿಳಿಯಿರಿ' : 'Explore in App'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-3xl overflow-hidden shadow-card border border-[#DCE8DF] h-72 sm:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-[#FFFDF6] border border-[#DCE8DF] space-y-4 max-w-3xl mx-auto">
          <ShieldCheck className="w-10 h-10 text-[#087A3D] mx-auto" />
          <h3 className="text-xl font-bold text-[#17352A]">
            {isKannada ? 'ಕೃಷಿಕರ ನೈಜ ಸಬಲೀಕರಣವೇ ನಮ್ಮ ಗುರಿ' : 'Dedicated to Farmer Empowerment in Karnataka'}
          </h3>
          <p className="text-xs sm:text-sm text-[#63736B] leading-relaxed">
            {isKannada
              ? 'AgriSethu ವೆಬ್‌ಸೈಟ್ ಒಂದು ಮಾಹಿತಿ ವೇದಿಕೆಯಾಗಿದೆ. ಎಲ್ಲಾ ನೈಜ ಕೃಷಿ ಸೇವೆಗಳು, ಯಂತ್ರೋಪಕರಣ ಸಂಪರ್ಕ ಮತ್ತು ಬುಕಿಂಗ್ ಸೌಲಭ್ಯಗಳನ್ನು ಭವಿಷ್ಯದಲ್ಲಿ AgriSethu ಮೊಬೈಲ್ ಆ್ಯಪ್ ಮೂಲಕ ಒದಗಿಸಲಾಗುವುದು.'
              : 'This website is strictly an informational portal. All active equipment scheduling and input services will be operated through the upcoming AgriSethu mobile application.'}
          </p>
          <Link
            to="/app"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#087A3D] hover:underline"
          >
            <span>{isKannada ? 'ಮೊಬೈಲ್ ಆ್ಯಪ್ ಪರಿಚಯ ನೋಡಿ →' : 'Learn About the AgriSethu App →'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
