import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Users,
  ShieldCheck,
  Sprout,
  Tractor,
  Cpu,
  UserCheck,
  Handshake,
  ShoppingCart,
  HeartHandshake,
  Layers,
  Smartphone,
  Network,
  CheckCircle2,
} from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const connectItems = [
    {
      number: '01',
      icon: <UserCheck className="w-6 h-6 text-[#087A3D]" />,
      titleEn: 'Farmer Services',
      titleKn: 'ರೈತ ಸೇವೆಗಳು',
      desc: 'Farmer registration and digital accounts',
      descKn: 'ರೈತರ ನೋಂದಣಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಖಾತೆಗಳು',
    },
    {
      number: '02',
      icon: <Tractor className="w-6 h-6 text-[#087A3D]" />,
      titleEn: 'Equipment Access',
      titleKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು',
      desc: 'Agricultural equipment discovery, access and rental',
      descKn: 'ಕೃಷಿ ಉಪಕರಣಗಳ ಶೋಧನೆ ಮತ್ತು ಬಾಡಿಗೆ ಪ್ರವೇಶ',
    },
    {
      number: '03',
      icon: <Sprout className="w-6 h-6 text-[#087A3D]" />,
      titleEn: 'Agri Inputs & Resources',
      titleKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ & ಸಂಪನ್ಮೂಲಗಳು',
      desc: 'Agricultural inputs and farming resources',
      descKn: 'ಕೃಷಿ ಪರಿಕರಗಳು ಮತ್ತು ಅಗತ್ಯ ಸಂಪನ್ಮೂಲಗಳು',
    },
    {
      number: '04',
      icon: <Handshake className="w-6 h-6 text-[#087A3D]" />,
      titleEn: 'Connections & Bookings',
      titleKn: 'ಸಂಪರ್ಕ & ಬುಕ್ಕಿಂಗ್',
      desc: 'Farmers, equipment owners and service providers',
      descKn: 'ರೈತರು, ಯಂತ್ರ ಮಾಲೀಕರು ಮತ್ತು ಸೇವಾದಾರರು',
    },
    {
      number: '05',
      icon: <ShoppingCart className="w-6 h-6 text-[#087A3D]" />,
      titleEn: 'Marketplace & Delivery',
      titleKn: 'ಮಾರುಕಟ್ಟೆ & ವಿತರಣೆ',
      desc: 'Marketplace, orders and delivery',
      descKn: 'ಮಾರುಕಟ್ಟೆ, ಆದೇಶಗಳು ಮತ್ತು ಸರಬರಾಜು',
    },
  ];

  const whyBlocks = [
    {
      titleEn: 'Farmer First',
      titleKn: 'ರೈತರಿಗೆ ಮೊದಲ ಆದ್ಯತೆ',
      desc: 'Designed around smallholder workflows, local seasonal demands, and direct Kannada communication.',
      icon: <HeartHandshake className="w-6 h-6 text-[#087A3D]" />,
    },
    {
      titleEn: 'Connected Resources',
      titleKn: 'ಸಂಪರ್ಕಿತ ಸಂಪನ್ಮೂಲಗಳು',
      desc: 'Bringing scattered machinery, inputs, and service providers into one coherent digital discovery map.',
      icon: <Network className="w-6 h-6 text-[#087A3D]" />,
    },
    {
      titleEn: 'Accessible Technology',
      titleKn: 'ಸುಲಭ ಡಿಜಿಟಲ್ ತಂತ್ರಜ್ಞಾನ',
      desc: 'Clean interfaces, zero clutter, and lightweight mobile accessibility tailored for rural connectivity.',
      icon: <Smartphone className="w-6 h-6 text-[#087A3D]" />,
    },
    {
      titleEn: 'Community Driven',
      titleKn: 'ಸಮುದಾಯ ಆಧಾರಿತ',
      desc: 'Fostering shared equipment capacity and mutual trust between neighboring farmers and local providers.',
      icon: <Users className="w-6 h-6 text-[#087A3D]" />,
    },
  ];

  return (
    <div className="bg-[#FFFDF7] min-h-screen text-[#17352A]">
      
      {/* ========================================================================= */}
      {/* 1. TOP ABOUT HERO SECTION (Identical to Home About Presentation)          */}
      {/* ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-22 border-b border-[#E4EFE7] overflow-hidden">
        
        {/* Top-Right Architectural & Agricultural Heritage Watermark */}
        <div className="absolute top-0 right-0 w-[360px] sm:w-[500px] lg:w-[640px] pointer-events-none select-none z-0 opacity-80 lg:opacity-90 mix-blend-multiply">
          <img
            src="/images/about_vidhana_soudha_art.jpg"
            alt="Karnataka Vidhana Soudha, palm trees, and agricultural landscape illustration"
            aria-hidden="true"
            className="w-full h-auto object-contain object-top-right"
          />
        </div>

        {/* Botanical Leaf Watermarks */}
        <div className="absolute -bottom-6 -left-6 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none select-none opacity-50 z-0">
          <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
            <path d="M10 150 C30 110, 60 80, 130 50 C110 90, 80 120, 10 150 Z" fill="#A3D9A5" />
            <path d="M10 150 Q70 100 130 50" stroke="#2E9E52" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 150 C20 120, 50 100, 100 80 C85 110, 60 130, 15 150 Z" fill="#C1E7C4" opacity="0.8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Large Premium Agricultural Image Card (45% cols) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              
              {/* Main Rounded Image Container */}
              <div className="relative rounded-[28px] overflow-hidden shadow-[0_16px_40px_rgba(7,92,56,0.14)] border border-[#CDE5D2] h-[480px] sm:h-[520px] lg:h-[550px] w-full bg-[#EBF5EE]">
                <img
                  src="/images/about_karnataka_farmer.jpg"
                  alt="Smiling Karnataka farmer holding harvested golden paddy crops in rural Karnataka"
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
                        d="M 202 24 C 185 38, 155 58, 132 74 C 108 90, 78 88, 54 98 C 40 105, 34 122, 33 140 C 31 162, 32 188, 35 212 C 38 238, 44 266, 48 290 C 52 312, 57 334, 62 354 C 66 372, 70 388, 76 400 C 84 414, 102 426, 120 436 C 134 444, 142 458, 146 474 C 152 478, 162 470, 172 456 C 184 440, 198 428, 214 420 C 230 412, 248 412, 260 406 C 264 402, 260 388, 252 374 C 244 358, 234 346, 230 334 C 222 314, 206 294, 204 278 C 202 268, 214 262, 232 258 C 248 254, 258 244, 262 230 C 268 210, 270 190, 266 172 C 260 150, 246 136, 238 118 C 230 100, 226 76, 222 52 C 220 38, 214 26, 202 24 Z"
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
                      <svg viewBox="0 0 48 8" fill="none" className="w-10 sm:w-11 h-1.5 mt-1">
                        <path d="M2 6 Q 24 1, 46 5" stroke="#F2C94C" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay: Purpose & Agricultural Pillars */}
                <div className="absolute inset-x-0 bottom-0 pt-28 pb-8 px-5 sm:px-6 bg-gradient-to-t from-[#04331C] via-[#04331C]/85 to-transparent z-10 flex flex-col justify-end text-left">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sprout className="w-4 h-4 text-[#F2C94C]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#F2C94C]">
                      OUR PURPOSE • ನಮ್ಮ ಉದ್ದೇಶ
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
                    <span className="text-white/40">•</span>
                    <span className="inline-flex items-center gap-1">
                      <Tractor className="w-3.5 h-3.5 text-[#A3D9A5]" />
                      Agriculture
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#A3D9A5]" />
                      Community
                    </span>
                  </div>
                </div>

                {/* Organic Curved Bottom Agricultural Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-10">
                  <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-full" fill="none">
                    <path d="M0 25 C 130 10, 240 40, 500 15 L 500 50 L 0 50 Z" fill="#054A2D" />
                    <path d="M0 27 C 130 12, 240 42, 500 17" stroke="#F2C94C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
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

            {/* RIGHT COLUMN: Official Narrative, Pillars & Information Notice */}
            <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-left order-1 lg:order-2">
              
              {/* Top Badge: ABOUT AGRISETHU • ನಮ್ಮ ಬಗ್ಗೆ */}
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-3.5 py-1 rounded-full shadow-2xs">
                  <span>ABOUT AGRISETHU</span>
                  <span className="text-[#087A3D] font-black">•</span>
                  <span className="font-kannada font-bold text-xs">ನಮ್ಮ ಬಗ್ಗೆ</span>
                </span>
              </div>

              {/* Headings */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#075C38] tracking-tight leading-[1.15]">
                  About AgriSethu
                </h1>
                <h2 className="font-kannada font-extrabold text-xl sm:text-2xl text-[#075C38] mt-1.5 leading-snug">
                  ಅಗ್ರಿಸೇತು ಬಗ್ಗೆ
                </h2>
              </div>

              {/* Main Description */}
              <p className="text-lg sm:text-[21px] lg:text-[22px] font-bold text-[#075C38] leading-[1.45]">
                AgriSethu is an agriculture-focused digital platform designed to connect farmers with agricultural resources, equipment, service providers, marketplace opportunities and essential digital services.
              </p>

              {/* Second Paragraph */}
              <p className="text-base sm:text-[17px] text-[#65766F] leading-relaxed">
                Through the AgriSethu mobile application, farmers can discover agricultural equipment, connect with equipment owners and service providers, explore agricultural inputs and resources, make bookings, access marketplace services, and manage orders and delivery.
              </p>

              {/* Purpose & Approach Cards (2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                {/* Purpose Card */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#EAF6ED]/65 border border-[#D5EAD9] shadow-xs">
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
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#EAF6ED]/65 border border-[#D5EAD9] shadow-xs">
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

              {/* Informational Platform Strip */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FFFDF4] border border-[#F5E5B8] shadow-2xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <p className="text-xs sm:text-[13px] text-[#92400E] font-medium leading-relaxed">
                  An informational platform introducing the AgriSethu mobile application and the agricultural ecosystem it is being built to connect.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT WE CONNECT SECTION                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#E4EFE7] bg-white relative">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-3.5 py-1 rounded-full shadow-2xs mb-3">
              <span>WHAT WE CONNECT</span>
              <span className="text-[#087A3D]">•</span>
              <span className="font-kannada font-bold text-xs">ನಾವು ಸಂಪರ್ಕಿಸುವುದು</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075C38] tracking-tight">
              Connecting Farmers With the Resources They Need
            </h2>
            <p className="font-kannada text-sm sm:text-base text-[#075C38]/85 font-medium mt-2">
              ಕೃಷಿಕರಿಗೆ ಅಗತ್ಯವಿರುವ ಉಪಕರಣಗಳು, ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು ಒಂದೇ ಡಿಜಿಟಲ್ ವೇದಿಕೆಯಲ್ಲಿ ಜೋಡಿಸುವುದು
            </p>
          </div>

          {/* 5 Clean Connect Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
            {connectItems.map((item) => (
              <div
                key={item.number}
                className="bg-[#FFFDF7] rounded-[22px] border border-[#E0EBE2] p-5 sm:p-6 shadow-[0_6px_20px_rgba(7,92,56,0.05)] hover:shadow-[0_10px_28px_rgba(7,92,56,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-2.5 py-1 rounded-md">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-[#075C38] leading-tight">
                    {item.titleEn}
                  </h3>
                  <h4 className="font-kannada font-bold text-xs text-[#075C38]/85 leading-snug mt-1">
                    {item.titleKn}
                  </h4>
                  <p className="text-xs text-[#687A72] leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#F0F5F2] flex items-center text-[11px] font-semibold text-[#087A3D]">
                  <span>AgriSethu Ecosystem</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR PURPOSE SECTION (Wide Government Information Style Layout)          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-22 bg-[#FFFDF7] border-b border-[#E4EFE7] relative">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-[26px] border border-[#CDE5D2] p-6 sm:p-10 lg:p-12 shadow-[0_12px_36px_rgba(7,92,56,0.08)]">
            
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-3.5 py-1 rounded-full shadow-2xs mb-3">
                <span>OUR PURPOSE</span>
                <span className="text-[#087A3D]">•</span>
                <span className="font-kannada font-bold text-xs">ನಮ್ಮ ಉದ್ದೇಶ</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075C38] tracking-tight">
                Making Agricultural Access Simpler
              </h2>
              <p className="font-kannada text-sm sm:text-base text-[#075C38]/85 font-medium mt-1.5">
                ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳ ಪ್ರವೇಶವನ್ನು ಇನ್ನಷ್ಟು ಸುಲಭಗೊಳಿಸುವುದು
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#163C2E] font-semibold text-center leading-relaxed mb-8 max-w-3xl mx-auto">
              "AgriSethu is being built to reduce the difficulty farmers face when searching for agricultural equipment, resources and trusted service connections."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#EAF2EC]">
              <div className="p-4 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF] text-left">
                <div className="w-8 h-8 rounded-lg bg-[#EAF6ED] text-[#087A3D] flex items-center justify-center font-bold text-xs mb-2.5">
                  01
                </div>
                <h3 className="font-bold text-sm text-[#075C38]">
                  Discovery Without Friction
                </h3>
                <p className="text-xs text-[#687A72] leading-relaxed mt-1">
                  Enabling farmers to find machinery and farming resources quickly within neighboring rural clusters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF] text-left">
                <div className="w-8 h-8 rounded-lg bg-[#EAF6ED] text-[#087A3D] flex items-center justify-center font-bold text-xs mb-2.5">
                  02
                </div>
                <h3 className="font-bold text-sm text-[#075C38]">
                  Shared Capacity Model
                </h3>
                <p className="text-xs text-[#687A72] leading-relaxed mt-1">
                  Supporting cooperative equipment utilization without forcing smallholder families into prohibitive capital debt.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF] text-left">
                <div className="w-8 h-8 rounded-lg bg-[#EAF6ED] text-[#087A3D] flex items-center justify-center font-bold text-xs mb-2.5">
                  03
                </div>
                <h3 className="font-bold text-sm text-[#075C38]">
                  Verified Local Support
                </h3>
                <p className="text-xs text-[#687A72] leading-relaxed mt-1">
                  Connecting producers directly with genuine input providers, transparent rates, and trusted operators.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR VISION SECTION (Subtle Karnataka Agriculture Visual Accent)         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-22 bg-white border-b border-[#E4EFE7] relative overflow-hidden">
        
        {/* Subtle Background Watermark */}
        <div className="absolute right-0 top-0 bottom-0 w-80 lg:w-96 opacity-35 mix-blend-multiply pointer-events-none select-none">
          <img
            src="/images/gaps_karnataka_bg_art.jpg"
            alt="Karnataka agricultural watermark"
            aria-hidden="true"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 text-left space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-3.5 py-1 rounded-full shadow-2xs">
                <span>OUR VISION</span>
                <span className="text-[#087A3D]">•</span>
                <span className="font-kannada font-bold text-xs">ನಮ್ಮ ದೃಷ್ಟಿಕೋನ</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075C38] tracking-tight">
                A Connected Digital Future for Karnataka's Farmers
              </h2>

              <p className="font-kannada font-bold text-base sm:text-lg text-[#075C38]/90">
                ಕರ್ನಾಟಕದ ರೈತ ಸಮುದಾಯಕ್ಕಾಗಿ ಸಮಗ್ರ, ಪಾರದರ್ಶಕ ಹಾಗೂ ಪ್ರಗತಿಪರ ಡಿಜಿಟಲ್ ಕೃಷಿ ಪರಿಸರ
              </p>

              <p className="text-base sm:text-lg text-[#687A72] leading-relaxed pt-2">
                "We envision a connected agricultural ecosystem where farmers can discover resources, connect with trusted service providers and access agricultural opportunities through a simple digital platform."
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 text-xs sm:text-sm text-[#075C38] font-semibold">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087A3D]" />
                  <span>Empowering small & marginal landholders</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087A3D]" />
                  <span>Fair local resource distribution</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087A3D]" />
                  <span>Respectful Kannada digital inclusion</span>
                </div>
              </div>
            </div>

            {/* Right Emblem Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#FFFDF7] rounded-[24px] border border-[#CDE5D2] p-6 sm:p-7 shadow-[0_8px_24px_rgba(7,92,56,0.06)] text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center text-[#087A3D]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#075C38]">
                  Technology Rooted in Empathy
                </h3>
                <p className="text-xs sm:text-sm text-[#687A72] leading-relaxed">
                  Every workflow in AgriSethu is mapped directly against the real ground challenges faced by Karnataka's agricultural families.
                </p>
                <div className="pt-2 border-t border-[#EAF2EC] text-[11px] font-bold text-[#80613D] uppercase tracking-wider">
                  AgriTech Initiative • ಕರ್ನಾಟಕ ಕೃಷಿ
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY AGRISETHU SECTION (Four Clean Information Blocks)                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-22 bg-[#FFFDF7] relative">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-3.5 py-1 rounded-full shadow-2xs mb-3">
              <span>WHY AGRISETHU</span>
              <span className="text-[#087A3D]">•</span>
              <span className="font-kannada font-bold text-xs">ಏಕೆ ಅಗ್ರಿಸೇತು</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075C38] tracking-tight">
              Guided by the Real Needs of Farmers
            </h2>
            <p className="font-kannada text-sm sm:text-base text-[#075C38]/85 font-medium mt-1.5">
              ರೈತರ ವಾಸ್ತವಿಕ ಸವಾಲುಗಳನ್ನು ಪರಿಹರಿಸುವ ಪ್ರಾಮಾಣಿಕ ಉದ್ದೇಶ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {whyBlocks.map((block, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[22px] border border-[#E0EBE2] p-6 shadow-[0_6px_20px_rgba(7,92,56,0.05)] hover:shadow-[0_10px_28px_rgba(7,92,56,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center mb-4">
                    {block.icon}
                  </div>
                  <h3 className="font-bold text-base text-[#075C38] leading-tight">
                    {block.titleEn}
                  </h3>
                  <h4 className="font-kannada font-bold text-xs text-[#075C38]/85 leading-snug mt-1">
                    {block.titleKn}
                  </h4>
                  <p className="text-xs text-[#687A72] leading-relaxed mt-3">
                    {block.desc}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#F0F5F2] flex items-center gap-1.5 text-[11px] font-bold text-[#087A3D]">
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Core Pillar</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-14 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#087A3D] text-white font-bold text-sm shadow-[0_4px_16px_rgba(8,122,61,0.22)] hover:bg-[#064D2C] hover:shadow-[0_6px_20px_rgba(8,122,61,0.32)] transition-all inline-flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Explore Mobile App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-[#075C38] border border-[#CDE5D2] font-bold text-sm hover:bg-[#F6FBF6] transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
