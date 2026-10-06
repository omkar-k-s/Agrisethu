import React from 'react';
import { Link } from 'react-router-dom';
import { KarnatakaMapSilhouette } from '../common/KarnatakaMapSilhouette';
import { FreshLeavesGraphic } from '../common/FreshLeavesGraphic';
import { ArrowRight, ChevronLeft, Bell } from 'lucide-react';

export const KarnatakaAppSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="karnataka-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* CARD 1 — KARNATAKA AGRICULTURE (Aerial Farmland & State Silhouette)        */}
        {/* ========================================================================= */}
        <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#D8E6DB] shadow-[0_12px_36px_-6px_rgba(8,122,61,0.14)] min-h-[300px] sm:min-h-[340px] lg:h-[360px] flex items-center">
          {/* Real Aerial Photography of Karnataka Farmland */}
          <img
            src="/images/karnataka_aerial.jpg"
            alt="Lush green Karnataka agricultural crop fields aerial view"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* High-legibility Gradient Overlay (dark emerald on the left, open golden sunlight on the right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#04331C]/92 via-[#064D2C]/72 sm:via-[#064D2C]/45 to-transparent pointer-events-none" />

          {/* Subtle ambient warm morning glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/15 rounded-full filter blur-3xl pointer-events-none" />

          {/* Card 1 Content: Karnataka Map + Kannada Heading + English Subtitle + Pill CTA */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-6 sm:py-0">
            <div className="flex items-center gap-6 sm:gap-10 lg:gap-12 max-w-3xl">
              {/* Karnataka State Map Silhouette in Warm Cream Ivory */}
              <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
                <KarnatakaMapSilhouette className="w-24 h-38 sm:w-32 sm:h-48 lg:w-40 lg:h-60" />
              </div>

              {/* Headings and Pill Button */}
              <div className="space-y-3 sm:space-y-4 text-white">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.15] font-kannada drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    ಕರ್ನಾಟಕದ
                    <br />
                    ರೈತರಿಗಾಗಿ
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl font-medium text-emerald-100/95 mt-1 sm:mt-1.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
                    Built for Karnataka's Farmers
                  </p>
                </div>

                {/* White Rounded Pill Button */}
                <div className="pt-1">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#064D2C] font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#F6FBF6] hover:shadow-[0_6px_22px_rgba(0,0,0,0.26)] hover:translate-x-0.5 transition-all group"
                  >
                    <span className="font-kannada">ನಮ್ಮ ಪ್ರಯಾಣ</span>
                    <ArrowRight className="w-4 h-4 text-[#087A3D] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 2 — AGRISETHU MOBILE APP (Download, Stores, QR & Phone Mockup)       */}
        {/* ========================================================================= */}
        <div className="relative mt-6 sm:mt-8 rounded-[24px] sm:rounded-[28px] overflow-visible border border-[#DCE8DF] bg-gradient-to-r from-[#F3F9F4] via-[#F7FAF7] to-[#EEF6F0] shadow-[0_12px_36px_-6px_rgba(8,122,61,0.08)]">
          {/* Subtle realistic field background texture */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] overflow-hidden pointer-events-none">
            <img
              src="/images/card_soft_field_bg.jpg"
              alt="Subtle out-of-focus farm field background"
              className="w-full h-full object-cover opacity-35 mix-blend-multiply"
            />
            {/* Soft atmospheric gradients */}
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-emerald-200/20 filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-100/30 filter blur-3xl" />
          </div>

          <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* LEFT COLUMN: Headings, Store Buttons & QR Code (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17352A] tracking-tight leading-[1.12]">
                    Download
                    <br />
                    AgriSethu App
                  </h3>

                  <p className="text-xl sm:text-2xl font-bold text-[#064D2C] font-kannada mt-3 sm:mt-4 leading-snug">
                    ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳು
                    <br />
                    ಈಗ ನಿಮ್ಮ ಕೈಯಲ್ಲಿ
                  </p>
                </div>

                {/* Available On & Download Actions */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A6B5D] block">
                    Available on
                  </span>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {/* Store Badges Column */}
                    <div className="flex flex-col gap-2.5">
                      {/* Google Play Button */}
                      <div
                        className="group relative flex items-center gap-3.5 bg-black text-white px-4 sm:px-5 py-2.5 rounded-xl border border-neutral-800 shadow-md transition-all hover:bg-neutral-900 cursor-pointer select-none"
                        title="AgriSethu Android App — Launching on Google Play"
                      >
                        {/* Official Google Play 4-Color Triangle */}
                        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#EA4335"
                            d="M3.6 1.4L13.8 12 3.6 22.6c-.4-.3-.6-.8-.6-1.4V2.8c0-.6.2-1.1.6-1.4z"
                          />
                          <path
                            fill="#FBBC04"
                            d="M17.3 8.6L13.8 12l3.5 3.4 4.1-2.3c.7-.4.7-1.8 0-2.2l-4.1-2.3z"
                          />
                          <path
                            fill="#4285F4"
                            d="M3.6 1.4L17.3 8.6 13.8 12 3.6 1.4z"
                          />
                          <path
                            fill="#34A853"
                            d="M13.8 12l3.5 3.4L3.6 22.6 13.8 12z"
                          />
                        </svg>
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-neutral-300 font-medium block leading-none">
                            GET IT ON
                          </span>
                          <span className="text-sm font-bold text-white block mt-0.5 tracking-tight">
                            Google Play
                          </span>
                        </div>

                        {/* Coming Soon indicator */}
                        <span className="absolute -top-2 -right-2 bg-[#E8B83F] text-[#17352A] text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          Coming Soon
                        </span>
                      </div>

                      {/* App Store Button */}
                      <div
                        className="group relative flex items-center gap-3.5 bg-black text-white px-4 sm:px-5 py-2.5 rounded-xl border border-neutral-800 shadow-md transition-all hover:bg-neutral-900 cursor-pointer select-none"
                        title="AgriSethu iOS App — Launching on Apple App Store"
                      >
                        {/* Official Apple Logo SVG */}
                        <svg className="w-6 h-6 flex-shrink-0 fill-current text-white" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.6-1.04.99-2.46.73-3.92-1.2.05-2.61.8-3.37 1.69-.58.68-1.09 1.77-.85 3.19 1.34.1 2.87-.72 3.49-.96z" />
                        </svg>
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-neutral-300 font-medium block leading-none">
                            Download on the
                          </span>
                          <span className="text-sm font-bold text-white block mt-0.5 tracking-tight">
                            App Store
                          </span>
                        </div>

                        {/* Coming Soon indicator */}
                        <span className="absolute -top-2 -right-2 bg-[#E8B83F] text-[#17352A] text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                          Coming Soon
                        </span>
                      </div>
                    </div>

                    {/* QR Code Container */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-[#DCE8DF] shadow-[0_4px_14px_rgba(8,122,61,0.06)]">
                      {/* Realistic Crisp Vector QR Code */}
                      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-1">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                          {/* Corner Finder Pattern 1 (Top Left) */}
                          <rect x="5" y="5" width="28" height="28" rx="4" fill="#17352A" />
                          <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                          <rect x="13" y="13" width="12" height="12" rx="2" fill="#087A3D" />

                          {/* Corner Finder Pattern 2 (Top Right) */}
                          <rect x="67" y="5" width="28" height="28" rx="4" fill="#17352A" />
                          <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                          <rect x="75" y="13" width="12" height="12" rx="2" fill="#087A3D" />

                          {/* Corner Finder Pattern 3 (Bottom Left) */}
                          <rect x="5" y="67" width="28" height="28" rx="4" fill="#17352A" />
                          <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                          <rect x="13" y="75" width="12" height="12" rx="2" fill="#087A3D" />

                          {/* Data Matrix Dots Pattern */}
                          <rect x="38" y="8" width="6" height="6" fill="#17352A" />
                          <rect x="48" y="8" width="6" height="6" fill="#17352A" />
                          <rect x="38" y="18" width="6" height="6" fill="#17352A" />
                          <rect x="54" y="18" width="6" height="6" fill="#087A3D" />

                          <rect x="8" y="38" width="6" height="6" fill="#17352A" />
                          <rect x="18" y="44" width="6" height="6" fill="#087A3D" />
                          <rect x="28" y="38" width="6" height="6" fill="#17352A" />

                          <rect x="38" y="38" width="8" height="8" rx="2" fill="#087A3D" />
                          <rect x="50" y="38" width="6" height="6" fill="#17352A" />
                          <rect x="60" y="38" width="6" height="6" fill="#17352A" />
                          <rect x="70" y="38" width="6" height="6" fill="#087A3D" />
                          <rect x="82" y="38" width="6" height="6" fill="#17352A" />

                          <rect x="38" y="50" width="6" height="6" fill="#17352A" />
                          <rect x="48" y="50" width="8" height="8" fill="#17352A" />
                          <rect x="60" y="50" width="6" height="6" fill="#087A3D" />

                          <rect x="38" y="62" width="6" height="6" fill="#087A3D" />
                          <rect x="50" y="62" width="6" height="6" fill="#17352A" />
                          <rect x="68" y="54" width="6" height="6" fill="#17352A" />
                          <rect x="78" y="54" width="6" height="6" fill="#17352A" />

                          <rect x="38" y="74" width="6" height="6" fill="#17352A" />
                          <rect x="48" y="74" width="6" height="6" fill="#087A3D" />
                          <rect x="58" y="74" width="6" height="6" fill="#17352A" />

                          <rect x="68" y="68" width="8" height="8" rx="2" fill="#087A3D" />
                          <rect x="80" y="68" width="6" height="6" fill="#17352A" />
                          <rect x="72" y="80" width="6" height="6" fill="#17352A" />
                          <rect x="82" y="80" width="6" height="6" fill="#087A3D" />
                        </svg>
                      </div>

                      <div className="text-left pr-2">
                        <span className="text-[11px] font-bold text-[#17352A] block leading-tight">
                          Scan to
                          <br />
                          learn more
                        </span>
                        <span className="text-[10px] text-[#4A6B5D] font-kannada mt-0.5 block">
                          ವಿವರಗಳಿಗೆ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Realistic Overlapping Smartphone Mockup & Botanical Leaves (5 cols) */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                
                {/* Organic Fresh Tea Leaves SVG (Completely transparent background, zero white box) */}
                <div className="absolute -left-12 sm:-left-16 lg:-left-24 top-24 sm:top-20 lg:top-14 z-10 pointer-events-none transition-transform duration-700 hover:rotate-3">
                  <FreshLeavesGraphic className="w-36 h-44 sm:w-44 sm:h-52 lg:w-52 lg:h-60" />
                </div>

                {/* Smartphone Device Container (Rises above Card 2 into Card 1 seamlessly) */}
                <div className="relative z-20 w-[295px] sm:w-[320px] lg:w-[325px] mt-6 lg:-mt-32 lg:-mb-10 transition-transform duration-500 hover:-translate-y-2">
                  
                  {/* Phone Deep Drop Shadow grounding it on the cards */}
                  <div className="relative rounded-[44px] bg-[#1A1D20] p-3 sm:p-3.5 shadow-[0_32px_70px_-16px_rgba(0,0,0,0.45)] border-4 border-[#2A2E33] ring-1 ring-white/20">
                    
                    {/* Phone Screen Outer Bezel */}
                    <div className="relative rounded-[36px] bg-white overflow-hidden text-[#17352A] select-none border border-neutral-100 shadow-inner">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <div className="pt-2.5 px-5 pb-1 flex items-center justify-between text-[11px] font-bold text-neutral-800 bg-white">
                        <span>9:41</span>
                        {/* Dynamic Island pill */}
                        <div className="w-20 h-4 bg-black rounded-full mx-auto relative flex items-center justify-end pr-1.5">
                          <div className="w-2 h-2 rounded-full bg-neutral-900 border border-neutral-700" />
                        </div>
                        {/* Cellular, WiFi, Battery */}
                        <div className="flex items-center gap-1.5 text-neutral-800">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" opacity="0.3" />
                            <path d="M2 18h3v4H2zm5-4h3v8H7zm5-4h3v12h-3zm5-5h3v17h-3z" />
                          </svg>
                          <div className="w-5 h-2.5 border border-neutral-800 rounded-xs p-0.5 flex items-center">
                            <div className="w-3 h-1.5 bg-neutral-800 rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* App Navigation Header */}
                      <div className="px-3.5 pt-1.5 pb-2 flex items-center justify-between bg-white border-b border-neutral-100">
                        <ChevronLeft className="w-5 h-5 text-neutral-600" />
                        
                        {/* AgriSethu App Brand Logo */}
                        <div className="flex flex-col items-center">
                          <div className="flex items-center gap-1.5">
                            {/* Sprout Logo */}
                            <svg className="w-4 h-4 text-[#087A3D]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z" />
                              <path d="M12 14c-1.5 0-3-1.2-3-3 0-2 2-5 3-7 1 2 3 5 3 7 0 1.8-1.5 3-3 3z" fill="#E8B83F" />
                            </svg>
                            <span className="font-extrabold text-sm tracking-tight text-[#087A3D]">
                              Agri<span className="text-[#E8B83F]">Sethu</span>
                            </span>
                          </div>
                          <span className="text-[7.5px] text-[#63736B] font-medium tracking-tight">
                            Connecting Farmers, Resources & Opportunities
                          </span>
                        </div>

                        <div className="w-5" />
                      </div>

                      {/* Hero Banner: Modern Tractors in Karnataka Farm */}
                      <div className="px-3 pt-2.5">
                        <div className="rounded-xl overflow-hidden shadow-xs border border-neutral-100 relative h-28">
                          <img
                            src="/images/app_tractor_banner.jpg"
                            alt="AgriSethu Tractor Service"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Our Services Section */}
                      <div className="px-3 pt-2.5">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold text-[#17352A]">
                            Our Services
                          </span>
                        </div>

                        {/* 4 Icon Cards in a Row */}
                        <div className="grid grid-cols-4 gap-1.5">
                          {/* 1. Equipment */}
                          <div className="p-1.5 rounded-xl bg-white border border-[#E0EBE2] text-center shadow-2xs">
                            <div className="w-8 h-8 mx-auto rounded-lg bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center mb-1">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 17h18M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM5 15l2-6h5l2 3h4v3" />
                              </svg>
                            </div>
                            <span className="text-[8.5px] font-bold text-[#17352A] block leading-tight">
                              Equipment
                            </span>
                          </div>

                          {/* 2. Agri Inputs */}
                          <div className="p-1.5 rounded-xl bg-white border border-[#E0EBE2] text-center shadow-2xs">
                            <div className="w-8 h-8 mx-auto rounded-lg bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center mb-1">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2a9 9 0 019 9c0 4.97-4.03 9-9 9A9 9 0 013 11a9 9 0 019-9zM12 12v6M12 12c-2 0-4-1-4-3s2-3 4-3 4 1 4 3-2 3-4 3z" />
                              </svg>
                            </div>
                            <span className="text-[8.5px] font-bold text-[#17352A] block leading-tight">
                              Agri Inputs
                            </span>
                          </div>

                          {/* 3. Advisory */}
                          <div className="p-1.5 rounded-xl bg-white border border-[#E0EBE2] text-center shadow-2xs">
                            <div className="w-8 h-8 mx-auto rounded-lg bg-[#FFF3D6] text-[#B45309] flex items-center justify-center mb-1">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                              </svg>
                            </div>
                            <span className="text-[8.5px] font-bold text-[#17352A] block leading-tight">
                              Advisory
                            </span>
                          </div>

                          {/* 4. Market */}
                          <div className="p-1.5 rounded-xl bg-white border border-[#E0EBE2] text-center shadow-2xs">
                            <div className="w-8 h-8 mx-auto rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-1">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                              </svg>
                            </div>
                            <span className="text-[8.5px] font-bold text-[#17352A] block leading-tight">
                              Market
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* For Farmers Section */}
                      <div className="px-3 pt-2 pb-2.5">
                        <span className="text-[11px] font-bold text-[#17352A] block mb-1.5">
                          For Farmers
                        </span>

                        <div className="grid grid-cols-2 gap-2">
                          {/* Card 1: Equipment Access */}
                          <div className="rounded-xl border border-[#E0EBE2] bg-white p-1.5 shadow-2xs">
                            <div className="h-16 rounded-lg overflow-hidden relative">
                              <img
                                src="/images/app_tractor_banner.jpg"
                                alt="Equipment Access"
                                className="w-full h-full object-cover object-left"
                              />
                            </div>
                            <span className="text-[9.5px] font-bold text-[#17352A] text-center block mt-1 leading-tight">
                              Equipment
                              <br />
                              Access
                            </span>
                          </div>

                          {/* Card 2: Expert Advisory */}
                          <div className="rounded-xl border border-[#E0EBE2] bg-white p-1.5 shadow-2xs">
                            <div className="h-16 rounded-lg overflow-hidden relative">
                              <img
                                src="/images/app_farmer_advisory.jpg"
                                alt="Expert Advisory"
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <span className="text-[9.5px] font-bold text-[#17352A] text-center block mt-1 leading-tight">
                              Expert
                              <br />
                              Advisory
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Mobile App Navigation Bar */}
                      <div className="bg-white border-t border-neutral-100 py-2 px-4 flex items-center justify-between">
                        {/* Home (Active) */}
                        <div className="flex flex-col items-center">
                          <svg className="w-4 h-4 text-[#087A3D]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                          </svg>
                          <span className="text-[8px] font-bold text-[#087A3D] mt-0.5">
                            Home
                          </span>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col items-center opacity-50">
                          <svg className="w-4 h-4 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                          </svg>
                          <span className="text-[8px] font-medium text-neutral-600 mt-0.5">
                            Services
                          </span>
                        </div>

                        {/* Notifications */}
                        <div className="flex flex-col items-center opacity-50">
                          <Bell className="w-4 h-4 text-neutral-600" />
                          <span className="text-[8px] font-medium text-neutral-600 mt-0.5">
                            Notifications
                          </span>
                        </div>

                        {/* Profile */}
                        <div className="flex flex-col items-center opacity-50">
                          <svg className="w-4 h-4 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span className="text-[8px] font-medium text-neutral-600 mt-0.5">
                            Profile
                          </span>
                        </div>
                      </div>

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
