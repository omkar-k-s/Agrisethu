import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageToggle } from '../common/LanguageToggle';
import {
  Landmark,
  Sprout,
  Newspaper,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { isKannada } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Column 2: ABOUT RAITHASETU
  const aboutLinks = [
    { label: isKannada ? 'ಮುಖಪುಟ' : 'Home', path: '/' },
    { label: isKannada ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'About Us', path: '/about' },
    { label: isKannada ? 'ನಮ್ಮ ದೃಷ್ಟಿಕೋನ' : 'Our Vision', path: '/vision' },
    { label: isKannada ? 'ನಮ್ಮ ಆ್ಯಪ್' : 'Our App', path: '/app' },
    { label: isKannada ? 'ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ' : 'What We Do', path: '/what-we-do' },
    { label: isKannada ? 'ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ' : 'How It Works', path: '/how-it-works' },
    { label: isKannada ? 'ಸಂಪರ್ಕಿಸಿ' : 'Contact', path: '/contact' },
  ];

  // Column 3: FARMER SERVICES
  const farmerServicesLinks = [
    {
      label: isKannada ? 'ಕೃಷಿ ಉಪಕರಣ ಬಾಡಿಗೆ' : 'Agricultural Equipment Rental',
      path: '/what-we-do#equipment',
    },
    {
      label: isKannada ? 'ಕೃಷಿ ಪರಿಕರಗಳು & ಸಂಪನ್ಮೂಲಗಳು' : 'Agricultural Inputs & Resources',
      path: '/what-we-do#inputs',
    },
    {
      label: isKannada ? 'ರೈತರು & ಸೇವಾ ಪೂರೈಕೆದಾರರು' : 'Farmers & Service Providers',
      path: '/what-we-do#connections',
    },
    {
      label: isKannada ? 'ಬುಕಿಂಗ್ & ಸೇವೆಗಳು' : 'Bookings & Services',
      path: '/what-we-do#marketplace',
    },
    {
      label: isKannada ? 'ಗೊಬ್ಬರ, ಬೀಜ & ಕೀಟನಾಶಕ ಆರ್ಡರ್‌ಗಳು' : 'Fertilizer, Seed & Pesticide Orders',
      path: '/what-we-do#delivery',
    },
  ];

  // Column 4: INFORMATION & RESOURCES
  const infoResourcesLinks = [
    {
      label: isKannada ? 'ಸುದ್ದಿ ಮತ್ತು ಅಪ್ಡೇಟ್ಸ್' : 'News & Updates',
      path: '/news',
    },
    {
      label: isKannada ? 'ರೈತರ ಪ್ರಕಟಣೆಗಳು' : 'Announcements',
      path: '/announcements',
    },
    {
      label: isKannada ? 'ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ' : 'How It Works',
      path: '/how-it-works',
    },
    {
      label: isKannada ? 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು' : 'Frequently Asked Questions',
      path: '/contact#faq',
    },
    {
      label: isKannada ? 'ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ' : 'Help & Support',
      path: '/contact#support',
    },
  ];

  // Column 5: IMPORTANT INFORMATION
  const importantInfoLinks = [
    {
      label: isKannada ? 'ಗೌಪ್ಯತಾ ನೀತಿ' : 'Privacy Policy',
      path: '/contact#privacy',
    },
    {
      label: isKannada ? 'ಬಳಕೆಯ ನಿಯಮಗಳು' : 'Terms of Use',
      path: '/contact#terms',
    },
    {
      label: isKannada ? 'ಪ್ರವೇಶಿಸುವಿಕೆ' : 'Accessibility',
      path: '/contact#accessibility',
    },
    {
      label: isKannada ? 'ಹಕ್ಕುತ್ಯಾಗ' : 'Disclaimer',
      path: '/contact#disclaimer',
    },
    {
      label: isKannada ? 'ಧ್ಯೇಯ ಮತ್ತು ನೈತಿಕತೆ' : 'Mission & Ethos',
      path: '/about#mission',
    },
  ];

  return (
    <footer className="w-full bg-[#003B22] text-white relative overflow-hidden select-none">
      {/* Decorative Agricultural Landscape Background in lower portion */}
      <img
        src="/images/footer_karnataka_landscape.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-12 left-0 right-0 w-full h-36 sm:h-44 md:h-52 object-cover object-bottom pointer-events-none opacity-40 mix-blend-screen select-none"
      />

      {/* Main Footer (approx 85% visual height) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* COLUMN 1: Branding and Contact (approx 32% width on desktop) */}
          <div className="lg:col-span-4 lg:pr-6 space-y-4">
            {/* RaithaSetu Horizontal Logo directly on dark green background */}
            <Link
              to="/"
              className="inline-block transition-transform duration-200 hover:scale-[1.01] focus:outline-none"
              aria-label="RaithaSetu Home"
            >
              <img
                src="/images/raithasetu-logo-dark.png"
                alt="RaithaSetu - A Digital Bridge for Karnataka's Farmers"
                className="w-[270px] sm:w-[290px] max-w-full h-auto object-contain block"
              />
            </Link>

            {/* Bold Heading */}
            <h3 className="text-white font-bold text-sm sm:text-[15px] leading-snug tracking-tight">
              Bridging Farmers with Better Resources
            </h3>

            {/* Kannada Tagline */}
            <p className="text-[#E8B83F] font-kannada text-xs font-bold tracking-wide">
              ರೈತರು • ಸಂಪನ್ಮೂಲಗಳು • ಪ್ರಗತಿ
            </p>

            {/* Initiative Description */}
            <p className="text-emerald-100/80 text-[11px] sm:text-xs leading-relaxed max-w-sm">
              RaithaSetu is an agriculture-focused digital initiative designed to connect farmers
              with agricultural resources, opportunities and a smarter digital future.
            </p>

            {/* Vertical Contact Details with Gold Icons */}
            <div className="pt-2 space-y-2 text-[11px] sm:text-xs text-emerald-100/90">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#E8B83F] flex-shrink-0" />
                <span>
                  {isKannada
                    ? 'ಬೆಂಗಳೂರು ಮತ್ತು ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕ, ಭಾರತ'
                    : 'Bengaluru & Rural Karnataka, India'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#E8B83F] flex-shrink-0" />
                <a
                  href="tel:+910802800AGRI"
                  className="hover:text-[#E8B83F] transition-colors"
                >
                  +91 (080) 2800-AGRI
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#E8B83F] flex-shrink-0" />
                <a
                  href="mailto:raithasetu@gmail.com"
                  className="hover:text-[#E8B83F] transition-colors"
                >
                  raithasetu@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Badges (Instagram, Facebook, LinkedIn, YouTube) */}
            <div className="pt-2 flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm hover:scale-110 hover:opacity-95 transition-all"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shadow-sm hover:scale-110 hover:opacity-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0077B5] flex items-center justify-center text-white shadow-sm hover:scale-110 hover:opacity-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FF0000] flex items-center justify-center text-white shadow-sm hover:scale-110 hover:opacity-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: ABOUT RAITHASETU */}
          <div className="lg:col-span-2 lg:border-l lg:border-emerald-800/40 lg:pl-5 space-y-3">
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                {isKannada ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'ABOUT RAITHASETU'}
              </h4>
            </div>
            <div className="w-8 h-[1px] bg-[#E8B83F]/70" />

            <ul className="space-y-2 pt-1 text-[11px] sm:text-xs">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between text-emerald-100/90 hover:text-white transition-colors py-0.5"
                  >
                    <span className="group-hover:text-[#E8B83F] transition-colors">{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-300/40 group-hover:text-[#E8B83F] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: FARMER SERVICES */}
          <div className="lg:col-span-2 lg:border-l lg:border-emerald-800/40 lg:pl-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sprout className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                {isKannada ? 'ರೈತ ಸೇವೆಗಳು' : 'FARMER SERVICES'}
              </h4>
            </div>
            <div className="w-8 h-[1px] bg-[#E8B83F]/70" />

            <ul className="space-y-2 pt-1 text-[11px] sm:text-xs">
              {farmerServicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between text-emerald-100/90 hover:text-white transition-colors py-0.5"
                  >
                    <span className="group-hover:text-[#E8B83F] transition-colors">{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-300/40 group-hover:text-[#E8B83F] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: INFORMATION & RESOURCES */}
          <div className="lg:col-span-2 lg:border-l lg:border-emerald-800/40 lg:pl-5 space-y-3">
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                {isKannada ? 'ಮಾಹಿತಿ & ಸಂಪನ್ಮೂಲ' : 'INFORMATION & RESOURCES'}
              </h4>
            </div>
            <div className="w-8 h-[1px] bg-[#E8B83F]/70" />

            <ul className="space-y-2 pt-1 text-[11px] sm:text-xs">
              {infoResourcesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between text-emerald-100/90 hover:text-white transition-colors py-0.5"
                  >
                    <span className="group-hover:text-[#E8B83F] transition-colors">{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-300/40 group-hover:text-[#E8B83F] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: IMPORTANT INFORMATION */}
          <div className="lg:col-span-2 lg:border-l lg:border-emerald-800/40 lg:pl-5 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E8B83F] flex-shrink-0" />
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
                {isKannada ? 'ಮುಖ್ಯ ಮಾಹಿತಿ' : 'IMPORTANT INFORMATION'}
              </h4>
            </div>
            <div className="w-8 h-[1px] bg-[#E8B83F]/70" />

            <ul className="space-y-2 pt-1 text-[11px] sm:text-xs">
              {importantInfoLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between text-emerald-100/90 hover:text-white transition-colors py-0.5"
                  >
                    <span className="group-hover:text-[#E8B83F] transition-colors">{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-300/40 group-hover:text-[#E8B83F] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT & DISCLAIMER BAR (approx 15% visual height) */}
      <div className="relative z-10 w-full bg-[#00311D] border-t border-[#BCA751]/40 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 text-xs text-emerald-100/90">
          {/* Left: Copyright & Independence Disclaimer */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap">
            {/* Copyright */}
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full border border-[#E8B83F] flex items-center justify-center text-[10px] text-[#E8B83F] font-bold">
                ©
              </span>
              <span className="text-[11px] sm:text-xs whitespace-nowrap">
                {currentYear} RaithaSetu. All Rights Reserved.
              </span>
            </div>

            {/* Subtle Divider */}
            <span className="hidden sm:inline-block w-px h-3.5 bg-emerald-700/60" />

            {/* Government Disclaimer */}
            <div className="flex items-center gap-1.5 text-emerald-200/90">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8B83F] flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] leading-relaxed">
                RaithaSetu is an independent AgriTech initiative dedicated to Karnataka agriculture.
                It is not an official government entity.
              </span>
            </div>
          </div>

          {/* Right: Bilingual Language Controls */}
          <div className="flex items-center gap-2 flex-shrink-0 pt-1 lg:pt-0">
            <LanguageToggle variant="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
};
