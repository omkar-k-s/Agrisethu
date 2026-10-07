import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Tractor, Sprout, Handshake, Truck, ArrowRight, Check } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const { isKannada } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      id: 'equipment-access',
      titleEn: 'Agricultural Equipment Access',
      titleKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಪ್ರವೇಶ',
      descEn:
        'Farmers can discover tractors, rotavators, harvesters and other agricultural equipment, connect with equipment owners and access or rent machinery when needed.',
      descKn:
        'ರೈತರು ಟ್ರ್ಯಾಕ್ಟರ್, ರೋಟಾವೇಟರ್, ಹಾರ್ವೆಸ್ಟರ್ ಮತ್ತು ಇತರ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಹುಡುಕಿ, ಯಂತ್ರ ಮಾಲೀಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ ಅಗತ್ಯವಿದ್ದಾಗ ಬಾಡಿಗೆಗೆ ಪಡೆಯಬಹುದು.',
      icon: <Tractor className="w-6 h-6 text-[#087A3D]" />,
      image: '/images/whatwedo_equipment.jpg',
      pointsEn: [
        'Discover agricultural machinery',
        'Connect with nearby equipment owners',
        'Access or rent equipment',
        'Find machinery when needed',
      ],
      pointsKn: [
        'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಶೋಧನೆ',
        'ಸಮೀಪದ ಉಪಕರಣ ಮಾಲೀಕರೊಂದಿಗೆ ಸಂಪರ್ಕ',
        'ಉಪಕರಣಗಳ ಸುಲಭ ಪ್ರವೇಶ ಅಥವಾ ಬಾಡಿಗೆ',
        'ಅಗತ್ಯವಿದ್ದಾಗ ಸಕಾಲಿಕ ಯಾಂತ್ರೀಕರಣದ ಬಳಕೆ',
      ],
      imageOnRight: true,
    },
    {
      id: 'agri-inputs',
      titleEn: 'Agricultural Inputs & Resources',
      titleKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',
      descEn:
        'Farmers can discover seeds, fertilizers, pesticides and other agricultural resources needed for cultivation through a connected digital platform.',
      descKn:
        'ರೈತರು ಕೃಷಿಗೆ ಅಗತ್ಯವಿರುವ ಬಿತ್ತನೆ ಬೀಜಗಳು, ರಸಗೊಬ್ಬರಗಳು, ಕೀಟನಾಶಕಗಳು ಮತ್ತು ಇತರ ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಸಂಪರ್ಕಿತ ಡಿಜಿಟಲ್ ವೇದಿಕೆಯ ಮೂಲಕ ಅನ್ವೇಷಿಸಬಹುದು.',
      icon: <Sprout className="w-6 h-6 text-[#087A3D]" />,
      image: '/images/whatwedo_inputs.jpg',
      pointsEn: [
        'Seeds and planting materials',
        'Fertilizers and crop nutrients',
        'Crop-protection products',
        'Other farming supplies',
      ],
      pointsKn: [
        'ಬಿತ್ತನೆ ಬೀಜಗಳು ಮತ್ತು ಸಸಿ ಸಾಮಗ್ರಿಗಳು',
        'ರಸಗೊಬ್ಬರಗಳು ಮತ್ತು ಬೆಳೆ ಪೋಷಕಾಂಶಗಳು',
        'ಬೆಳೆ ಸಂರಕ್ಷಣಾ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಕೀಟನಾಶಕಗಳು',
        'ಇತರ ಅಗತ್ಯ ಕೃಷಿ ಸಾಮಗ್ರಿಗಳು',
      ],
      imageOnRight: false,
    },
    {
      id: 'farmer-connections',
      titleEn: 'Connecting Farmers & Service Providers',
      titleKn: 'ರೈತರು ಮತ್ತು ಸೇವಾದಾರರ ಸಂಪರ್ಕ',
      descEn:
        'AgriSethu helps farmers discover equipment owners and agricultural service providers, communicate directly, coordinate services and make bookings.',
      descKn:
        'ರೈತರು ಉಪಕರಣ ಮಾಲೀಕರು ಮತ್ತು ಕೃಷಿ ಸೇವಾದಾರರನ್ನು ಹುಡುಕಲು, ನೇರವಾಗಿ ಸಂವಹನ ನಡೆಸಲು, ಸೇವೆಗಳನ್ನು ಸಮನ್ವಯಗೊಳಿಸಲು ಮತ್ತು ಬುಕ್ಕಿಂಗ್ ಮಾಡಲು AgriSethu ನೆರವಾಗುತ್ತದೆ.',
      icon: <Handshake className="w-6 h-6 text-[#087A3D]" />,
      image: '/images/whatwedo_connections.jpg',
      pointsEn: [
        'Connect farmers with equipment owners',
        'Discover agricultural service providers',
        'Communicate directly',
        'Coordinate services and bookings',
      ],
      pointsKn: [
        'ರೈತರನ್ನು ಯಂತ್ರ ಮಾಲೀಕರೊಂದಿಗೆ ಜೋಡಿಸುವುದು',
        'ಕೃಷಿ ಸೇವಾದಾರರ ನೇರ ಶೋಧನೆ',
        'ನೇರ ಸಂವಹನ ಮತ್ತು ಮಾಹಿತಿ ವಿನಿಮಯ',
        'ಸೇವಾ ಸಮನ್ವಯ ಮತ್ತು ಬುಕ್ಕಿಂಗ್ ವ್ಯವಸ್ಥೆ',
      ],
      imageOnRight: true,
    },
    {
      id: 'agri-inputs-delivery',
      titleEn: 'Agricultural Inputs & Delivery',
      titleKn: 'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಮತ್ತು ವಿತರಣೆ',
      descEn:
        'Farmers can discover essential agricultural inputs such as fertilizers, pesticides, seeds and farming supplies, place orders and get them delivered to their location.',
      descKn:
        'ರೈತರು ರಸಗೊಬ್ಬರ, ಕೀಟನಾಶಕಗಳು, ಬೀಜಗಳು ಮತ್ತು ಇತರ ಕೃಷಿ ಸಾಮಗ್ರಿಗಳನ್ನು ಹುಡುಕಿ, ಆರ್ಡರ್ ಮಾಡಿ ತಮ್ಮ ಸ್ಥಳಕ್ಕೆ ವಿತರಣೆ ಪಡೆಯಬಹುದು.',
      icon: <Truck className="w-6 h-6 text-[#087A3D]" />,
      image: '/images/whatwedo_inputs_delivery.jpg',
      pointsEn: [
        'Discover agricultural inputs',
        'Order fertilizers and crop-protection products',
        'Order seeds and farming supplies',
        'Get agricultural inputs delivered',
      ],
      pointsKn: [
        'ಕೃಷಿ ಇನ್ಪುಟ್ಸ್‌ಗಳ ಸುಲಭ ಶೋಧನೆ',
        'ರಸಗೊಬ್ಬರ ಮತ್ತು ಬೆಳೆ ಸಂರಕ್ಷಣಾ ಉತ್ಪನ್ನಗಳ ಆರ್ಡರ್',
        'ಬೀಜಗಳು ಮತ್ತು ಕೃಷಿ ಪರಿಕರಗಳ ಖರೀದಿ',
        'ಕೃಷಿ ಸ್ಥಳಕ್ಕೇ ನೇರ ವಿತರಣೆ',
      ],
      imageOnRight: false,
    },
  ];

  return (
    <div className="relative bg-[#FFFDF5] min-h-screen text-[#173C2E] overflow-hidden pb-28 sm:pb-36 lg:pb-44">
      
      {/* ========================================================================= */}
      {/* 1. COMPREHENSIVE ILLUSTRATED KARNATAKA AGRICULTURAL BACKGROUND             */}
      {/* ========================================================================= */}

      {/* Layer A: Subtle Agricultural Ambient Paper Washes (Never stark white) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none z-0 bg-gradient-to-b from-[#FFFDF5] via-[#F7FCF8]/60 via-[#FFFDF5] to-[#F1F8F3]/70"
      />

      {/* Layer B: Upper Agricultural Scenery Panorama (Hills, Palms, Paddy, Karnataka Map, Tractor, Farmer) */}
      {/* Spans across the entire top and extends behind the header & upper cards (16-20% opacity) */}
      <div className="absolute top-0 left-0 right-0 w-full h-[720px] sm:h-[840px] lg:h-[940px] pointer-events-none select-none z-0 opacity-[0.18] lg:opacity-[0.22] mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Karnataka agricultural panorama background illustration"
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#FFFDF5]/50 to-[#FFFDF5]" />
      </div>

      {/* Layer C: Continuous Side Edge Agricultural Line-Art Watermarks (Desktop & Tablet) */}
      {/* Left Edge Upper-Mid: Coconut Palms & Rural Landscape Accent */}
      <div className="absolute top-[700px] -left-8 w-56 sm:w-72 lg:w-84 h-[750px] pointer-events-none select-none z-0 opacity-[0.15] lg:opacity-[0.18] mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Left edge agricultural scenery"
          aria-hidden="true"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Left Edge Lower-Mid: Rural Paddy & Agricultural Field Accent */}
      <div className="absolute top-[1450px] -left-8 w-56 sm:w-72 lg:w-84 h-[750px] pointer-events-none select-none z-0 opacity-[0.13] lg:opacity-[0.16] mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Left edge lower agricultural scenery"
          aria-hidden="true"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Right Edge Upper-Mid: Karnataka Silhouette & Field Landscape Accent */}
      <div className="absolute top-[700px] -right-8 w-56 sm:w-72 lg:w-84 h-[750px] pointer-events-none select-none z-0 opacity-[0.15] lg:opacity-[0.18] mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Right edge agricultural scenery"
          aria-hidden="true"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Right Edge Lower-Mid: Agricultural Field & Palms Accent */}
      <div className="absolute top-[1450px] -right-8 w-56 sm:w-72 lg:w-84 h-[750px] pointer-events-none select-none z-0 opacity-[0.13] lg:opacity-[0.16] mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Right edge lower agricultural scenery"
          aria-hidden="true"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Layer D: Bottom-Left Vidhana Soudha Architectural Sketch Watermark */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 sm:left-3 lg:left-6 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 opacity-[0.20] lg:opacity-[0.25] mix-blend-multiply pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/vidhana_soudha_sketch.jpg"
          alt="Karnataka Vidhana Soudha architectural watermark"
          aria-hidden="true"
          className="w-full h-full object-contain object-bottom scale-110"
        />
      </div>

      {/* Bottom-Left Golden Paddy Stalk Accent */}
      <div className="absolute bottom-14 sm:bottom-18 left-0 sm:left-2 w-44 sm:w-60 h-52 sm:h-76 pointer-events-none select-none z-0 opacity-80">
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

      {/* Layer E: Bottom-Right Karnataka Temple Gopuram Sketch Watermark */}
      <div className="absolute bottom-16 sm:bottom-20 right-0 sm:right-3 lg:right-6 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 opacity-[0.20] lg:opacity-[0.25] mix-blend-multiply pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/temple_gopuram_sketch.jpg"
          alt="Karnataka temple gopuram architectural watermark"
          aria-hidden="true"
          className="w-full h-full object-contain object-bottom scale-110"
        />
      </div>

      {/* Bottom-Right Golden Paddy Stalk Accent (Mirrored) */}
      <div className="absolute bottom-14 sm:bottom-18 right-0 sm:right-2 w-44 sm:w-60 h-52 sm:h-76 pointer-events-none select-none z-0 opacity-80 transform -scale-x-100">
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
      {/* 2. MAIN CONTENT CONTAINER                                                 */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12 sm:space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF9E7] border border-[#E8DCB0] text-[#075C38] shadow-2xs">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#075C38]">
              OUR CORE SERVICES
            </span>
            <span className="text-[#E7B93E] font-black">•</span>
            <span className="font-kannada font-bold text-xs sm:text-[13px] text-[#075C38]">
              ನಮ್ಮ ಪ್ರಮುಖ ಸೇವೆಗಳು
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#075C38] tracking-tight leading-tight">
            What We Do
          </h1>

          {/* Kannada Subheading */}
          <h2 className="font-kannada font-extrabold text-xl sm:text-2xl text-[#075C38] leading-tight">
            ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ
          </h2>

          {/* Small Gold Decorative Line */}
          <div className="w-12 h-0.5 bg-[#E7B93E] mx-auto rounded-full mt-2" />

          {/* Centered Description */}
          <p className="text-base sm:text-[17px] text-[#68776F] leading-relaxed max-w-[760px] mx-auto pt-2 font-normal">
            AgriSethu is being built to connect farmers with the equipment, agricultural resources, service providers and marketplace services they need through one connected digital platform.
          </p>
        </div>

        {/* 4 Large Alternating Service Cards */}
        <div className="space-y-10 sm:space-y-12">
          {pillars.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 lg:p-10 rounded-[22px] bg-white/92 backdrop-blur-xs border border-[#D8E8DC] shadow-[0_8px_24px_rgba(7,92,56,0.06)] hover:shadow-[0_14px_36px_rgba(7,92,56,0.12)] hover:border-[#087A3D]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !item.imageOnRight ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text & Points Column */}
              <div
                className={`lg:col-span-6 space-y-4 text-left ${
                  !item.imageOnRight ? 'lg:order-2' : ''
                }`}
              >
                {/* Icon Container & Titles */}
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D] mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#075C38] leading-snug">
                      {item.titleEn}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-[#087A3D] font-kannada leading-snug mt-0.5">
                      {item.titleKn}
                    </h4>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#68776F] leading-relaxed">
                  {isKannada ? item.descKn : item.descEn}
                </p>

                {/* 4 Supporting Points with Green Checks */}
                <div className="space-y-2 pt-1">
                  {(isKannada ? item.pointsKn : item.pointsEn).map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#173C2E]">
                      <div className="w-4 h-4 rounded-full bg-[#EAF6ED] text-[#087A3D] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Explore Button */}
                <div className="pt-3">
                  <Link
                    to="/app"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#087A3D] text-white font-bold text-xs sm:text-sm hover:bg-[#064D2C] transition-all shadow-[0_4px_14px_rgba(8,122,61,0.2)] hover:shadow-[0_6px_18px_rgba(8,122,61,0.3)] group cursor-pointer"
                  >
                    <span>Explore in App</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  !item.imageOnRight ? 'lg:order-1' : ''
                }`}
              >
                <div className="rounded-[20px] overflow-hidden shadow-xs border border-[#DCE8DF] h-64 sm:h-72 lg:h-80 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM INFORMATION CARD                                                */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 lg:p-9 rounded-[22px] bg-[#F2F8F4]/95 backdrop-blur-xs border border-[#D0E5D7] shadow-[0_8px_24px_rgba(7,92,56,0.06)] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E3F2E7] border border-[#CFE8D5] flex items-center justify-center flex-shrink-0 text-[#087A3D]">
            <Sprout className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-5 h-5 rounded-md bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center text-[#087A3D]">
                <Sprout className="w-3 h-3" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#075C38] tracking-tight">
                DEDICATED TO FARMER ACCESS IN KARNATAKA
              </h3>
            </div>
            <h4 className="font-kannada font-bold text-sm sm:text-base text-[#087A3D]">
              ಕರ್ನಾಟಕದ ರೈತರಿಗಾಗಿ ಸಂಪರ್ಕಿತ ಡಿಜಿಟಲ್ ಸೇವೆಗಳು
            </h4>
            <p className="text-xs sm:text-[13.5px] text-[#4E6157] leading-relaxed pt-1 font-normal">
              AgriSethu is being built to connect farmer accounts, agricultural equipment, inputs, service providers, bookings, orders and delivery through one connected digital platform.
            </p>
            <p className="font-kannada text-xs sm:text-[13px] text-[#4E6157] leading-relaxed font-medium pt-0.5">
              ರೈತ ಖಾತೆಗಳು, ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು, ಇನ್ಪುಟ್ಸ್, ಸೇವಾದಾರರು, ಬುಕ್ಕಿಂಗ್, ಆರ್ಡರ್ ಮತ್ತು ವಿತರಣೆಯನ್ನು ಒಂದೇ ಸಂಪರ್ಕಿತ ಡಿಜಿಟಲ್ ವೇದಿಕೆಯಲ್ಲಿ ತರಲು AgriSethu ನಿರ್ಮಿಸಲಾಗುತ್ತಿದೆ.
            </p>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM AGRICULTURAL WAVE (Gold Wave + Dark Green Wave)                  */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-28 overflow-hidden pointer-events-none z-10 leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          {/* Top Thin Agricultural Gold Wave */}
          <path
            d="M0,52 C320,82 580,24 920,60 C1160,84 1340,42 1440,46"
            stroke="#E7B93E"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Bottom Dark Karnataka Green Wave */}
          <path
            d="M0,55 C320,85 580,27 920,63 C1160,87 1340,45 1440,49 L1440,100 L0,100 Z"
            fill="#087A3D"
          />
        </svg>
      </div>

    </div>
  );
};
