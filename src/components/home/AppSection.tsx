import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Smartphone, QrCode, CheckCircle2, Bell, Tractor, ShoppingCart, ShieldCheck } from 'lucide-react';

export const AppSection: React.FC = () => {
  const { t, isKannada } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCE8DF]/60" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#064D2C] via-[#087A3D] to-[#064D2C] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#39A852]/20 filter blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E8B83F]/15 filter blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            {/* Left Column: Explanations & Coming Soon Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#E8B83F] text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>{t.app.badge}</span>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {t.app.title}
                </h2>
                <p className="text-lg sm:text-xl font-bold font-kannada text-[#E8B83F]">
                  {t.app.headingKn}
                </p>
                <p className="text-sm font-semibold text-emerald-100">
                  {t.app.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl">
                {t.app.description}
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{t.app.feature1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{t.app.feature2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{t.app.feature3}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
                  <span>{t.app.feature4}</span>
                </div>
              </div>

              {/* App Status & QR Badge */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <div className="px-4 py-2.5 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-sm flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-[#E8B83F]" />
                  <div>
                    <span className="text-[10px] text-emerald-300 uppercase block tracking-wider font-semibold">
                      Mobile Application
                    </span>
                    <span className="text-xs font-bold text-white">
                      {t.app.statusNotice}
                    </span>
                  </div>
                </div>

                <div className="px-4 py-2.5 rounded-2xl bg-white text-[#17352A] flex items-center gap-2.5 shadow-md">
                  <QrCode className="w-5 h-5 text-[#087A3D]" />
                  <div>
                    <span className="text-[10px] text-[#63736B] block font-semibold">
                      {isKannada ? 'ಆರಂಭಿಕ ಪ್ರವೇಶ' : 'Early Access'}
                    </span>
                    <span className="text-xs font-bold text-[#064D2C]">
                      {t.app.qrLabel}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-emerald-300/80">
                *{t.app.pilotTesting}
              </p>
            </div>

            {/* Right Column: Smartphone Mockup with Conceptual Screens (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800">
                {/* Speaker notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2" />

                {/* Inner Mockup Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden text-[#17352A] text-xs">
                  {/* Screen Header */}
                  <div className="bg-[#087A3D] text-white p-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">AgriSethu</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-semibold">ಕನ್ನಡ</span>
                        <Bell className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <p className="text-[10px] text-emerald-200">
                      📍 Karnataka Farmer Dashboard • ಹವಾಮಾನ 28°C
                    </p>
                  </div>

                  {/* Screen Body */}
                  <div className="p-3 space-y-2.5 bg-[#F6FBF6]">
                    {/* Conceptual Services Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 bg-white rounded-xl border border-[#DCE8DF] text-center shadow-xs">
                        <div className="w-7 h-7 mx-auto rounded-lg bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center mb-1">
                          <Tractor className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[10px] block text-[#17352A]">
                          {isKannada ? 'ಯಂತ್ರೋಪಕರಣ' : 'Equipment'}
                        </span>
                        <span className="text-[9px] text-[#087A3D] font-medium">
                          {isKannada ? 'ಬಾಡಿಗೆ ಮಾಹಿತಿ' : 'Rental Access'}
                        </span>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-[#DCE8DF] text-center shadow-xs">
                        <div className="w-7 h-7 mx-auto rounded-lg bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center mb-1">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[10px] block text-[#17352A]">
                          {isKannada ? 'ಕೃಷಿ ಪರಿಕರ' : 'Agri Inputs'}
                        </span>
                        <span className="text-[9px] text-[#087A3D] font-medium">
                          {isKannada ? 'ಬೀಜ & ಗೊಬ್ಬರ' : 'Seeds & Bio'}
                        </span>
                      </div>
                    </div>

                    {/* Conceptual Service Card */}
                    <div className="p-2.5 bg-white rounded-xl border border-[#087A3D]/30 shadow-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-bold uppercase text-[#087A3D]">
                          {isKannada ? 'ಪರಿಶೀಲಿತ ಸೇವೆ' : 'Verified Service'}
                        </span>
                        <span className="text-[9px] font-bold bg-[#EAF7EC] text-[#064D2C] px-1.5 py-0.5 rounded">
                          {isKannada ? 'ಲಭ್ಯತೆ ಶೋಧ' : 'Active Discovery'}
                        </span>
                      </div>
                      <p className="font-bold text-[11px] text-[#17352A]">
                        {isKannada ? 'ರೋಟಾವೇಟರ್ & ಟ್ರ್ಯಾಕ್ಟರ್ ಹಂಚಿಕೆ' : 'Shared Tractor & Implement'}
                      </p>
                      <p className="text-[9px] text-[#63736B]">
                        {isKannada ? 'ಸ್ಥಳೀಯ ಮಾಲೀಕರೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ' : 'Direct connection with verified owners'}
                      </p>
                    </div>

                    {/* Conceptual Alert */}
                    <div className="p-2 bg-amber-50 rounded-xl border border-amber-200 text-[10px] text-amber-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span>{isKannada ? 'ಮುಂಗಾರು ಹಂಗಾಮಿನ ಕೃಷಿ ಸಲಹೆ ಸಿದ್ಧ' : 'Seasonal farming advisory available'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
