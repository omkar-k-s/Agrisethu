import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, Sprout, Handshake, Truck, ArrowRight } from 'lucide-react';

export const WhatWeDoSection: React.FC = () => {
  const cards = [
    {
      id: 'equipment-access',
      badgeNum: '01',
      badgeEn: '01 | AGRICULTURAL EQUIPMENT ACCESS',
      badgeKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಪ್ರವೇಶ',
      titleEn: 'Agricultural Equipment Access',
      titleKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಪ್ರವೇಶ',
      desc: 'Farmers can discover tractors, rotavators, harvesters and other agricultural equipment, connect with owners and access or rent machinery when needed.',
      icon: <Tractor className="w-6 h-6" />,
      iconBadge: <Tractor className="w-4 h-4 text-[#087A3D]" />,
      image: '/images/whatwedo_equipment.jpg',
    },
    {
      id: 'agri-inputs',
      badgeNum: '02',
      badgeEn: '02 | AGRICULTURAL INPUTS & RESOURCES',
      badgeKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',
      titleEn: 'Agricultural Inputs & Resources',
      titleKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',
      desc: 'Farmers can discover seeds, fertilizers, farming supplies and other agricultural resources needed for cultivation through a connected digital platform.',
      icon: <Sprout className="w-6 h-6" />,
      iconBadge: <Sprout className="w-4 h-4 text-[#087A3D]" />,
      image: '/images/whatwedo_inputs.jpg',
    },
    {
      id: 'farmer-connections',
      badgeNum: '03',
      badgeEn: '03 | FARMER & SERVICE PROVIDER CONNECTIONS',
      badgeKn: 'ರೈತರು ಮತ್ತು ಸೇವಾದಾರರ ಸಂಪರ್ಕ',
      titleEn: 'Connecting Farmers & Service Providers',
      titleKn: 'ರೈತರು ಮತ್ತು ಸೇವಾದಾರರ ಸಂಪರ್ಕ',
      desc: 'Farmers can discover equipment owners and agricultural service providers, communicate directly, coordinate services and make bookings.',
      icon: <Handshake className="w-6 h-6" />,
      iconBadge: <Handshake className="w-4 h-4 text-[#087A3D]" />,
      image: '/images/whatwedo_connections.jpg',
    },
    {
      id: 'agri-inputs-delivery',
      badgeNum: '04',
      badgeEn: '04 | AGRICULTURAL INPUTS, ORDERS & DELIVERY',
      badgeKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್, ಆರ್ಡರ್ ಮತ್ತು ವಿತರಣೆ',
      titleEn: 'Agricultural Inputs & Delivery',
      titleKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಮತ್ತು ವಿತರಣೆ',
      desc: 'Farmers can discover essential agricultural inputs such as fertilizers, pesticides, seeds and farming supplies, place orders and get them delivered to their location.',
      icon: <Truck className="w-6 h-6" />,
      iconBadge: <Truck className="w-4 h-4 text-[#087A3D]" />,
      image: '/images/whatwedo_inputs_delivery.jpg',
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative bg-[#FFFDF6] pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 overflow-hidden border-b border-[#E4EFE7]"
    >
      {/* ========================================================================= */}
      {/* 1. SUBTLE BACKGROUND KARNATAKA AGRICULTURAL SCENERY                        */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 w-full h-[400px] sm:h-[460px] pointer-events-none select-none z-0 opacity-45 lg:opacity-55 mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Karnataka agricultural landscape background illustration"
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#FFFDF6]" />
      </div>

      {/* Bottom-Left Vidhana Soudha Architectural Sketch & Paddy Stalk */}
      <div className="absolute bottom-6 left-0 w-44 sm:w-60 h-44 sm:h-60 opacity-15 lg:opacity-20 mix-blend-multiply pointer-events-none select-none z-0">
        <img
          src="/images/vidhana_soudha_sketch.jpg"
          alt="Vidhana Soudha architectural watermark"
          aria-hidden="true"
          className="w-full h-auto object-contain object-left"
        />
      </div>

      {/* Bottom-Left Golden Paddy Stalk Accent */}
      <div className="absolute bottom-10 left-0 w-36 sm:w-52 h-44 sm:h-64 pointer-events-none select-none z-0 opacity-70">
        <svg viewBox="0 0 160 220" fill="none" className="w-full h-full">
          <path d="M 0 220 Q 30 140 120 70" stroke="#3E8D4F" strokeWidth="2.5" fill="none" />
          <path d="M 120 70 Q 145 90 155 130" stroke="#D49A29" strokeWidth="2" fill="none" />
          <ellipse cx="60" cy="125" rx="6" ry="3.5" transform="rotate(-35 60 125)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="75" cy="110" rx="7" ry="3.5" transform="rotate(-30 75 110)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="90" cy="95" rx="7" ry="3.5" transform="rotate(-25 90 95)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="105" cy="82" rx="7" ry="3.5" transform="rotate(-15 105 82)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="120" cy="74" rx="7" ry="3.5" transform="rotate(5 120 74)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="135" cy="78" rx="7" ry="3.5" transform="rotate(30 135 78)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="145" cy="92" rx="7" ry="3.5" transform="rotate(55 145 92)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="150" cy="108" rx="6" ry="3.5" transform="rotate(75 150 108)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="152" cy="124" rx="5" ry="3" transform="rotate(90 152 124)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Bottom-Right Karnataka Temple Gopuram Architectural Sketch */}
      <div className="absolute bottom-6 right-0 w-44 sm:w-60 h-44 sm:h-60 opacity-15 lg:opacity-20 mix-blend-multiply pointer-events-none select-none z-0">
        <img
          src="/images/temple_gopuram_sketch.jpg"
          alt="Karnataka temple gopuram architectural watermark"
          aria-hidden="true"
          className="w-full h-auto object-contain object-right"
        />
      </div>

      {/* Bottom-Right Golden Paddy Stalk Accent (Mirrored) */}
      <div className="absolute bottom-10 right-0 w-36 sm:w-52 h-44 sm:h-64 pointer-events-none select-none z-0 opacity-70 transform -scale-x-100">
        <svg viewBox="0 0 160 220" fill="none" className="w-full h-full">
          <path d="M 0 220 Q 30 140 120 70" stroke="#3E8D4F" strokeWidth="2.5" fill="none" />
          <path d="M 120 70 Q 145 90 155 130" stroke="#D49A29" strokeWidth="2" fill="none" />
          <ellipse cx="60" cy="125" rx="6" ry="3.5" transform="rotate(-35 60 125)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="75" cy="110" rx="7" ry="3.5" transform="rotate(-30 75 110)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="90" cy="95" rx="7" ry="3.5" transform="rotate(-25 90 95)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="105" cy="82" rx="7" ry="3.5" transform="rotate(-15 105 82)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="120" cy="74" rx="7" ry="3.5" transform="rotate(5 120 74)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="135" cy="78" rx="7" ry="3.5" transform="rotate(30 135 78)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="145" cy="92" rx="7" ry="3.5" transform="rotate(55 145 92)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="150" cy="108" rx="6" ry="3.5" transform="rotate(75 150 108)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="152" cy="124" rx="5" ry="3" transform="rotate(90 152 124)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. SECTION HEADER                                                         */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Centered Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF9E7] border border-[#E8DCB0] text-[#087A3D] shadow-2xs mb-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              OUR CORE SERVICES
            </span>
            <span className="text-[#B88219] font-black">•</span>
            <span className="font-kannada font-bold text-xs sm:text-[13px] text-[#087A3D]">
              ನಮ್ಮ ಪ್ರಮುಖ ಸೇವೆಗಳು
            </span>
          </div>

          {/* Main Large Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#075C38] tracking-tight leading-tight">
            What We Do
          </h2>

          {/* Kannada Subheading */}
          <h3 className="font-kannada font-extrabold text-xl sm:text-2xl text-[#075C38] leading-tight mt-1.5">
            ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ
          </h3>

          {/* Tiny Gold Horizontal Accent Line */}
          <div className="w-12 h-0.5 bg-[#F2C94C] mx-auto rounded-full mt-2" />

          {/* Description */}
          <p className="text-base sm:text-[17px] text-[#68776F] leading-relaxed mt-4 max-w-[760px] mx-auto font-normal">
            AgriSethu is being built to connect farmers with the equipment, agricultural resources, service providers and marketplace services they need through one connected digital platform.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. 2 × 2 SERVICE CARD GRID                                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[20px] sm:rounded-[22px] border border-[#DCE9DF] shadow-[0_6px_20px_rgba(7,92,56,0.05)] hover:shadow-[0_12px_32px_rgba(7,92,56,0.12)] hover:border-[#087A3D]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Card Top Image Container */}
                <div className="relative h-[160px] sm:h-[175px] w-full overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.titleEn}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Category Badge on top-left of Image */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm border border-[#CDE5D2] px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-2">
                    <div className="flex-shrink-0">
                      {card.iconBadge}
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#075C38] tracking-wider uppercase">
                        {card.badgeEn}
                      </span>
                      <span className="font-kannada font-bold text-[9.5px] sm:text-[10.5px] text-[#075C38]/90">
                        {card.badgeKn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 text-left">
                  <div className="flex items-start gap-3.5 mb-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                      {card.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="font-bold text-lg sm:text-[20px] text-[#075C38] leading-snug">
                        {card.titleEn}
                      </h3>
                      <h4 className="font-kannada font-semibold text-sm sm:text-[15.5px] text-[#075C38]/90 leading-snug mt-0.5">
                        {card.titleKn}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[14.5px] text-[#68776F] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Learn More & Concept Overview */}
              <div className="px-6 sm:px-7 pb-5 pt-3.5 border-t border-[#F0F5F2] flex items-center justify-between">
                <Link
                  to="/what-we-do"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#087A3D] hover:text-[#064D2C] transition-colors group/link cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] sm:text-xs text-[#8A9B93] font-medium">
                  Concept Overview
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM GREEN INFORMATION BANNER                                        */}
        {/* ========================================================================= */}
        <div className="mt-10 sm:mt-12 max-w-[1250px] mx-auto rounded-[22px] bg-[#EFF8F0] border border-[#D5E9D8] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-2xs border border-[#CDE5D2] flex items-center justify-center flex-shrink-0 text-[#087A3D]">
            <Sprout className="w-7 h-7" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm sm:text-base font-bold text-[#075C38] leading-snug">
              AgriSethu is being built to bring farmer accounts, equipment access, agricultural resources, service connections, bookings, marketplace activities, orders and delivery into one connected digital ecosystem.
            </p>
            <p className="font-kannada text-xs sm:text-[13.5px] text-[#075C38]/90 font-semibold leading-relaxed">
              ರೈತ ಖಾತೆಗಳು, ಯಂತ್ರೋಪಕರಣಗಳ ಪ್ರವೇಶ, ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳು, ಸೇವಾ ಸಂಪರ್ಕಗಳು, ಬುಕ್ಕಿಂಗ್, ಮಾರುಕಟ್ಟೆ ಚಟುವಟಿಕೆಗಳು, ಆರ್ಡರ್ ಮತ್ತು ವಿತರಣೆಯನ್ನು ಒಂದೇ ಸಂಪರ್ಕಿತ ಡಿಜಿಟಲ್ ಪರಿಸರದಲ್ಲಿ ತರಲು AgriSethu ನಿರ್ಮಿಸಲಾಗುತ್ತಿದೆ.
            </p>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. BOTTOM ORGANIC AGRICULTURAL WAVE (Green Wave + Gold Wave)               */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 overflow-hidden pointer-events-none z-10 leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          {/* Dark Karnataka Green Wave */}
          <path
            d="M0,45 C320,75 580,15 920,55 C1160,80 1340,35 1440,40 L1440,80 L0,80 Z"
            fill="#075C38"
          />
          {/* Agricultural Gold Contour Wave */}
          <path
            d="M0,42 C320,72 580,12 920,52 C1160,77 1340,32 1440,37"
            stroke="#F2C94C"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

    </section>
  );
};
