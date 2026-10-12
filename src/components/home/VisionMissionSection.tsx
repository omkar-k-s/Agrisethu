import React from 'react';
import { Link } from 'react-router-dom';
import { KarnatakaMapSilhouette } from '../common/KarnatakaMapSilhouette';
import { Handshake, Lightbulb, Sprout, Check, ArrowRight } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section
      id="vision"
      className="relative bg-[#FFFDF5] text-[#173C2E] py-16 sm:py-20 lg:py-24 border-b border-[#E4EFE7] overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* 1. TOP AGRICULTURAL LANDSCAPE BACKDROP (Palms, Hills & Farmland)          */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[420px] sm:h-[480px] pointer-events-none select-none overflow-hidden z-0">
        {/* Authentic Karnataka landscape illustration */}
        <img
          src="/images/vision_top_bg.jpg"
          alt="Karnataka agricultural panorama"
          className="w-full h-full object-cover object-top opacity-60 sm:opacity-75 mix-blend-multiply"
        />

        {/* Subtle Karnataka State Map Watermark on Upper-Right */}
        <div className="absolute top-6 sm:top-8 right-4 sm:right-12 lg:right-24 w-36 sm:w-48 lg:w-56 pointer-events-none select-none opacity-20">
          <KarnatakaMapSilhouette
            className="w-full h-full"
            fillColor="transparent"
            strokeColor="#B5A162"
          />
        </div>

        {/* Soft Radial Cream Mask ensuring pristine center typography legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 65% at 50% 25%, rgba(255, 253, 245, 0.96) 0%, rgba(255, 253, 245, 0.82) 50%, rgba(255, 253, 245, 0.2) 90%)',
          }}
        />

        {/* Bottom fade into solid #FFFDF5 */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #FFFDF5 100%)',
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN SECTION CONTENT CONTAINER                                         */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* ----------------------------------------------------------------------- */}
        {/* SECTION HEADER                                                          */}
        {/* ----------------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pt-2">
          {/* Small Green Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EAF6ED] border border-[#087A3D]/25 text-[#087A3D] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
            <span>OUR FUTURE DIRECTION</span>
            <span className="text-[#88A690]">•</span>
            <span className="font-kannada font-bold text-xs sm:text-[13px]">ನಮ್ಮ ಭವಿಷ್ಯದ ದಿಕ್ಕು</span>
          </div>

          {/* Dual-Tone Large Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-[#075C38] tracking-tight leading-[1.1]">
              Our Vision
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#075C38] font-kannada mt-1 leading-snug">
              ನಮ್ಮ ದೃಷ್ಟಿ
            </p>
          </div>

          {/* Bilingual Subtitle */}
          <div className="space-y-1 text-[#4A6253] text-sm sm:text-base font-medium max-w-2xl mx-auto pt-1">
            <p>“Our guiding vision and foundational mission for Karnataka agriculture.”</p>
            <p className="font-kannada text-[#2E4A3C] text-sm sm:text-[15.5px]">
              “ಕರ್ನಾಟಕದ ಕೃಷಿಗಾಗಿ ನಮ್ಮ ಮಾರ್ಗದರ್ಶಕ ದೃಷ್ಟಿ ಮತ್ತು ಮೂಲಭೂತ ಧ್ಯೇಯ.”
            </p>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* CORE VISION STATEMENT (Large Dark-Green Panel)                          */}
        {/* ----------------------------------------------------------------------- */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#075C38] border border-[#0D6B42] shadow-[0_16px_44px_rgba(7,92,56,0.18)]">
            
            {/* Subtle Agricultural Field Illustration inside bottom of card */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 lg:h-60 pointer-events-none select-none z-0 overflow-hidden opacity-35 mix-blend-screen">
              <img
                src="/images/vision_card_field.jpg"
                alt="Agricultural field horizon"
                className="w-full h-full object-cover object-bottom"
              />
              {/* Dark Green Gradient Overlay ensuring text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(7, 92, 56, 0.45) 0%, rgba(7, 92, 56, 0.95) 70%, #075C38 100%)',
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-10 sm:py-14 text-center space-y-4 sm:space-y-5">
              {/* Gold Label */}
              <span className="text-xs sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#E7B93E] block">
                THE CORE STATEMENT
              </span>

              {/* Main Kannada Quote (Large Gold / Cream) */}
              <blockquote className="text-xl sm:text-2xl lg:text-[28px] font-black font-kannada text-[#FDF6D8] leading-snug sm:leading-relaxed max-w-4xl mx-auto drop-shadow-xs">
                “ಪ್ರತಿ ರೈತನಿಗೂ ಬೆಳವಣಿಗೆಗೆ ಅಗತ್ಯವಿರುವ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಅವಕಾಶಗಳನ್ನು ಸುಲಭವಾಗಿ ಕಂಡುಕೊಳ್ಳುವ ಸಂಪರ್ಕಿತ ಕೃಷಿ ಪರಿಸರ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ಮಿಸುವುದು ನಮ್ಮ ದೃಷ್ಟಿಕೋನ.”
              </blockquote>

              {/* English Primary Statement */}
              <p className="text-base sm:text-lg lg:text-xl font-medium text-white max-w-3xl mx-auto leading-relaxed pt-1">
                “To build a connected agricultural ecosystem where every farmer can more easily discover the resources and opportunities needed to grow.”
              </p>

              {/* Muted Inclusive Subtext */}
              <p className="text-xs sm:text-sm text-[#A9D8B6] font-normal max-w-2xl mx-auto leading-relaxed pt-1">
                “An inclusive digital ecosystem connecting farmers with agricultural resources, equipment, services and opportunities.”
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* OUR MISSION (3 Equal Cards)                                             */}
        {/* ----------------------------------------------------------------------- */}
        <div className="space-y-10 sm:space-y-12">
          {/* Mission Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EAF6ED] border border-[#087A3D]/25 text-[#087A3D] text-[11px] font-bold tracking-wider uppercase">
              OUR CORE DRIVING FORCE
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#075C38] tracking-tight">
              Our Mission
            </h3>
            <p className="text-2xl sm:text-3xl font-black text-[#075C38] font-kannada">
              ನಮ್ಮ ಧ್ಯೇಯ
            </p>
            <div className="space-y-0.5 text-xs sm:text-sm text-[#5B7163] max-w-xl mx-auto pt-1">
              <p>“Three foundational objectives steering our agricultural platform.”</p>
              <p className="font-kannada text-[#355240]">
                “ನಮ್ಮ ಕೃಷಿ ವೇದಿಕೆಯನ್ನು ಮುನ್ನಡೆಸುವ ಮೂರು ಪ್ರಮುಖ ಧ್ಯೇಯಗಳು.”
              </p>
            </div>
          </div>

          {/* 3 Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {/* Mission Card 1: Connect */}
            <div className="p-7 sm:p-8 rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_20px_rgba(8,122,61,0.04)] hover:shadow-[0_8px_28px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Gold Circle Icon */}
                <div className="w-13 h-13 rounded-2xl bg-[#FFF5D6] border border-[#F3E5AB] flex items-center justify-center text-[#C68A1B] group-hover:scale-105 transition-transform">
                  <Handshake className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Card Titles */}
                <div>
                  <h4 className="text-xl font-black text-[#173C2E]">
                    Connect
                  </h4>
                  <p className="text-base font-bold text-[#087A3D] font-kannada mt-0.5">
                    ಸಂಪರ್ಕಿಸಿ
                  </p>
                </div>

                {/* Card Descriptions */}
                <div className="space-y-2 text-xs sm:text-[13px] text-[#55695D] leading-relaxed">
                  <p>
                    “Connect farmers with the resources, equipment, and suppliers they need.”
                  </p>
                  <p className="font-kannada text-[#2B4738] text-[12px] sm:text-[13px]">
                    “ರೈತರಿಗೆ ಅಗತ್ಯವಿರುವ ಸಂಪನ್ಮೂಲಗಳು, ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುವುದು.”
                  </p>
                </div>
              </div>

              {/* Bottom Commitment Indicator */}
              <div className="mt-6 pt-3.5 border-t border-[#EEF5EF] flex items-center gap-1.5 text-xs font-bold text-[#087A3D]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Core Commitment</span>
              </div>
            </div>

            {/* Mission Card 2: Simplify */}
            <div className="p-7 sm:p-8 rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_20px_rgba(8,122,61,0.04)] hover:shadow-[0_8px_28px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Gold Circle Icon */}
                <div className="w-13 h-13 rounded-2xl bg-[#FFF5D6] border border-[#F3E5AB] flex items-center justify-center text-[#C68A1B] group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Card Titles */}
                <div>
                  <h4 className="text-xl font-black text-[#173C2E]">
                    Simplify
                  </h4>
                  <p className="text-base font-bold text-[#087A3D] font-kannada mt-0.5">
                    ಸರಳಗೊಳಿಸಿ
                  </p>
                </div>

                {/* Card Descriptions */}
                <div className="space-y-2 text-xs sm:text-[13px] text-[#55695D] leading-relaxed">
                  <p>
                    “Make agricultural resource discovery straightforward, transparent, and accessible.”
                  </p>
                  <p className="font-kannada text-[#2B4738] text-[12px] sm:text-[13px]">
                    “ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳ ಹುಡುಕಾಟವನ್ನು ಸರಳ, ಪಾರದರ್ಶಕ ಮತ್ತು ಸುಲಭಗೊಳಿಸುವುದು.”
                  </p>
                </div>
              </div>

              {/* Bottom Commitment Indicator */}
              <div className="mt-6 pt-3.5 border-t border-[#EEF5EF] flex items-center gap-1.5 text-xs font-bold text-[#087A3D]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Core Commitment</span>
              </div>
            </div>

            {/* Mission Card 3: Empower */}
            <div className="p-7 sm:p-8 rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_20px_rgba(8,122,61,0.04)] hover:shadow-[0_8px_28px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Soft Green Circle Icon */}
                <div className="w-13 h-13 rounded-2xl bg-[#EAF7ED] border border-[#CDE5D2] flex items-center justify-center text-[#087A3D] group-hover:scale-105 transition-transform">
                  <Sprout className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Card Titles */}
                <div>
                  <h4 className="text-xl font-black text-[#173C2E]">
                    Empower
                  </h4>
                  <p className="text-base font-bold text-[#087A3D] font-kannada mt-0.5">
                    ಸಬಲೀಕರಿಸಿ
                  </p>
                </div>

                {/* Card Descriptions */}
                <div className="space-y-2 text-xs sm:text-[13px] text-[#55695D] leading-relaxed">
                  <p>
                    “Help farmers make better use of available opportunities, machinery, and technology.”
                  </p>
                  <p className="font-kannada text-[#2B4738] text-[12px] sm:text-[13px]">
                    “ಲಭ್ಯವಿರುವ ಅವಕಾಶಗಳು, ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನವನ್ನು ಉತ್ತಮವಾಗಿ ಬಳಸಿಕೊಳ್ಳಲು ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು.”
                  </p>
                </div>
              </div>

              {/* Bottom Commitment Indicator */}
              <div className="mt-6 pt-3.5 border-t border-[#EEF5EF] flex items-center gap-1.5 text-xs font-bold text-[#087A3D]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Core Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* LINK CTA TO FULL VISION & MISSION PAGE                                  */}
        {/* ----------------------------------------------------------------------- */}
        <div className="text-center pt-2">
          <Link
            to="/vision"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#075C38] hover:bg-[#05462A] text-white font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(7,92,56,0.25)] hover:shadow-[0_8px_24px_rgba(7,92,56,0.35)] hover:-translate-y-0.5 transition-all group select-none"
          >
            <span>Explore Our Full Vision & Values</span>
            <span className="text-[#A9D8B6] font-kannada font-normal text-xs sm:text-sm">| ಸಂಪೂರ್ಣ ದೃಷ್ಟಿಕೋನ</span>
            <ArrowRight className="w-4 h-4 text-[#E7B93E] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
