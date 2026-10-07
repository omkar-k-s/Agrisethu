import React from 'react';
import {
  UserCircle2,
  Search,
  Users,
  CalendarCheck2,
  PackageCheck,
  Tractor,
  Leaf,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
} from 'lucide-react';

/* ============================================================
   HOW AGRISETHU WORKS — Full Karnataka Agriculture Portal
   Reference-faithful: 5 image cards · dual-path panels ·
   farmer journey examples · gold+green wave bottom
   ============================================================ */

/* ── tiny reusable sub-components ────────────────────────────── */

/** Green circular arrow connector shown between desktop cards */
const StepArrow: React.FC = () => (
  <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 self-start mt-[130px]">
    <div
      className="w-8 h-8 rounded-full border-2 border-[#087A3D] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(8,122,61,0.18)]"
    >
      <ArrowRight size={14} className="text-[#087A3D]" />
    </div>
  </div>
);

/** Single green checkmark bullet */
const Tick: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-1.5">
    <CheckCircle2 size={13} className="text-[#087A3D] flex-shrink-0 mt-[1px]" />
    <span className="text-[11px] leading-snug text-[#4A6659]">{text}</span>
  </li>
);

/** Small flow pill used inside path panels */
const FlowPill: React.FC<{ label: string; labelKn: string; green?: boolean }> = ({
  label,
  labelKn,
  green = false,
}) => (
  <div className="flex flex-col items-center gap-0.5">
    <span
      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${
        green
          ? 'bg-[#EAF7EC] text-[#087A3D] border-[#B2D8BD]'
          : 'bg-[#FEF9E7] text-[#7A6828] border-[#DCC96A]'
      }`}
    >
      {label}
    </span>
    <span
      className={`text-[8px] font-bold font-kannada ${
        green ? 'text-[#087A3D]' : 'text-[#8A6828]'
      }`}
    >
      {labelKn}
    </span>
  </div>
);

/** Journey step pill used in farmer examples */
const JourneyPill: React.FC<{
  label: string;
  labelKn: string;
  highlight?: boolean;
  green?: boolean;
}> = ({ label, labelKn, highlight = false, green = true }) => (
  <div className="flex flex-col items-center gap-0.5 min-w-fit">
    <span
      className={`text-[10px] font-bold px-2 py-1 rounded-full border whitespace-nowrap ${
        highlight
          ? 'bg-[#087A3D] text-white border-[#087A3D]'
          : green
          ? 'bg-[#EAF7EC] text-[#075C38] border-[#B2D8BD]'
          : 'bg-[#FEF9E7] text-[#7A6828] border-[#DCC96A]'
      }`}
    >
      {label}
    </span>
    <span
      className={`text-[8px] font-bold font-kannada text-center leading-tight ${
        highlight ? 'text-[#087A3D]' : green ? 'text-[#087A3D]' : 'text-[#8A6828]'
      }`}
    >
      {labelKn}
    </span>
  </div>
);

/* ── Step card data ───────────────────────────────────────────── */
const STEPS = [
  {
    num: '01',
    en: 'Register',
    kn: 'ನೋಂದಣಿ',
    icon: UserCircle2,
    image: '/images/about_karnataka_farmer.jpg',
    imageAlt: 'Karnataka farmer using smartphone in agricultural field',
    titleEn: 'Create Your Farmer Account',
    titleKn: 'ನಿಮ್ಮ ರೈತ ಖಾತೆ ರಚಿಸಿ',
    descEn:
      'Farmers create an account and provide basic information to access relevant AgriSethu services.',
    descKn:
      'ರೈತರು ಖಾತೆಯನ್ನು ರಚಿಸಿ ಮೂಲ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಸಂಬಂಧಿತ AgriSethu ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸಬಹುದು.',
    ticks: [],
    dual: false,
    btn: 'Get Started',
  },
  {
    num: '02',
    en: 'Discover',
    kn: 'ಹುಡುಕಿ',
    icon: Search,
    image: '/images/whatwedo_equipment.jpg',
    imageAlt: 'Agricultural tractors, machinery and farming equipment in Karnataka',
    titleEn: 'Discover Equipment & Resources',
    titleKn: 'ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಹುಡುಕಿ',
    descEn:
      'Explore agricultural equipment, farming inputs, products and other farmer-focused resources available through the platform.',
    descKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು, ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಮತ್ತು ಇತರ ರೈತ-ಕೇಂದ್ರಿತ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಹುಡುಕಿ.',
    ticks: [
      'Tractors, rotavators, harvesters',
      'Seeds and planting materials',
      'Fertilizers and crop nutrients',
      'Pesticides and farming supplies',
    ],
    dual: false,
    btn: 'Explore',
  },
  {
    num: '03',
    en: 'Connect',
    kn: 'ಸಂಪರ್ಕಿಸಿ',
    icon: Users,
    image: '/images/whatwedo_connections.jpg',
    imageAlt: 'Karnataka farmer communicating with equipment owner and service provider',
    titleEn: 'Connect With Owners & Service Providers',
    titleKn: 'ಮಾಲೀಕರು ಮತ್ತು ಸೇವಾದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ',
    descEn:
      'Connect with equipment owners and agricultural service providers, communicate with them and coordinate the service you need.',
    descKn:
      'ಯಂತ್ರೋಪಕರಣಗಳ ಮಾಲೀಕರು ಮತ್ತು ಕೃಷಿ ಸೇವಾದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ ಅಗತ್ಯ ಸೇವೆಯನ್ನು ಸಂಯೋಜಿಸಿ.',
    ticks: [
      'Find nearby equipment owners',
      'Discover service providers',
      'Communicate directly',
      'Coordinate services and bookings',
    ],
    dual: false,
    btn: 'Connect',
  },
  {
    num: '04',
    en: 'Book / Order',
    kn: 'ಬುಕ್ ಮಾಡಿ / ಆರ್ಡರ್ ಮಾಡಿ',
    icon: CalendarCheck2,
    image: '/images/app_farmer_advisory.jpg',
    imageAlt: 'Farmer using mobile phone to book equipment or order agricultural inputs',
    titleEn: 'Book Equipment or Order Inputs',
    titleKn: 'ಯಂತ್ರೋಪಕರಣ ಬುಕ್ಕಿಂಗ್ ಅಥವಾ ಇನ್ಪುಟ್ಸ್ ಆರ್ಡರ್',
    descEn:
      'For equipment and services, farmers can make bookings. For agricultural inputs, farmers can place orders for fertilizers, pesticides, seeds and farming supplies.',
    descKn:
      'ಯಂತ್ರೋಪಕರಣಗಳಿಗೆ ಬುಕ್ಕಿಂಗ್ ಮಾಡಿ. ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ಗೆ ರಸಗೊಬ್ಬರ, ಕೀಟನಾಶಕ, ಬೀಜ ಆರ್ಡರ್ ಮಾಡಿ.',
    ticks: [
      'Book agricultural equipment',
      'Order fertilizers and pesticides',
      'Order seeds and farming supplies',
      'Choose delivery to your location',
    ],
    dual: true,
    btn: 'Book / Order',
  },
  {
    num: '05',
    en: 'Access / Delivery',
    kn: 'ಪಡೆಯಿರಿ / ವಿತರಣೆ',
    icon: PackageCheck,
    image: '/images/whatwedo_inputs_delivery.jpg',
    imageAlt:
      'Tractor arriving at farm and agricultural input package being delivered to farmer',
    titleEn: 'Access Equipment or Receive Inputs',
    titleKn: 'ಯಂತ್ರೋಪಕರಣ ಪಡೆಯಿರಿ ಅಥವಾ ಇನ್ಪುಟ್ಸ್ ಸ್ವೀಕರಿಸಿ',
    descEn:
      'Farmers can access the booked equipment or service, while ordered agricultural inputs can be delivered to their location.',
    descKn:
      'ಬುಕ್ ಮಾಡಿದ ಯಂತ್ರ ಅಥವಾ ಸೇವೆಯನ್ನು ಪಡೆಯಿರಿ. ಆರ್ಡರ್ ಮಾಡಿದ ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ತಮ್ಮ ಸ್ಥಳಕ್ಕೆ ವಿತರಣೆ ಪಡೆಯಿರಿ.',
    ticks: [
      'Get the booked equipment',
      'Receive services at your location',
      'Get agricultural inputs delivered',
      'Continue using other digital services',
    ],
    dual: false,
    btn: 'Get Access',
  },
] as const;

/* ── Main component ───────────────────────────────────────────── */
export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-b border-[#D5E8DB]/70"
      style={{ backgroundColor: '#FFFDF5' }}
    >
      {/* ============================================================
          MAIN BACKGROUND IMAGE: Karnataka Agricultural Scenery
          Lush coconut palms, terraced paddy fields, Ramanagara/Sahyadri hills,
          Karnataka map silhouette, farmer with oxen, tractor
          ============================================================ */}
      <div className="absolute top-0 inset-x-0 h-[700px] sm:h-[800px] lg:h-[900px] pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/gaps_karnataka_bg_art.jpg"
          alt="Karnataka Agricultural Landscape"
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-90"
          style={{ mixBlendMode: 'multiply' }}
        />
        {/* Soft radial glow behind header to maintain perfect text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 42% at 50% 16%, rgba(255,253,245,0.96) 0%, rgba(255,253,245,0.78) 45%, rgba(255,253,245,0) 80%)',
          }}
        />
        {/* Soft bottom dissolve into the cream background below cards */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#FFFDF5]/80 to-[#FFFDF5]" />
      </div>

      {/* ============================================================
          MAIN CONTENT
          ============================================================ */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 lg:pt-20 pb-0">

        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12 space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B0D9BC] bg-white shadow-[0_1px_6px_rgba(8,122,61,0.08)]">
            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#087A3D]">HOW IT WORKS</span>
            <span className="text-[#E7B93E] font-black">•</span>
            <span className="text-[10px] font-bold text-[#087A3D] font-kannada">ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ</span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-[#075C38] tracking-tight leading-tight">
            How AgriSethu Works
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#087A3D] font-kannada leading-snug">
            AgriSethu ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ
          </p>

          {/* Gold ornament */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#E7B93E]/70" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5 L10.8 7 L16.5 7 L12 10.5 L13.7 16 L9 12.8 L4.3 16 L6 10.5 L1.5 7 L7.2 7 Z" fill="#E7B93E" opacity="0.85" />
            </svg>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#E7B93E]/70" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-[15px] text-[#68776F] leading-relaxed max-w-2xl mx-auto">
            A simple digital journey connecting farmers with agricultural equipment, inputs, services and delivery.
          </p>
          <p className="text-xs sm:text-sm text-[#87998F] font-kannada leading-relaxed max-w-2xl mx-auto">
            ರೈತರನ್ನು ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು, ಇನ್ಪುಟ್ಸ್, ಸೇವೆಗಳು ಮತ್ತು ವಿತರಣೆಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ಸರಳ ಡಿಜಿಟಲ್ ಪ್ರಯಾಣ.
          </p>
        </div>

        {/* ── FIVE STEP CARDS (Desktop horizontal, mobile vertical) ── */}

        {/* Desktop */}
        <div className="hidden lg:flex items-start gap-0">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.num}>
                {/* CARD */}
                <div className="flex-1 min-w-0 bg-white rounded-[20px] border border-[#C8E0CC] shadow-[0_3px_16px_rgba(8,122,61,0.08)] hover:shadow-[0_6px_24px_rgba(8,122,61,0.13)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden group flex flex-col">
                  {/* Image area */}
                  <div className="relative h-[140px] overflow-hidden bg-[#EAF7EC]">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    {/* dark overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#075C38]/10 to-[#075C38]/60" />

                    {/* Step number badge */}
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#087A3D] text-white flex items-center justify-center shadow-lg">
                      <span className="text-xs font-black leading-none">{step.num}</span>
                    </div>

                    {/* Step label over image */}
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-white text-[11px] font-black uppercase tracking-wider drop-shadow">{step.en}</span>
                        <span className="text-[#E7B93E] text-[10px] font-black">•</span>
                        <span className="text-white/90 text-[10px] font-bold font-kannada drop-shadow">{step.kn}</span>
                      </div>
                    </div>

                    {/* Icon chip top-right */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow">
                      <Icon size={16} className="text-[#087A3D]" />
                    </div>

                    {/* Dual labels for card 04 */}
                    {step.dual && (
                      <div className="absolute top-3 left-[50%] -translate-x-1/2 flex gap-1.5">
                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-[#087A3D] text-white shadow whitespace-nowrap">
                          BOOK EQUIPMENT
                        </span>
                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-[#E7B93E] text-[#173C2E] shadow whitespace-nowrap">
                          ORDER INPUTS
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex-1 flex flex-col p-4 gap-2">
                    <h3 className="text-[13px] font-bold text-[#173C2E] leading-snug group-hover:text-[#087A3D] transition-colors">
                      {step.titleEn}
                    </h3>
                    <p className="text-[10px] font-bold font-kannada text-[#087A3D] leading-snug">
                      {step.titleKn}
                    </p>
                    <p className="text-[11px] text-[#68776F] leading-relaxed">
                      {step.descEn}
                    </p>
                    {step.ticks.length > 0 && (
                      <ul className="space-y-1 mt-0.5">
                        {step.ticks.map((t) => (
                          <Tick key={t} text={t} />
                        ))}
                      </ul>
                    )}

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1" />

                    {/* Action button */}
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#087A3D] text-white text-[11px] font-bold hover:bg-[#075C38] transition-colors shadow-sm self-start"
                    >
                      {step.btn}
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>

                {/* Arrow connector between cards */}
                {idx < STEPS.length - 1 && <StepArrow />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile — vertical stack */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative">
                {idx < STEPS.length - 1 && (
                  <div className="absolute left-6 -bottom-4 w-0.5 h-4 bg-[#B0D9BC] z-10" />
                )}
                <div className="bg-white rounded-[18px] border border-[#C8E0CC] shadow-[0_2px_10px_rgba(8,122,61,0.07)] overflow-hidden">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-[#EAF7EC]">
                    <img src={step.image} alt={step.imageAlt} className="w-full h-full object-cover object-center" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#075C38]/10 to-[#075C38]/55" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#087A3D] text-white flex items-center justify-center shadow">
                      <span className="text-xs font-black">{step.num}</span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center shadow">
                      <Icon size={16} className="text-[#087A3D]" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-2 flex items-center gap-1.5">
                      <span className="text-white text-[11px] font-black uppercase tracking-wider drop-shadow">{step.en}</span>
                      <span className="text-[#E7B93E] text-[10px] font-black">•</span>
                      <span className="text-white/90 text-[10px] font-bold font-kannada">{step.kn}</span>
                    </div>
                    {step.dual && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-[#087A3D] text-white whitespace-nowrap">BOOK EQUIPMENT</span>
                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-[#E7B93E] text-[#173C2E] whitespace-nowrap">ORDER INPUTS</span>
                      </div>
                    )}
                  </div>
                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-[#173C2E]">{step.titleEn}</h3>
                    <p className="text-[11px] font-bold font-kannada text-[#087A3D]">{step.titleKn}</p>
                    <p className="text-xs text-[#68776F] leading-relaxed">{step.descEn}</p>
                    {step.ticks.length > 0 && (
                      <ul className="space-y-1">
                        {step.ticks.map((t) => <Tick key={t} text={t} />)}
                      </ul>
                    )}
                    <button type="button" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#087A3D] text-white text-[11px] font-bold hover:bg-[#075C38] transition-colors shadow-sm mt-1">
                      {step.btn} <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── TWO PATH PANELS ── */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">

          {/* Panel A — Equipment & Services */}
          <div className="rounded-[20px] border-2 border-[#B0D9BC] overflow-hidden shadow-[0_3px_18px_rgba(8,122,61,0.09)]" style={{ backgroundColor: '#F0FAF2' }}>
            <div className="px-5 py-4 border-b border-[#C8E0CC] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF7EC] border border-[#B0D9BC] flex items-center justify-center flex-shrink-0">
                <Tractor size={20} className="text-[#087A3D]" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#087A3D]">Equipment &amp; Services</div>
                <div className="text-xs font-bold font-kannada text-[#087A3D] leading-tight">ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ಸೇವೆಗಳು</div>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-xs text-[#4A6659] leading-relaxed">
                Find agricultural machinery and service providers, connect with them and coordinate equipment or services when required.
              </p>
              {/* Flow pills */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { l: 'Discover', lk: 'ಹುಡುಕಿ' },
                  { l: 'Connect', lk: 'ಸಂಪರ್ಕ' },
                  { l: 'Book', lk: 'ಬುಕ್' },
                  { l: 'Access', lk: 'ಪಡೆಯಿರಿ' },
                ].map((s, i, arr) => (
                  <React.Fragment key={s.l}>
                    <FlowPill label={s.l} labelKn={s.lk} green />
                    {i < arr.length - 1 && <ArrowRight size={11} className="text-[#087A3D] flex-shrink-0 mb-3" />}
                  </React.Fragment>
                ))}
              </div>
              {/* Gold accent */}
              <div className="h-px w-full rounded-full" style={{ background: 'linear-gradient(90deg, #E7B93E 0%, transparent 80%)' }} />
              <div className="flex flex-wrap gap-1.5">
                {['Tractors', 'Rotavators', 'Harvesters', 'Threshers', 'Operators'].map((t) => (
                  <span key={t} className="text-[10px] font-semibold text-[#087A3D] bg-white border border-[#C8E0CC] px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Panel B — Agricultural Inputs */}
          <div className="rounded-[20px] border-2 border-[#DCC96A] overflow-hidden shadow-[0_3px_18px_rgba(180,150,20,0.09)]" style={{ backgroundColor: '#FEFCF0' }}>
            <div className="px-5 py-4 border-b border-[#EBD975] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] border border-[#DCC96A] flex items-center justify-center flex-shrink-0">
                <Leaf size={20} className="text-[#7A6828]" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#7A6828]">Agricultural Inputs</div>
                <div className="text-xs font-bold font-kannada text-[#7A6828] leading-tight">ಕೃಷಿ ಇನ್ಪುಟ್ಸ್</div>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-xs text-[#5A4E1A] leading-relaxed">
                Discover fertilizers, pesticides, seeds and farming supplies, place orders and receive agricultural inputs at your location.
              </p>
              {/* Flow pills */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { l: 'Discover', lk: 'ಹುಡುಕಿ' },
                  { l: 'Select', lk: 'ಆಯ್ಕೆ' },
                  { l: 'Order', lk: 'ಆರ್ಡರ್' },
                  { l: 'Delivery', lk: 'ವಿತರಣೆ' },
                ].map((s, i, arr) => (
                  <React.Fragment key={s.l}>
                    <FlowPill label={s.l} labelKn={s.lk} green={false} />
                    {i < arr.length - 1 && <ArrowRight size={11} className="text-[#C8A44A] flex-shrink-0 mb-3" />}
                  </React.Fragment>
                ))}
              </div>
              {/* Gold accent */}
              <div className="h-px w-full rounded-full" style={{ background: 'linear-gradient(90deg, #E7B93E 0%, transparent 80%)' }} />
              <div className="flex flex-wrap gap-1.5">
                {['Fertilizers', 'Pesticides', 'Seeds', 'Crop Protection', 'Farm Supplies'].map((t) => (
                  <span key={t} className="text-[10px] font-semibold text-[#7A6828] bg-white border border-[#DCC96A] px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FARMER JOURNEY EXAMPLES ── */}
        <div className="mt-10 lg:mt-12 rounded-[22px] border border-[#C8E0CC] p-6 sm:p-8" style={{ backgroundColor: '#F3FBF4' }}>
          {/* Heading row */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B0D9BC] bg-white shadow-[0_1px_5px_rgba(8,122,61,0.07)]">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#087A3D]">From Farmer Need to Farm Access</span>
            </div>
            <span className="text-xs font-bold font-kannada text-[#087A3D]">ರೈತರ ಅಗತ್ಯದಿಂದ ಕೃಷಿ ಸೇವೆಯವರೆಗೆ</span>
          </div>

          <div className="space-y-5">
            {/* Journey 1 — Tractor */}
            <div className="bg-white rounded-[16px] border border-[#C8E0CC] p-4 shadow-[0_1px_8px_rgba(8,122,61,0.06)]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF7EC] border border-[#B0D9BC] flex items-center justify-center flex-shrink-0">
                  <Tractor size={18} className="text-[#087A3D]" />
                </div>
                <div>
                  <div className="text-sm font-bold italic text-[#173C2E]">"I need a tractor"</div>
                  <div className="text-xs font-bold font-kannada text-[#087A3D]">ನನಗೆ ಟ್ರಾಕ್ಟರ್ ಬೇಕು</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { l: 'Farmer Need', lk: 'ರೈತರ ಅಗತ್ಯ', h: true },
                  { l: 'AgriSethu App', lk: 'AgriSethu ಆ್ಯಪ್' },
                  { l: 'Find Equipment', lk: 'ಯಂತ್ರ ಹುಡುಕಿ' },
                  { l: 'Connect with Owner', lk: 'ಮಾಲೀಕರ ಸಂಪರ್ಕ' },
                  { l: 'Book', lk: 'ಬುಕ್ ಮಾಡಿ' },
                  { l: 'Access Tractor', lk: 'ಟ್ರ್ಯಾಕ್ಟರ್ ಬಳಸಿ' },
                ].map((s, i, arr) => (
                  <React.Fragment key={i}>
                    <JourneyPill label={s.l} labelKn={s.lk} highlight={s.h} green />
                    {i < arr.length - 1 && <ArrowRight size={10} className="text-[#087A3D] flex-shrink-0 mb-3" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Journey 2 — Fertilizer */}
            <div className="bg-white rounded-[16px] border border-[#DCC96A] p-4 shadow-[0_1px_8px_rgba(180,150,20,0.06)]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] border border-[#DCC96A] flex items-center justify-center flex-shrink-0">
                  <Leaf size={18} className="text-[#7A6828]" />
                </div>
                <div>
                  <div className="text-sm font-bold italic text-[#173C2E]">"I need fertilizer"</div>
                  <div className="text-xs font-bold font-kannada text-[#7A6828]">ನನಗೆ ರಸಗೊಬ್ಬರ ಬೇಕು</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { l: 'Farmer Need', lk: 'ರೈತರ ಅಗತ್ಯ', h: true },
                  { l: 'AgriSethu App', lk: 'AgriSethu ಆ್ಯಪ್' },
                  { l: 'Find Input', lk: 'ಇನ್ಪುಟ್ ಹುಡುಕಿ' },
                  { l: 'Order', lk: 'ಆರ್ಡರ್ ಮಾಡಿ' },
                  { l: 'Delivery', lk: 'ವಿತರಣೆ' },
                  { l: 'Receive at Location', lk: 'ಸ್ಥಳದಲ್ಲಿ ಸ್ವೀಕರಿಸಿ' },
                ].map((s, i, arr) => (
                  <React.Fragment key={i}>
                    <JourneyPill label={s.l} labelKn={s.lk} highlight={s.h} green={false} />
                    {i < arr.length - 1 && <ArrowRight size={10} className="text-[#C8A44A] flex-shrink-0 mb-3" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM INFO BANNER ── */}
        <div className="mt-10 lg:mt-12 rounded-[22px] border border-[#C8E0CC] p-6 sm:p-8 relative overflow-hidden" style={{ backgroundColor: '#EAF6ED' }}>
          {/* Subtle wave decoration behind banner content */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 800 140" className="w-full h-full" preserveAspectRatio="none" fill="none">
              <path d="M0 70 Q 200 30, 400 70 Q 600 110, 800 50" stroke="#087A3D" strokeWidth="0.8" opacity="0.08" />
              <path d="M0 90 Q 200 50, 400 90 Q 600 130, 800 70" stroke="#E7B93E" strokeWidth="0.8" opacity="0.1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-5">
            {/* Left: icon + heading */}
            <div className="flex-shrink-0 flex flex-col items-start gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7EC] border border-[#B0D9BC] flex items-center justify-center shadow-sm">
                <Leaf size={22} className="text-[#087A3D]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#075C38] tracking-tight leading-snug">
                  One Platform.<br />Multiple Farmer Needs.
                </h3>
                <p className="text-sm font-bold font-kannada text-[#087A3D] mt-0.5">
                  ಒಂದೇ ವೇದಿಕೆ. ರೈತರ ಹಲವು ಅಗತ್ಯಗಳು.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-[#B0D9BC]" />

            {/* Right: description */}
            <div className="space-y-2">
              <p className="text-sm text-[#4A6659] leading-relaxed">
                From discovering agricultural equipment and connecting with service providers to ordering agricultural inputs and receiving deliveries, AgriSethu is being built around the everyday needs of farmers.
              </p>
              <p className="text-xs font-kannada text-[#68776F] leading-relaxed">
                ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಹುಡುಕುವುದರಿಂದ ಹಿಡಿದು ಸೇವಾದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು, ಕೃಷಿ ಇನ್ಪುಟ್ಸ್ ಆರ್ಡರ್ ಮಾಡುವುದು ಮತ್ತು ವಿತರಣೆ ಪಡೆಯುವವರೆಗೆ, ರೈತರ ದೈನಂದಿನ ಅಗತ್ಯಗಳನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು AgriSethu ನಿರ್ಮಿಸಲಾಗುತ್ತಿದೆ.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B0D9BC] bg-white shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#087A3D] animate-pulse" />
                <span className="text-[10px] font-bold text-[#087A3D]">
                  Mobile application being developed · ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಅಭಿವೃದ್ಧಿಯಲ್ಲಿದೆ
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>{/* end max-w container */}

      {/* ============================================================
          BOTTOM BACKGROUND: Vidhana Soudha Architectural Sketches + Wave
          ============================================================ */}
      {/* Bottom Vidhana Soudha background sketches on left & right */}
      <div className="absolute bottom-20 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 pointer-events-none select-none z-0 opacity-20 mix-blend-multiply overflow-hidden">
        <img
          src="/images/vidhana_soudha_sketch.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain object-bottom-left"
        />
      </div>
      <div className="absolute bottom-20 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 pointer-events-none select-none z-0 opacity-20 mix-blend-multiply overflow-hidden">
        <img
          src="/images/vidhana_soudha_sketch.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain object-bottom-right scale-x-[-1]"
        />
      </div>

      {/* Decorative Agricultural Wave: Gold (#E7B93E) + Green (#087A3D) */}
      <div className="relative mt-12 lg:mt-16 pointer-events-none select-none z-10" aria-hidden="true">
        {/* Paddy plants corner accents */}
        <div className="absolute -top-12 left-0 w-36 h-24 z-10 hidden sm:block">
          <svg viewBox="0 0 160 112" fill="none" className="w-full h-full">
            {[10, 26, 42, 58, 74, 90, 106, 122, 138].map((x, i) => (
              <g key={i} opacity="0.85">
                <line x1={x} y1="112" x2={x - 2 + (i % 3)} y2={68 + (i % 4) * 7} stroke="#087A3D" strokeWidth="1.8" />
                <ellipse cx={x - 2 + (i % 3)} cy={63 + (i % 4) * 7} rx="3.5" ry="9" fill="#2E9E52" transform={`rotate(${i % 2 === 0 ? -14 : 13} ${x - 2 + (i % 3)} ${63 + (i % 4) * 7})`} />
              </g>
            ))}
          </svg>
        </div>
        <div className="absolute -top-12 right-0 w-36 h-24 z-10 hidden sm:block">
          <svg viewBox="0 0 160 112" fill="none" className="w-full h-full">
            {[10, 26, 42, 58, 74, 90, 106, 122, 138].map((x, i) => (
              <g key={i} opacity="0.85">
                <line x1={x + 10} y1="112" x2={x + 12 - (i % 3)} y2={68 + (i % 4) * 7} stroke="#087A3D" strokeWidth="1.8" />
                <ellipse cx={x + 12 - (i % 3)} cy={63 + (i % 4) * 7} rx="3.5" ry="9" fill="#2E9E52" transform={`rotate(${i % 2 === 0 ? 13 : -12} ${x + 12 - (i % 3)} ${63 + (i % 4) * 7})`} />
              </g>
            ))}
          </svg>
        </div>

        {/* Thin Gold Wave Layer */}
        <svg
          viewBox="0 0 1440 28"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ display: 'block', marginBottom: '-2px' }}
          fill="none"
        >
          <path
            d="M0 16 C 180 4, 360 26, 540 14 C 720 2, 900 24, 1080 12 C 1260 2, 1380 20, 1440 10 L 1440 28 L 0 28 Z"
            fill="#E7B93E"
            opacity="0.75"
          />
          <path
            d="M0 18 C 180 6, 360 28, 540 16 C 720 4, 900 26, 1080 14 C 1260 4, 1380 22, 1440 12"
            stroke="#E7B93E"
            strokeWidth="1.8"
            fill="none"
            opacity="0.9"
          />
        </svg>

        {/* Karnataka Green Wave Layer */}
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ display: 'block' }}
          fill="none"
        >
          <path
            d="M0 24 C 180 6, 360 40, 540 22 C 720 4, 900 38, 1080 20 C 1260 4, 1380 34, 1440 18 L 1440 48 L 0 48 Z"
            fill="#087A3D"
          />
          <path
            d="M0 26 C 180 8, 360 42, 540 24 C 720 6, 900 40, 1080 22 C 1260 6, 1380 36, 1440 20"
            stroke="#2E9E52"
            strokeWidth="1.4"
            fill="none"
            opacity="0.45"
          />
        </svg>
      </div>
    </section>
  );
};
