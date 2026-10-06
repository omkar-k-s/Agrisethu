import React from 'react';
import {
  Tractor,
  IndianRupee,
  Sprout,
  Handshake,
  ShoppingCart,
  ArrowRight,
  Users,
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      icon: <Tractor className="w-6 h-6" />,
      titleEn: 'Difficulty Finding Agricultural Equipment',
      titleKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಹುಡುಕುವ ಕಷ್ಟ',
      desc: 'Farmers may need tractors, rotavators, harvesters and other equipment during specific farming periods, but finding suitable equipment and nearby owners can be difficult.',
      category: 'Equipment Access',
      categoryIcon: <Tractor className="w-3.5 h-3.5" />,
    },
    {
      number: '02',
      icon: <IndianRupee className="w-6 h-6" />,
      titleEn: 'High Equipment Ownership Cost',
      titleKn: 'ಯಂತ್ರೋಪಕರಣಗಳ ಹೆಚ್ಚಿನ ಖರೀದಿ ವೆಚ್ಚ',
      desc: 'Buying agricultural machinery requires significant investment. Many farmers may not need to own expensive equipment permanently, creating a need for easier equipment access and rental.',
      category: 'Affordable Access',
      categoryIcon: <IndianRupee className="w-3.5 h-3.5" />,
    },
    {
      number: '03',
      icon: <Sprout className="w-6 h-6" />,
      titleEn: 'Disconnected Agricultural Resources',
      titleKn: 'ಚದುರಿದ ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳು',
      desc: 'Agricultural inputs, resources, equipment owners and service providers are often discovered through separate and disconnected channels.',
      category: 'Connected Resources',
      categoryIcon: <Sprout className="w-3.5 h-3.5" />,
    },
    {
      number: '04',
      icon: <Handshake className="w-6 h-6" />,
      titleEn: 'Lack of Direct Farmer–Service Connections',
      titleKn: 'ರೈತರು ಮತ್ತು ಸೇವಾದಾರರ ನಡುವೆ ನೇರ ಸಂಪರ್ಕದ ಕೊರತೆ',
      desc: 'Farmers need an easier way to discover equipment owners and service providers, communicate with them, make bookings and coordinate agricultural services.',
      category: 'Direct Connections',
      categoryIcon: <Users className="w-3.5 h-3.5" />,
    },
    {
      number: '05',
      icon: <ShoppingCart className="w-6 h-6" />,
      titleEn: 'Fragmented Marketplace & Delivery',
      titleKn: 'ಚದುರಿದ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ವಿತರಣಾ ವ್ಯವಸ್ಥೆ',
      desc: 'Farmers may use different channels to discover agricultural products, place orders and arrange delivery. AgriSethu aims to bring these activities into a more connected digital ecosystem.',
      category: 'Marketplace & Delivery',
      categoryIcon: <ShoppingCart className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section
      id="gaps"
      className="relative bg-[#FFFDF6] pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 overflow-hidden border-b border-[#E4EFE7]"
    >
      {/* ========================================================================= */}
      {/* 1. SUBTLE BACKGROUND KARNATAKA AGRICULTURAL ILLUSTRATION                   */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 w-full h-[380px] sm:h-[440px] pointer-events-none select-none z-0 opacity-45 lg:opacity-60 mix-blend-multiply overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Subtle Karnataka agricultural landscape and farmer illustration watermark"
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        {/* Soft bottom fade into section background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#FFFDF6]" />
      </div>

      {/* Bottom-Left Golden Paddy Stalk Accent */}
      <div className="absolute bottom-10 left-0 w-36 sm:w-52 h-44 sm:h-64 pointer-events-none select-none z-0 opacity-70">
        <svg viewBox="0 0 160 220" fill="none" className="w-full h-full">
          {/* Arching green stem */}
          <path d="M 0 220 Q 30 140 120 70" stroke="#3E8D4F" strokeWidth="2.5" fill="none" />
          {/* Arching drooping golden head */}
          <path d="M 120 70 Q 145 90 155 130" stroke="#D49A29" strokeWidth="2" fill="none" />
          {/* Rice Grains */}
          <ellipse cx="60" cy="125" rx="6" ry="3.5" transform="rotate(-35 60 125)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="75" cy="110" rx="7" ry="3.5" transform="rotate(-30 75 110)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="90" cy="95" rx="7" ry="3.5" transform="rotate(-25 90 95)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="105" cy="82" rx="7" ry="3.5" transform="rotate(-15 105 82)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="120" cy="74" rx="7" ry="3.5" transform="rotate(5 120 74)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="135" cy="78" rx="7" ry="3.5" transform="rotate(30 135 78)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="145" cy="92" rx="7" ry="3.5" transform="rotate(55 145 92)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="150" cy="108" rx="6" ry="3.5" transform="rotate(75 150 108)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="152" cy="124" rx="5" ry="3" transform="rotate(90 152 124)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          {/* Secondary arching stalk */}
          <path d="M 0 220 Q 20 160 85 100 Q 115 115 125 150" stroke="#3E8D4F" strokeWidth="2" fill="none" opacity="0.8" />
          <ellipse cx="70" cy="115" rx="6" ry="3.2" transform="rotate(-20 70 115)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="88" cy="104" rx="6" ry="3.2" transform="rotate(0 88 104)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="104" cy="110" rx="6" ry="3.2" transform="rotate(30 104 110)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="116" cy="125" rx="5.5" ry="3" transform="rotate(60 116 125)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="122" cy="142" rx="5" ry="2.8" transform="rotate(80 122 142)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          {/* Soft green leaves */}
          <path d="M 0 210 Q 40 170 65 140 Q 35 180 0 210 Z" fill="#66B173" opacity="0.7" />
          <path d="M 10 220 Q 50 190 95 185 Q 50 205 10 220 Z" fill="#4B9B5A" opacity="0.6" />
        </svg>
      </div>

      {/* Bottom-Right Golden Paddy Stalk Accent (Mirrored) */}
      <div className="absolute bottom-10 right-0 w-36 sm:w-52 h-44 sm:h-64 pointer-events-none select-none z-0 opacity-70 transform -scale-x-100">
        <svg viewBox="0 0 160 220" fill="none" className="w-full h-full">
          {/* Arching green stem */}
          <path d="M 0 220 Q 30 140 120 70" stroke="#3E8D4F" strokeWidth="2.5" fill="none" />
          {/* Arching drooping golden head */}
          <path d="M 120 70 Q 145 90 155 130" stroke="#D49A29" strokeWidth="2" fill="none" />
          {/* Rice Grains */}
          <ellipse cx="60" cy="125" rx="6" ry="3.5" transform="rotate(-35 60 125)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="75" cy="110" rx="7" ry="3.5" transform="rotate(-30 75 110)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="90" cy="95" rx="7" ry="3.5" transform="rotate(-25 90 95)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="105" cy="82" rx="7" ry="3.5" transform="rotate(-15 105 82)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="120" cy="74" rx="7" ry="3.5" transform="rotate(5 120 74)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="135" cy="78" rx="7" ry="3.5" transform="rotate(30 135 78)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="145" cy="92" rx="7" ry="3.5" transform="rotate(55 145 92)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="150" cy="108" rx="6" ry="3.5" transform="rotate(75 150 108)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="152" cy="124" rx="5" ry="3" transform="rotate(90 152 124)" fill="#F4C749" stroke="#B88219" strokeWidth="0.8" />
          {/* Secondary arching stalk */}
          <path d="M 0 220 Q 20 160 85 100 Q 115 115 125 150" stroke="#3E8D4F" strokeWidth="2" fill="none" opacity="0.8" />
          <ellipse cx="70" cy="115" rx="6" ry="3.2" transform="rotate(-20 70 115)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="88" cy="104" rx="6" ry="3.2" transform="rotate(0 88 104)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="104" cy="110" rx="6" ry="3.2" transform="rotate(30 104 110)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="116" cy="125" rx="5.5" ry="3" transform="rotate(60 116 125)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          <ellipse cx="122" cy="142" rx="5" ry="2.8" transform="rotate(80 122 142)" fill="#E8B83F" stroke="#B88219" strokeWidth="0.8" />
          {/* Soft green leaves */}
          <path d="M 0 210 Q 40 170 65 140 Q 35 180 0 210 Z" fill="#66B173" opacity="0.7" />
          <path d="M 10 220 Q 50 190 95 185 Q 50 205 10 220 Z" fill="#4B9B5A" opacity="0.6" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. SECTION HEADER (Centered Pill + Headings + Subtitle)                   */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Pale Cream/Yellow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEF9E7] border border-[#F3E8B5] text-[#80613D] shadow-2xs mb-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              THE GAPS WE ADDRESS
            </span>
            <span className="text-[#B88219] font-black">•</span>
            <span className="font-kannada font-bold text-xs sm:text-[13px] text-[#80613D]">
              ನಾವು ಪರಿಹರಿಸುವ ಅಂತರಗಳು
            </span>
          </div>

          {/* Large Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#075C38] tracking-tight leading-tight">
            Bridging the Gaps in Agriculture
          </h2>

          {/* Kannada Subheading */}
          <h3 className="font-kannada font-extrabold text-xl sm:text-2xl text-[#075C38] leading-tight mt-2.5">
            ಕೃಷಿಯಲ್ಲಿ ಪ್ರಮುಖ ಅಂತರಗಳಿಗೆ ಡಿಜಿಟಲ್ ಸೇತು
          </h3>

          {/* Descriptive Subtitle */}
          <p className="text-sm sm:text-base text-[#687A72] leading-relaxed mt-3.5 max-w-2xl mx-auto font-medium">
            Farmers often have the need, but finding the right equipment, resources, services and trusted connections at the right time can be difficult.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. 5 PROBLEM CARDS GRID (Row 1: 3 Cards, Row 2: 2 Cards Centered)          */}
        {/* ========================================================================= */}
        {/* ROW 1: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {problems.slice(0, 3).map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-[22px] border border-[#E2EBE4] p-6 sm:p-7 shadow-[0_8px_24px_rgba(7,92,56,0.06)] hover:shadow-[0_14px_36px_rgba(7,92,56,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header: Number Badge, Green Icon Container, English & Kannada Titles */}
                <div className="flex items-start gap-3.5 mb-4">
                  <span className="text-xs font-bold text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-2.5 py-1 rounded-md flex-shrink-0 mt-0.5">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D]">
                    {card.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-bold text-base sm:text-[17px] text-[#075C38] leading-snug">
                      {card.titleEn}
                    </h4>
                    <h5 className="font-kannada font-bold text-xs sm:text-[13px] text-[#075C38]/90 leading-snug mt-0.5">
                      {card.titleKn}
                    </h5>
                  </div>
                </div>

                {/* Description Body */}
                <p className="text-xs sm:text-[13.5px] text-[#687A72] leading-relaxed mb-5">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Row: Category Pill & Circular Arrow */}
              <div className="flex items-center justify-between pt-3.5 border-t border-[#F0F5F2]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9E7] border border-[#F3E8B5] text-[#4A3B18] text-xs font-semibold">
                  <span className="text-[#80613D]">{card.categoryIcon}</span>
                  <span>{card.category}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EAF6ED] text-[#087A3D] group-hover:bg-[#087A3D] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: 2 Cards Centered on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[850px] mx-auto mb-10 sm:mb-12">
          {problems.slice(3, 5).map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-[22px] border border-[#E2EBE4] p-6 sm:p-7 shadow-[0_8px_24px_rgba(7,92,56,0.06)] hover:shadow-[0_14px_36px_rgba(7,92,56,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header: Number Badge, Green Icon Container, English & Kannada Titles */}
                <div className="flex items-start gap-3.5 mb-4">
                  <span className="text-xs font-bold text-[#075C38] bg-[#EAF6ED] border border-[#CDE5D2] px-2.5 py-1 rounded-md flex-shrink-0 mt-0.5">
                    {card.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6ED] border border-[#D5EAD9] flex items-center justify-center flex-shrink-0 text-[#087A3D]">
                    {card.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-bold text-base sm:text-[17px] text-[#075C38] leading-snug">
                      {card.titleEn}
                    </h4>
                    <h5 className="font-kannada font-bold text-xs sm:text-[13px] text-[#075C38]/90 leading-snug mt-0.5">
                      {card.titleKn}
                    </h5>
                  </div>
                </div>

                {/* Description Body */}
                <p className="text-xs sm:text-[13.5px] text-[#687A72] leading-relaxed mb-5">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Row: Category Pill & Circular Arrow */}
              <div className="flex items-center justify-between pt-3.5 border-t border-[#F0F5F2]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9E7] border border-[#F3E8B5] text-[#4A3B18] text-xs font-semibold">
                  <span className="text-[#80613D]">{card.categoryIcon}</span>
                  <span>{card.category}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EAF6ED] text-[#087A3D] group-hover:bg-[#087A3D] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM SOLUTION BANNER                                                 */}
        {/* ========================================================================= */}
        <div className="relative z-10 max-w-4xl mx-auto rounded-[22px] bg-[#EAF6ED]/85 border border-[#CDE5D2] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-[#CDE5D2] flex items-center justify-center flex-shrink-0 text-[#087A3D]">
            <Sprout className="w-6 h-6" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm sm:text-base font-bold text-[#075C38] leading-snug">
              AgriSethu is being built to bridge these gaps through easier access, trusted connections and a connected digital agricultural ecosystem.
            </p>
            <p className="font-kannada text-xs sm:text-[13px] text-[#075C38]/85 font-semibold leading-relaxed">
              ಸುಲಭ ಪ್ರವೇಶ, ವಿಶ್ವಾಸಾರ್ಹ ಸಂಪರ್ಕ ಮತ್ತು ಸಂಪರ್ಕಿತ ಡಿಜಿಟಲ್ ಕೃಷಿ ಪರಿಸರದ ಮೂಲಕ ಈ ಅಂತರಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು AgriSethu ನಿರ್ಮಿಸಲಾಗುತ್ತಿದೆ.
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
