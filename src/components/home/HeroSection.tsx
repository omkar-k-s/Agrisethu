import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { KarnatakaMapSilhouette } from '../common/KarnatakaMapSilhouette';
import { ArrowRight, Play, Sprout, X, ShieldCheck, UserCheck, Tractor, Handshake, ShoppingCart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { isKannada } = useLanguage();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="hero relative overflow-hidden bg-white min-h-[580px] lg:min-h-[630px] lg:h-[640px] flex items-center z-[1]"
    >
      
      {/* ========================================================================= */}
      {/* 1. BACKGROUND: Authentic Vibrant Karnataka Farmland & Farmer Photo        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        {/* Real vibrant photography of Karnataka farmer holding harvested paddy grains */}
        <img
          src="/images/hero_karnataka_farmer.jpg"
          alt="Karnataka farmer standing proudly in lush green paddy fields holding harvested golden crops"
          className="w-full h-full object-cover object-[center_16%] sm:object-[60%_center] lg:object-[64%_center]"
        />

        {/* Tuned Left-to-Right Gradient Overlay: Pure white behind text, crystal clear vibrant photo on farmer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 26%, rgba(255,255,255,0.92) 34%, rgba(255,255,255,0.58) 42%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 58%)',
          }}
        />

        {/* Warm Golden Sunlight Ambience in Upper Landscape */}
        <div className="absolute top-0 right-1/4 w-[480px] h-[340px] bg-amber-100/35 rounded-full filter blur-3xl pointer-events-none" />

        {/* Far-Left Organic Agricultural Leaf Branding */}
        <div className="absolute -left-10 top-1/4 w-48 h-72 opacity-40 pointer-events-none">
          <svg viewBox="0 0 160 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 210 C30 160, 60 120, 150 70 C130 120, 90 170, 10 210 Z"
              fill="url(#leaf-grad-1)"
            />
            <path
              d="M0 220 C20 140, 70 80, 160 20 C140 80, 80 150, 0 220 Z"
              fill="url(#leaf-grad-2)"
              opacity="0.8"
            />
            <path
              d="M10 210 Q80 130 155 45"
              stroke="#087A3D"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="leaf-grad-1" x1="10" y1="210" x2="150" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2E9E52" stopOpacity="0.4" />
                <stop offset="1" stopColor="#087A3D" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="leaf-grad-2" x1="0" y1="220" x2="160" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#087A3D" stopOpacity="0.5" />
                <stop offset="1" stopColor="#A3D9A5" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT GRID (Left Content + Right Karnataka Map & Services Card)  */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-20 sm:pb-24 lg:pt-2 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Badge, H1 Headline, Subtitle, Description & Equal-Height CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-4 max-w-2xl">
            
            {/* Top Official Portal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF7EC] border border-[#087A3D]/25 text-[#005A3C] text-xs font-bold tracking-wide shadow-2xs">
              <span className="text-sm">🌿</span>
              <span>Karnataka AgriTech Initiative</span>
              <span className="text-[#8A9B93]">|</span>
              <span className="text-[#087A3D] font-semibold">Informational Portal</span>
            </div>

            {/* Prominent Dual-Tone ONE H1 Headline */}
            <div>
              <h1 className="font-kannada font-black tracking-tight leading-[1.04] text-left">
                <span className="block text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] text-[#005A3C] drop-shadow-xs">
                  ಕರ್ನಾಟಕದ ರೈತರಿಂದ
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] text-[#E87922] mt-1 drop-shadow-xs">
                  ಡಿಜಿಟಲ್ ಸೇತು
                </span>
              </h1>

              {/* English Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#17352A] tracking-tight pt-2 leading-tight">
                A Digital Bridge for Karnataka's Farmers
              </p>
            </div>

            {/* Description: Kannada First, Then English */}
            <div className="space-y-1.5 text-[#3E5349] leading-relaxed max-w-xl">
              <p className="font-kannada font-medium text-[#2E4A3C] text-[13px] sm:text-[14px]">
                "ರೈತರಿಗೆ ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳು, ತಂತ್ರಜ್ಞಾನ, ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ ಹಾಗೂ ಸೇವೆಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಒದಗಿಸುವ ನಮ್ಮ ಪ್ರಯತ್ನ."
              </p>
              <p className="text-[#526B5E] text-xs sm:text-[13px]">
                "Connecting farmers with agricultural resources, opportunities and a smarter digital future."
              </p>
            </div>

            {/* Equal-Height Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA */}
              <Link
                to="/about"
                className="h-12 sm:h-13 px-7 rounded-xl bg-[#005A3C] hover:bg-[#064D2C] text-white font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(0,90,60,0.28)] hover:shadow-[0_6px_22px_rgba(0,90,60,0.38)] hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2.5 group"
              >
                <span>About AgriSethu</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="h-12 sm:h-13 px-7 rounded-xl bg-white hover:bg-[#F6FBF6] text-[#005A3C] border-2 border-[#087A3D]/40 hover:border-[#087A3D] font-bold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Watch Video</span>
                <Play className="w-3.5 h-3.5 fill-current text-[#087A3D] group-hover:scale-110 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Integrated Karnataka Map + 5-Service Card + Organic Badge (5 cols) */}
          <div className="lg:col-span-5 relative hidden sm:flex items-center justify-end gap-5">
            
            {/* Elegant Karnataka Map with Accent Typography */}
            <div className="relative flex items-center gap-3.5 pr-1 transition-transform duration-500 hover:scale-105 select-none">
              {/* Accurate Map Silhouette in Soft Ivory */}
              <div className="w-32 h-44 lg:w-36 lg:h-52 opacity-95">
                <KarnatakaMapSilhouette
                  className="w-full h-full drop-shadow-[0_6px_14px_rgba(0,90,60,0.12)]"
                  fillColor="#FFFDF0"
                  strokeColor="#E6DCB0"
                />
              </div>

              {/* Typography beside map */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 mb-0.5">
                  <Sprout className="w-3.5 h-3.5 text-[#2E9E52]" />
                  <span className="font-kannada font-bold text-[11px] text-[#2E9E52]">
                    ನಮ್ಮ ನಾಡು
                  </span>
                </div>
                <span className="font-kannada font-black text-xl lg:text-[22px] text-[#005A3C] leading-tight">
                  ನಮ್ಮ ಕರ್ನಾಟಕ
                </span>
                <span className="font-kannada font-black text-2xl lg:text-[26px] text-[#005A3C] leading-tight tracking-tight">
                  ನಮ್ಮ ರೈತರು
                </span>
                <div className="w-14 h-1 bg-[#2E9E52] rounded-full mt-2 shadow-2xs" />
              </div>
            </div>

            {/* AgriSethu Real Platform Services Card & Contained Organic Badge */}
            <div className="relative z-10 flex flex-col items-end">
              <div className="bg-white/95 backdrop-blur-md rounded-[20px] shadow-[0_12px_36px_rgba(0,90,60,0.12)] border border-[#E0EBE2] p-3.5 sm:p-4 w-[240px] sm:w-[258px] space-y-2.5 transition-transform duration-300 hover:-translate-y-1">
                
                {/* Status Header: Title + Subtitle + Small Green PLATFORM Badge */}
                <div className="flex items-center justify-between pb-2 border-b border-[#EAF2EC]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#087A3D]" />
                    <div className="flex flex-col text-left">
                      <span className="font-kannada text-xs sm:text-[13px] font-black text-[#005A3C] leading-none">
                        ನಮ್ಮ ಸೇವೆಗಳು
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-[#63736B] mt-0.5">
                        AGRISETHU PLATFORM
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] border border-[#CDE5D2] px-2 py-0.5 rounded-full">
                    PLATFORM
                  </span>
                </div>

                {/* 5 Real Platform Service Categories */}
                <div className="space-y-2 text-[#17352A]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#EAF7EC] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-kannada font-bold text-xs text-[#005A3C] leading-tight">
                        ರೈತ ಸೇವೆಗಳು
                      </span>
                      <span className="text-[9.5px] text-[#63736B] font-medium leading-tight">
                        Farmer Registration & Accounts
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#EAF7EC] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                      <Tractor className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-kannada font-bold text-xs text-[#005A3C] leading-tight">
                        ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು
                      </span>
                      <span className="text-[9.5px] text-[#63736B] font-medium leading-tight">
                        Equipment Access & Rental
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#EAF7EC] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                      <Sprout className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-kannada font-bold text-xs text-[#005A3C] leading-tight">
                        ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ & ಸಂಪನ್ಮೂಲಗಳು
                      </span>
                      <span className="text-[9.5px] text-[#63736B] font-medium leading-tight">
                        Agri Inputs & Resources
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#EAF7EC] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                      <Handshake className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-kannada font-bold text-xs text-[#005A3C] leading-tight">
                        ಸಂಪರ್ಕ & ಬುಕ್ಕಿಂಗ್
                      </span>
                      <span className="text-[9.5px] text-[#63736B] font-medium leading-tight">
                        Farmers, Owners & Service Providers
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#EAF7EC] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-kannada font-bold text-xs text-[#005A3C] leading-tight">
                        ಮಾರುಕಟ್ಟೆ & ವಿತರಣೆ
                      </span>
                      <span className="text-[9.5px] text-[#63736B] font-medium leading-tight">
                        Marketplace, Orders & Delivery
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle Divider & Platform Footer */}
                <div className="pt-2 text-[10px] text-[#63736B] font-medium border-t border-[#F0F5F2] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#087A3D] flex-shrink-0" />
                  <span>AgriSethu Platform</span>
                </div>
              </div>

              {/* Bottom-Right Organic Badge */}
              <div className="mt-3 z-20">
                <div className="bg-[#005A3C] text-white px-4 py-2 rounded-xl shadow-[0_4px_16px_rgba(0,90,60,0.28)] border border-white/25 flex items-center gap-2.5 select-none transform hover:scale-105 transition-transform">
                  <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center text-[#F2C94C]">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <div className="text-left font-kannada leading-tight">
                    <span className="text-[10px] font-bold block text-emerald-100">
                      ನಮ್ಮ ಕೃಷಿ
                    </span>
                    <span className="text-[11px] font-extrabold block text-white">
                      ಸೇತು ಕರ್ನಾಟಕ
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. ELEGANT BOTTOM CURVED AGRICULTURAL DIVIDER                              */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-18 lg:h-22 block"
          preserveAspectRatio="none"
        >
          {/* Golden Yellow Accent Wave Line */}
          <path
            d="M0,48 C340,86 680,18 1020,58 C1220,82 1360,38 1440,48"
            stroke="#F2C94C"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Green Agricultural Accent Line */}
          <path
            d="M0,52 C340,90 680,22 1020,62 C1220,86 1360,42 1440,52"
            stroke="#087A3D"
            strokeWidth="2.5"
            fill="none"
            opacity="0.9"
          />
          {/* Pure White Wave Fill */}
          <path
            d="M0,55 C340,93 680,25 1020,65 C1220,89 1360,45 1440,55 L1440,96 L0,96 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* VIDEO MODAL (Informational preview dialog)                                */}
      {/* ========================================================================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#DCE8DF]">
            <div className="flex items-center justify-between p-4 border-b border-[#DCE8DF] bg-[#F6FBF6]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#087A3D]" />
                <span className="font-bold text-sm text-[#17352A]">
                  {isKannada ? 'ಅಗ್ರಿಸೇತು ಪರಿಚಯ ವೀಡಿಯೊ' : 'AgriSethu Video Overview'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-full hover:bg-neutral-200 text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#EAF7EC] text-[#087A3D] mx-auto flex items-center justify-center">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17352A]">
                  {isKannada ? 'ಅಗ್ರಿಸೇತು ಮಾಹಿತಿ ಚಿತ್ರ ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯ' : 'AgriSethu Documentary & Overview Coming Soon'}
                </h3>
                <p className="text-xs sm:text-sm text-[#63736B] max-w-md mx-auto mt-2 leading-relaxed">
                  {isKannada
                    ? 'ಕರ್ನಾಟಕದ ರೈತರಿಗಾಗಿ ರೂಪಿಸಲಾಗುತ್ತಿರುವ ಅಗ್ರಿಸೇತು ಪರಿಕಲ್ಪನೆ ಮತ್ತು ಉಪಕ್ರಮಗಳ ಕುರಿತಾದ ವೀಡಿಯೊ ಶೀಘ್ರದಲ್ಲೇ ಬಿಡುಗಡೆಯಾಗಲಿದೆ.'
                    : 'The official visual journey explaining the AgriSethu rural bridge initiative is currently being produced.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#005A3C] text-white font-bold text-xs hover:bg-[#064D2C]"
                >
                  {isKannada ? 'ಮುಚ್ಚಿ' : 'Close Preview'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
