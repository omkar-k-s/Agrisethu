import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Users,
  ShieldCheck,
  Sprout,
  Tractor,
  Cpu,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#FFFDF7] py-16 sm:py-20 lg:py-24 border-b border-[#E4EFE7] overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* 1. SUBTLE BACKGROUND HERITAGE & BOTANICAL WATERMARKS                       */}
      {/* ========================================================================= */}
      {/* Top-Right Architectural & Agricultural Heritage Watermark */}
      <div className="absolute top-0 right-0 w-[360px] sm:w-[500px] lg:w-[640px] pointer-events-none select-none z-0 opacity-80 lg:opacity-90 mix-blend-multiply">
        <img
          src="/images/about_vidhana_soudha_art.jpg"
          alt="Karnataka Vidhana Soudha, palm trees, and agricultural landscape illustration"
          aria-hidden="true"
          className="w-full h-auto object-contain object-top-right"
        />
      </div>

      {/* Bottom-Left Botanical Leaf Cluster */}
      <div className="absolute -bottom-6 -left-6 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none select-none opacity-50 z-0">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
          <path
            d="M10 150 C30 110, 60 80, 130 50 C110 90, 80 120, 10 150 Z"
            fill="#A3D9A5"
          />
          <path
            d="M10 150 Q70 100 130 50"
            stroke="#2E9E52"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 150 C20 120, 50 100, 100 80 C85 110, 60 130, 15 150 Z"
            fill="#C1E7C4"
            opacity="0.8"
          />
          <path
            d="M40 150 C60 130, 90 120, 140 110 C120 130, 95 145, 40 150 Z"
            fill="#88C990"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Bottom-Right Botanical Leaf Cluster */}
      <div className="absolute -bottom-6 -right-6 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none select-none opacity-50 z-0 rotate-[-90deg]">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
          <path
            d="M10 150 C30 110, 60 80, 130 50 C110 90, 80 120, 10 150 Z"
            fill="#A3D9A5"
          />
          <path
            d="M10 150 Q70 100 130 50"
            stroke="#2E9E52"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 150 C20 120, 50 100, 100 80 C85 110, 60 130, 15 150 Z"
            fill="#C1E7C4"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Mid-Right Botanical Leaf Cluster */}
      <div className="absolute top-1/2 -right-4 w-24 sm:w-32 h-24 sm:h-32 pointer-events-none select-none opacity-40 z-0">
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <path
            d="M120 60 C80 50, 50 30, 20 0 C40 35, 70 55, 120 60 Z"
            fill="#A3D9A5"
          />
          <path
            d="M120 60 Q70 45 20 0"
            stroke="#2E9E52"
            strokeWidth="1.2"
          />
          <path
            d="M120 70 C90 75, 70 85, 40 110 C60 90, 85 80, 120 70 Z"
            fill="#C1E7C4"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN LAYOUT: Authentic Visual (Left) & Narrative (Right)          */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: Large Premium Agricultural Image Card (approx 45% cols) */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Rounded Image Container */}
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_16px_40px_rgba(7,92,56,0.14)] border border-[#CDE5D2] h-[480px] sm:h-[520px] lg:h-[550px] w-full bg-[#EBF5EE]">
              
              {/* Authentic Karnataka Farmer Photograph */}
              <img
                src="/images/about_karnataka_farmer.jpg"
                alt="Smiling Karnataka farmer holding harvested golden paddy crops with tractor and coconut trees in rural Karnataka"
                className="w-full h-full object-cover object-[center_20%] select-none"
              />

              {/* Upper-Left: Elegant Subtle Karnataka State Map Silhouette Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 w-28 sm:w-32">
                <div className="relative w-full">
                  <svg
                    viewBox="0 0 320 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-[0_4px_12px_rgba(4,51,28,0.22)]"
                  >
                    <path
                      d="M 202 24
                         C 185 38, 155 58, 132 74
                         C 108 90, 78 88, 54 98
                         C 40 105, 34 122, 33 140
                         C 31 162, 32 188, 35 212
                         C 38 238, 44 266, 48 290
                         C 52 312, 57 334, 62 354
                         C 66 372, 70 388, 76 400
                         C 84 414, 102 426, 120 436
                         C 134 444, 142 458, 146 474
                         C 152 478, 162 470, 172 456
                         C 184 440, 198 428, 214 420
                         C 230 412, 248 412, 260 406
                         C 264 402, 260 388, 252 374
                         C 244 358, 234 346, 230 334
                         C 222 314, 206 294, 204 278
                         C 202 268, 214 262, 232 258
                         C 248 254, 258 244, 262 230
                         C 268 210, 270 190, 266 172
                         C 260 150, 246 136, 238 118
                         C 230 100, 226 76, 222 52
                         C 220 38, 214 26, 202 24
                         Z"
                      fill="#FFFDF0"
                      fillOpacity="0.96"
                      stroke="#74C38B"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Centered Typography inside Karnataka Map */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-2 text-center pointer-events-none select-none">
                    <span className="font-kannada font-bold text-[11px] sm:text-xs text-[#075C38] leading-tight">
                      ನಮ್ಮ
                    </span>
                    <span className="font-kannada font-black text-xs sm:text-[13px] text-[#075C38] leading-tight">
                      ಕರ್ನಾಟಕ
                    </span>
                    <span className="font-kannada font-bold text-[11px] sm:text-xs text-[#075C38] leading-tight">
                      ನಮ್ಮ ರೈತರು
                    </span>
                    {/* Yellow curved stroke under text */}
                    <svg viewBox="0 0 48 8" fill="none" className="w-10 sm:w-11 h-1.5 mt-1">
                      <path
                        d="M2 6 Q 24 1, 46 5"
                        stroke="#F2C94C"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Overlay: Dark green transparent gradient with Purpose & Pillars */}
              <div className="absolute inset-x-0 bottom-0 pt-28 pb-8 px-5 sm:px-6 bg-gradient-to-t from-[#04331C] via-[#04331C]/85 to-transparent z-10 flex flex-col justify-end text-left">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sprout className="w-4 h-4 text-[#F2C94C]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#F2C94C]">
                    OUR PURPOSE
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] font-bold text-white leading-snug max-w-sm">
                  To make agricultural resources easier to discover, access and connect.
                </p>
                <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 mt-3 text-[11px] sm:text-xs text-emerald-100 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-[#A3D9A5]" />
                    Technology
                  </span>
                  <span className="text-white/40">|</span>
                  <span className="inline-flex items-center gap-1">
                    <Tractor className="w-3.5 h-3.5 text-[#A3D9A5]" />
                    Agriculture
                  </span>
                  <span className="text-white/40">|</span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#A3D9A5]" />
                    Community
                  </span>
                </div>
              </div>

              {/* Organic Curved Agricultural Divider at the bottom edge */}
              <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-10">
                <svg
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                  fill="none"
                >
                  <path
                    d="M0 25 C 130 10, 240 40, 500 15 L 500 50 L 0 50 Z"
                    fill="#054A2D"
                  />
                  <path
                    d="M0 27 C 130 12, 240 42, 500 17"
                    stroke="#F2C94C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

            </div>

            {/* Overlapping Floating Tooltip Card */}
            <div className="absolute -bottom-4 left-3 right-3 sm:left-auto sm:-right-4 lg:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-[22px] border border-[#CDE5D2] shadow-[0_12px_32px_rgba(7,92,56,0.16)] p-3 sm:p-3.5 sm:max-w-[285px] lg:max-w-[305px] flex items-center gap-3 select-none">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6ED] border border-[#CDE5D2] flex items-center justify-center flex-shrink-0 text-[#087A3D]">
                <Sprout className="w-5 h-5 text-[#087A3D]" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xs sm:text-sm text-[#075C38] leading-tight">
                  Agri + Sethu = AgriSethu
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#65766F] leading-snug mt-0.5">
                  A bridge connecting farmers with resources, services and opportunities.
                </div>
              </div>
            </div>

          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: Official Narrative, Pillars, Notice & Vision Link       */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-left">
            
            {/* Top Pill: ABOUT AGRISETHU • ನಮ್ಮ ಬಗ್ಗೆ */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-3.5 py-1 rounded-full shadow-2xs">
                <span>ABOUT AGRISETHU</span>
                <span className="text-[#087A3D] font-black">•</span>
                <span className="font-kannada font-bold text-xs">ನಮ್ಮ ಬಗ್ಗೆ</span>
              </span>
            </div>

            {/* Large Dark-Green Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#075C38] tracking-tight leading-[1.15]">
              About AgriSethu
            </h2>

            {/* Primary Description */}
            <p className="text-lg sm:text-[21px] lg:text-[22px] font-bold text-[#075C38] leading-[1.45]">
              AgriSethu is an agriculture-focused digital platform designed to connect farmers with agricultural resources, equipment, service providers, marketplace opportunities and essential digital services.
            </p>

            {/* Second Description */}
            <p className="text-base sm:text-[17px] text-[#65766F] leading-relaxed">
              Through the AgriSethu mobile application, farmers can discover agricultural equipment, connect with equipment owners and service providers, explore agricultural inputs and resources, make bookings, access marketplace services, and manage orders and delivery.
            </p>

            {/* Purpose & Approach Cards (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              
              {/* Purpose Card */}
              <div className="p-4 sm:p-5 rounded-[20px] bg-[#EAF6ED]/65 border border-[#D5EAD9] shadow-xs hover:border-[#B4DDBB] transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#D4EED8] text-[#087A3D] flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-[15px] text-[#075C38] leading-tight">
                    <span>Our Purpose</span>
                    <span className="mx-1 text-[#087A3D] font-normal">•</span>
                    <span className="font-kannada font-bold text-xs sm:text-[13px]">ನಮ್ಮ ಉದ್ದೇಶ</span>
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#65766F] leading-relaxed">
                  Make agricultural resources, equipment, services and opportunities easier for farmers to discover, access and connect.
                </p>
              </div>

              {/* Approach Card */}
              <div className="p-4 sm:p-5 rounded-[20px] bg-[#EAF6ED]/65 border border-[#D5EAD9] shadow-xs hover:border-[#B4DDBB] transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#D4EED8] text-[#087A3D] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-[15px] text-[#075C38] leading-tight">
                    <span>Our Approach</span>
                    <span className="mx-1 text-[#087A3D] font-normal">•</span>
                    <span className="font-kannada font-bold text-xs sm:text-[13px]">ನಮ್ಮ ವಿಧಾನ</span>
                  </h3>
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#075C38] leading-snug">
                  Technology + Agriculture + Community
                </div>
                <p className="text-xs sm:text-[13px] text-[#65766F] leading-relaxed mt-1">
                  Building a connected digital ecosystem around the real needs of farmers.
                </p>
              </div>

            </div>

            {/* Information Strip */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFDF4] border border-[#F5E5B8] shadow-2xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <p className="text-xs sm:text-[13px] text-[#92400E] font-medium leading-relaxed">
                An informational platform introducing the AgriSethu mobile application and the agricultural ecosystem it is being built to connect.
              </p>
            </div>

            {/* Discover Our Vision Link with Green Underline */}
            <div className="pt-1">
              <Link
                to="/vision"
                className="inline-flex flex-col group cursor-pointer w-fit"
              >
                <div className="inline-flex items-center gap-2 text-base font-bold text-[#075C38] group-hover:text-[#087A3D] transition-colors">
                  <span>Discover Our Vision</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
                <div className="w-full h-0.5 bg-[#075C38] group-hover:bg-[#087A3D] rounded-full mt-1 transition-all" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
